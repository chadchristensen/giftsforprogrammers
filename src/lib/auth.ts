import NextAuth, { NextAuthConfig, Session } from 'next-auth';
import GitHub from "@auth/core/providers/github";
import { NextRequest } from 'next/server';
import { getIsUserAdmin } from '@/lib/utils';

export const config = {
    callbacks: {
        authorized({ auth, request: { nextUrl } }: { auth: Session | null; request: NextRequest }) {
            const isUserAdmin = getIsUserAdmin(auth?.user?.email);

            if (!isUserAdmin) {
                return Response.redirect(new URL('/', nextUrl));
            }

            return true;
        },
    },
    providers: [
        GitHub
    ]
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config);