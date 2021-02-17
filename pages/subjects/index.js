import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';

import styles from './Subjects.module.scss';

import { log } from '@/utils/logger';
import withAuthCheck from '@/hoc/withAuthCheck';

import Warning from '@/components/global/Warning';
import LoadingIndicator from '@/components/global/LoadingIndicator';
import DefaultLayout from '@/components/layouts/DefaultLayout';

import SubjectsAPI from '@/libs/api/subjectsAPI';

const Subjects = ({ userInfo, userLoading, subjects }) => {
    log('SUBJECTS: ', subjects);
    const renderSubjects = () => {
        return subjects?.map((subject) => (
            <li className={styles.subjectTitle} key={subject._id}>
                <Link
                    as={`/subjects/${subject._id}`}
                    href={'subjects/[subjectId]'}
                >
                    <a>{subject.title}</a>
                </Link>
            </li>
        ));
    };

    return (
        <DefaultLayout userInfo={userInfo} userLoading={userLoading}>
            <h1>My Subjects</h1>
            {/* {subjectsLoading ? (
                <LoadingIndicator className={styles.spinner} />
            ) : subjectsError ? (
                <Warning
                    text={subjectsError.message}
                    className={styles.errorAlert}
                />
            ) : (
                <ul>{renderSubjects()}</ul>
            )} */}
            <ul>{renderSubjects()}</ul>
        </DefaultLayout>
    );
};

export async function getStaticProps() {
    const subjectsJSON = await new SubjectsAPI().getSubjects();
    const subjects = subjectsJSON.data;
    return {
        props: { subjects },
    };
}

// TODO: Figure out why withAuthCheck is failing here
export default Subjects;
