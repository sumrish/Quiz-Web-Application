import Student from "../models/Student";
import Quiz from "../../business/models/Quiz";

/**
 * The interface that all quiz data sources will adhere to
 */
export default interface IGetUserData {
  findQuizzesTakenByUser: (name: string) => Promise<Quiz[] | null>;
  findUser: (email: string) => Promise<Student | null>;
  addUser: (
    name: string,
    email: string,
    password: string,
    role: string
  ) => Promise<Student | null>;
  getAuthorizedUser: (
    email: string,
    password: string
  ) => Promise<Student | null>;
}
