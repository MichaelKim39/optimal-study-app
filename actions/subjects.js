import React, { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';

import { useReqStatus, handleFetchData } from '@/actions';

export const addSubject = (subject) => {
    return axios.post(`/api/v1/subjects`, subject);
};

export const useAddSubject = () => {
    return useReqStatus(addSubject);
};

export const useGetSubject = (subjectId) => {
    const { data, error } = useSWR(
        subjectId ? `/api/v1/subjects/${subjectId}` : null,
        handleFetchData,
    );
    const loading = !data && !error;
    return [data, error, loading];
};
