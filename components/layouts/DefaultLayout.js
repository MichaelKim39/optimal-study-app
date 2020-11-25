import React from 'react';

import Header from '../global/Header';

const DefaultLayout = ({ children, className }) => {
    return (
        <div>
            <Header />
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
