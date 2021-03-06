import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
    TabContent,
    TabPane,
    Card,
    Button,
    CardTitle,
    CardText,
    Row,
    Col,
} from 'reactstrap';

import styles from './Topic.module.scss';

import { getMotivationalQuote } from '@/actions/quotes';
import { log } from '@/utils/logger';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';
import TopicTabHeader from './components/TopicTabHeader';
import NotesTab from './components/NotesTab';

const Topic = ({ topic, quote }) => {
    const [currentTab, setCurrentTab] = useState(1);

    const changeTabs = (tabNumber) => {
        if (currentTab !== tabNumber) {
            setCurrentTab(tabNumber);
        }
    };

    const CardsTab = () => {
        return (
            <TabPane tabId={2}>
                <div className={styles.tabContainer}>
                    <h1>Cards</h1>
                </div>
            </TabPane>
        );
    };

    return (
        <DefaultLayout className={styles.root}>
            <PageLayout
                pageTitle={topic.title}
                pageSubTitle={topic.description}
            >
                <Row>
                    <div className={styles.topicImage}>
                        <img src={topic.image} width='100%' height={300} />
                    </div>
                    <blockquote className={styles.quote}>{quote}</blockquote>
                </Row>
                <TopicTabHeader
                    currentTab={currentTab}
                    changeTabs={changeTabs}
                />
                <TabContent activeTab={currentTab}>
                    <NotesTab notes={topic.notes} />
                    <CardsTab />
                </TabContent>
            </PageLayout>
        </DefaultLayout>
    );
};

export async function getServerSideProps({ query }) {
    const topic = {
        title: 'topic 1',
        description: 'topic description',
        notes: 'Notes...',
        cards: [{ question: 'Card question 1', answer: 'Card answer 1' }],
        image:
            'https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    };
    // log('Query: ', query);

    // const quote = getMotivationalQuote()
    const quote = 'Motivation quote here';

    return {
        props: { topic, quote },
    };
}

export default Topic;
