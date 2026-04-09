import type { NextRequest } from "next/server";

export async function GET(request: unknown) {
  const url = request.nextUrl;

  return Response.json({ message: "success" });
}
