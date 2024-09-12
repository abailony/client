// middleware.js
import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;

  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (token) {
      try {
        const decoded = verify(token, process.env.JWT_SECRET);
        if (decoded.role === 'admin') {
          return NextResponse.next();
        }
      } catch (error) {
        console.error('Token verification failed:', error);
      }
    }
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};