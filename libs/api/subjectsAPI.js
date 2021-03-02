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
        return axios.get(this.subjectsApiUrl);
    }

    getSubject(subjectId) {
        return axios.get(`${this.subjectsApiUrl}/${subjectId}`);
    }

    addSubject(subject) {
        return axios.post(`${this.subjectsApiUrl}`, subject, this.config);
    }
}

export default SubjectsAPI;
