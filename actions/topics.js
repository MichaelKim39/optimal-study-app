import React from 'react';
import axios from 'axios';
import useSWR from 'swr';

import { log } from '@/utils/logger';
import { useReqStatus, handleFetchData } from '@/actions';

// ADD TOPIC
export const addTopic = (subjectId, topic) => {
    return axios.post(`/api/v1/topics`, { subjectId, topic });
};
export const useAddTopic = () => {
    return useReqStatus(addTopic);
};

// DELETE TOPIC
export const deleteTopic = (subjectId, topicId) => {
    return axios.delete(`/api/v1/topics/${topicId}`, { subjectId });
};
export const useDeleteTopic = () => {
    return useReqStatus(deleteTopic);
};
