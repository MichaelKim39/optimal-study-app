import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../Subject.module.scss';

const ToolTipIcon = ({ label, id }) => {
    const [toolTipVis, setToolTipVis] = useState(false);
    const toggleToolTip = () => setToolTipVis(!toolTipVis);

    return (
        <div className={styles.tooltip}>
            <Tooltip
                placement='top'
                isOpen={toolTipVis}
                target={id}
                toggle={toggleToolTip}
            >
                {label}
            </Tooltip>
            <FontAwesomeIcon
                icon='info-circle'
                color='white'
                size='2x'
                id={id}
            />
        </div>
    );
};

export default ToolTipIcon;
