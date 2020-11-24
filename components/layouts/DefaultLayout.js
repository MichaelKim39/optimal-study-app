import React from 'react';

import Header from '../global/Header/';

const DefaultLayout = ({ children, className }) => {
    return (
        <div className={className}>
            <Header />
            {children}
        </div>
    );
};

export default DefaultLayout;
