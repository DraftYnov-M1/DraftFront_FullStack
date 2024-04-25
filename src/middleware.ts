import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { fetchGraphQl } from './services/fetchGraphql.api';
import { GET_ME } from '@/graphql/mutation';
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookiesStore = cookies();
  console.log(cookiesStore);
  const token = cookiesStore.get('token' || undefined);

  if(!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url).toString());
  } else {
    const me = await fetchGraphQl(GET_ME, {}, `Bearer ${token.value}`);
    console.log(me);
    if(me?.data?.getMe) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/auth/login', request.url).toString());
    };
  };
};
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/account/:path*', '/test/:path*'],
}
