import auth0 from '@/utils/auth0';

import SubjectsAPI from '@/libs/api/subjectsAPI';
import { log } from '@/utils/logger';

const handleSaveSubjectCopy = async (req, res) => {
    try {
        const subjectCopy = req.body
        const { accessToken: jwt } = await auth0.getSession(req);

        const response = await new SubjectsAPI(jwt).saveSubjectCopy(
            subjectCopy
        );
        return res.json(response.data);
    } catch (error) {
        log('ERROR WHILE SAVING SUBJECT COPY: ', error.response.data);
        return res.status(error.status || 422).json(error.response.data);
    }
};

export default async function handleSubjectRequest(req, res) {
    switch (req.method) {
        case 'POST':
            await handleSaveSubjectCopy(req, res);
            break;
        default:
            log('ERROR - REQUEST METHOD NOT RECOGNISED!');
    }
}
