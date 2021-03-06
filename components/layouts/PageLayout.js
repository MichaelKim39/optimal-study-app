import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Row, Col } from 'reactstrap';

import styles from './Layouts.module.scss';

const PageLayout = ({
    children,
    className,
    pageTitle,
    titleAccessory,
    pageSubTitle,
}) => {
    return (
        <div>
            <main className={`horizontalPadding ${className}`}>
                <Row className={styles.pageTopRow}>
                    <div>
                        {!!pageTitle && (
                            <h1 className={styles.pageTitle}>{pageTitle}</h1>
                        )}
                        {!!pageSubTitle && (
                            <h3 className={styles.pageSubTitle}>
                                {pageSubTitle}
                            </h3>
                        )}
                    </div>
                    {!!titleAccessory && titleAccessory}
                </Row>
                {children}
            </main>
            <ToastContainer />
        </div>
    );
};

export default PageLayout;
