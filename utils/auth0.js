import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENTID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: 'openid profile',
    redirectUri: process.env.AUTH0_REDIRECT_URI,
    postLogoutRedirectUri: process.env.AUTH0_POSTLOGOUT_REDIRECT_URI,
    audience: process.env.AUTH0_AUDIENCE,
    session: {
        // Tell auth0 to store access token
        storeAccessToken: true,
        // The secret used to encrypt the cookie.
        cookieSecret: process.env.AUTH0_COOKIE_SECRET,
    },
});
