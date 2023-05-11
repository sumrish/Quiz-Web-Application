import { QuizDataServiceInstance } from "../../../src/business/services/dbservice";

export default async (req, res) => {
  try {
    await QuizDataServiceInstance.deleteQuiz(req.body.subject); // Getting the subject name from frontend and passing it to the datalayer for deletion.
    await QuizDataServiceInstance.unlinkQuestionFromQuiz(req.body.subject); // Getting the subject name from frontend and passing it to the datalayer to set the questions subjects to null.
    res.status(200).json(); // Upon success giving the status 200 for the UI to update.
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
