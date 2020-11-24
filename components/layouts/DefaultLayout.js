import React from 'react';

import Header from '../global/Header/';

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default DefaultLayout;
