import React from 'react';

import Header from '../global/Header';

const DefaultLayout = ({ children, className, userInfo, userLoading }) => {
    return (
        <div>
            <Header userInfo={userInfo} userLoading={userLoading} />
            <main
                style={{ paddingTop: 70, backgroundColor: 'white' }}
                className={`gradientCover ${className}`}
            >
                <div className='wrapper'>{children}</div>
            </main>
        </div>
    );
};

export default DefaultLayout;
