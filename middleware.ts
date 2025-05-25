import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

const AUTHENTICATION_ROUTES = ["/login", "/register", "/forgot-password"];

const PROTECTED_ROUTES = ["/protected"];

const checkRoute = (request: NextRequest) => {
  const path = request.nextUrl.pathname;
  if (PROTECTED_ROUTES.find((p) => path.startsWith(p))) {
    return "PROTECTED";
  }
  if (AUTHENTICATION_ROUTES.find((p) => path.startsWith(p))) {
    return "AUTHENTICATION";
  }
  return "PUBLIC";
};

export const middleware = async (request: NextRequest) => {
  const token = request.cookies.get("auth-token");

  const routeType = checkRoute(request);

  switch (routeType) {
    case "PUBLIC":
      return NextResponse.next();

    case "PROTECTED":
      if (!token) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
      break;

    case "AUTHENTICATION":
      if (token) {
        return NextResponse.redirect(new URL("/", request.url));
      }
      break;
  }
};
