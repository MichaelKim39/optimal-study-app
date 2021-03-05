import React, { useEffect, useState } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    CustomInput,
} from 'reactstrap';
import { useForm } from 'react-hook-form';

import styles from '../Subjects.module.scss';

import { log } from '@/utils/logger';

const AddSubjectsForm = ({ onSubmitSubject, prefillData }) => {
    const { register, handleSubmit, errors, reset } = useForm({
        defaultValues: prefillData,
    });

    return (
        <Form
            onSubmit={handleSubmit(onSubmitSubject)}
            // className={styles.addSubjectForm}
        >
            <FormGroup>
                <Label for='subjectTitle' className={styles.subjectInput}>
                    Subject
                </Label>
                <Input
                    innerRef={register}
                    type='text'
                    name='title'
                    id='subjectTitle'
                    placeholder='Name of subject'
                    className={styles.addSubjectsFormInput}
                />
            </FormGroup>
            <FormGroup>
                <Label for='subjectDesc' className={styles.subjectInput}>
                    Description
                </Label>
                <Input
                    innerRef={register}
                    type='text'
                    name='description'
                    id='subjectDesc'
                    placeholder='Description of subject'
                    className={styles.addSubjectsFormInput}
                />
            </FormGroup>
            {/* <FormGroup>
                <Label for='subjectImage' className={styles.subjectInput}>
                    Image
                </Label>
                <Input
                    innerRef={register}
                    type='file'
                    name='image'
                    id='subjectImage'
                    className={styles.addSubjectsFormInput}
                />
                <FormText color='white'>
                    Browse PC files for an image to represent this subject.
                </FormText>
            </FormGroup> */}
            <Button type='submit'>Submit</Button>
        </Form>
    );
};

export default AddSubjectsForm;
