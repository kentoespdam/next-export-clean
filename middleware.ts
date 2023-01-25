import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
	const response = NextResponse.next();

	console.log(req.nextUrl.pathname);

	return response;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!api|_next/static|favicon.ico).*)",
	],
};
