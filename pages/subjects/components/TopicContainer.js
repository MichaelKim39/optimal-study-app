import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardHeader,
    Button,
    Row,
    Col,
} from 'reactstrap';

import styles from '../Subject.module.scss';

import { log } from '@/utils/logger';

const TopicContainer = ({ topic, showDeleteButton = false, onPressDelete }) => {
    const DeleteButton = () => {
        return (
            <Button
                color='danger'
                className={styles.deleteButton}
                onClick={(event) => onPressDelete(event)}
            >
                Delete
            </Button>
        );
    };

    return (
        <Card className={styles.topicContainer}>
            <CardHeader>
                <div className={styles.topicHeader}>
                    <CardTitle className={styles.topicTitle}>
                        {topic.title}
                    </CardTitle>
                    {showDeleteButton && <DeleteButton />}
                </div>
            </CardHeader>
            <CardBody>
                {topic.image && (
                    <div className={styles.topicImageContainer}>
                        <CardImg src={topic.image} />
                    </div>
                )}
                <CardText className={styles.topicDescription}>
                    {topic.description}
                </CardText>
            </CardBody>
        </Card>
    );
};

export default TopicContainer;
