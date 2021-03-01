import SubjectsAPI from '@/libs/api/subjectsAPI';

export default async function getSubject(req, res) {
    try {
        const response = await new SubjectsAPI().getSubject(
            req.query.subjectId,
        );
        return res.json(response.data);
    } catch (error) {
        console.log('Error while getting subject', error.response);
    }
}
