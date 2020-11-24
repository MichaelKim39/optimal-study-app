import React from 'react';

import DefaultLayout from '../../components/layouts/DefaultLayout';

const Subjects = () => {
    return (
        <DefaultLayout>
            <h1>I am Subjects page</h1>
        </DefaultLayout>
    );
};

Subjects.getInitialProps = async () => {
    let posts = [];
    try {
    } catch (error) {}
    return { posts };
};

export default Subjects;
