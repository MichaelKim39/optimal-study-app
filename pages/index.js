import React from 'react';

import styles from './index.module.scss';

import { log } from '../utils/logger';

import { Container, Row, Col } from 'reactstrap';
import DefaultLayout from '../components/layouts/DefaultLayout';

const Index = () => {
    return (
        <DefaultLayout className={styles.gradientCover}>
            <div className={styles.backgroundImage} />
            <div className={styles.rootContainer}>
                <Container>
                    <h1 className={styles.redColor}>I am index page</h1>
                </Container>
            </div>
        </DefaultLayout>
    );
};

export default Index;
