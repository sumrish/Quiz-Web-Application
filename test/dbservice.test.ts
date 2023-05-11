import * as sinon from "sinon";
import * as chai from "chai";
import * as sinonChai from "sinon-chai";
const { expect } = chai;

import MongoQuizData from "../src/data/dbconnection";
import { QuizDataServiceInstance } from "../src/business/services/dbservice";
import Quiz, { AdminQuizList, UserQuiz } from "../src/business/models/Quiz";
import Student from "../src/business/models/Student";
import Question from "../src/business/models/question";

chai.use(sinonChai);

// // configure Sinon to work with Mocha
// sinon.defaultConfig = { ...sinon.defaultConfig, useFakeTimers: false };
// sinon.assert.expose(expect, { prefix: "" });

describe("QuizDataServiceInstance", () => {
  let mongoQuizDataStub: sinon.SinonStubbedInstance<MongoQuizData>;

  beforeEach(() => {
    // Create a stub for the MongoQuizData class methods
    mongoQuizDataStub = sinon.createStubInstance(MongoQuizData);

    QuizDataServiceInstance["_mongoQuizData"] = mongoQuizDataStub; // use a private accessor to assign the stub instance
  });

  describe("findQuiz", () => {
    it("should call findQuiz with the correct ID", async () => {
      const id = "Math";
      const expectedResult = { name: "Quiz1", subject: "Math" } as Quiz;

      // Stub the findQuiz method and return a predefined result
      mongoQuizDataStub.findQuiz.resolves(expectedResult);

      // Call the method under test
      const result = await QuizDataServiceInstance.findQuiz(id);

      // Assert that the findQuiz method was called once with the expected argument
      expect(mongoQuizDataStub.findQuiz).to.have.been.calledWithExactly(id);

      // Assert that the result of the method call is equal to the predefined result
      expect(result).to.deep.equal(expectedResult);
    });
  });

  describe("deleteQuiz", () => {
    it("should call deleteQuiz with the correct subject", async () => {
      // Stub the deleteQuiz method and return a predefined result
      mongoQuizDataStub.deleteQuiz.resolves();

      const subject = "test";
      await QuizDataServiceInstance.deleteQuiz(subject);

      expect(mongoQuizDataStub.deleteQuiz.calledWith(subject)).to.be.true;
    });
  });

  describe("findAllQuizzes", () => {
    it("should call findAllQuizzes", async () => {
      const mockResult = [
        { name: "Quiz1", subject: "Math" },
        { name: "Quiz2", subject: "Science" },
      ] as Array<Quiz>;

      // Stub the findAllQuizzes method and return a predefined result
      mongoQuizDataStub.findAllQuizzes.resolves(mockResult);

      await QuizDataServiceInstance.findAllQuizzes();
      expect(mongoQuizDataStub.findAllQuizzes.called).to.be.true;
    });
  });

  describe("findAllQuizzesWithQuizTakersCount", () => {
    it("should call findAllQuizzesWithQuizTakersCount", async () => {
      const mockResult = new Array<AdminQuizList>();

      // Stub the findAllQuizzes method and return a predefined result
      mongoQuizDataStub.findAllQuizzesWithQuizTakersCount.resolves(mockResult);

      await QuizDataServiceInstance.findAllQuizzesWithQuizTakersCount();

      expect(mongoQuizDataStub.findAllQuizzesWithQuizTakersCount.called).to.be
        .true;
    });
  });

  describe("findQuizzesTakenByUser", () => {
    it("should call findQuizzesTakenByUser with the correct name", async () => {
      const name = "John Doe";
      const mockResult = new Array<UserQuiz>();
      // Stub the findQuizzesTakenByUser method and return a predefined result
      mongoQuizDataStub.findQuizzesTakenByUser.resolves(mockResult);

      await QuizDataServiceInstance.findQuizzesTakenByUser(name);

      expect(mongoQuizDataStub.findQuizzesTakenByUser.calledWith(name)).to.be
        .true;
    });
  });

  describe("findQuestionListOfAQuiz", () => {
    it("should call findQuestionListOfAQuiz with the correct subject", async () => {
      const subject = "Math";
      const mockResult = new Array<Question>();
      // Stub the findQuestionListOfAQuiz method and return a predefined result
      mongoQuizDataStub.findQuestionListOfAQuiz.resolves(mockResult);

      await QuizDataServiceInstance.findQuestionListOfAQuiz(subject);

      expect(mongoQuizDataStub.findQuestionListOfAQuiz.calledWith(subject)).to.be
        .true;
    });
  });

  describe("findQuestion", () => {
    it("should call findQuestion with the correct qid", async () => {
      const qid = 123;
      const mockResult = {
        qid: 0,
        question: "string",
        answer: "string",
        subject: "string",
        type: "string",
      };
      // Stub the findQuestion method and return a predefined result
      mongoQuizDataStub.findQuestion.resolves(mockResult);

      await QuizDataServiceInstance.findQuestion(qid);

      expect(mongoQuizDataStub.findQuestion.calledWith(qid)).to.be.true;
    });
  });

  describe("unlinkQuestionFromQuiz", () => {
    it("should call unlinkQuestionFromQuiz", async () => {
      const subject: string = "Math";
      // Stub the unlinkQuestionFromQuiz method and return a predefined result
      mongoQuizDataStub.unlinkQuestionFromQuiz.resolves();

      await QuizDataServiceInstance.unlinkQuestionFromQuiz(subject);

      expect(mongoQuizDataStub.unlinkQuestionFromQuiz.calledWith(subject)).to.be
        .true;
    });
  });

  describe("findQuestionAnswer", () => {
    it("should call findQuestionAnswer with the correct qid", async () => {
      const qid = 123;
      const mockResult = "answer";
      // Stub the findQuestion method and return a predefined result
      mongoQuizDataStub.findQuestionAnswer.resolves(mockResult);

      await QuizDataServiceInstance.findQuestionAnswer(qid);

      expect(mongoQuizDataStub.findQuestionAnswer.calledWith(qid)).to.be.true;
    });
  });

  describe("findQuestionType", () => {
    it("should call findQuestionType with the correct qid", async () => {
      const qid = 123;
      const mockResult = "type";
      // Stub the findQuestion method and return a predefined result
      mongoQuizDataStub.findQuestionType.resolves(mockResult);

      await QuizDataServiceInstance.findQuestionType(qid);

      expect(mongoQuizDataStub.findQuestionType.calledWith(qid)).to.be.true;
    });
  });

  describe("findUser", () => {
    it("should call findUser with the correct email", async () => {
      const email = "adi@adi.com";
      const mockResult = {
        name: "string",
        email: "string",
        password: "string",
        role: "string",
        quizzes: [{ subject: "string", marks: 0 }],
      } as Student;
      // Stub the findQuestion method and return a predefined result
      mongoQuizDataStub.findUser.resolves(mockResult);

      await QuizDataServiceInstance.findUser(email);

      expect(mongoQuizDataStub.findUser.calledWith(email)).to.be.true;
    });
  });

  describe("addUser", () => {
    it("should call addUser with the correct args", async () => {
      const email = "adi@adi.com";
      const name = "testUser";
      const password = "testpassword";
      const role = "student";

      const mockResult = {
        name: "string",
        email: "string",
        password: "string",
        role: "string",
        quizzes: [{ subject: "string", marks: 0 }],
      } as Student;
      // Stub the addUser method and return a predefined result
      mongoQuizDataStub.addUser.resolves(mockResult);

      await QuizDataServiceInstance.addUser(name, email, password, role);

      expect(mongoQuizDataStub.addUser.calledWith(name, email, password, role))
        .to.be.true;
    });
  });

  describe("checkQuesAns", () => {
    it("should call checkQuesAns with the correct email", async () => {
      const subject = "Math";
      const question = "question";
      const userAns = "userAnswer";

      const mockResult = true;
      // Stub the checkQuesAns method and return a predefined result
      mongoQuizDataStub.checkQuesAns.resolves(mockResult);

      await QuizDataServiceInstance.checkQuesAns(subject, question, userAns);

      expect(
        mongoQuizDataStub.checkQuesAns.calledWith(subject, question, userAns)
      ).to.be.true;
    });
  });

  describe("resetUserMarks", () => {
    it("should call resetUserMarks with the correct email, subject, and marks", async () => {
      // Stub the resetUserMarks method and return a predefined result
      mongoQuizDataStub.resetUserMarks.resolves();

      const email = "test@mun.ca"
      const subject = "test";
      const marks = 0;
      await QuizDataServiceInstance.resetUserMarks(email,subject,marks);

      expect(mongoQuizDataStub.resetUserMarks.calledWith(email,subject,marks)).to.be.true;
    });
  });

  describe("getAuthorizedUser", () => {
    it("should call getAuthorizedUser with the correct email and password", async () => {
      const email = "adi@adi.com";
      const password = "testpassword";

      const mockResult = {
        name: "string",
        email: "string",
        password: "string",
        role: "string",
        quizzes: [{ subject: "string", marks: 0 }],
      } as Student;
      // Stub the getAuthorizedUser method and return a predefined result
      mongoQuizDataStub.getAuthorizedUser.resolves(mockResult);

      await QuizDataServiceInstance.getAuthorizedUser(email, password);

      expect(mongoQuizDataStub.getAuthorizedUser.calledWith(email, password)).to
        .be.true;
    });
  });
});
