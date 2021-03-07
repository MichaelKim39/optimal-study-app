import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useForm } from 'react-hook-form';

import styles from '../Subjects.module.scss';

import { log } from '@/utils/logger';

const AddTopicsForm = ({ onSubmitTopic, prefillData }) => {
    const { register, handleSubmit, errors, reset } = useForm({
        defaultValues: prefillData,
    });

    return (
        <Form onSubmit={handleSubmit(onSubmitTopic)}>
            <FormGroup>
                <Label for='topicTitle' className={styles.subjectInput}>
                    Topic
                </Label>
                <Input
                    innerRef={register}
                    type='text'
                    name='title'
                    id='topicTitle'
                    placeholder='Name of topic'
                    className={styles.addSubjectsFormInput}
                />
            </FormGroup>
            <FormGroup>
                <Label for='topicDesc' className={styles.subjectInput}>
                    Description
                </Label>
                <Input
                    innerRef={register}
                    type='text'
                    name='description'
                    id='topicDesc'
                    placeholder='Description of topic'
                    className={styles.addSubjectsFormInput}
                />
            </FormGroup>
            <Button type='submit'>Submit</Button>
        </Form>
    );
};

export default AddTopicsForm;
