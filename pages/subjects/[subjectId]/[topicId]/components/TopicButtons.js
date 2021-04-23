import React, { useState } from 'react';
import { Button, Tooltip } from 'reactstrap';

import styles from '../Topic.module.scss';

const TopicButtons = ({ active, onClickActive, onClickReview }) => {
    const [toolTipVis, setToolTipVis] = useState(false);
    const toggleToolTip = () => setToolTipVis(!toolTipVis);

    return (
        <div className={styles.topicButtonsContainer}>
            <Tooltip
                placement='top'
                isOpen={toolTipVis}
                target='activeTooltip'
                toggle={toggleToolTip}
            >
                Press to toggle active learning on / off
            </Tooltip>
            <Button
                color={active ? 'success' : 'danger'}
                id='activeTooltip'
                className={styles.topicButton}
                onClick={onClickActive}
            >
                {active ? 'Learning Active' : 'Learning Inactive'}
            </Button>
            <Button
                color='primary'
                className={styles.topicButton}
                onClick={onClickReview}
            >
                Mark Reviewed
            </Button>
        </div>
    );
};

export default TopicButtons;
