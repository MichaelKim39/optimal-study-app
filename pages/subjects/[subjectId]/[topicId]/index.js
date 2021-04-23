import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TabContent, TabPane } from 'reactstrap';

import styles from './Topic.module.scss';

import { log } from '@/utils/logger';
import TopicsAPI from '@/libs/api/topicsAPI';
import { useUpdateNextReview, useToggleTopicActive } from '@/actions/topics';
import { openSuccessToast, openErrorToast } from '@/utils/popups';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';
import TopicTabHeader from './components/TopicTabHeader';
import NotesTab from './components/NotesTab';
import CardsTab from './components/CardsTab';
import TopicButtons from './components/TopicButtons';

const Topic = ({ userInfo, userLoading, topic }) => {
    const router = useRouter();
    const [currentTab, setCurrentTab] = useState(1);
    const [quote, setQuote] = useState('');
    const [learningActive, setLearningActive] = useState(topic.active);

    const { subjectId, topicId } = router.query;

    const [handleUpdateNextReview, updateReviewStatus] = useUpdateNextReview();
    const { data: updateReviewData } = updateReviewStatus;

    const [
        handleToggleTopicActive,
        toggleActiveStatus,
    ] = useToggleTopicActive();
    const { data: toggleActiveData } = toggleActiveStatus;

    const changeTabs = (tabNumber) => {
        if (currentTab !== tabNumber) {
            setCurrentTab(tabNumber);
        }
    };

    const handleToggleActive = async () => {
        // If currently active, toggling will lead to movement active -> inactive (therefore setActive = false)
        const setActive = !topic.active;
        setLearningActive(!learningActive);
        try {
            await handleToggleTopicActive(subjectId, topicId, setActive);
            openSuccessToast('Successfully Toggled Topic Active Property');
        } catch (error) {
            openErrorToast(
                'Error while toggling topic active property date...',
            );
        }
    };

    const handleUpdateReview = async () => {
        try {
            await handleUpdateNextReview(subjectId, topicId);
            // log('Updating next review time', updateReviewData);
            openSuccessToast('Successfully Updated Next Review Date');
        } catch (error) {
            openErrorToast('Error while updating next review date...');
        }
    };

    useEffect(() => {
        const result = localStorage.getItem('motivationalQuote');
        setQuote(result);
    }, []);

    return (
        <DefaultLayout
            userInfo={userInfo}
            userLoading={userLoading}
            className={styles.root}
        >
            <PageLayout
                pageTitle={topic.title}
                pageSubTitle={topic.description}
            >
                <TopicButtons
                    active={learningActive}
                    onClickActive={handleToggleActive}
                    onClickReview={handleUpdateReview}
                />
                <div className={styles.topRowContainer}>
                    <div className={styles.topicImage}>
                        <img src={topic.image} width='100%' />
                    </div>
                    <blockquote className={styles.quote}>{quote}</blockquote>
                </div>
                <TopicTabHeader
                    currentTab={currentTab}
                    changeTabs={changeTabs}
                />
                <TabContent activeTab={currentTab}>
                    <NotesTab notes={topic.notes} />
                    <CardsTab cards={topic.cards} />
                </TabContent>
            </PageLayout>
        </DefaultLayout>
    );
};

export async function getServerSideProps({ query }) {
    const { subjectId, topicId } = query;

    const topicJSON = await new TopicsAPI().getTopic(subjectId, topicId);
    const topic = topicJSON.data;
    return {
        props: { topic },
    };
}

export default Topic;
