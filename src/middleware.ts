import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      // List of paths that don't require authentication
      const publicPaths = ['/auth/signin', '/auth/signup'];

      // Check if the current path is one of the public paths
      const isPublicPath = publicPaths.includes(new URL(req.url).pathname);

      // Allow if it's a public path or if the user has a valid session token
      return isPublicPath || !!token;
    },
  },
  pages: {
    signIn: '/auth/signin',  // Redirect to the custom sign-in page
    // signUp: '/auth/signup'  // Redirect to a custom error page (optional)
  }
});
