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
