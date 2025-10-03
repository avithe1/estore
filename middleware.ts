//export { auth as middleware } from "@/auth";

// middleware.ts
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log(req.auth?.user);
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

  if (isAdminRoute) {
    // Redirect to login page or return unauthorized
    if (!isLoggedIn) return NextResponse.redirect(new URL("/signin", req.url));
    else if (req.auth?.user?.email !== "mobilecentric@gmail.com")
      return NextResponse.redirect(new URL("/notauthorised", req.url));
  }

  return NextResponse.next();
});

// Configure which routes the middleware runs on
export const config = {
  matcher: ["/admin/:path*"],
};
