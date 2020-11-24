import React from 'react';

import { Button } from 'reactstrap';
import DefaultLayout from '../../components/layouts/DefaultLayout';

const Home = () => {
    return (
        <DefaultLayout>
            <Button color='danger'>Danger!</Button>
            <h1>I am Home page</h1>
        </DefaultLayout>
    );
};

export default Home;
