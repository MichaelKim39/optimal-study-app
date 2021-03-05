import React, { useState } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Subjects.module.scss';

import { log } from '@/utils/logger';
import SubjectsAPI from '@/libs/api/subjectsAPI';
import withAuthCheck from '@/hoc/withAuthCheck';
import { checkPermission } from '@/actions/user';
import { useDeleteSubject } from '@/actions/subjects';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';
import SubjectContainer from './components/SubjectContainer';

const Subjects = ({ userInfo, userLoading, subjects: initialSubjects }) => {
    const router = useRouter();
    const [handleDeleteSubject, deleteSubjectStatus] = useDeleteSubject();
    const {
        data: deletedSubject,
        error: deleteSubjectError,
    } = deleteSubjectStatus;
    const [subjects, setSubjects] = useState(initialSubjects);

    const handleOpenSubject = (subjectId) => {
        router.push('/subjects/[subjectId]', `/subjects/${subjectId}`);
    };

    const handlePressEdit = (event, subjectId) => {
        event.stopPropagation();
        router.push(
            '/subjects/[subjectId]/edit',
            `/subjects/${subjectId}/edit`,
        );
    };

    const handlePressDelete = async (event, subjectId) => {
        event.stopPropagation();
        if (
            confirm(
                'Are you sure? If you remove this subject, you cannot recover it!',
            )
        ) {
            await handleDeleteSubject(subjectId);
            setSubjects(
                subjects.filter((subject) => subject._id !== subjectId),
            );
            toast.success('✅ Subject Succesfully Deleted!', {
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

    const AddSubjectButton = () => {
        return (
            <FontAwesomeIcon
                icon='plus-circle'
                color='white'
                size='2x'
                onClick={() => router.push('/subjects/add')}
                className={styles.addSubjectButton}
            />
        );
    };

    return (
        <DefaultLayout userInfo={userInfo} userLoading={userLoading}>
            <PageLayout
                pageTitle='Subjects'
                titleAccessory={<AddSubjectButton />}
            >
                <Row className={styles.subjectsContainer}>
                    {subjects?.map((subject) => (
                        <Col
                            key={subject._id}
                            md='3'
                            onClick={() => handleOpenSubject(subject._id)}
                        >
                            <SubjectContainer
                                subject={subject}
                                showUtilButtons={
                                    userInfo &&
                                    checkPermission(userInfo, 'admin')
                                }
                                onPressEdit={(event) =>
                                    handlePressEdit(event, subject._id)
                                }
                                onPressDelete={(event) =>
                                    handlePressDelete(event, subject._id)
                                }
                            />
                        </Col>
                    ))}
                </Row>
            </PageLayout>
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
