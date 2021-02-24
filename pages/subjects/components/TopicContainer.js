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

import styles from '../Subject.module.scss';

import { log } from '@/utils/logger';

const TopicContainer = ({ topic }) => {
    return (
        <Card className={styles.topicContainer}>
            <CardHeader>
                <CardTitle className={styles.topicTitle}>
                    {topic.title}
                </CardTitle>
            </CardHeader>
            <CardBody>
                {topic.image && (
                    <CardImg src={topic.image} width='100%' height={300} />
                )}
                <CardText className={styles.topicDescription}>
                    {topic.description}
                </CardText>
            </CardBody>
        </Card>
    );
};

export default TopicContainer;
