/**
 * The interface that all question data sources will adhere to
 */

import IQuestion from "../models/IQuestion";
import Question from "../models/question";


export default interface IGetQuestionData {
    findQuestion: (qid: number) => Promise<IQuestion | null>;
    unlinkQuestionFromQuiz: (subject: string) => Promise<IQuestion | null>;
    findQuestionType: (qid: number) => Promise<string | null>;
    findQuestionAnswer:(qid:number)=> Promise<string | null>; 
    findQuestionListOfAQuiz: (subject:string) => Promise<Question[] | null>;
     }
  