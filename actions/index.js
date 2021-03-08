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
    defaultErrorMessage = 'Error During API Request',
) => {
    const INIT_STATUS = {
        loading: true,
        data: null,
        error: null,
    };
    const [reqStatus, setReqStatus] = useState(INIT_STATUS);
    const handleRequest = async (...inputData) => {
        setReqStatus(INIT_STATUS);
        try {
            const response = await apiRequest(...inputData);
            setReqStatus({
                loading: false,
                data: response.data,
                error: null,
            });
            return response.data;
        } catch (error) {
            log('Error during API request:', error);
            const errorMessage = error.response?.data || defaultErrorMessage;
            setReqStatus({
                loading: false,
                data: null,
                error: errorMessage,
            });
            return Promise.reject(errorMessage);
        }
    };

    return [handleRequest, reqStatus];
};
