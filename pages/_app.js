import React from 'react';

import { useGetMe } from '@/actions/user';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/main.scss';

const App = ({ Component, pageProps }) => {
    const [myInfo, myInfoError, myInfoLoading] = useGetMe();
    return (
        <Component
            userInfo={myInfo}
            userLoading={myInfoLoading}
            {...pageProps}
        />
    );
};

App.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
};

export default App;
