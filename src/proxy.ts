import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });
  const protectedRoutes = ["/ingredients", "/recipes/new", "/recipes/:path*"];

  if (
    protectedRoutes.some((route) =>
      pathname.startsWith(route.replace(":path", ""))
    )
  ) {
    if (!token) {
      const url = new URL("/error", request.url);
      url.searchParams.set("message", "Not enough rights");
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/ingredients/:path*", "/recipes/new", "/recipes/:path*"],
};
