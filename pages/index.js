import React from 'react';
import Typed from 'react-typed';

import styles from './index.module.scss';

import { log } from '../utils/logger';

import { Container, Row, Col } from 'reactstrap';
import DefaultLayout from '../components/layouts/DefaultLayout';

const Index = () => {
    return (
        <DefaultLayout>
            <div className={styles.mainContainer}>
                <Container>
                    <div className={styles.logoContainer}>
                        <img
                            className={styles.logoImage}
                            src='/images/logo.png'
                        />
                    </div>
                    <div className='mediumSpacer' />
                    <div className={styles.imagesContainer}>
                        <Row>
                            <Col md='3'>
                                <div className={styles.blueShadow}>
                                    <img
                                        className={`image, ${styles.scienceImage}`}
                                        src='/images/science.png'
                                    />
                                </div>
                            </Col>
                            <Col md='3'>
                                <div className={styles.blueShadow}>
                                    <img
                                        className={`image, ${styles.scienceImage}`}
                                        src='/images/abacus.png'
                                    />
                                </div>
                            </Col>
                            <Col md='3'>
                                <div className={styles.blueShadow}>
                                    <img
                                        className={`image, ${styles.scienceImage}`}
                                        src='/images/science-law.png'
                                    />
                                </div>
                            </Col>
                            <Col md='3'>
                                <div className={styles.blueShadow}>
                                    <img
                                        className={`image, ${styles.scienceImage}`}
                                        src='/images/science-and-research.png'
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='mediumSpacer' />
                    <div className={styles.welcomeContainer}>
                        <Typed
                            strings={[
                                'Research backed learning strategies',
                                'Optimal techniques to ace exams',
                                'Proven methods for academic excellence',
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                            backdelay={500}
                            loop
                            loopCount={0}
                            showCursor
                            cursorChar={'|'}
                            className={styles.typedStyle}
                        />
                        <div className='smallSpacer' />
                        <h1>Optimise your learning experience.</h1>
                        <h1>Study Meaningfully.</h1>
                    </div>
                </Container>
            </div>
        </DefaultLayout>
    );
};

export default Index;
