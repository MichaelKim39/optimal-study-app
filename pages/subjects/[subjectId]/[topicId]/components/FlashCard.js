import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

import styles from '../Topic.module.scss';

const FlashCard = ({ card }) => {
    const [flipping, setFlipping] = useState(false);
    const [difficultyRating, setDifficultyRating] = useState(0);

    const CardFooter = () => {
        return (
            <div className={styles.cardFooter}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size='3x' />
                <Rating
                    emptySymbol={
                        <FontAwesomeIcon
                            icon={faStar}
                            size='3x'
                            color='lightgray'
                        />
                    }
                    fullSymbol={
                        <FontAwesomeIcon
                            icon={faStar}
                            size='3x'
                            color='orange'
                        />
                    }
                    onChange={setDifficultyRating}
                    initialRating={difficultyRating}
                />
                <FontAwesomeIcon icon={faArrowAltCircleRight} size='3x' />
            </div>
        );
    };

    return (
        <>
            <div
                id={card._id}
                className={`${styles.flashCard} ${
                    flipping && styles.flashCardFlipping
                }`}
            >
                <div
                    className={styles.flashCardFront}
                    onClick={() => setFlipping(!flipping)}
                >
                    <h3>{card.question}</h3>
                </div>
                <div
                    className={styles.flashCardBack}
                    onClick={() => setFlipping(!flipping)}
                >
                    <h3>{card.answer}</h3>
                </div>
            </div>
            <CardFooter />
        </>
    );
};

export default FlashCard;
