import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { log } from '../../utils/logger';

import DefaultLayout from '../../components/layouts/DefaultLayout';

const Topic = ({ topic }) => {
    const router = useRouter();

    log('topic', topic);

    return (
        <DefaultLayout>
            <h1>{topic.title}</h1>
            <p>{topic.body}</p>
            <p>{topic.id}</p>
        </DefaultLayout>
    );
};

Topic.getInitialProps = async ({ query }) => {
    let topic = [];
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${query}`,
        );
        topic = response.data;
        log('Response', topic);
    } catch (error) {
        log(error);
    }
    return { topic };
};

export default Topic;
