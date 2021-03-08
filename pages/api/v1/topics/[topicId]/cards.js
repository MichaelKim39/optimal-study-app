import auth0 from '@/utils/auth0';

import TopicsAPI from '@/libs/api/topicsAPI';
import { log } from '@/utils/logger';

const handleAddCard = async (req, res) => {
    try {
        const {
            query: { topicId },
            body: { subjectId, newCard },
        } = req;

        const { accessToken: jwt } = await auth0.getSession(req);
        const response = await new TopicsAPI(jwt).addTopicCard(
            subjectId,
            topicId,
            newCard,
        );
        return res.json(response.data);
    } catch (error) {
        log('ERROR WHILE ADDING TOPIC CARD: ', error.response.data);
        return res.status(error.status || 422).json(error.response.data);
    }
};

const handleEditCard = async (req, res) => {
    try {
        const {
            query: { topicId },
            body: { subjectId, cardId, newCard },
        } = req;

        const { accessToken: jwt } = await auth0.getSession(req);
        const response = await new TopicsAPI(jwt).editTopicCard(
            subjectId,
            topicId,
            cardId,
            newCard,
        );
        return res.json(response.data);
    } catch (error) {
        log('ERROR WHILE ADDING TOPIC CARD: ', error.response.data);
        return res.status(error.status || 422).json(error.response.data);
    }
};

const handleGetCard = async (req, res) => {
    try {
        const {
            query: { topicId },
            body: { subjectId, cardId },
        } = req;

        const { accessToken: jwt } = await auth0.getSession(req);
        const response = await new TopicsAPI(jwt).getTopicCard(
            subjectId,
            topicId,
            cardId,
        );
        return res.json(response.data);
    } catch (error) {
        log('ERROR WHILE GETTING TOPIC CARD: ', error.response.data);
        return res.status(error.status || 422).json(error.response.data);
    }
};

export default async function handleTopicRequest(req, res) {
    switch (req.method) {
        case 'POST':
            await handleAddCard(req, res);
            break;
        case 'PATCH':
            await handleEditCard(req, res);
            break;
        case 'PUT':
            await handleGetCard(req, res);
            break;
        default:
            log('ERROR - REQUEST METHOD NOT RECOGNISED!');
    }
}
