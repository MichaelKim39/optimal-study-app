import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './AddButton.module.scss';

const AddButton = ({ onClick, color = 'white' }) => {
    return (
        <FontAwesomeIcon
            icon='plus-circle'
            color={color}
            size='2x'
            onClick={onClick}
            className={styles.addButton}
        />
    );
};

export default AddButton;
