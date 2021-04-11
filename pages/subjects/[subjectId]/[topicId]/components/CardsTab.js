import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { TabPane } from 'reactstrap';

import styles from '../Topic.module.scss';

import { useDeleteCard } from '@/actions/topics';
import { openErrorToast, openSuccessToast } from '@/utils/popups';
import { log } from '@/utils/logger';

import FlashCard from './FlashCard';
import CardFooter from './CardFooter';
import CardModal from './CardModal';
import AddButton from '@/components/global/AddButton';

const CardsTab = ({ cards: initialCards }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [cards, setCards] = useState(initialCards);
    const [handleDeleteCard, deleteCardStatus] = useDeleteCard();
    const [cardModalVis, setCardModalVis] = useState(false);

    const toggleCardModal = () => setCardModalVis(!cardModalVis);

    const router = useRouter();
    const { subjectId, topicId } = router.query;
    const numCards = cards?.length || 0;
    const isFirst = currentCardIndex === 0;
    const isLast = currentCardIndex === numCards - 1;

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

    const handleDeletePress = () => {
        try {
            const cardId = cards[currentCardIndex]._id;
            handleDeleteCard(subjectId, topicId, cardId);

            if (isLast) {
                setCurrentCardIndex(currentCardIndex - 1);
            }
            setCards(cards.filter((card) => card !== cards[currentCardIndex]));

            openSuccessToast('Successfully deleted card');
        } catch (error) {
            openErrorToast('Error while deleting card');
            log('ERROR WHILE DELETING CARD', error.response);
        }
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
                    {numCards > 0 && (
                        <h3>{`${currentCardIndex + 1} / ${numCards}`}</h3>
                    )}
                </div>
                {numCards > 0 && (
                    <>
                        <FlashCard
                            card={cards[currentCardIndex]}
                            onDeletePress={handleDeletePress}
                        />
                        <CardFooter
                            onPressBegin={toggleCardModal}
                            onPressPrev={handlePressPrev}
                            onPressNext={handlePressNext}
                            isFirst={isFirst}
                            isLast={isLast}
                        />
                    </>
                )}
            </div>
            <CardModal
                cards={cards}
                visible={cardModalVis}
                toggle={toggleCardModal}
            />
        </TabPane>
    );
};

export default CardsTab;
