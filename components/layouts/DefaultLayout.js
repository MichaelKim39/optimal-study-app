import React from 'react';

import Header from '../global/Header';

const DefaultLayout = ({
    children,
    className,
    userInfo,
    userLoading,
    showHeader = true,
    isHeaderTransparent = false,
}) => {
    return (
        <div>
            {showHeader && (
                <Header
                    userInfo={userInfo}
                    userLoading={userLoading}
                    isTransparent={isHeaderTransparent}
                />
            )}
            <main
                style={{ paddingTop: 100, backgroundColor: 'white' }}
                className={`gradientCover ${className}`}
            >
                <div className='wrapper'>{children}</div>
            </main>
        </div>
    );
};

export default DefaultLayout;
