import React, { useState } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardHeader,
    Button,
} from 'reactstrap';

import styles from '../Subject.module.scss';

import { log } from '@/utils/logger';

import ToolTipIcon from './ToolTipIcon';

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

    const checkShouldReview = () => {
        // The next required review date is today or has passed already
        const today = Date.now();
        const nextReview = Date.parse(topic.nextReview);
        const pendingReview = nextReview <= today;
        if (topic.active && pendingReview) {
            return true;
        }
        return false;
    };
    const shouldReview = checkShouldReview();

    return (
        <Card className={styles.topicContainer}>
            <CardHeader>
                <div className={styles.topicHeader}>
                    {shouldReview && (
                        <ToolTipIcon
                            label={`${topic.title} has a review pending!`}
                            id={topic.title.replace(/ /g, '')}
                        />
                    )}
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
