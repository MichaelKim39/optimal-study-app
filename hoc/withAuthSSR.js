import auth0 from '@/utils/auth0';

const withAuthSSR = (getExtraProps) => {
    return async ({ req, res }) => {
        const session = await auth0.getSession(req);
        if (!session || !session.user) {
            res.writeHead(302, {
                Location: '/api/v1/signin',
            });
            res.end();
            return;
        }

        const extraProps = getExtraProps
            ? await getExtraProps({ req, res }, session.user)
            : {};
        const props = { userInfo: session.user, ...extraProps };
        return { props };
    };
};

export default withAuthSSR;
