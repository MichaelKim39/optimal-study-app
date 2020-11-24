import React from 'react';
import axios from 'axios';
// import Link from 'next/link';
import { Link } from '../../routes';

import styles from './Subjects.module.css';

import { log } from '../../utils/logger';

import DefaultLayout from '../../components/layouts/DefaultLayout';

const Subjects = ({ subjects }) => {
    const renderSubjects = () => {
        return subjects.map((subject) => (
            <li className={styles.subjectTitle} key={subject.id}>
                {/* <Link as={`/subject/${subject.id}`} href={'subject/[subjectId]'}>
                    <a>{subject.title}</a>
                </Link> */}
                <Link route={`/subjects/${subject.id}`}>
                    <a>{subject.title}</a>
                </Link>
            </li>
        ));
    };

    return (
        <DefaultLayout>
            <h1>I am Subjects page</h1>
            <ul>{renderSubjects()}</ul>
        </DefaultLayout>
    );
};

Subjects.getInitialProps = async () => {
    let subjects = [];
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
        );
        subjects = response.data;
        log('SUBJECTS: ', subjects);
    } catch (error) {
        log(error);
    }
    return { subjects: subjects.slice(0, 10) };
};

export default Subjects;
