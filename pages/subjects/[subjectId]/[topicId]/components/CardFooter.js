import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

import styles from '../Topic.module.scss';

const CardFooter = ({ onPressNext, onPressPrev, isFirst, isLast }) => {
    const [difficultyRating, setDifficultyRating] = useState(0);

    return (
        <div className={styles.cardFooter}>
            <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                size='3x'
                onClick={onPressPrev}
                color={isFirst ? 'lightgray' : 'black'}
                className={!isFirst ? styles.activeCardIcon : ''}
            />
            <Rating
                emptySymbol={
                    <FontAwesomeIcon
                        icon={faStar}
                        size='3x'
                        color='lightgray'
                    />
                }
                fullSymbol={
                    <FontAwesomeIcon icon={faStar} size='3x' color='orange' />
                }
                onChange={setDifficultyRating}
                initialRating={difficultyRating}
            />
            <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                size='3x'
                onClick={onPressNext}
                color={isLast ? 'lightgray' : 'black'}
                className={!isLast ? styles.activeCardIcon : ''}
            />
        </div>
    );
};

export default CardFooter;
