import useSWR from 'swr';
import auth0 from '@/utils/auth0';

import { log } from '@/utils/logger';

import { useGetData, handleFetchData } from '@/actions';

export const useGetMe = () => {
    const { data, error } = useSWR('/api/v1/me', handleFetchData);
    const loading = !data && !error;
    return [data, error, loading];
};

// Checks if user is authenticated and returns user information if so
export const resolveAuth = async (req, res) => {
    const session = await auth0.getSession(req);
    if (!session || !session.user) {
        res.writeHead(302, {
            Location: '/api/v1/signin',
        });
        res.end();
        return;
    }
    return { user: session.user };
};

// Take user information and role and checks permission
export const checkPermission = (userInfo, role) => {
    const hasPermission = userInfo
        ? userInfo[`${process.env.APP_NAMESPACE}/roles`].includes(role)
        : false;
    return hasPermission;
};
