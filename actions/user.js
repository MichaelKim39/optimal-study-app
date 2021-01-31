import useSWR from 'swr'

import { log } from '@/utils/logger';

import { useGetData, handleFetchData } from '@/actions'

export const useGetMe = () => {
    const { data, error } = useSWR('/api/v1/me', handleFetchData)
    const loading = !data && !error
    return [ data, error, loading ]
}