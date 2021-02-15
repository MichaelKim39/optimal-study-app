import { useRouter } from 'next/router';

import { useGetMe, checkPermission } from '@/actions/user';

import LoadingIndicator from '@/components/global/LoadingIndicator';
import Navigate from '@/components/global/Navigate';

const withAuthCheck = (Component, role = 'guest') => {
    return ({ props }) => {
        const router = useRouter();
        const [userInfo, userInfoError, userLoading] = useGetMe();
        const hasPermission = checkPermission(userInfo, role);

        if (userLoading) {
            return <LoadingIndicator />;
        } else if (!userInfo || !hasPermission) {
            return <Navigate serverRender={true} route='/api/v1/signin' />;
        } else {
            return (
                <Component
                    userInfo={userInfo}
                    userLoading={userLoading}
                    {...props}
                />
            );
        }
    };
};

export default withAuthCheck;
