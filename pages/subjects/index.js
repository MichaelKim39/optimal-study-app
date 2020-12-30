import React from 'react';
import Link from 'next/link';

import styles from './Subjects.module.scss';

import { log } from '@/utils/logger';
import { loadData } from '@/actions';

import { Alert, Spinner } from 'reactstrap';
import DefaultLayout from '@/components/layouts/DefaultLayout';

const Subjects = () => {
    const [subjects, getSubjectsError, subjectsLoading] = loadData('api/v1/subjects');

    const renderSubjects = () => {
        return subjects.map((subject) => (
            <li className={styles.subjectTitle} key={subject.id}>
                <Link
                    as={`/subjects/${subject.id}`}
                    href={'subjects/[subjectId]'}
                >
                    <a>{subject.title}</a>
                </Link>
            </li>
        ));
    };

    return (
        <DefaultLayout>
            <h1>My Subjects</h1>
            {subjectsLoading ? (
                <Spinner size='md' color='light' className={styles.spinner} />
            ) : getSubjectsError ? (
                <Alert color='danger' className={styles.errorAlert}>
                    Oops! {getSubjectsError.message}
                </Alert>
            ) : (
                <ul>{renderSubjects()}</ul>
            )}
        </DefaultLayout>
    );
};

export default Subjects;
