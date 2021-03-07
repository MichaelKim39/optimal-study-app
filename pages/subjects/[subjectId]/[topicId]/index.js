import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TabContent, TabPane } from 'reactstrap';

import styles from './Topic.module.scss';

import { log } from '@/utils/logger';
import TopicsAPI from '@/libs/api/TopicsAPI';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';
import TopicTabHeader from './components/TopicTabHeader';
import NotesTab from './components/NotesTab';
import CardsTab from './components/CardsTab';

const Topic = ({ topic }) => {
    const [currentTab, setCurrentTab] = useState(1);
    const [quote, setQuote] = useState('');

    const changeTabs = (tabNumber) => {
        if (currentTab !== tabNumber) {
            setCurrentTab(tabNumber);
        }
    };

    useEffect(() => {
        const result = localStorage.getItem('motivationalQuote');
        setQuote(result);
    }, []);

    return (
        <DefaultLayout className={styles.root}>
            <PageLayout
                pageTitle={topic.title}
                pageSubTitle={topic.description}
            >
                <div className={styles.topRowContainer}>
                    <div className={styles.topicImage}>
                        <img src={topic.image} width='100%' height={300} />
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
