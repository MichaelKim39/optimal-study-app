import React, { useEffect } from 'react';
import { Row, Col, Alert } from 'reactstrap';

import styles from './Subject.module.scss';

import { log } from '@/utils/logger';
import withAuthCheck from '@/hoc/withAuthCheck';
import { useAddSubject } from '@/actions/subjects';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';
import Navigate from '@/components/global/Navigate';
import AddSubjectsForm from './components/AddSubjectsForm';

const AddSubjectPage = ({ userInfo, userLoading }) => {
    const [handleAddSubject, subjectAddStatus] = useAddSubject();
    const {
        loading: subjectLoading,
        data: subjectData,
        error: subjectError,
    } = subjectAddStatus;

    if (!!subjectData) {
        return <Navigate route='/subjects' />;
    }

    return (
        <DefaultLayout userInfo={userInfo} userLoading={userLoading}>
            <PageLayout pageTitle='Add Subject'>
                <Row>
                    <Col>
                        <AddSubjectsForm onSubmitSubject={handleAddSubject} />
                    </Col>
                </Row>
                {subjectError && (
                    <Alert color='danger' className='mt-3'>
                        {subjectError}
                    </Alert>
                )}
            </PageLayout>
        </DefaultLayout>
    );
};

export default AddSubjectPage;
