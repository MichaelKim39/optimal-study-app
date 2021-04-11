import React, { useEffect } from 'react';
import {
    CustomInput,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
} from 'reactstrap';
import { useForm } from 'react-hook-form';

import styles from '../Subjects.module.scss';

import { log } from '@/utils/logger';

const AddSubjectsForm = ({ onSubmitSubject, prefillData }) => {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        errors,
        reset,
    } = useForm({
        defaultValues: prefillData,
    });

    useEffect(() => {
        register({ name: 'image' });
    }, [register]);

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
            {/* <FormGroup className={styles.addSubjectsFormGroup}>
                <Label for='image' className={styles.subjectInput}>
                    Image
                </Label>
                <CustomInput
                    innerRef={register}
                    className={styles.addSubjectsFormInput}
                    type='file'
                    id='image'
                    name='image'
                    label='Browse PC for an image to represent this subject!'
                    // onChange={(event) => {
                    //     setValue('image', event.target.files.item(0));
                    //     log('Change!', event.target.files.item(0));
                    // }}
                />
            </FormGroup> */}
            <Button type='submit'>Submit</Button>
        </Form>
    );
};

export default AddSubjectsForm;
