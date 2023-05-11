# Majid Khan Burki 202292752

This document highlights the individual tasks done, the approaches that were used, the state of completion, the design principles used, and how the code was reviewed. This document also highlights any issues that arose and how they were addressed personally and through the team.

- [Majid Khan Burki 202292752](#majid-khan-burki-202292752)
  - [Individual Tasks Done](#individual-tasks-done)
  - [Approaches](#approaches)
    - [Support for Question Types](#support-for-question-types)
    - [Display Student Marks on Student Dashboard](#display-student-marks-on-student-dashboard)
    - [UML Diagram](#uml-diagram)
    - [Test Cases for DB Methods](#test-cases-for-db-methods)
    - [Adding Question Methods for Data Layer](#adding-question-methods-for-data-layer)
    - [Email Validation](#email-validation)
  - [State of Completion](#state-of-completion)
  - [Design Principles](#design-principles)
  - [Code Review Process](#code-review-process)

## Individual Tasks Done

As per the discussion with the team, I was assigned the following tasks.

- **Support for Question Types Using Design Principles:** [Issue](https://github.com/MUN-COMP6905/project-hteam/issues/130) Wrote up code logic for supportig multiple choice questions and multiple choice answers for the quiz. Made a `Quiz` abstract class with an un-implemented `correctAnswer()` method. Made a class called called `MultipleChoiceQuestion` that inherits the `Quiz` class and implements the `correctAnswer()` method. Also made interfaces `IQuestion` and `IGetQuestionData` following proper design principles.

- **Display Student Marks on Student Dashboard:** [Issue](https://github.com/MUN-COMP6905/project-hteam/issues/78) This part took significant amount of my time due to limited knowledge of NextAuth and typescript it self. Worked on this for over 3 days. The purpose of this was to write logic for displaying user's marks and quiz data on the student dashboard instead of it displaying all quiz data originally. Reflected this in this [PR](https://github.com/MUN-COMP6905/project-hteam/pull/95). This PR hasn't been merged into the master branch as team decided to go with the approach of Aditya instead. My code was pushed to an [integration branch](https://github.com/MUN-COMP6905/project-hteam/tree/student-dashboard-quizbank) instead.

- **UML Diagram for Sprint 2:** Worked on previous implementation of UML diagram and added more functionality to it. Used the UMLet tool.

- **Test Cases for DB Methods of Question:** [Issue](https://github.com/MUN-COMP6905/project-hteam/issues/139) Added test cases for the database methods defined by me in the data layer. Used mocha test format. These can be found in the in the `dbconnection.test.ts` file.

- **Adding Question Methods to Data Layer:** Added further methods to the data layer created by Adi. Added code for the methods `findQuestion(qid:number):IQuestion`, `findQuestionAnswer(qid:number):string`, and `findQuestionType(qid:number):string`. The purpose of these methods are to get data related to the question collection from the database based on the `qid` of the question and return specfic values as indicated. 

- **Email Validation:** Added code logic to ensure that the emails entered by the user are valid and correct and no-invalid email is entered. Code can be found here `/src/business/validation/emailCheck.ts`.

- **Team Code Review:** Reviewed and verified code of team members as well on my end and gave approvals where necessary and earned.

- **Database Logic:** Modified the monog db database on the cloud to incoporate updated logic. 

## Approaches

Adding to the above heading, the approaches will be explained here.

### Support for Question Types

The approach which was kept in mind here was to ensure that users are able to take multiple quiz types, such as single answer, multiple choice, and multiple answer quiz types. Wrote typescript code and ensured the principality of decoupling the code as much as possible and use proper OOP conventions as I used an abstract `Question` class which was inherited by the `MutlipleChoiceQuestion` class.

### Display Student Marks on Student Dashboard

The approach here was to ensure that the student is able to see their own marks on the dashboard against the quizzes they attempted instead of seeing quizzes attempted by everyone. Here, I added a field of `quizzes` to the `user` collection. The quizzes was an array of objects with each object being a key value pair. The first key is the `quiz` and the value for this is the reference object id of the quiz present in the `quizes` collection and the second key is `marks` which are the marks user obtained against this quiz. This made displaying marks a bit easy, but after team discussion this apporach was cast aside in favor of a better approach proposed by Adi. However, this code was still pushed to the [integration branch](https://github.com/MUN-COMP6905/project-hteam/tree/student-dashboard-quizbank).

### UML Diagram

Approach here was to keep it as simple as possible so that the marker can understand everything.

### Test Cases for DB Methods

Test cases were written in mocha because that's something I was most familiar with it. The DB methods were tested to ensure that they work properly.

### Adding Question Methods for Data Layer

The approach here was to add the methods for retrieving the question, question's type, and question's answer from the `questions` collection from the database in the data layer (to ensure decoupling). These methods are used in the `MultipleChoiceQuestion` class.

### Email Validation

 The approach here was to ensure that the email entered by the user belongs to only supported organizations, is valid, and doesn't contain any invalid characters.

## State of Completion

- Email validation needs to be incorporated into the front-end (once it's made).
- Test Cases: Further test cases will be added in the future.
- Display User's Marks on Dashboard: Pusehd to integration layer, will be pushed to master after more changes are made.

## Design Principles

Ensured OOp principles such as abstraction, inheritence, and Interfaces were used in the `Question`, and `MultipleChoiceQuestion` class. For the rest of the code, maximum de-coupling was ensured.

## Code Review Process

The code was reviewed by running it first on my local machine. Then run it on Code Sandbox and share it with the team.
