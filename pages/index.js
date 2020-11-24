import React from 'react';

import { log } from '../utils/logger';

import { Button, Container } from 'reactstrap';
import DefaultLayout from '../components/layouts/DefaultLayout';

const Index = () => {
    return (
        <DefaultLayout>
            <Container>
                <Button color='danger'>Danger!</Button>
                <h1>I am index page</h1>
            </Container>
        </DefaultLayout>
    );
};

export default Index;
