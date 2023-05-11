import MongoQuizData from "../../../src/data/dbconnection";

export default async (req, res) => {
    try {
        var qd = new MongoQuizData();
        const addMarks = await qd.addMarks(req.body.email , req.body.subject, req.body.marks)
        res.status(200).json(addMarks);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
}