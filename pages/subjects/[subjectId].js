import React from 'react';
import axios from 'axios';

import { log } from '@/utils/logger';
import { useGetSubject } from '@/actions'
import { useRouter } from 'next/router'

import styles from './Subject.module.scss';

import Warning from '@/components/global/Warning'
import LoadingIndicator from '@/components/global/LoadingIndicator'
import DefaultLayout from '@/components/layouts/DefaultLayout';


const Subject = () => {
    const router = useRouter()
    const [ subject, subjectError, subjectLoading ] = useGetSubject(router.query.subjectId)
    
    return (
        <DefaultLayout>
            { subjectLoading ? (<LoadingIndicator />) : 
                subjectError ? (<Warning text={subjectError.message} className={styles.errorAlert}/>) : 
                    (
                        <>
                            <h1>{subject.title}</h1>
                            <p>Subject Description: {subject.body}</p>
                            <p>Subject ID: {subject.id}</p>
                        </>
                    ) 
            }
        </DefaultLayout>
    );
};

export default Subject;
