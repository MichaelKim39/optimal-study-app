import React, { useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../Topic.module.scss';

import CardUtilButtons from './CardUtilButtons';

const FlashCard = ({ card, onDeletePress, showUtilButtons = true }) => {
    const router = useRouter();
    const { subjectId, topicId } = router.query;
    const [flipping, setFlipping] = useState(false);

    const handleEditPress = (event) => {
        event.stopPropagation();
        router.push(`/subjects/${subjectId}/${topicId}/${card._id}`);
    };

    return (
        <div key={card._id} className={styles.flashCardContainer}>
            <div
                className={`${styles.flashCard} ${
                    flipping && styles.flashCardFlipping
                }`}
            >
                <div
                    className={styles.flashCardFront}
                    onClick={() => setFlipping(!flipping)}
                >
                    {showUtilButtons && (
                        <CardUtilButtons
                            onEditPress={handleEditPress}
                            onDeletePress={onDeletePress}
                        />
                    )}
                    <div
                        className={`${styles.flashCardTextContainer} ${
                            showUtilButtons && styles.flashCardBottomSpacing
                        }`}
                    >
                        <p className={styles.flashCardContentText}>
                            {card.question}
                        </p>
                    </div>
                </div>
                <div
                    className={styles.flashCardBack}
                    onClick={() => setFlipping(!flipping)}
                >
                    {showUtilButtons && (
                        <CardUtilButtons
                            onEditPress={handleEditPress}
                            onDeletePress={onDeletePress}
                        />
                    )}
                    <div
                        className={`${styles.flashCardTextContainer} ${
                            showUtilButtons && styles.flashCardBottomSpacing
                        }`}
                    >
                        <p className={styles.flashCardContentText}>
                            {card.answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashCard;
