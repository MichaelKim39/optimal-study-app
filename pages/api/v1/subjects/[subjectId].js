import auth0 from '@/utils/auth0';

import SubjectsAPI from '../../../../libs/api/subjectsAPI';
// import SubjectsAPI from '@/libs/api/subjectsAPI';
import { log } from '@/utils/logger';

// Comment to test deployment

const handleGetSubject = async (req, res) => {
    try {
        const response = await new SubjectsAPI().getSubject(
            req.query.subjectId,
        );
        return res.json(response.data);
    } catch (error) {
        log('Error while getting subject', error.response);
    }
};

const handlePatchSubject = async (req, res) => {
    try {
        const { accessToken: jwt } = await auth0.getSession(req);
        const response = await new SubjectsAPI(jwt).editSubject(
            req.query.subjectId,
            req.body,
        );
        // log('SUCCESSFULLY EDITED SUBJECT!');
        return res.json(response.data);
    } catch (error) {
        log('ERROR WHILE EDITING SUBJECT: ', error.response.data);
        return res.status(error.status || 422).json(error.response.data);
    }
};

const handleDeleteSubject = async (req, res) => {
    try {
        const { accessToken: jwt } = await auth0.getSession(req);
        const response = await new SubjectsAPI(jwt).deleteSubject(
            req.query.subjectId,
        );
        return res.json(response.data);
    } catch (error) {
        log('ERROR WHILE DELETING SUBJECT: ', error.response.data);
        return res.status(error.status || 422).json(error.response.data);
    }
};

export default async function handleSubjectRequest(req, res) {
    switch (req.method) {
        case 'GET':
            await handleGetSubject(req, res);
            break;
        case 'PATCH':
            await handlePatchSubject(req, res);
            break;
        case 'DELETE':
            await handleDeleteSubject(req, res);
            break;
        default:
            log('ERROR - REQUEST METHOD NOT RECOGNISED!');
    }
}
