import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Row, Col } from 'reactstrap';

import styles from './Layouts.module.scss';

const PageLayout = ({ children, className, pageTitle, titleAccessory }) => {
    return (
        <div>
            <main className={`horizontalPadding ${className}`}>
                <Row className={styles.pageTopRow}>
                    {!!pageTitle && (
                        <h1 className={styles.pageTitle}>{pageTitle}</h1>
                    )}
                    {!!titleAccessory && titleAccessory}
                </Row>
                {children}
            </main>
            <ToastContainer />
        </div>
    );
};

export default PageLayout;
