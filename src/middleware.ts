import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Redirect root `/` to default locale
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/en"; // default locale
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],  
};
