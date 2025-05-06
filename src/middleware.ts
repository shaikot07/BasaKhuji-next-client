// import { NextRequest, NextResponse } from "next/server";
// import { getCurrentUser } from "./services/AuthService";

// type Role = keyof typeof roleBasedPrivateRoutes;

// const authRoutes = ["/login", "/register",];

// const roleBasedPrivateRoutes = {
//   // user: [/^\/user/, /^\/create-shop/],
//   admin: [/^\/admin/, /^\/admin\/.*/],     // admin can access /admin and any sub-page under it
//   tenant: [/^\/tenant/, /^\/tenant\/.*/],   // tenant can access /tenant and any sub-page under it
//   landlord: [/^\/landlord/, /^\/landlord\/.*/], // landlord can access /landlord and any sub-page under it
//   user: [/^\/user/, /^\/user\/.*/], // user can access /user and any sub-page under it
// };

// export const middleware = async (request: NextRequest) => {
//   const { pathname } = request.nextUrl;

//   const userInfo = await getCurrentUser();

//   if (!userInfo) {
//     if (authRoutes.includes(pathname)) {
//       return NextResponse.next();
//     } else {
//       return NextResponse.redirect(
//         new URL(
//           `http://localhost:3000/login?redirectPath=${pathname}`,
//           request.url
//         )
//       );
//     }
//   }

//   if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
//     const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
//     if (routes.some((route) => pathname.match(route))) {
//       return NextResponse.next();
//     }
//   }

//   return NextResponse.redirect(new URL("/", request.url));
// };

// // config ar vitore bole dite hobe je kon route e jabe je user ta 
// export const config = {
//   matcher: [
//     "/login",
//     "/register",
//     "/admin/:path*",
//     "/tenant/:path*",
//     "/landlord/:path*",
//     "/user/:path*",
//     // "/allHouse/:page*",
//      "/allHouse/:path",
//     // "/user/:page",
//   ],
// };



// ---------new -------------------


import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];

const roleBasedPrivateRoutes = {
  admin: [/^\/admin/, /^\/admin\/.*/],
  tenant: [/^\/tenant/, /^\/tenant\/.*/],
  landlord: [/^\/landlord/, /^\/landlord\/.*/],
  user: [/^\/user/, /^\/user\/.*/],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userInfo = await getCurrentUser();

  // 1. Allow public access to login and register
  if (authRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // 2. Allow public access to /allHouse (main list page)
  if (pathname === "/allHouse") {
    return NextResponse.next();
  }

  // 3. Protect /allHouse/:id (details page)
  if (pathname.startsWith("/allHouse/")) {
    if (!userInfo) {
      return NextResponse.redirect(
        new URL(`/login?redirectPath=${pathname}`, request.url)
      );
    }
    return NextResponse.next();
  }

  // 4. Role-based route protection
  for (const [role, routes] of Object.entries(roleBasedPrivateRoutes) as [Role, RegExp[]][]) {
    if (routes.some((route) => pathname.match(route))) {
      if (!userInfo) {
        // ❗ User not logged in → send to login page
        return NextResponse.redirect(
          new URL(`/login?redirectPath=${pathname}`, request.url)
        );
      }
      if (userInfo.role !== role) {
        // ❗ Wrong role → send to home page
        return NextResponse.redirect(new URL("/", request.url));
      }
      return NextResponse.next(); // Correct role → allow
    }
  }

  // 5. Allow other public pages
  return NextResponse.next();
};

export const config = {
  matcher: [
    "/login",
    "/register",
    "/admin/:path*",
    "/tenant/:path*",
    "/landlord/:path*",
    "/user/:path*",
    // "/allHouse/:path*",
  ],
};
