import axios from 'axios';

import { log } from '@/utils/logger';

class SubjectsAPI {
    constructor(jwt) {
        this.subjectsApiUrl = `${process.env.API_BASE_URL}/subjects`;

        this.config = {};
        if (!!jwt) {
            this.config.headers = {
                authorization: `Bearer ${jwt}`,
            };
        }
    }

    getSubjects() {
        return axios.get(this.subjectsApiUrl, this.config);
    }

    getSubject(subjectId) {
        return axios.get(`${this.subjectsApiUrl}/${subjectId}`);
    }

    addSubject(subject) {
        return axios.post(`${this.subjectsApiUrl}`, subject, this.config);
    }

    saveSubjectCopy(subjectCopy) {
        return axios.post(`${this.subjectsApiUrl}/save`, subjectCopy, this.config);
    }

    editSubject(subjectId, newSubject) {
        return axios.patch(
            `${this.subjectsApiUrl}/${subjectId}`,
            newSubject,
            this.config,
        );
    }

    deleteSubject(subjectId) {
        return axios.delete(`${this.subjectsApiUrl}/${subjectId}`, this.config);
    }

    searchSubjects(query) {
        return axios.get(
            `${process.env.API_BASE_URL}/search/${query}`,
            this.config,
        );
    }
}

export default SubjectsAPI;
