import React from 'react';
import { Button } from 'reactstrap';

import styles from './Home.module.scss';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';

const Home = ({ userInfo, userLoading }) => {
    return (
        <DefaultLayout userInfo={userInfo} userLoading={userLoading}>
            <PageLayout pageTitle='Home Page'>
                <h3 className={styles.header}>Mission Statement</h3>
                <p className={styles.text}>
                    Recent discoveries in the field of education and learning
                    have disproved the previously accepted notions of “optimal
                    study practices”. Studies such as Butler (2010) provide
                    suggestions for alternate, more effective strategies for
                    learners to both gain and retain information. Such
                    strategies include mind-mapping, spaced repetition, active
                    recall and more. Additionally, surveys conducted in studies
                    including Karpicke and Blunt (2011) illustrated that student
                    perceptions of the best learning methods were vastly
                    inaccurate to empirical evidence. Thus, there is an evident
                    problem and opportunity for improvement surrounding the
                    misallocation of resources by learners for meaningful
                    studying.
                </p>
                <p className={styles.text}>
                    The main objective of this project is twofold and involves
                    firstly, conducting further, detailed research on the
                    “optimal” learning practices and secondly, to utilise the
                    findings of this research to create an online, collaborative
                    platform and web application for students and learners to
                    gain and retain knowledge in the most efficient way
                    possible.
                </p>
            </PageLayout>
        </DefaultLayout>
    );
};

export default Home;
