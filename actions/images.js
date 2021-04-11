import auth0 from '@/utils/auth0';

import ImageAPI from '@/libs/api/imageAPI';
import { log } from '@/utils/logger';

const handleUploadImage = async (req, res) => {
    log('FROM API/V1/IMAGES: ', req.body);
    try {
        const response = await new ImageAPI().uploadImage(req.body);
        return res.json(response.data);
    } catch (error) {
        log('ERROR WHILE UPLOADING IMAGE: ', error.response.data);
        return res.status(error.status || 422).json(error.response.data);
    }
};

export default async function handleTopicRequest(req, res) {
    switch (req.method) {
        case 'POST':
            await handleUploadImage(req, res);
            break;
        default:
            log('ERROR - REQUEST METHOD NOT RECOGNISED!');
    }
}
