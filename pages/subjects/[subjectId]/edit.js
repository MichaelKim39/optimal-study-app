import React from 'react';
import { useRouter } from 'next/router';
import { Row, Col, Alert } from 'reactstrap';

import { useGetSubject } from '@/actions/subjects';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';
import AddSubjectsForm from '../components/AddSubjectsForm';

const EditSubjectPage = ({ userInfo, userLoading }) => {
    const router = useRouter();
    const [subjectData, subjectError, subjectLoading] = useGetSubject(
        router.query.subjectId,
    );

    const handleSubmitSubject = (subject) => {
        alert(JSON.stringify(subject));
    };

    return (
        <DefaultLayout userInfo={userInfo} userLoading={userLoading}>
            <PageLayout pageTitle='Edit Subject'>
                <AddSubjectsForm
                    prefillData={subjectData?.data}
                    onSubmitSubject={handleSubmitSubject}
                />
                {subjectError && (
                    <Alert color='danger'>{JSON.stringify(subjectError)}</Alert>
                )}
            </PageLayout>
        </DefaultLayout>
    );
};

export default EditSubjectPage;
