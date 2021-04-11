import axios from 'axios';

import { log } from '@/utils/logger';

class ImageAPI {
    constructor(jwt) {
        this.imagesApiUrl = `${process.env.API_BASE_URL}/image`;

        this.config = {};
        if (!!jwt) {
            this.config.headers = {
                authorization: `Bearer ${jwt}`,
            };
        }
    }

    uploadImage(image) {
        return axios.post(`${this.imagesApiUrl}/upload`, image);
    }
}

export default ImageAPI;
