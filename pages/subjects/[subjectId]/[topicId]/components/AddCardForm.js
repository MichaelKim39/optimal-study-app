import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useForm } from 'react-hook-form';

import styles from '../Topic.module.scss';

import { log } from '@/utils/logger';

const AddTopicsForm = ({ onSubmitCard, prefillData }) => {
    const { register, handleSubmit, errors, reset } = useForm({
        defaultValues: prefillData,
    });

    return (
        <Form onSubmit={handleSubmit(onSubmitCard)}>
            <FormGroup className={styles.cardFormGroup}>
                <Label for='question' className={styles.cardInputLabel}>
                    Question
                </Label>
                <textarea
                    ref={register}
                    name='question'
                    id='question'
                    className={styles.cardInput}
                    placeholder='Question'
                />
            </FormGroup>
            <FormGroup className={styles.cardFormGroup}>
                <Label for='answer' className={styles.cardInputLabel}>
                    Answer
                </Label>
                <textarea
                    ref={register}
                    name='answer'
                    id='answer'
                    className={styles.cardInput}
                    placeholder='Answer'
                />
            </FormGroup>
            <Button type='submit' className={styles.addCardButton}>
                Submit
            </Button>
        </Form>
    );
};

export default AddTopicsForm;
