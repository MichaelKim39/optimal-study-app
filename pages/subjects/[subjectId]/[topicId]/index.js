import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    Button,
    CardTitle,
    CardText,
    Row,
    Col,
} from 'reactstrap';

import styles from './Topic.module.scss';

import { log } from '@/utils/logger';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';

const Topic = ({ topic }) => {
    const [currentTab, setCurrentTab] = useState(1);

    const changeTabs = (tabNumber) => {
        if (currentTab !== tabNumber) {
            setCurrentTab(tabNumber);
        }
    };

    const TabHeader = () => {
        const isTabOpen = (tabNumber) => {
            return currentTab === tabNumber;
        };
        return (
            <Nav tabs fill pills className={styles.tabHeader}>
                <NavItem>
                    <NavLink
                        className={[
                            { active: isTabOpen(1) },
                            isTabOpen(1)
                                ? styles.tabActive
                                : styles.tabInactive,
                        ]}
                        onClick={() => {
                            changeTabs(1);
                        }}
                    >
                        Notes
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={[
                            { active: isTabOpen(2) },
                            isTabOpen(2)
                                ? styles.tabActive
                                : styles.tabInactive,
                        ]}
                        onClick={() => {
                            changeTabs(2);
                        }}
                    >
                        Cards
                    </NavLink>
                </NavItem>
            </Nav>
        );
    };

    const NotesTab = () => {
        return (
            <TabPane tabId={1}>
                <div className={styles.tabContainer}>
                    <h1>Notes</h1>
                    <p>{topic.description}</p>
                </div>
            </TabPane>
        );
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
            <PageLayout pageTitle={topic.title}>
                <div className={styles.topicImage}>
                    <img src={topic.image} width='100%' height={300} />
                </div>
                <TabHeader />
                <TabContent activeTab={currentTab}>
                    <NotesTab />
                    <CardsTab />
                </TabContent>
            </PageLayout>
        </DefaultLayout>
    );
};

export async function getServerSideProps({ query }) {
    // const topicJSON = JSON.stringify({ title: 'Topic 1' });
    // const topic = topicJSON.data;
    const topic = {
        title: 'topic 1',
        description: 'topic description',
        notes: 'Notes...',
        cards: [{ question: 'Card question 1', answer: 'Card answer 1' }],
        image:
            'https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    };
    log('Query: ', query);
    return {
        props: { topic },
    };
}

export default Topic;
