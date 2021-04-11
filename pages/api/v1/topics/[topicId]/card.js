import auth0 from '@/utils/auth0';

import TopicsAPI from '@/libs/api/topicsAPI';
import { log } from '@/utils/logger';

const handleUpdateCardBucket = async (req, res) => {
    try {
        const {
            query: { topicId },
            body: { subjectId, cardId, increment },
        } = req;
        const { accessToken: jwt } = await auth0.getSession(req);

        const response = await new TopicsAPI(jwt).updateCardBucket(
            subjectId,
            topicId,
            cardId,
            increment,
        );
        return res.json(response.data);
    } catch (error) {
        log('ERROR WHILE UPDATING CARD BUCKET: ', error.response.data);
        return res.status(error.status || 422).json(error.response.data);
    }
};

export default async function handleTopicRequest(req, res) {
    switch (req.method) {
        case 'PATCH':
            await handleUpdateCardBucket(req, res);
            break;
        default:
            log('ERROR - REQUEST METHOD NOT RECOGNISED!');
    }
}
