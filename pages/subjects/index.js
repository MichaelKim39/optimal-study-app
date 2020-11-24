import React from 'react';
import axios from 'axios';
import Link from 'next/link';

import styles from './Subjects.module.css';

import { log } from '../../utils/logger';

import DefaultLayout from '../../components/layouts/DefaultLayout';

const Subjects = ({ topics }) => {
    const renderTopics = () => {
        return topics.map((topic) => (
            <li className={styles.topicText} key={topic.id}>
                <Link as={`/topic/${topic.id}`} href={'topic/[topicId]'}>
                    <a>{topic.title}</a>
                </Link>
            </li>
        ));
    };

    return (
        <DefaultLayout>
            <h1>I am Subjects page</h1>
            <ul>{renderTopics()}</ul>
        </DefaultLayout>
    );
};

Subjects.getInitialProps = async () => {
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

export default Subjects;
