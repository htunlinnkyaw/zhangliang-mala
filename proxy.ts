import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLoginRoutePath } from "./lib/constants";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    const loginUrl = new URL(defaultLoginRoutePath, request.url);
    loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
