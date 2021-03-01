import React, { useState } from 'react';
import useSWR from 'swr';

import { log } from '@/utils/logger';

export const handleFetchData = (url) =>
    fetch(url).then(async (res) => {
        // Response = data || error
        const response = await res.json();
        if (res.status !== 200) {
            return Promise.reject(response);
        } else {
            return response;
        }
    });

export const useGetData = (url) => {
    const { data, error } = useSWR(url, handleFetchData);
    const isLoading = !data && !error;
    return [data, error, isLoading];
};

export const useReqStatus = (
    apiRequest,
    errorMessage = 'Error During API Request',
) => {
    const INIT_STATUS = {
        loading: true,
        data: null,
        error: null,
    };
    const [reqStatus, setReqStatus] = useState(INIT_STATUS);

    const handleRequest = async (inputData) => {
        setReqStatus(INIT_STATUS);
        try {
            const response = await apiRequest(inputData);
            setReqStatus({
                loading: false,
                data: response.data,
                error: null,
            });
        } catch (error) {
            log('Error during API request:', error);
            setReqStatus({
                loading: false,
                data: null,
                error: error.response?.data || errorMessage,
            });
        }
    };

    return [handleRequest, reqStatus];
};
