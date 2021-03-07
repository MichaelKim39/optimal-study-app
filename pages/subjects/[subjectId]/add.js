import React from 'react';
import { Row, Col, Alert } from 'reactstrap';
import { useRouter } from 'next/router';

import styles from '../Subject.module.scss';

import { log } from '@/utils/logger';
import withAuthCheck from '@/hoc/withAuthCheck';
import { useAddTopic } from '@/actions/topics';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';
import Navigate from '@/components/global/Navigate';
import AddTopicsForm from '../components/AddTopicsForm';

const AddTopicPage = ({ userInfo, userLoading }) => {
    const router = useRouter();
    const [handleAddTopic, topicAddStatus] = useAddTopic();
    const {
        loading: topicLoading,
        data: topicData,
        error: topicError,
    } = topicAddStatus;

    if (!!topicData) {
        return <Navigate route={`/subjects/${router.query.subjectId}`} />;
    }

    const _handleAddTopic = async (topic) => {
        await handleAddTopic(router.query.subjectId, topic);
    };

    return (
        <DefaultLayout userInfo={userInfo} userLoading={userLoading}>
            <PageLayout pageTitle='Add Topic'>
                <Row>
                    <Col>
                        <AddTopicsForm onSubmitTopic={_handleAddTopic} />
                    </Col>
                </Row>
                {topicError && (
                    <Alert color='danger' className='mt-3'>
                        Error While Adding Topic - {topicError}
                    </Alert>
                )}
            </PageLayout>
        </DefaultLayout>
    );
};

export default AddTopicPage;
