import React from 'react';
import { useRouter } from 'next/router';
import { Row, Col, Alert } from 'reactstrap';
import { toast } from 'react-toastify';

import styles from '../Subject.module.scss';

import { log } from '@/utils/logger';
import { openErrorToast } from '@/utils/popups';
import { useGetSubject, useEditSubject } from '@/actions/subjects';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';
import Navigate from '@/components/global/Navigate';
import AddSubjectsForm from '../components/AddSubjectsForm';

const EditSubjectPage = ({ userInfo, userLoading }) => {
    const router = useRouter();
    const [subjectData, subjectError, subjectLoading] = useGetSubject(
        router.query.subjectId,
    );

    const [handleEditSubject, subjectEditStatus] = useEditSubject();
    const {
        loading: subjectEditPending,
        data: editedSubject,
        error: subjectEditError,
    } = subjectEditStatus;

    const handleBackNavigate = () => {
        if (!!editedSubject) {
            router.push(`/subjects/${router.query.subjectId}`);
        }
    };

    const handleSubmitSubject = async (newSubject) => {
        // alert(JSON.stringify(newSubject));
        try {
            await handleEditSubject(router.query.subjectId, newSubject);
            toast.success('✅ Subject Succesfully Updated!', {
                position: 'top-right',
                autoClose: false,
                closeOnClick: true,
                onClose: () => handleBackNavigate(),
                draggable: true,
            });
        } catch {
            openErrorToast('Error while editing subject!');
        }
    };

    return (
        <DefaultLayout userInfo={userInfo} userLoading={userLoading}>
            <PageLayout pageTitle='Edit Subject'>
                {subjectData && (
                    <AddSubjectsForm
                        prefillData={subjectData.data}
                        onSubmitSubject={handleSubmitSubject}
                    />
                )}
                {subjectEditError && (
                    <Alert color='danger' className={styles.errorAlert}>
                        Error while editing subject:{' '}
                        {JSON.stringify(subjectEditError)}
                    </Alert>
                )}
            </PageLayout>
        </DefaultLayout>
    );
};

export default EditSubjectPage;
