import React, { useEffect } from 'react';
import { Row, Col, Alert } from 'reactstrap';
import { useRouter } from 'next/router';

import styles from './Topic.module.scss';

import { log } from '@/utils/logger';
import { useEditCard, useGetCard } from '@/actions/topics';
import { openSuccessToast, openErrorToast } from '@/utils/popups';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';
import Navigate from '@/components/global/Navigate';
import AddCardForm from './components/AddCardForm';

const EditCardPage = ({ userInfo, userLoading }) => {
    const router = useRouter();
    const { subjectId, topicId, cardId } = router.query;

    const [handleGetCard, cardGetStatus] = useGetCard();
    const { data: cardData } = cardGetStatus;

    const [handleEditCard, cardEditStatus] = useEditCard();
    const { data: cardEditData, error: cardEditError } = cardEditStatus;

    const _handleEditCard = (newCard) => {
        try {
            handleEditCard(subjectId, topicId, cardId, newCard);
            // if (!!cardEditData) {
            //     return <Navigate route={`/subjects/${subjectId}/${topicId}`} />;
            // }
            openSuccessToast('Successfully Edited Card');
        } catch (error) {
            openErrorToast('Error while adding card...');
        }
    };

    useEffect(() => {
        handleGetCard(subjectId, topicId, cardId);
    }, []);

    return (
        <DefaultLayout userInfo={userInfo} userLoading={userLoading}>
            <PageLayout pageTitle='Edit Card'>
                <Row>
                    <Col>
                        {cardData && (
                            <AddCardForm
                                prefillData={cardData}
                                onSubmitCard={_handleEditCard}
                            />
                        )}
                    </Col>
                </Row>
                {cardEditError && (
                    <Alert color='danger' className='mt-3'>
                        Error while editing card: {cardEditError}
                    </Alert>
                )}
            </PageLayout>
        </DefaultLayout>
    );
};

export default EditCardPage;
