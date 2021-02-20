import React from 'react';

import styles from './Layouts.module.scss';

const PageLayout = ({ children, className, pageTitle }) => {
    return (
        <div>
            <main className={`horizontalPadding ${className}`}>
                {!!pageTitle && (
                    <h1 className={styles.pageTitle}>{pageTitle}</h1>
                )}
                {children}
            </main>
        </div>
    );
};

export default PageLayout;
