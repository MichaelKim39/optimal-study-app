import auth0 from '@/utils/auth0'

import { log } from '@/utils/logger'

const signout = async (req, res) => {
    try {
        await auth0.handleLogout(req, res)
    } catch (error) {
        log("Error during signout: ", error)
        res.status(error.status || 400).end(error.message)
    }
}

export default signout