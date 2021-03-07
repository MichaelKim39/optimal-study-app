import auth0 from '@/utils/auth0';

import TopicsAPI from '@/libs/api/topicsAPI';
import { log } from '@/utils/logger';

const handleDeleteTopic = async (req, res) => {
    try {
        const { accessToken: jwt } = await auth0.getSession(req);
        const response = await new TopicsAPI(jwt).deleteTopic(
            req.body.subjectId,
            req.query.topicId,
        );
        return res.json(response.data);
    } catch (error) {
        log('ERROR WHILE DELETING TOPIC: ', error.response.data);
        return res.status(error.status || 422).json(error.response.data);
    }
};

export default async function handleTopicRequest(req, res) {
    switch (req.method) {
        case 'DELETE':
            await handleDeleteTopic(req, res);
            break;
        default:
            log('ERROR - REQUEST METHOD NOT RECOGNISED!');
    }
}
