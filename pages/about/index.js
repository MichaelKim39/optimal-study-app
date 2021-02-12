import React from 'react';

import { log } from '@/utils/logger';
import { resolveAuth } from '@/actions/user';
import withAuthSSR from '@/hoc/withAuthSSR';

import DefaultLayout from '@/components/layouts/DefaultLayout';

const About = ({ userInfo, text }) => {
    debugger;
    return (
        <DefaultLayout userInfo={userInfo} userLoading={false}>
            <h1>About page - hello {userInfo.name}</h1>
            <p>{text}</p>
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

export const getServerSideProps = withAuthSSR(async () => {
    const aboutText = await getAboutText();
    return aboutText;
});

export default About;
