import SubjectsAPI from '@/libs/api/subjectsAPI';

export default async function addSubject(req, res) {
    try {
        const subject = req.body;
        const subjectsAPI = new SubjectsAPI();
        await subjectsAPI.addSubject(subject);
        return res.json({ message: 'Subject added successfully!' });
    } catch (error) {
        res.status(error.status || 400).end(error.message);
    }
}
