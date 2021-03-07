import auth0 from '@/utils/auth0';

import TopicsAPI from '@/libs/api/topicsAPI';
import { log } from '@/utils/logger';

export default async function handleEditTopic(req, res) {
    try {
        const {
            body: { newNotes, subjectId },
            query: { topicId },
        } = req;
        const { accessToken: jwt } = await auth0.getSession(req);
        const response = await new TopicsAPI(jwt).editTopicNotes(
            subjectId,
            topicId,
            newNotes,
        );
        return res.json(response.data);
    } catch (error) {
        log('ERROR WHILE EDITING TOPIC NOTES: ', error.response.data);
        return res.status(error.status || 422).json(error.response.data);
    }
}
