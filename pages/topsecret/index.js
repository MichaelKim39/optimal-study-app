import React from 'react';

import DefaultLayout from '@/components/layouts/DefaultLayout';

import withAuthCheck from '@/hoc/withAuthCheck';

const TopSecret = ({ userInfo, userLoading }) => {
    return (
        <DefaultLayout userInfo={userInfo} userLoading={userLoading}>
            <h1>Top Secret Page</h1>
        </DefaultLayout>
    );
};

export default withAuthCheck(TopSecret, 'admin');
