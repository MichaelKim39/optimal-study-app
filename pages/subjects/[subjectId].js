import React from 'react';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';

import { log } from '@/utils/logger';
import SubjectsAPI from '@/libs/api/SubjectsAPI';

import styles from './Subject.module.scss';

import Warning from '@/components/global/Warning';
import LoadingIndicator from '@/components/global/LoadingIndicator';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';

import TopicContainer from './components/TopicContainer';

const Subject = ({ subject }) => {
    const topics = subject?.data?.topics;

    return (
        <DefaultLayout>
            <PageLayout pageTitle={subject.data.title}>
                <Row className={styles.topicsContainer}>
                    {topics.map((topic) => (
                        <Col
                            key={topic._id}
                            md='4'
                            onClick={() => log('Open Topic')}
                        >
                            <TopicContainer topic={topic} />
                        </Col>
                    ))}
                </Row>
            </PageLayout>
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
