/**
 * @fileOverview Container class that makes the db calls for all possible quiz data operations supported by the interfaces it implements * 
 * @module QuizDataService
 * @requires MongoQuizData
 * @requires IHandleQuizData
 * @requires IGetQuestionData
 * @requires IGetUserData
 * @requires ObjectId
 */

import MongoQuizData from "../../../src/data/dbconnection";
import IHandleQuizData from "../../business/interfaces/IHandleQuizData";
import IGetQuestionData from "../../business/interfaces/IGetQuestionData";
import IGetUserData from "../../business/interfaces/IGetUserData";
import { ObjectId } from "mongodb";

/**
 * Container class that makes the db calls for all possible quiz data operations supported by the interfaces it implements
 * @class
 * @implements IHandleQuizData
 * @implements IGetQuestionData
 * @implements IGetUserData
 */

class QuizDataService
  implements IHandleQuizData, IGetQuestionData, IGetUserData {
  private _instance: QuizDataService;
  private _mongoQuizData: MongoQuizData;
  constructor() {
    this._mongoQuizData = new MongoQuizData();
  }
  get instance(): QuizDataService {
    return this._instance;
  }
  set instance(i: QuizDataService) {
    this._instance = i;
  }

  static getSingleton(): QuizDataService {
    if (!QuizDataService.prototype.instance) {
      QuizDataService.prototype.instance = new QuizDataService();
    }
    return QuizDataService.prototype.instance;
  }

  public async findQuiz(id: string) {
    return this._mongoQuizData.findQuiz(id);
  }

  public async deleteQuiz(subject: string) {
    return this._mongoQuizData.deleteQuiz(subject);
  }

  async findAllQuizzes() {
    return this._mongoQuizData.findAllQuizzes();
  }

  public async findAllQuizzesWithQuizTakersCount() {
    return this._mongoQuizData.findAllQuizzesWithQuizTakersCount();
  }

  async findQuizzesTakenByUser(name: string) {
    return this._mongoQuizData.findQuizzesTakenByUser(name);
  }

  async findQuestion(qid: number) {
    return this._mongoQuizData.findQuestion(qid);
  }

  async unlinkQuestionFromQuiz(subject: string) {
    return this._mongoQuizData.unlinkQuestionFromQuiz(subject);
  }

  async findQuestionListOfAQuiz(subject: string) {
    return this._mongoQuizData.findQuestionListOfAQuiz(subject);
  }

  async findQuestionAnswer(qid: number) {
    return this._mongoQuizData.findQuestionAnswer(qid);
  }

  async findQuestionType(qid: number) {
    return this._mongoQuizData.findQuestionType(qid);
  }

  async findUser(email: string) {
    return this._mongoQuizData.findUser(email);
  }

  async addUser(name: string, email: string, password: string, role: string) {
    return this._mongoQuizData.addUser(name, email, password, role);
  }

  async checkQuesAns(subject: string, question: string, userAns: string) {
    return this._mongoQuizData.checkQuesAns(subject, question, userAns);
  }

  async getAuthorizedUser(email: string, password: string) {
    return this._mongoQuizData.getAuthorizedUser(email, password);
  }

  async resetUserMarks(email: string, subject: string, marks: number) {
    return this._mongoQuizData.resetUserMarks(email, subject, marks);
  }
}

/**
 QuizDataServiceInstance is the singleton object of the QuizDataService class that is exported and made available to callers. 
 It exists to ensure the callers don't inadvertently make n objects for the sake of n db calls
 */

export const QuizDataServiceInstance = QuizDataService.getSingleton();
