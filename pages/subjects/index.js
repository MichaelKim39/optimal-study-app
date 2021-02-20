import React from 'react';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';

import styles from './Subjects.module.scss';

import { log } from '@/utils/logger';
import SubjectsAPI from '@/libs/api/subjectsAPI';
import withAuthCheck from '@/hoc/withAuthCheck';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';
import SubjectContainer from './components/SubjectContainer';

const Subjects = ({ userInfo, userLoading, subjects }) => {
    const router = useRouter();

    const handleOpenSubject = (subjectId) => {
        router.push('/subjects/[subjectId]', `/subjects/${subjectId}`);
    };

    return (
        <DefaultLayout userInfo={userInfo} userLoading={userLoading}>
            <PageLayout pageTitle='Subjects'>
                <Row className={styles.subjectsContainer}>
                    {subjects?.map((subject) => (
                        <Col
                            key={subject._id}
                            md='3'
                            onClick={() => handleOpenSubject(subject._id)}
                        >
                            <SubjectContainer subject={subject} />
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
