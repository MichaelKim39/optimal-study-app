import React from 'react';
import { TabPane } from 'reactstrap';

import styles from '../Topic.module.scss';

const NotesTab = ({ notes }) => {
    return (
        <TabPane tabId={1}>
            <div className={styles.tabContainer}>
                <h1>Notes</h1>
                <p>{notes}</p>
            </div>
        </TabPane>
    );
};

export default NotesTab;
