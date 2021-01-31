import auth0 from '@/utils/auth0'

const me = async (req, res) => {
    try {
        await auth0.handleProfile(req, res, { redirectTo: '/'})
    } catch (error) {
        res.status(error.status || 400).end(error.message)
    }
}

export default me