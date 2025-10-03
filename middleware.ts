//export { auth as middleware } from "@/auth";

// middleware.ts
import { auth } from "@/auth";
import { NextResponse } from "next/server";

const adminUsers = process.env.ADMIN_USERS?.split(",") || [];

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

  if (isAdminRoute) {
    // Redirect to login page or return unauthorized
    if (!isLoggedIn) return NextResponse.redirect(new URL("/signin", req.url));
    else if (
      req.auth?.user?.email &&
      !adminUsers?.includes(req.auth.user.email)
    )
      return NextResponse.redirect(new URL("/notauthorised", req.url));
  }

  return NextResponse.next();
});

// Configure which routes the middleware runs on
export const config = {
  matcher: ["/admin/:path*"],
};
