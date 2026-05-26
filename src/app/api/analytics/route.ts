import { appendFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

const analyticsDir = process.env.VERCEL ? "/tmp/retroaltfest" : join(process.cwd(), ".local-data");
const analyticsPath = join(analyticsDir, "analytics-events.jsonl");

const allowedTypes = new Set(["pageview", "event"]);

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const type = typeof payload.type === "string" ? payload.type : "";
    const path = typeof payload.path === "string" ? payload.path.slice(0, 220) : "/";
    const event = typeof payload.event === "string" ? payload.event.slice(0, 80) : undefined;

    if (!allowedTypes.has(type)) {
      return Response.json({ ok: false, error: "Invalid analytics event type." }, { status: 400 });
    }

    const record = {
      type,
      path,
      event,
      timestamp: new Date().toISOString(),
    };

    await mkdir(analyticsDir, { recursive: true });
    await appendFile(analyticsPath, `${JSON.stringify(record)}\n`, "utf8");

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Unable to record analytics event." }, { status: 400 });
  }
}
