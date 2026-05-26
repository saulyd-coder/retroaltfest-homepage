import { appendFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

const waitlistDir = process.env.VERCEL ? "/tmp/retroaltfest" : join(process.cwd(), ".local-data");
const waitlistPath = join(waitlistDir, "waitlist-emails.json");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type WaitlistRecord = {
  email: string;
  source: string;
  createdAt: string;
};

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
    const source = typeof payload.source === "string" ? payload.source.slice(0, 80) : "homepage_waitlist";

    if (!emailRegex.test(email)) {
      return Response.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
    }

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
  } catch {
    return Response.json({ ok: false, error: "Unable to save waitlist email." }, { status: 500 });
  }
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
