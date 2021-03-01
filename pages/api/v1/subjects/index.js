import SubjectsAPI from '@/libs/api/subjectsAPI';

import auth0 from '@/utils/auth0';
import { log } from '@/utils/logger';

export default async function addSubject(req, res) {
    try {
        const { accessToken: jwt } = await auth0.getSession(req);

        const subject = req.body;
        const subjectsAPI = new SubjectsAPI(jwt);
        await subjectsAPI.addSubject(subject);

        return res.json({ message: 'Subject added successfully!' });
    } catch (error) {
        res.status(error.status || 400).json(error.response.data);
    }
}
