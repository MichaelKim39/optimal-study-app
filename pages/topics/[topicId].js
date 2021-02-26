import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { log } from '@/utils/logger';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';

const Topic = ({ topic }) => {
    const router = useRouter();

    return (
        <DefaultLayout>
            <PageLayout pageTitle={'Topic Title'}>
                <p>Topic Description: {topic.body}</p>
                <p>Topic ID: {topic.id}</p>
            </PageLayout>
        </DefaultLayout>
    );
};

Topic.getInitialProps = async ({ query }) => {
    let topic = [];
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${query.topicId}`,
        );
        topic = response.data;
        log('Response', response.data);
    } catch (error) {
        log('Error', error.response);
    }
    return { topic };
};

export default Topic;
