import React from 'react';
import { Row, Col, Alert } from 'reactstrap';
import { useRouter } from 'next/router';

import styles from './Topic.module.scss';

import { log } from '@/utils/logger';
import { useAddCard } from '@/actions/topics';
import { openSuccessToast, openErrorToast } from '@/utils/popups';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';
import Navigate from '@/components/global/Navigate';
import AddCardForm from './components/AddCardForm';

const AddCardPage = ({ userInfo, userLoading }) => {
    const router = useRouter();
    const { subjectId, topicId } = router.query;
    const [handleAddCard, cardAddStatus] = useAddCard();
    const {
        loading: cardAdding,
        data: cardData,
        error: cardAddError,
    } = cardAddStatus;

    if (!!cardData) {
        return <Navigate route={`/subjects/${subjectId}/${topicId}`} />;
    }

    const _handleAddCard = (newCard) => {
        try {
            handleAddCard(subjectId, topicId, newCard);
        } catch (error) {
            openErrorToast('Error while adding card...');
        }
    };

    return (
        <DefaultLayout userInfo={userInfo} userLoading={userLoading}>
            <PageLayout pageTitle='Add Card'>
                <Row>
                    <Col>
                        <AddCardForm onSubmitCard={_handleAddCard} />
                    </Col>
                </Row>
                {cardAddError && (
                    <Alert color='danger' className='mt-3'>
                        Error while addding card: {cardAddError}
                    </Alert>
                )}
            </PageLayout>
        </DefaultLayout>
    );
};

export default AddCardPage;
