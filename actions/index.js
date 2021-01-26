import useSWR from 'swr'
import { log } from '@/utils/logger';

const handleFetchData = (url) => {
    fetch(url).then(async res => {
        // Response = data || error
        const response = await res.json()
        if (res.status !== 200) {
            return Promise.reject(response)
        } else {
            return response
        }
    })
}

export const useGetSubjects = () => {
    const { data, error, ...rest } = useSWR('/api/v1/subjects', handleFetchData)
    return { data, error, loading: !data && !error, ...rest}
}

export const useGetSubject = (subjectId) => {
    const { data, error } = useSWR(subjectId ? `/api/v1/subjects/${subjectId}` : null, handleFetchData)
    const loading = !data && !error
    return [ data, error, loading ]
}