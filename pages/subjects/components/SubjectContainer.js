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
} from 'reactstrap';

import styles from '../Subjects.module.scss';

import { log } from '@/utils/logger';

const SubjectContainer = ({ subject }) => {
    const TopicsList = () => {
        return (
            <ListGroup>
                {subject.topics.map((topic) => (
                    <ListGroupItem key={topic._id}>{topic.title}</ListGroupItem>
                ))}
            </ListGroup>
        );
    };

    return (
        <Card className={styles.subjectContainer}>
            <CardHeader>
                <CardTitle className={styles.subjectTitle}>
                    {subject.title}
                </CardTitle>
            </CardHeader>
            <CardBody>
                <CardImg src={subject.image} width='100%' height={300} />
                <CardText className={styles.subjectDescription}>
                    {subject.description}
                </CardText>
                <TopicsList />
            </CardBody>
        </Card>
    );
};

export default SubjectContainer;
