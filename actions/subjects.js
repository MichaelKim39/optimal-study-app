import React, { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';

import { log } from '@/utils/logger';
import { useReqStatus, handleFetchData } from '@/actions';

// ADD SUBJECT
export const addSubject = async (subject) => {
    return axios.post(`/api/v1/subjects`, subject);
};
export const useAddSubject = () => {
    return useReqStatus(addSubject);
};

// SAVE SUBJECT
export const saveSubjectCopy = async (subject) => {
    return axios.post(`/api/v1/subjects/save`, subject);
};
export const useSaveSubjectCopy = () => {
    return useReqStatus(saveSubjectCopy);
};

// EDIT SUBJECT
export const editSubject = (subjectId, newSubject) => {
    return axios.patch(`/api/v1/subjects/${subjectId}`, newSubject);
};
export const useEditSubject = () => {
    return useReqStatus(editSubject);
};

// DELETE SUBJECT
export const deleteSubject = (subjectId) => {
    return axios.delete(`/api/v1/subjects/${subjectId}`);
};
export const useDeleteSubject = () => {
    return useReqStatus(deleteSubject);
};

// SEARCH SUBJECT
export const searchSubjects = (query) => {
    return axios.get(`/api/v1/search/${query}`);
};
export const useSearchSubjects = () => {
    return useReqStatus(searchSubjects);
};

// GET SUBJECT
export const useGetSubject = (subjectId) => {
    const { data, error } = useSWR(
        subjectId ? `/api/v1/subjects/${subjectId}` : null,
        handleFetchData,
    );
    const loading = !data && !error;

    return [data, error, loading];
};
