import { appendFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

const waitlistDir = join(process.cwd(), ".local-data");
const waitlistPath = join(waitlistDir, "waitlist-emails.json");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const buttondownEndpoint = "https://api.buttondown.com/v1/subscribers";

type WaitlistRecord = {
  email: string;
  source: string;
  createdAt: string;
};

type WaitlistPayload = {
  email?: unknown;
  source?: unknown;
  website?: unknown;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as WaitlistPayload;
    const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
    const source = typeof payload.source === "string" ? payload.source.slice(0, 80) : "homepage_waitlist";
    const honeypot = typeof payload.website === "string" ? payload.website.trim() : "";

    if (honeypot) {
      return Response.json({ ok: true, spam: true });
    }

    if (!emailRegex.test(email)) {
      return Response.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
    }

    const buttondownApiKey = process.env.BUTTONDOWN_API_KEY;
    if (buttondownApiKey) {
      return createButtondownSubscriber({
        email,
        source,
        buttondownApiKey,
        ipAddress: clientIpFromRequest(request),
      });
    }

    if (process.env.VERCEL) {
      return Response.json(
        {
          ok: false,
          error: "Durable waitlist storage is not configured. Email hello@retroaltfest.com to join the digest for now.",
        },
        { status: 503 },
      );
    }

    return saveLocalWaitlistRecord(email, source);
  } catch {
    return Response.json({ ok: false, error: "Unable to save waitlist email." }, { status: 500 });
  }
}

async function createButtondownSubscriber({
  email,
  source,
  buttondownApiKey,
  ipAddress,
}: {
  email: string;
  source: string;
  buttondownApiKey: string;
  ipAddress?: string;
}) {
  const body: Record<string, unknown> = {
    email_address: email,
    metadata: {
      source,
      product: "RetroAltFest",
      form: "homepage_waitlist",
    },
  };

  if (ipAddress) {
    body.ip_address = ipAddress;
  }

  const response = await fetch(buttondownEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Token ${buttondownApiKey}`,
      "Content-Type": "application/json",
      "X-Buttondown-Collision-Behavior": "add",
    },
    body: JSON.stringify(body),
  });

  if (response.ok) {
    return Response.json({ ok: true });
  }

  const error = await readButtondownError(response);
  if (isDuplicateSubscriberError(response.status, error)) {
    return Response.json({ ok: true, duplicate: true });
  }

  if (isButtondownEmailValidationError(response.status, error)) {
    return Response.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  return Response.json({ ok: false, error: "Unable to add that email to the digest right now." }, { status: 502 });
}

async function readButtondownError(response: Response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

function isDuplicateSubscriberError(status: number, error: unknown) {
  if (status === 409) return true;
  if (status !== 400) return false;
  if (isButtondownEmailValidationError(status, error)) return false;

  const text = JSON.stringify(error ?? {}).toLowerCase();
  return text.includes("duplicate") || text.includes("already") || text.includes("collision") || text.includes("exists") || text.length > 0;
}

function isButtondownEmailValidationError(status: number, error: unknown) {
  if (status !== 400) return false;

  const text = JSON.stringify(error ?? {}).toLowerCase();
  return text.includes("email_invalid") || text.includes("email address provided is not valid");
}

function clientIpFromRequest(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  return forwardedFor || realIp || undefined;
}

async function saveLocalWaitlistRecord(email: string, source: string) {
  await mkdir(waitlistDir, { recursive: true });

  const existing = await readWaitlistRecords();
  const alreadyExists = existing.some((record) => record.email === email);
  const records = alreadyExists
    ? existing
    : [
        ...existing,
        {
          email,
          source,
          createdAt: new Date().toISOString(),
        },
      ];

  await writeFile(waitlistPath, `${JSON.stringify(records, null, 2)}\n`, "utf8");
  await appendFile(join(waitlistDir, "waitlist-events.jsonl"), `${JSON.stringify({ email, source, duplicate: alreadyExists, createdAt: new Date().toISOString() })}\n`, "utf8");

  return Response.json({ ok: true, duplicate: alreadyExists });
}

async function readWaitlistRecords(): Promise<WaitlistRecord[]> {
  try {
    const raw = await readFile(waitlistPath, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isWaitlistRecord) : [];
  } catch {
    return [];
  }
}

function isWaitlistRecord(record: unknown): record is WaitlistRecord {
  return (
    typeof record === "object" &&
    record !== null &&
    "email" in record &&
    typeof record.email === "string" &&
    emailRegex.test(record.email)
  );
}
