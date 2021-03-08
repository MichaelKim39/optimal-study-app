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

// EDIT NOTES
export const editTopicNotes = (subjectId, topicId, newNotes) => {
    return axios.patch(`/api/v1/topics/${topicId}/notes`, {
        subjectId,
        newNotes,
    });
};

// ADD CARD
export const addCard = (subjectId, topicId, newCard) => {
    return axios.post(`/api/v1/topics/${topicId}/cards`, {
        subjectId,
        newCard,
    });
};
export const useAddCard = () => {
    return useReqStatus(addCard);
};

// EDIT CARD
export const editCard = (subjectId, topicId, cardId, newCard) => {
    return axios.patch(`/api/v1/topics/${topicId}/cards`, {
        subjectId,
        cardId,
        newCard,
    });
};
export const useEditCard = () => {
    return useReqStatus(editCard);
};

// GET CARD
// PUT request used because http implementation means we cannot send GET request with bodies
export const getCard = (subjectId, topicId, cardId) => {
    return axios.put(`/api/v1/topics/${topicId}/cards`, {
        subjectId,
        cardId,
    });
};
export const useGetCard = () => {
    return useReqStatus(getCard);
};

// DELETE CARD
export const deleteCard = (subjectId, topicId, cardId) => {
    return axios.delete(`/api/v1/topics/${topicId}`, { subjectId, cardId });
};
export const useDeleteCard = () => {
    return useReqStatus(deleteCard);
};
