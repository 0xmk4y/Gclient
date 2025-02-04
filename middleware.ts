import { withAuth } from 'next-auth/middleware';

export default withAuth({
    pages: {
        signIn: '/', // Custom sign in page
    },
});

export const config = {
    matcher: ['/user/:path*'],
};