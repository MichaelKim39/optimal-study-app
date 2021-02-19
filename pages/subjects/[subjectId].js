import React from 'react';
import axios from 'axios';

import { log } from '@/utils/logger';
import { useRouter } from 'next/router';
import SubjectsAPI from '@/libs/api/SubjectsAPI';

import styles from './Subject.module.scss';

import Warning from '@/components/global/Warning';
import LoadingIndicator from '@/components/global/LoadingIndicator';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';

const Subject = ({ subject }) => {
    return (
        <DefaultLayout>
            <PageLayout>{JSON.stringify(subject)}</PageLayout>
        </DefaultLayout>
    );
};

export async function getServerSideProps({ query }) {
    const subjectJSON = await new SubjectsAPI().getSubject(query.subjectId);
    const subject = subjectJSON.data;
    return {
        props: { subject },
    };
}

export default Subject;
