import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function decodeJwtPayload(token: string) {
  try {
    const base64Url = token.split(".")[1];
    if (!base64Url) return null;

    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (err) {
    console.error("Invalid JWT:", err);
    return null;
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  let locale = pathname.split("/")[1];

  if (!["ar", "en"].includes(locale)) {
    locale = "ar";
    const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(redirectUrl);
  }

  const pathWithoutLocale = pathname.replace(/^\/(ar|en)(\/|$)/, "/");
  const token = request.cookies.get("token")?.value;

  const isProtected = pathWithoutLocale.startsWith("/home");

  if ((pathname === `/${locale}` || pathname === `/${locale}/`) && token) {
    return NextResponse.redirect(new URL(`/${locale}/home`, request.url));
  }

  if (isProtected) {
    if (!token)
      return NextResponse.redirect(new URL(`/${locale}`, request.url));

    // Optional: JWT expiration check
    const payload = decodeJwtPayload(token);
    const now = Math.floor(Date.now() / 1000);
    if (payload?.exp && payload.exp < now) {
      const redirectRes = NextResponse.redirect(
        new URL(`/${locale}`, request.url)
      );
      redirectRes.cookies.delete("token");
      return redirectRes;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
