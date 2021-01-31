import React from 'react';

import { Button } from 'reactstrap';
import DefaultLayout from '@/components/layouts/DefaultLayout';

const Home = ({ userInfo, userLoading }) => {
    return (
        <DefaultLayout  userInfo={userInfo} userLoading={userLoading}>
            <h1>Home page</h1>
        </DefaultLayout>
    );
};

export default Home;
