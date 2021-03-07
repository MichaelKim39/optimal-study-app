import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';

import { log } from '@/utils/logger';
import SubjectsAPI from '@/libs/api/SubjectsAPI';
import { checkPermission } from '@/actions/user';
import { useDeleteTopic } from '@/actions/topics';

import styles from '../Subject.module.scss';

import Warning from '@/components/global/Warning';
import LoadingIndicator from '@/components/global/LoadingIndicator';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';

import TopicContainer from '../components/TopicContainer';

const Subject = ({ userInfo, subject }) => {
    const router = useRouter();
    const [handleDeleteTopic, deleteTopicStatus] = useDeleteTopic();

    const initialTopics = subject?.data?.topics;
    const [topics, setTopics] = useState(initialTopics);

    const handlePressTopic = (topic) => {
        router.push(
            '/subjects/[subjectId]/[topicId]',
            `/subjects/${subject.data._id}/${topic._id}`,
        );
    };

    const handlePressDelete = async (event, topicId) => {
        event.stopPropagation();
        if (
            confirm(
                'Are you sure? If you remove this topic, you cannot recover it!',
            )
        ) {
            await handleDeleteTopic(subject.data._id, topicId);
            setTopics(topics.filter((topic) => topic._id !== topicId));
            toast.success('✅ Topic Succesfully Deleted!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
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
                            <TopicContainer
                                topic={topic}
                                showDeleteButton={
                                    userInfo &&
                                    checkPermission(userInfo, 'admin')
                                }
                                onPressDelete={(event) =>
                                    handlePressDelete(event, topic._id)
                                }
                            />
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
