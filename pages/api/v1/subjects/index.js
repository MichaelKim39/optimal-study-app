import axios from 'axios';

import { log } from '@/utils/logger';

const getSubjects = async (req, res) => {
    try {
        const axiosResponse = await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
        );
        const subjects = axiosResponse.data;
        res.status(200).json(subjects.slice(0, 10));
    } catch (error) {
        log(error);
        res.status(error.status || 400).json({
            message: 'Error during GET subjects',
        });
    }
};

export default getSubjects;
