import axios from 'axios';

class SubjectsAPI {
    constructor() {
        this.subjectsApiUrl = `${process.env.API_BASE_URL}/subjects`;
    }

    getSubjects() {
        return axios.get(this.subjectsApiUrl);
    }

    getSubject(subjectId) {
        return axios.get(`${this.subjectsApiUrl}/${subjectId}`);
    }
}

export default SubjectsAPI;
