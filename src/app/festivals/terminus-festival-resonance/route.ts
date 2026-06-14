import { NextRequest, NextResponse } from "next/server";

const TERMINUS_CANONICAL_PATH = "/festivals/terminus-festival";

export function GET(request: NextRequest) {
  return NextResponse.redirect(new URL(TERMINUS_CANONICAL_PATH, request.url), 301);
}

export function HEAD(request: NextRequest) {
  return NextResponse.redirect(new URL(TERMINUS_CANONICAL_PATH, request.url), 301);
}
