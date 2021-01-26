import axios from 'axios';

import { log } from '@/utils/logger';

const getSubject = async (req, res) => {
    try {
        const axiosResponse = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${req.query.subjectId}`,
            );
            const subject = axiosResponse.data;
            res.status(200).json(subject);
        } catch (error) {
        log(error);
        res.status(error.status || 400).json({
            message: 'Error during GET subject by Id',
        });
    }
};

export default getSubject;
