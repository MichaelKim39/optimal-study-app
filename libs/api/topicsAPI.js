import axios from 'axios';

import { log } from '@/utils/logger';

class TopicsAPI {
    constructor(jwt) {
        this.subjectsApiUrl = `${process.env.API_BASE_URL}/subjects`;

        this.config = {};
        if (!!jwt) {
            this.config.headers = {
                authorization: `Bearer ${jwt}`,
            };
        }
    }

    getTopic(subjectId, topicId) {
        return axios.get(`${this.subjectsApiUrl}/${subjectId}/${topicId}`);
    }

    deleteTopic(subjectId, topicId) {
        return axios.delete(
            `${this.subjectsApiUrl}/${subjectId}/${topicId}`,
            this.config,
        );
    }

    addTopic(subjectId, topic) {
        return axios.post(
            `${this.subjectsApiUrl}/${subjectId}/topics`,
            topic,
            this.config,
        );
    }

    editTopicNotes(subjectId, topicId, newNotes) {
        return axios.patch(
            `${this.subjectsApiUrl}/${subjectId}/${topicId}/notes`,
            newNotes,
            this.config,
        );
    }

    addTopicCard(subjectId, topicId, newCard) {
        return axios.post(
            `${this.subjectsApiUrl}/${subjectId}/${topicId}/cards`,
            newCard,
            this.config,
        );
    }

    editTopicCard(subjectId, topicId, cardId, newCard) {
        return axios.patch(
            `${this.subjectsApiUrl}/${subjectId}/${topicId}/cards`,
            { cardId, newCard },
            this.config,
        );
    }

    updateCardBucket(subjectId, topicId, cardId, increment) {
        return axios.patch(
            `${this.subjectsApiUrl}/${subjectId}/${topicId}/card`,
            { cardId, increment },
            this.config,
        );
    }

    getTopicCard(subjectId, topicId, cardId, reqMethod) {
        return axios.put(
            `${this.subjectsApiUrl}/${subjectId}/${topicId}/cards`,
            { cardId, reqMethod },
            this.config,
        );
    }

    deleteTopicCard(subjectId, topicId, cardId, reqMethod) {
        return axios.put(
            `${this.subjectsApiUrl}/${subjectId}/${topicId}/cards`,
            { cardId, reqMethod },
            this.config,
        );
    }

    updateNextReview(subjectId, topicId) {
        return axios.patch(
            `${this.subjectsApiUrl}/${subjectId}/${topicId}/review`,
            this.config,
        );
    }

    toggleTopicActive(subjectId, topicId, setActive) {
        return axios.patch(
            `${this.subjectsApiUrl}/${subjectId}/${topicId}/active`,
            { setActive },
            this.config,
        );
    }
}

export default TopicsAPI;
