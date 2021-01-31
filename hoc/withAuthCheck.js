import { useRouter } from 'next/router'

import { useGetMe } from '@/actions/user'

import LoadingIndicator from '@/components/global/LoadingIndicator'

const withAuthCheck = (Component) => {
    return ({ props }) => {
        const [ userInfo, userInfoError, userLoading ] = useGetMe()

        if (userLoading) {
            return <LoadingIndicator />
        } else if (!userInfo) {
            router.push('/api/v1/signin')
            return null
        } else {
            return <Component userInfo={userInfo} userLoading={userLoading} {...props} />
        }
    }
}