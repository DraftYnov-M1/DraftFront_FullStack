import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('middleware');
  // if pas de token dans les cookies
  //redirect to login
  const cookie = request.cookies.get('token');
  console.log(cookie);
  console.log(request.url);

  if (cookie == null) {
    return NextResponse.redirect(new URL('/auth/login', request.url).toString());
  } else {
    console.log(cookie);
    return NextResponse.next();
  };

};
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/account/:path*', '/test/:path*'],
}
