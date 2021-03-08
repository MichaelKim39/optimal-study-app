import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { TabPane } from 'reactstrap';

import styles from '../Topic.module.scss';

import FlashCard from './FlashCard';
import CardFooter from './CardFooter';
import AddButton from '@/components/global/AddButton';

const CardsTab = ({ cards }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const router = useRouter();
    const isFirst = currentCardIndex === 0;
    const isLast = currentCardIndex === cards.length - 1;

    const handlePressPrev = () => {
        if (!isFirst) {
            setCurrentCardIndex(currentCardIndex - 1);
        }
    };
    const handlePressNext = () => {
        if (!isLast) {
            setCurrentCardIndex(currentCardIndex + 1);
        }
    };
    const handlePressAddCard = () => {
        router.push(
            `/subjects/${router.query.subjectId}/${router.query.topicId}/addCard`,
        );
    };

    return (
        <TabPane tabId={2}>
            <div className={styles.tabContainer}>
                <div className={styles.cardHeader}>
                    <div className={styles.cardHeaderLeft}>
                        <h1 className='mr-2'>Cards</h1>
                        <AddButton
                            color='lightgray'
                            onClick={handlePressAddCard}
                        />
                    </div>
                    <h3>{`${currentCardIndex + 1} / ${cards.length}`}</h3>
                </div>
                <FlashCard card={cards[currentCardIndex]} />
                <CardFooter
                    onPressPrev={handlePressPrev}
                    onPressNext={handlePressNext}
                    isFirst={isFirst}
                    isLast={isLast}
                />
            </div>
        </TabPane>
    );
};

export default CardsTab;
