import auth0 from '@/utils/auth0'

import { log } from '@/utils/logger'

const signin = async (req, res) => {
    try {
        await auth0.handleLogin(req, res)
    } catch (error) {
        log("Error during signin: ", error)
        res.status(error.status || 400).end(error.message)
    }
}

export default signin