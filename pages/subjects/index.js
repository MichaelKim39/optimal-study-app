import React, { useState } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { useRouter } from 'next/router';
import { openSuccessToast } from '@/utils/popups';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Subjects.module.scss';

import { log } from '@/utils/logger';
import SubjectsAPI from '@/libs/api/subjectsAPI';
import withAuthCheck from '@/hoc/withAuthCheck';
import { checkPermission } from '@/actions/user';
import { useDeleteSubject } from '@/actions/subjects';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';
import AddButton from '@/components/global/AddButton';
import SubjectContainer from './components/SubjectContainer';

const Subjects = ({ userInfo, userLoading, subjects: initialSubjects }) => {
    const router = useRouter();
    const [handleDeleteSubject, deleteSubjectStatus] = useDeleteSubject();
    const {
        data: deletedSubject,
        error: deleteSubjectError,
    } = deleteSubjectStatus;
    const [subjects, setSubjects] = useState(initialSubjects);

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
            openSuccessToast('Subject Succesfully Deleted!');
        }
    };

    const AddSubjectButton = () => {
        return <AddButton onClick={() => router.push('/subjects/add')} />;
    };

    return (
        <DefaultLayout userInfo={userInfo} userLoading={userLoading}>
            <PageLayout
                pageTitle='Subjects'
                titleAccessory={<AddSubjectButton />}
            >
                <Row className={styles.subjectsContainer}>
                    {subjects?.map((subject) => (
                        <Col key={subject._id} md='3'>
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
