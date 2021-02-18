import axios from 'axios';

class SubjectsAPI {
    getSubjects() {
        return axios.get(`${process.env.API_BASE_URL}/subjects`);
    }
}

export default SubjectsAPI;
