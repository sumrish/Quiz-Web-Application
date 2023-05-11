import { MongoClient, InsertOneResult } from "mongodb";
import Quiz, { UserQuiz, AdminQuizList } from "../business/models/Quiz";
import IQuestion from "../business/models/IQuestion";
import Question from "../business/models/question";
import Student from "../business/models/Student";
import IHandleQuizData from "../business/interfaces/IHandleQuizData";
import IGetQuestionData from "../business/interfaces/IGetQuestionData";
import IGetUserData from "../business/interfaces/IGetUserData";
import { ObjectId } from "mongodb";

/*
 * Concrete class that implements IHandleQuizData and serves up data from MongoDB
 */
export default class MongoQuizData
  implements IHandleQuizData, IGetQuestionData, IGetUserData
{
  uri = process.env.MONGODB_URI ?? "";

  async findQuiz(id: string) {
    const client = new MongoClient(this.uri);
    var quiz: Quiz | null = null;
    try {
      await client.connect();

      const database = client.db("test");
      const quizzes = database.collection("quizes");

      const query = { subject: id };

      const result = await quizzes.findOne(query);
      quiz = JSON.parse(JSON.stringify(result));
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return quiz;
    }
  }

  async deleteQuiz(subject: string) {
    const client = new MongoClient(this.uri);
    var quiz: Quiz | null = null;
    try {
      await client.connect();

      const database = client.db("test");
      const quizzes = database.collection("quizes");

      const query = { subject: subject };

      const result = await quizzes.deleteOne(query);
      quiz = JSON.parse(JSON.stringify(result));
    } catch (err) {
      console.error(err);
      return false;
    } finally {
      await client.close();
      return true;
    }
  }

  async findAllQuizzes() {
    const client = new MongoClient(this.uri);
    var quizzes: Quiz[] | null = null;
    try {
      await client.connect();

      quizzes = await client
        .db("test")
        .collection<Quiz>("quizes")
        .find({})
        .toArray();
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return quizzes;
    }
  }

  async findAllQuizzesWithQuizTakersCount() {
    const client = new MongoClient(this.uri);
    var quizzes: AdminQuizList[] | null = null;
    try {
      await client.connect();

      quizzes = await client
        .db("test")
        .collection<AdminQuizList>("quizes")
        .find({})
        .toArray();

      for (const i in quizzes) {
        let userQuiz = await client
          .db("test")
          .collection<Student>("users")
          .countDocuments({ "quizzes.subject": quizzes[i].subject });
        quizzes[i].quizTakers = userQuiz;
      }
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return quizzes;
    }
  }

  async findQuizzesTakenByUser(name: string) {
    const client = new MongoClient(this.uri);
    //use an array to populate UserQuizes
    var userQuizzes = Array<UserQuiz>();

    try {
      await client.connect();

      //first get the quiz subjects that the user has taken. Refer: https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/project/
      var dummyUser = {
        id: 0,
        name: "dummyname",
        lastname: "dummylastname",
        email: "dummyemail",
        password: "dummypassword",
        role: "dummyrole",
        quizzes: [{ subject: "Math", marks: 105 }],
      };

      var dummyQuiz = {
        id: 0,
        name: "DummyMathQuiz",
        subject: "Math",
        type: "DummyType",
        maxMarks: 0,
        time: 0,
      };
      var user: Student =
        (await client
          .db("test")
          .collection<Student>("users")
          .findOne({ name: name })) ?? dummyUser;
      for (let q in user.quizzes) {
        var quiz: Quiz =
          (await this.findQuiz(user.quizzes[q].subject)) ?? dummyQuiz;
        userQuizzes.push({
          id: quiz.id,
          subject: quiz.subject,
          name: quiz.name,
          marks: user.quizzes[q].marks,
          type: quiz.type,
        } as UserQuiz);
      }
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return userQuizzes;
    }
  }

  async findQuestion(qid: number) {
    const client = new MongoClient(this.uri);
    var question: IQuestion | null = null;
    try {
      await client.connect();

      const database = client.db("test");
      const questions = database.collection("questions");

      const query = { qid: qid };

      const result = await questions.findOne(query);
      question = JSON.parse(JSON.stringify(result));
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return question;
    }
  }

  async unlinkQuestionFromQuiz(subject: string) {
    const client = new MongoClient(this.uri);
    var question: IQuestion | null = null;
    try {
      await client.connect();

      const database = client.db("test");
      const questions = database.collection("questions");

      const query = { subject: subject };

      let results = await questions.find(query).toArray();
      for (let r = 0; r < results.length; r++) {
        const result = results[r];
        const updatedResults = { ...result, subject: "null" }; // update the name field
        await questions.updateOne(
          { _id: result._id },
          { $set: updatedResults }
        ); // update the document in the collection
        results[r] = updatedResults;
      }
      question = JSON.parse(JSON.stringify(results));
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return question;
    }
  }

  async findQuestionAnswer(qid: number) {
    const client = new MongoClient(this.uri);
    var question: IQuestion | null = null;
    var answer: string = "";
    try {
      await client.connect();

      const database = client.db("test");
      const questions = database.collection("questions");

      const query = { subject: qid };

      const result = await questions.findOne(query);
      question = JSON.parse(JSON.stringify(result));
      answer = question?.answer ?? "";
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return answer;
    }
  }

  async findQuestionType(qid: number) {
    const client = new MongoClient(this.uri);

    var question: IQuestion | null = null;
    var type: string = "";
    try {
      await client.connect();

      const database = client.db("test");
      const questions = database.collection("questions");

      const query = { subject: qid };

      const result = await questions.findOne(query);
      question = JSON.parse(JSON.stringify(result));
      type = question?.type ?? "";
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return type;
    }
  }

  async findUser(email: string) {
    const client = new MongoClient(this.uri);
    var dummyUser = {
      id: 0,
      name: "NotFound",
      lastname: "NotFound",
      email: "NotFound",
      password: "NotFound",
      role: "NotFound",
      quizzes: [{ subject: "NotFound", marks: 100 }],
    };

    var user: Student = dummyUser;
    try {
      await client.connect();

      user =
        (await client
          .db("test")
          .collection<Student>("users")
          .findOne({ email: email })) ?? dummyUser;
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return user;
    }
  }

  async getAuthorizedUser(email: string, password: string) {
    const client = new MongoClient(this.uri);
    var user = null;
    try {
      await client.connect();

      user = await client.db("test").collection<Student>("users").findOne({
        email: email,
        password: password,
      });
      if (user) {
        // The user object that we have received from the DB
        return user;
      } else {
        // If no user found then return null
        return null;
      }
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return user;
    }
  }

  async addUser(name: string, email: string, password: string, role: string) {
    const client = new MongoClient(this.uri);
    var dummyUser = {
      name: "NotFound",
      email: "NotFound",
      password: "NotFound",
      role: "NotFound",
      quizzes: [{ subject: "NotFound", marks: 100 }],
    };

    var user: Student = dummyUser;
    var newUser: InsertOneResult<Student>;
    try {
      await client.connect();

      const data = {
        name: name,
        email: email,
        password: password,
        role: role,
        quizzes: [],
      };
      newUser = await client
        .db("test")
        .collection<Student>("users")
        .insertOne(data);
      const insertedId = newUser.insertedId;
      user =
        (await client
          .db("test")
          .collection<Student>("users")
          .findOne({ _id: insertedId })) ?? dummyUser; // get the inserted document using findOne method
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return user;
    }
  }

  async addMarks(email: string, subject: string, marks: number) {
    const client = new MongoClient(this.uri);
    var quiz: Quiz | null = null;
    try {
      await client.connect();

      const database = client.db("test");
      const users = database.collection("users");
      const result = await users.updateOne(
        {
          email: email
        },
        {
          $push: {
            quizzes: 
              {
                subject: subject,
                marks: marks,
              }
            
        }
      }
      );
  
      quiz = JSON.parse(JSON.stringify(result));

    // Return the updated quiz object as JSON
      return quiz;

    } catch (err) {
      console.error(err);
      return false;
    } finally {
      await client.close();
      return quiz;
    }
  }

  async checkQuesAns(subject: string , question: string , userAns: string) {
    
    const client = new MongoClient(this.uri);
    var dummyQuestion = {
      id: 0,
      question: "NotFound",
      answer: "NotFound",
      subject: "NotFound",
      type: "NotFound",
    };

    var _question: Question = dummyQuestion;

    try {
      await client.connect();
      //first get the quiz subjects that the user has taken. Refer: https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/project/

      _question =
        (await client
          .db("test")
          .collection<Question>("questions")
          .findOne({ subject: subject, question: question })) ?? dummyQuestion;
    } catch (err) {
      console.error(err);
      return false;
    } finally {
      await client.close();
      if (_question.answer == userAns) {
        return true;
      } else {
        return false;
      }
    }
  }
  /**
   * to find the question list of a certain quiz
   * @param subject - subject of the quizz(this is the identifier used to find the quiz which a certain question is belongs to)
   */
  async findQuestionListOfAQuiz(subject:string){
    const client = new MongoClient(this.uri);
    var questions: Question[] | null=null;
    try{
      await client.connect();
      questions = await client
        .db("test")
        .collection<Question>("questions")
        .find({subject})
        .toArray();
    }
    catch(err){
      console.error(err);
    }
    finally {
      await client.close();
      return questions;
    }
  }

  /**

Updates the marks of a specific user's quiz
@async
@function resetUserMarks
@param {string} email - Email of the user whose marks are to be updated
@param {string} subject - Subject of the quiz
@param {number} marks - New marks to be updated
@returns {Promise} - Returns a Promise that resolves with the updated post
@throws {Error} - If an error occurs while updating the marks
*/

  async resetUserMarks( email:string, subject:string, marks:number){
    const client = new MongoClient(this.uri);
    var post;
    try{
      await client.connect();
       post = await client.db("test")
      .collection("users")
      .updateOne(
        { 
          email:email,
           "quizzes.subject": subject
        },
        {
          $set: {
             "quizzes.$.marks": marks  
          },
        }
      );

    }
    catch(err){
      console.error(err);
    }
    finally {
      await client.close();

      return post
    }    

  }
}
