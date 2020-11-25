import { data } from '@/data';

function getSubjects(req, res) {
    res.status(200).json(data);
}

export default getSubjects;
