import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Button,
    Row,
} from 'reactstrap';
import { useRouter } from 'next/router';

import styles from '../Subjects.module.scss';

import { log } from '@/utils/logger';

const SubjectContainer = ({
    subject,
    onPressEdit,
    onPressDelete,
    showUtilButtons = false,
    containerStyle,
    clickEnabled = true,
    onClickSubject,
}) => {
    const router = useRouter();
    const handleOpenSubject = (subjectId) => {
        if (clickEnabled) {
            router.push('/subjects/[subjectId]', `/subjects/${subjectId}`);
        } else {
            onClickSubject(subject);
        }
    };

    const TopicsList = () => {
        return (
            <ListGroup>
                {subject.topics.slice(0, 3).map((topic) => (
                    <ListGroupItem key={topic._id}>{topic.title}</ListGroupItem>
                ))}
            </ListGroup>
        );
    };

    return (
        <Card
            className={`${styles.subjectContainer} ${containerStyle}`}
            onClick={() => handleOpenSubject(subject._id)}
            key={subject._id}
        >
            <CardHeader>
                <Row className={styles.headerRow}>
                    <CardTitle className={styles.subjectTitle}>
                        {subject.title}
                    </CardTitle>
                    {showUtilButtons && (
                        <div>
                            <Button
                                color='warning'
                                className={styles.headerButton}
                                onClick={(event) => onPressEdit(event)}
                            >
                                Edit
                            </Button>
                            <Button
                                color='danger'
                                className={styles.headerButton}
                                onClick={(event) => onPressDelete(event)}
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </Row>
            </CardHeader>
            <CardBody>
                <div className={styles.subjectImage}>
                    <CardImg
                        src={subject.image}
                        // width='100%'
                    />
                </div>
                <CardText className={styles.subjectDescription}>
                    {subject.description}
                </CardText>
                <TopicsList />
            </CardBody>
        </Card>
    );
};

export default SubjectContainer;
