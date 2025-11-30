import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;
  const url = request.nextUrl.clone();


  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".css") ||
    pathname.endsWith(".js")
  ) {
    return NextResponse.next();
  }
  // ⭐ 1. If user types "/", redirect to "/en"
  if (pathname === "/") {
    url.pathname = "/en";
    return NextResponse.redirect(url);
  }

  // ⭐ 2. Allow "/en" and "/ar" as PUBLIC
  if (pathname === "/en" || pathname === "/ar") {
    return NextResponse.next();
  }

  // ⭐ 3. All other routes require token
  if (!token) {
    url.pathname = "/en"; // redirect to default locale
    return NextResponse.redirect(url);
  }

  // ⭐ 4. If authenticated → allow access
  return NextResponse.next();
}

// Apply proxy to all routes
export const config = {
  matcher: ["/:path*"],
};
