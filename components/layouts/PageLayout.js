import React from 'react';

const PageLayout = ({ children, className }) => {
    return (
        <div>
            <main className={`horizontalPadding ${className}`}>{children}</main>
        </div>
    );
};

export default PageLayout;
