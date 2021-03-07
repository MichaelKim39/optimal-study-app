import React from 'react';
import { TabPane } from 'reactstrap';

import styles from '../Topic.module.scss';

import FlashCard from './FlashCard';

const CardsTab = ({ cards }) => {
    return (
        <TabPane tabId={2}>
            <div className={styles.tabContainer}>
                <h1>Cards</h1>
                {cards.map((card) => (
                    <FlashCard card={card} />
                ))}
            </div>
        </TabPane>
    );
};

export default CardsTab;
