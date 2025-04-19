import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];

const roleBasedPrivateRoutes = {
  // user: [/^\/user/, /^\/create-shop/],
  admin: [/^\/admin/, /^\/admin\/.*/],     // admin can access /admin and any sub-page under it
  tenant: [/^\/tenant/, /^\/tenant\/.*/],   // tenant can access /tenant and any sub-page under it
  landlord: [/^\/landlord/, /^\/landlord\/.*/], // landlord can access /landlord and any sub-page under it
  user: [/^\/user/, /^\/user\/.*/], // user can access /user and any sub-page under it
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userInfo = await getCurrentUser();

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }

  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
};

// config ar vitore bole dite hobe je kon route e jabe je user ta 
export const config = {
  matcher: [
    "/login",
    "/register",
    "/admin/:path*",
    "/tenant/:path*",
    "/landlord/:path*",
    "/user/:path*",
    "/allHouse/:path*",
  ],
};
