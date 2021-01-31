import React from 'react';
import axios from 'axios';
import Link from 'next/link';

import styles from './Topics.module.scss';

import { log } from '@/utils/logger';

import DefaultLayout from '@/components/layouts/DefaultLayout';

const Topics = ({ topics, userInfo, userLoading }) => {
    const renderTopics = () => {
        return topics.map((topic) => (
            <li className={styles.topicTitle} key={topic.id}>
                <Link as={`/topics/${topic.id}`} href={'topics/[topicId]'}>
                    <a>{topic.title}</a>
                </Link>
            </li>
        ));
    };

    return (
        <DefaultLayout  userInfo={userInfo} userLoading={userLoading}>
            <h1>I am Topics page</h1>
            <ul>{renderTopics()}</ul>
        </DefaultLayout>
    );
};

Topics.getInitialProps = async () => {
    let topics = [];
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
        );
        topics = response.data;
    } catch (error) {
        log(error);
    }
    return { topics: topics.slice(0, 10) };
};

export default topics;
