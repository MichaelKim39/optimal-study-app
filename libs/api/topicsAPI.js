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
}

export default TopicsAPI;
