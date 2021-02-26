import axios from 'axios';

class TopicsAPI {
    constructor() {
        this.topicsApiUrl = `${process.env.API_BASE_URL}/topics`;
    }

    getTopic() {
        return axios.get(this.topicsApiUrl);
    }
}

export default SubjectsAPI;
