import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // return NextResponse.redirect(new URL("/home", request.url));
  console.log(request);

  return NextResponse.next();
}

export const config = {
  matcher: "/cabins/:path*",
};
