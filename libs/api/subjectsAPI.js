import axios from 'axios';

class SubjectsAPI {
    getSubjects() {
        return axios.get('http://localhost:3001/api/v1/subjects');
    }
}

export default SubjectsAPI;
