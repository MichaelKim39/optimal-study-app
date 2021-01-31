import { useRouter } from 'next/router'

import { useGetMe } from '@/actions/user'

import LoadingIndicator from '@/components/global/LoadingIndicator'
import Navigate from  '@/components/global/Navigate'

const withAuthCheck = (Component) => {
    return ({ props }) => {
        const router = useRouter()
        const [ userInfo, userInfoError, userLoading ] = useGetMe()

        if (userLoading) {
            return <LoadingIndicator />
        } else if (!userInfo) {
            return <Navigate serverRender={true} route='/api/v1/signin'/>
        } else {
            return <Component userInfo={userInfo} userLoading={userLoading} {...props} />
        }
    }
}

export default withAuthCheck