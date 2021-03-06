import React from 'react';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { log } from '@/utils/logger';
import SubjectsAPI from '@/libs/api/SubjectsAPI';

import styles from '../Subject.module.scss';

import Warning from '@/components/global/Warning';
import LoadingIndicator from '@/components/global/LoadingIndicator';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';

import TopicContainer from '../components/TopicContainer';

const Subject = ({ subject }) => {
    const router = useRouter();
    const topics = subject?.data?.topics;

    const handlePressTopic = (topic) => {
        log('Topic Press');
        router.push(
            '/subjects/[subjectId]/[topicId]',
            `/subjects/${subject.data._id}/${topic._id}`,
        );
    };

    const AddTopicButton = () => {
        return (
            <FontAwesomeIcon
                icon='plus-circle'
                color='white'
                size='2x'
                onClick={() => router.push(`/subjects/${subject.data._id}/add`)}
                className={styles.addTopicButton}
            />
        );
    };

    return (
        <DefaultLayout>
            <PageLayout
                pageTitle={subject.data.title}
                titleAccessory={<AddTopicButton />}
            >
                <Row className={styles.topicsContainer}>
                    {topics.map((topic) => (
                        <Col
                            key={topic._id}
                            md='4'
                            onClick={() => handlePressTopic(topic)}
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
