# Heshani 202292233

This document briefs the individual tasks done, approaches used for completing the tasks, state of the task, how the design principles were utilized in the code, how the tests for the code done and also highlights the issues that arose and how they were addressed addressed 

## Individual Tasks Done

- [Individual Tasks Done](#individual-tasks-done)
- [Approach used for the individual tasks](#approach-used-for-the-individual-tasks)
- [State of Completion](#state-of-completion)
- [Utilization of Design Principles](#utilization-of-design-principles)
- [Code Review Process](#code-review-process)
- [Implementation of test cases](#implementation-of-test-cases)
- [Issues faced and How they were addressed](#issues-faced-and-how-they-were-addressed)
- [Improvements Suggested](#improvements-suggested)
- [Attribution](#Attribution)


## Individual Tasks Done

There were 2 new main tasks assigned to me for this sprint. In this sprint, we were focusing on students “taking quiz” functionality and we needed to make it fully functional. Since I was engaging in the UI tasks in previous sprints, this time I was assigned to the banned development tasks. Along with the Implementation I had to create unit tests for my work. 

### Coding Tasks:
1. Integrating database with the Take a Quiz UI [issue link](https://github.com/MUN-COMP6905/project-hteam/issues/156)
2. Making the “Take Quiz” buttons work which is displayed in the Quiz Bank UI, along with all the quizzes displayed there. [Issue link](https://github.com/MUN-COMP6905/project-hteam/issues/167)

* The coding tasks involved the following subtasks and functionalities.
    - In the Quiz Bank UI, there is a list of quizzes for a certain user and there is a “Take Quiz” button along with all the quizzes. When a user clicks that button in a certain quiz, then he is redirected to the take Quiz Ui. 
    - Passed subject value of the selected quiz, in order to load the questions in the questions collection for that passed subject. 
    - In the take a Quiz UI, retrieved the question list and displayed the questions in the UI using the retrieved data. 
    - Created findQuestionListOfAQuiz(subject:string) method in the data layer for retrieving the question list for the passed subject value.
    - Passed the subject value to the method findQuiz(id:string) which was already in the data layer to retrieve the quiz time, quiz maxMarks from quiz collection in the database to be used for display the time spent, and to calculate the weight of a correct answer for calculating the marks of the quiz. Passed these values to shortAnswerQuestions component.
    - Also retrieved the logged student’s email id from the take quiz UI using sessions, and passed it to shortAnswerQuestions component in order to be used for displaying the marks of a certain user. 
    - Set the quiz time as a timer to be reduced by 1 in each second so that the time can be displayed as a timer to the quiz taker. 
    - Set the subject value as the title and Heading of the Take Quiz UI
    - Added js docs comments whenever necessary in order to make the work easy for other developers.

### Testing Tasks / Unit Testing
3. Implementing Unit tests for the above tasks [Issue link](https://github.com/MUN-COMP6905/project-hteam/issues/168)

* Note - Since all the tasks are interconnected and I had to do the testing and get confirmed that my work is done properly, added all the work into a [single PR](https://github.com/MUN-COMP6905/project-hteam/pull/160)

## Approach used for the individual tasks

1. After defining the intended tasks, I created issues in the kanban board and assigned them to myself with proper descriptions and labels. Added proper user stories describing the tasks. They are initially created in the backlog and moved to the “in-progress” column once I start attempting that task.
2. For the implementation I referred  the documentations on Next JS, Typescript and Mongo DB. Since I was involved in UI tasks in the previous 2 sprints, I had to go through and understand the backend code and the coding patterns. 
3. Also, as agreed in the architecture pattern for the system, I had to work with the data layer located in the src → data folder in the db connections file for database related activities and the quizbank and takequiz pages located in the pages→students folder. 
4. For passing data I used query parameters and retrieved them as instructed in the Next Js documentation. 
5. I used design patterns like DRY, SOLID whenever possible in order to reduce the repetition and to define the functions well by allocating them a single responsibility. 
6. All the code sections are well documented with the JS doc comments for easy understanding of the other developers.
7. After completing each single task, the work is tested in the local PC and in a cloud environment called codesandbox.
8. Created regression tests for the database related tasks and tested whether all the mocha tests get passed (mine and other developers tests) in order to make sure that I do not break any work.
9. Also tested the manual testing checklist I created for the UI work in the student section and got confirmed that I do not break any UI component. 
10. Then the issue is moved to the needs review column in the issue tracker. In the task description, the changes made  and the preview link of the task in a cloud based codesandbox environment is added. 
11. If the functionality can be displayed, I have added the necessary screenshots to the PR and the issue to give a quick review for the other developers. 
12. Refining and updating the code happens based on the reviews and concerns in code review and comments of the PR.
13. The pages were merged upon the approval of all the team members.They all are adding comets of approval based on a list of criteria agreed in the last sprints. (Updated the checklist with unit tests)
14. Since we can not merge work to the main branch without getting all the team members approval, it takes a considerable time. Since the other developer’s work is dependent on my work, I was asked by the team to add my work to an integration branch since she has done her part with hard coded data and our work should be resolved before merging into the branch. 
So I committed my work into an [integration branch](https://github.com/MUN-COMP6905/project-hteam/tree/heshani/integration/take-a-quiz-ui-backend) first.


## State of Completion

All the assigned tasks are attempted and successfully completed. First they are committed to the [integration branch](https://github.com/MUN-COMP6905/project-hteam/tree/heshani/integration/take-a-quiz-ui-backend) in order to resolve the conflicts with the other developer since her work was dependent on my work. 

## Utilization of Design Principles

* **Decoupling**: For implementing the system we are using a layered architecture inorder to decouple the interfaces with database and data modules. So the data layer acts as an interface for serving data for the front end. Used this data layer for retrieving the question data and quiz data to the take quiz UI.

* **DRY:** Used the design principle DRY by using the reusable components. 
Could serve all the quizzes using a single page by passing the required data and displaying the components using that data.

Same way, Handled all the buttons of the quiz bank using a single code by passing parameters.

Also, In my work I had a requirement for fetching the quiz time from the quiz collection by passing the subject value to the data layer. Already there was a method called findQuiz in the data layer and I just used that and filtered the required data instead of creating a new function for retrieving time. 

* **SOLID:** In the development, I always have allocated single user responsibility to each and every function.

## Code Review Process

- Each time, code is done in sepatate branches addressing an issue/issues in the Kan Board.
- Once a single issue is addressed, it is first run in the local machine and tested for functionality. Then the unit tests are run in order to make sure that the work does not break my unit tests and others unit tests.
- Then the code is uploaded to the codesandbox.io for testing in a cloud environment. The codesandbox.io code is shared in the issue description and everyone can test the part individually and provide their comments or approvals.
- By each developer in the team, the code is evaluated by the following criteria. 
    * Functionality - Whether the functionality works as intended
    * Complexity - How complex and how understandable
    * Naming - Has followed the naming convensions
    * Comments - sufficient js docs
    * Documentation - proper documentation on code
    * Unit tests - has created tests, whether the work passes all the unit tests

- So the discussions are made on the code work discussing the issues, solutions and on how to improve the code.
- The codes were merged to the main branch only after getting the approval of all the developers.

## How the testing was done / Implementation of test cases

Testing was implemented for the function findQuestionListOfAQuiz(subject:string) in the data layer. Tests can be found in the test→ dbconnection.test.ts file describing findQuestionListOfAQuiz function, addressing all the cases how it should act with a valid subject argument and an invalid subject argument.

## Issues faced and How they were addressed

* My work was dependent on another developer’s work and as we both worked on the same section of the quiz and displaying the test result. Since we were working on the same files, and Adithya suggested us to create an integration branch and direct our work to the integration branch first instead of directing it to the master. So that we could merge to the integration branch first after getting the team approval, resolve the conflicts and then merge it to the main branch. 

* Initially, I have created a separate method for findQuizTime passing the subject as a string for retrieving the quiz time, but Mehadi pointed out that there is a method in the data layer as findQuiz which also takes subject as the parameter and I can use it for retrieving time. So I could avoid repetition of work with that. 

* Firstly I have passed the subject and quizTime from the quizbank page to take quiz page directly. But Majid needed to redirect to the same page for retake quiz functionality and he was redirecting it from the home page which we had not passed time. So I just passed the subject from the quizbank and retrieved time from the findQuiz method of the data layer. 

## Improvements Suggested 

* I have passed some data using the query parameters and it could be done in a better way using sessions. 

## Attribution

[Passing Parameters between pages and components](https://nextjs.org/docs/api-reference/data-fetching/get-static-props#context-parameter)
