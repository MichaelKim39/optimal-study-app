import React from 'react';
import { Row, Col } from 'reactstrap';

import withAuthCheck from '@/hoc/withAuthCheck';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';
import AddSubjectsForm from './components/AddSubjectsForm';

const AddSubjectPage = ({ userInfo, userLoading }) => {
    const handleSubmitSubject = (data) => alert(JSON.stringify(data));

    return (
        <DefaultLayout userInfo={userInfo} userLoading={userLoading}>
            <PageLayout pageTitle='Add Subject'>
                <Row>
                    <Col>
                        <AddSubjectsForm
                            onSubmitSubject={handleSubmitSubject}
                        />
                    </Col>
                </Row>
            </PageLayout>
        </DefaultLayout>
    );
};

export default withAuthCheck(AddSubjectPage, 'guest');
