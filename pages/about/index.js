import React from 'react';

import { log } from '@/utils/logger';
import { resolveAuth } from '@/actions/user';
import withAuthSSR from '@/hoc/withAuthSSR';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';

const About = ({ userInfo, text, error }) => {
    return (
        <DefaultLayout userInfo={userInfo} userLoading={false}>
            <PageLayout pageTitle='About Us'>
                <h3>Hello {userInfo.nickname}! Here's something about us.</h3>
                <p>{error ? error : text}</p>
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

export const getServerSideProps = withAuthSSR(getExtraProps, 'admin');

export default About;
