import auth0 from '@/utils/auth0';

import SubjectsAPI from '@/libs/api/subjectsAPI';
import { log } from '@/utils/logger';

const handleSearchSubjects = async (req, res) => {
    const { query } = req.query;
    try {
        const { accessToken: jwt } = await auth0.getSession(req);
        const response = await new SubjectsAPI(jwt).searchSubjects(query);
        return res.json(response.data);
    } catch (error) {
        log('ERROR WHILE SEARCHING FOR SUBJECTS: ', error.response.data);
        return res.status(error.status || 422).json(error.response.data);
    }
};

export default async function handleSearchRequest(req, res) {
    handleSearchSubjects(req, res);
}
