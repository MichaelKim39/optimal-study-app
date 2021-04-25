import React from 'react';

import { log } from '@/utils/logger';
import { resolveAuth } from '@/actions/user';
import withAuthSSR from '@/hoc/withAuthSSR';

import styles from './About.module.scss';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';

const About = ({ userInfo, text, error }) => {
    return (
        <DefaultLayout userInfo={userInfo} userLoading={false}>
            <PageLayout pageTitle='About Us'>
                <h3 className={styles.header}>
                    Hello {userInfo.nickname}! Here's something about us.
                </h3>
                <br />

                <p className={styles.text}>
                    It is often assumed that popular techniques to learn and
                    revise information such as re-reading and note taking are
                    the most efficient ways to learn. With the seeming increase
                    of competition in the work and educational culture in the UK
                    it seems struggling to revise and perform well in exams and
                    assessments has become a commonplace problem. Yet
                    shockingly, recent discoveries and experimental studies in
                    the optimal learning strategies have proven there is much
                    more depth to the “best way to learn” than meets the eye.
                    <br />
                    <br />
                    Karpicke and Blunt (2011) is just one of the many pieces of
                    evidence that suggest alternative methods such as active
                    recall and spaced repetition are far more effective in
                    reality, boosting exam scores by a maximum of 40% in some
                    cases. This suggests that there is a concerning lack of
                    awareness concerning “how to study”, a possible cause of the
                    rapidly increasing levels of student anxiety and stress
                </p>
            </PageLayout>
        </DefaultLayout>
    );
};

const getAboutText = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res({ text: 'About text!' });
        }, 500);
    });
};

const getExtraProps = async () => {
    const aboutText = await getAboutText();
    return aboutText;
};

export const getServerSideProps = withAuthSSR(getExtraProps, 'guest');

export default About;
