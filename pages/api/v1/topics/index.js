import TopicsAPI from '@/libs/api/topicsAPI';

import auth0 from '@/utils/auth0';
import { log } from '@/utils/logger';

export default async function addTopic(req, res) {
    try {
        const { accessToken: jwt } = await auth0.getSession(req);
        const { subjectId, topic } = req.body;

        const topicsAPI = new TopicsAPI(jwt);
        await topicsAPI.addTopic(subjectId, topic);

        return res.json({ message: 'Subject added successfully!' });
    } catch (error) {
        res.status(error.status || 400).json(error.response.data);
    }
}
