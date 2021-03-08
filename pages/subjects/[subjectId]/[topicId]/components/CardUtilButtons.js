import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import styles from '../Topic.module.scss';

const CardUtilButtons = ({ onEditPress, onDeletePress }) => {
    return (
        <div className={styles.cardUtilButtonContainer}>
            <FontAwesomeIcon
                icon={faPen}
                size='2x'
                onClick={onEditPress}
                className={styles.activeCardIcon}
            />
            <FontAwesomeIcon
                icon={faTrash}
                size='2x'
                onClick={onDeletePress}
                className={styles.activeCardIcon}
            />
        </div>
    );
};

export default CardUtilButtons;
