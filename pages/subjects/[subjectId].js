import React from 'react';
import axios from 'axios';

import { log } from '@/utils/logger';

import DefaultLayout from '@/components/layouts/DefaultLayout';

const Subject = ({ subject }) => {
    return (
        <DefaultLayout>
            <h1>{subject.title}</h1>
            <p>Subject Description: {subject.body}</p>
            <p>Subject ID: {subject.id}</p>
        </DefaultLayout>
    );
};

Subject.getInitialProps = async ({ query }) => {
    // TODO: Change this to fetch a list of topics as well as subject info
    log('QUERY OBJECT: ', query);
    let subject = [];
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${query.subjectId}`,
        );
        subject = response.data;
        // log('Response', response.data);
    } catch (error) {
        log('Error', error.response);
    }
    return { subject };
};
export default Subject;
