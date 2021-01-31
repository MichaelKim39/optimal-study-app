import useSWR from 'swr'
import { log } from '@/utils/logger';

export const handleFetchData = (url) => 
    fetch(url).then(async res => {
        // Response = data || error
        const response = await res.json()
        if (res.status !== 200) {
            return Promise.reject(response)
        } else {
            return response
        }
    })

export const useGetData = (url) => {
    const { data, error } = useSWR(url, handleFetchData)
    const isLoading = !data && !error
    return [ data, error, isLoading ]
}

export const useGetSubjects = () => {
    const { data, error, isValidating } = useSWR('/api/v1/subjects', handleFetchData)
    return [ data, error, isValidating ]
}

export const useGetSubject = (subjectId) => {
    // useSWR does not fetch data if first parameter is null
    const { data, error } = useSWR(subjectId ? `/api/v1/subjects/${subjectId}` : null, handleFetchData)
    const loading = !data && !error
    return [ data, error, loading ]
}