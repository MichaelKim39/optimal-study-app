import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { useGetMe } from '@/actions/user';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/main.scss';

library.add(faPlusCircle);

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
