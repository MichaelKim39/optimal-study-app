import auth0 from '@/utils/auth0';

import TopicsAPI from '@/libs/api/topicsAPI';
import { log } from '@/utils/logger';

const handleUpdateNextReview = async (req, res) => {
    try {
        const {
            query: { topicId },
            body: { subjectId },
        } = req;
        const { accessToken: jwt } = await auth0.getSession(req);

        const response = await new TopicsAPI(jwt).updateNextReview(
            subjectId,
            topicId,
        );
        return res.json(response.data);
    } catch (error) {
        log('ERROR WHILE UPDATING TOPIC NEXT REVIEW: ', error.response.data);
        return res.status(error.status || 422).json(error.response.data);
    }
};

export default async function handleTopicRequest(req, res) {
    switch (req.method) {
        case 'PATCH':
            await handleUpdateNextReview(req, res);
            break;
        default:
            log('ERROR - REQUEST METHOD NOT RECOGNISED!');
    }
}
