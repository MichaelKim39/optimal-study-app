import React from 'react';
import Link from 'next/link';
import useSWR from 'swr'

import styles from './Subjects.module.scss';

import { log } from '@/utils/logger';
import { useGetSubjects } from '@/actions';

import Warning from '@/components/global/Warning'
import LoadingIndicator from '@/components/global/LoadingIndicator'
import DefaultLayout from '@/components/layouts/DefaultLayout';

const Subjects = () => {
    const [subjects, subjectsError, subjectsLoading] = useGetSubjects()

    const renderSubjects = () => {
        return subjects?.map((subject) => (
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
                <LoadingIndicator className={styles.spinner} />
            ) : subjectsError ? (
                <Warning text={subjectsError.message} className={styles.errorAlert}/>
            ) : (
                <ul>{renderSubjects()}</ul>
            )}
        </DefaultLayout>
    );
};

export default Subjects;
