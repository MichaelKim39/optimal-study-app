import React from 'react';
import axios from 'axios';
// import Link from 'next/link';
import { Link } from '../../routes';

import styles from './Subjects.module.css';

import { log } from '../../utils/logger';

import DefaultLayout from '../../components/layouts/DefaultLayout';

const Topics = ({ topics }) => {
    const renderTopics = () => {
        return topics.map((subject) => (
            <li className={styles.subjectTitle} key={subject.id}>
                {/* <Link as={`/subject/${subject.id}`} href={'subject/[subjectId]'}>
                    <a>{subject.title}</a>
                </Link> */}
                <Link route={`/topics/${subject.id}`}>
                    <a>{subject.title}</a>
                </Link>
            </li>
        ));
    };

    return (
        <DefaultLayout>
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
