import Student from "../models/Student";
import Quiz from "../models/Quiz";

/**
 * The interface that all quiz data sources will adhere to
 */
export default interface IHandleQuizData {
  findQuiz: (id: string) => Promise<Quiz | null>;
  deleteQuiz: (id: string) => Promise<boolean | null>;
  findAllQuizzes: () => Promise<Quiz[] | null>;
  checkQuesAns: (subject: string , question: string , userAns: string) => Promise<boolean>;
}
