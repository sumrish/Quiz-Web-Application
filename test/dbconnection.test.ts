//REFERRED: https://github.com/cheesasaurus/example-typescript-and-mocha

import { MongoClient } from "mongodb";
import { MongoMemoryServer } from "mongodb-memory-server";
import MongoQuizData from "../src/data/dbconnection";
import { assert } from "chai"; // Using Assert style
import { expect } from "chai"; // Using Expect style
import { should } from "chai"; // Using Should style
var sinon = require("sinon");

describe("MongoQuizData", () => {
  let mongo;
  let uri;
  let client;
  let quizData;

  let sandbox = sinon.createSandbox();

  before(async () => {
    // Start an in-memory MongoDB server
    mongo = await MongoMemoryServer.create();
    uri = mongo.getUri();
    process.env.MONGODB_URI = "";
    console.log("URI FROM IN MEM MONGO: ", uri);
    sandbox.stub(process.env, "MONGODB_URI").value(uri);
    //"mongodb+srv://team_h:B8131nOFQ2jUyuZ2@quizzapp.mvgmqt5.mongodb.net/?retryWrites=true&w=majority";
    client = new MongoClient(uri);

    // Initialize the MongoQuizData instance
    quizData = new MongoQuizData();

    // Connect to the in-memory MongoDB server and populate the "quizzes" and "users" collections
    await client.connect();
    const db = client.db();
    await db.collection("quizes").insertMany([
      { name: "Quiz1", subject: "Math" },
      { name: "Quiz2", subject: "Science" },
    ]);
    await db.collection("users").insertOne({
      name: "John",
      lastname: "Doe",
      email: "john@example.com",
      password: "password",
      role: "student",
      quizzes: [
        { subject: "Math", marks: 80 },
        { subject: "Science", marks: 90 },
      ],
    });

    await db.collection("users").insertOne({
      name: "Jane",
      lastname: "Doe",
      email: "jane@example.com",
      password: "password",
      role: "student",
      quizzes: [
        { subject: "Math", marks: 80 },
      ],
    });
    await db.collection("questions").insertMany([
      {
        question: "What is the capital of Canada?",
        answer: "Ottawa",
        subject: "Geography",
        type: "SingleAnswer",
      },
      {
        question: "What is 10/2",
        answer: "5",
        subject: "IQ",
        type: "SingleAnswer",
      },
    ]);
  });

  after(async () => {
    // Close the client and stop the in-memory MongoDB server
    await client.close();
    await mongo.stop();
  });

  describe("findQuiz", () => {
    it("should return a quiz object when given a valid id", async () => {
      const quiz = await quizData.findQuiz("Math");
      expect(quiz.name).to.deep.equal("Quiz1");
      expect(quiz.subject).to.deep.equal("Math");
    });

    it("should return null when given an invalid id", async () => {
      const quiz = await quizData.findQuiz("InvalidSubject");
      expect(quiz).to.be.null;
    });
  });

  describe("findAllQuizzes", () => {
    it("should return an array of quiz objects", async () => {
      const quizzes = await quizData.findAllQuizzes();
      expect(quizzes).to.have.lengthOf(2);
      expect(quizzes[0].name).to.deep.equal("Quiz1");
      expect(quizzes[0].subject).to.deep.equal("Math");
      expect(quizzes[1].name).to.deep.equal("Quiz2");
      expect(quizzes[1].subject).to.deep.equal("Science");
    });
  });

  describe("findAllQuizzesWithQuizTakersCount", () => {
    it("should return the count of the subject", async () => {
      const quizzes = await quizData.findAllQuizzesWithQuizTakersCount();
      expect(quizzes).to.have.lengthOf(2);
      expect(quizzes[0].subject).to.deep.equal("Math");
      expect(quizzes[0].quizTakers).to.deep.equal(2);
      expect(quizzes[1].subject).to.deep.equal("Science");
      expect(quizzes[1].quizTakers).to.deep.equal(1);
    });
  });

  
  describe("findQuizzesTakenByUser", () => {
    it("should return an array of UserQuiz objects when given a valid user name", async () => {
      const userQuizzes = await quizData.findQuizzesTakenByUser("John");
      expect(userQuizzes).to.have.lengthOf(2);
      expect(userQuizzes[0].name).to.deep.equal("Quiz1");
      expect(userQuizzes[0].subject).to.deep.equal("Math");
      expect(userQuizzes[0].marks).to.deep.equal(80);

      expect(userQuizzes[1].name).to.deep.equal("Quiz2");
      expect(userQuizzes[1].subject).to.deep.equal("Science");
      expect(userQuizzes[1].marks).to.deep.equal(90);
    });
  });

  describe('findQuestion', () => {
  
    it('should return null when no question is found', async () => {
      const qid = 1234;
      const question = await quizData.findQuestion(qid);
      expect(question).to.be.null;
    });
  
    it('should return the question when found', async () => {
      const qid = 5678;
      const questionData = { qid, question: 'What is the capital of  Canada?', answer: "Ottawa",subject: "Geography" ,type:"SingleAnswer"  };
      const questions = client.db('test').collection('questions');
      await questions.insertOne(questionData);
  
      const question = await quizData.findQuestion(qid);
      expect(question.question).to.deep.equal(questionData.question);
    });
  });

  describe('findQuestionAnswer', () => {
  
    it('should return an empty string when no question is found', async () => {
      const qid = 'nonexistent-subject';
      const answer = await quizData.findQuestionAnswer(qid);
      expect(answer).to.equal('');
    });
  
    it('should return the answer when a question is found', async () => {
      const subject = 'Geography';
      const questionData = {
        qid: 1234,
        question: 'What is the capital of Canada?',
        answer: 'Ottawa',
        subject,
        type: 'SingleAnswer',
      };
      const questions = client.db('test').collection('questions');
      await questions.insertOne(questionData);
  
      const answer = await quizData.findQuestionAnswer(subject);
      expect(answer).to.equal(questionData.answer);
    });
  });

  describe('findQuestionType', () => {
  
    it('should return an empty string when no question is found', async () => {
      const qid = 'nonexistent-subject';
      const type = await quizData.findQuestionType(qid);
      expect(type).to.equal('');
    });
  
    it('should return the type when a question is found', async () => {
      const subject = 'Geography';
      const questionData = {
        qid: 1234,
        question: 'What is the Capital of Canada?',
        answer: 'Ottawa',
        subject,
        type: 'SingleAnswer',
      };
      const questions = client.db('test').collection('questions');
      await questions.insertOne(questionData);
  
      const type = await quizData.findQuestionType(subject);
      expect(type).to.equal(questionData.type);
    });
  });


  describe("findUser", () => {
    it("should return a user objects when given a valid email", async () => {
      const user = await quizData.findUser("john@example.com");

      expect(user.name).to.deep.equal("John");
      expect(user.lastname).to.deep.equal("Doe");
      expect(user.role).to.deep.equal("student");
      
    });

    it("should return NotFound when given a wrong email", async () => {
      const user = await quizData.findUser("wrongEmail@example.com");
      expect(user.name).to.deep.equal("NotFound");
      expect(user.lastname).to.deep.equal("NotFound");
      expect(user.role).to.deep.equal("NotFound");
      
    });

  });

  describe("addUser", () => {
    it("should enter the new user and return the user", async () => {
      const user = await quizData.addUser("Test" , "test@test.com" , "1234" , "student");

      expect(user.name).to.deep.equal("Test");
      expect(user.email).to.deep.equal("test@test.com");
      expect(user.password).to.deep.equal("1234");
      expect(user.role).to.deep.equal("student");
      
    });

  });

  describe("checkQuesAns", () => {
    it("should return true when given a correct answer", async () => {
      const quesAns = await quizData.checkQuesAns("Geography" , "What is the capital of Canada?" , "Ottawa");
      expect(quesAns).to.deep.equal(true);
    });

    it("should return false when given a wrong answer", async () => {
      const quesAns = await quizData.checkQuesAns("Geography" , "What is the capital of Canada?" , "St. John's");
      expect(quesAns).to.deep.equal(false);
    });

  });

  describe("deleteQuiz", () => {
    it("should delete a quiz object when given a valid subject", async () => {
      const quiz = await quizData.deleteQuiz("Geography");
      expect(quiz).to.deep.equal(true);
    });

  });

  describe("unlinkQuestionFromQuiz", () => {
    it("should set questions subject to null", async () => {
      const question = await quizData.unlinkQuestionFromQuiz("Geography");
      expect(question[0].subject).to.deep.equal('null');
    });

  });
  
  describe("findQuestionListOfAQuiz", () => {
    it("should return an array of questions for a given subject", async () => {
      const questions = await quizData.findQuestionListOfAQuiz("IQ");
      expect(questions).to.have.lengthOf(1);
      expect(questions[0].subject).to.equal("IQ");
    });

    it("should return null if no questions found for a given subject", async () => {
      const questions = await quizData.findQuestionListOfAQuiz("NotaSubject");
      expect(questions).to.have.lengthOf(0);
    });
  });
  
  describe('addMarks', () => {
    it('Sumrish - should successfully add marks to DB corresponding to the specific user', async () => {
      const studentId = "john@example.com";
      const subject = "Biology";
      const marks = 90;
      const marksAdded = await quizData.addMarks(studentId, subject,marks);
      expect(marksAdded.acknowledged).to.deep.equal(true);
   });
  });

  describe('fetchMarks', () => {
    it('Sumrish - should return the added quiz marks corresponding to the specific user', async () => {
      const user = await quizData.findUser("john@example.com");
      expect(user.name).to.deep.equal("John");
      expect(user.lastname).to.deep.equal("Doe");
      expect(user.role).to.deep.equal("student");
      expect(user.quizzes[2].subject).to.deep.equal("Biology");
      expect(user.quizzes[2].marks).to.deep.equal(90);
   });
  });
});
