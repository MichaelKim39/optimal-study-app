import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useRouter } from 'next/router';

import { log } from '@/utils/logger';
import { useUpdateCardBucket } from '@/actions/topics';

import styles from '../Topic.module.scss';
import FlashCard from './FlashCard';

const CardModal = ({ cards, visible, toggle }) => {
    const [sortedCards, setSortedCards] = useState([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const router = useRouter();
    const { subjectId, topicId } = router.query;

    const [handleUpdateCardBucket, bucketUpdateStatus] = useUpdateCardBucket();

    const showNextCard = () => {
        if (currentCardIndex + 1 >= cards.length) {
            log('Reached end of list');
        } else {
            log('Switched to next card');
            setCurrentCardIndex(currentCardIndex + 1);
        }
    };

    const checkUpdateValid = (promotion, currentBucket) => {
        if (promotion && currentBucket < 5) {
            return true;
        } else if (!promotion && currentBucket > 1) {
            return true;
        }
        return false;
    };

    const handleUpdateBucket = async (promotion) => {
        const { bucket: currentBucket, _id: cardId } = sortedCards[
            currentCardIndex
        ];
        const canUpdate = checkUpdateValid(promotion, currentBucket);
        if (canUpdate) {
            await handleUpdateCardBucket(
                subjectId,
                topicId,
                cardId,
                promotion ? 1 : -1,
            );
        } else {
            log('Bucket is already at start / end');
        }
        showNextCard();
    };

    useEffect(() => {
        setSortedCards(cards.sort((a, b) => a.bucket - b.bucket));
        log('SORTED CARDS');
    }, [visible]);

    return (
        <Modal isOpen={visible} toggle={toggle} className={styles.cardModal}>
            <ModalHeader toggle={toggle}>Card Revision Session</ModalHeader>
            <ModalBody>
                <FlashCard
                    showUtilButtons={false}
                    card={sortedCards[currentCardIndex]}
                />
            </ModalBody>
            <ModalFooter>
                <Button
                    color='primary'
                    onClick={() => handleUpdateBucket(false)}
                >
                    Correct
                </Button>
                <Button
                    color='warning'
                    onClick={() => handleUpdateBucket(true)}
                >
                    Incorrect
                </Button>
                <Button onClick={toggle}>End Session</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CardModal;
