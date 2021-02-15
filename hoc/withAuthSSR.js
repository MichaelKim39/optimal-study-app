import auth0 from '@/utils/auth0';

import { log } from '@/utils/logger';

import { checkPermission } from '@/actions/user';

const withAuthSSR = (getExtraProps, role = 'guest') => {
    return async ({ req, res }) => {
        const session = await auth0.getSession(req);
        const hasPermission = checkPermission(session?.user, role);

        if (!session || !session.user) {
            res.writeHead(302, {
                Location: '/api/v1/signin',
            });
            res.end();
            return;
        }

        const extraProps = hasPermission
            ? getExtraProps
                ? await getExtraProps({ req, res }, session.user)
                : {}
            : { error: 'You are not permitted to see this page...' };

        const props = { userInfo: session.user, ...extraProps };
        return { props };
    };
};

export default withAuthSSR;
