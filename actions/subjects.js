import axios from 'axios';

export function addSubject(subject) {
    return axios.post(`/api/v1/subjects`, subject);
}
