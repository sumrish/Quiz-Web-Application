### This was a group project made for coursework (Software Engineering). Please find details on process, technical discussion and individual contribution below. 

# Team H Quiz App

This readme contains details for the quiz app, team members, meeting minutes, how to run the code the UML diagrams, and the attributions section.

## Table of Contents

- [Team H Quiz App](#team-h-quiz-app)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Technologies Used](#technologies-used)
  - [Team Members \& Roles](#team-members--roles)
  - [Meeting Minutes](#meeting-minutes)
    - [Sprint 1](#sprint-1)
    - [Sprint 2](#sprint-2)
    - [Sprint 3](#sprint-3)
  - [Team Processes](#team-processes)
  - [Code Reviews Process](#code-reviews-process)
    - [Checklist for Code Review](#checklist-for-code-review)
      - [The Pull Request Process](#the-pull-request-process)
      - [Code Review Guidlines](#code-review-guidlines)
  - [Individual Contributions](#individual-contributions)
  - [How To Run](#how-to-run)
    - [On the cloud](#on-the-cloud)
    - [Locally](#locally)
    - [Credentials to Use](#credentials-to-use)
  - [UML Diagrams](#uml-diagrams)
    - [UML diagram for Sprint 01](#uml-diagram-for-sprint-01)
    - [UML diagram for Sprint 02](#uml-diagram-for-sprint-02)
    - [UML diagram for Sprint 03](#uml-diagram-for-sprint-03)
  - [Architecture discussion](#architecture-discussion)
    - [How would we replace the database tech stack?](#how-would-we-replace-the-database-tech-stack)
  - [What works?](#what-works)
  - [Available Screens](#available-screens)
  - [Demo](#demo)
  - [Performance Review](#performance-review)
  - [Issue Tracker or Kanban Board](#issue-tracker-or-kanban-board)
  - [Attributions](#attributions)

## Description

The project comprises a quiz app where students can log in or sign up to the portal and take or retake quizzes and see their marks displayed. There is also an option for an admin. The admin can create, delete, and update quizzes.

As of this moment, this is a web-based application.

## Technologies Used

The following is the list of technologies that have been used in building this project.

- MongoDB
- Next.js
- NextAuth
- Typescript
- Javascript
- React
- Chakra UI
- Mocha

## Team Members & Roles

<table>
  <tr>
   <td><strong>Member Name</strong>
   </td>
   <td><strong>Member Student ID</strong>
   </td>
   <td><strong>Member Role</strong>
   </td>
  </tr>
  <tr>
   <td>Adithya</td>
   <td><strong>202292768</strong>
   </td>
   <td><strong>Team Facilitator</strong>
<p>
<strong>Backend Developer</strong>
   </td>
  </tr>
  <tr>
   <td>Mehadi
   </td>
   <td><strong>202287115</strong>
   </td>
   <td><strong>Backend Developer</strong>
   </td>
  </tr>
  <tr>
   <td>Majid
   </td>
   <td><strong>202292752</strong>
   </td>
   <td><strong>Database Logic & Backend Developer</strong>
   </td>
  </tr>
  <tr>
   <td>Heshani
   </td>
   <td><strong>202292233</strong>
   </td>
   <td><strong>Frontend / Backend Developer</strong>
   </td>
  </tr>
  <tr>
   <td>Sumrish
   </td>
   <td><strong>202196728</strong>
   </td>
   <td><strong>Frontend / Backend Developer & Designer</strong>
   </td>
  </tr>
</table>

## Meeting Minutes

The following are links to the meeting minutes.

### Sprint 1

- [23 Feb 2023](docs/Meeting%20Minutes/Meeting_Minutes_23-Feb-2023.md)
- [03 Mar 2023](docs/Meeting%20Minutes/Meeting_Minutes_03-March-2023.md)
- [05 Mar 2023](docs/Meeting%20Minutes/Meeting_Minutes_05-March-2023.md)
- [07 Mar 2023](docs/Meeting%20Minutes/Meeting_Minutes_07-March-2023.md)
- [10 Mar 2023](docs/Meeting%20Minutes/Meeting_Minutes_10-March-2023.md)

### Sprint 2

- [14 Mar 2023](docs/Meeting%20Minutes/Meeting_Minutes_14-March-2023.md)
- [16 Mar 2023](docs/Meeting%20Minutes/Meeting_Minutes_16-March-2023.md)
- [17 Mar 2023](docs/Meeting%20Minutes/Meeting_Minutes_17-March-2023.md)
- [20 Mar 2023](docs/Meeting%20Minutes/Meeting_Minutes_20-March-2023.md)
- [25 Mar 2023](docs/Meeting%20Minutes/Meeting_Minutes_25-March-2023.md)
- [29 Mar 2023](docs/Meeting%20Minutes/Meeting_Minutes_29-March-2023.md)

### Sprint 3

- [05 Apr 2023](docs/Meeting%20Minutes/Meeting_Minutes_05-April-2023.md)
- [12 Apr 2023](docs/Meeting%20Minutes/Meeting_Minutes_12-April-2023.md)
- [13 Apr 2023](docs/Meeting%20Minutes/Meeting_Minutes_13-April-2023.md)

## Team Processes

Details regarding the team contributions and team processes can be found [here](docs/Team%20Processes/Team_Processes.md)

## Code Reviews Process

- A PR shall not be merged until all devs approve(either via commenting on the PR for code work and commenting on the story for non-code work)
- Any suggestions on the PR must be resolved before the PR can be merged.
- Code will be reviewed as per the DRY (Don't Repeat Yourself) and SOLID principles.

### Checklist for Code Review

#### The Pull Request Process

Once the branch is ready to merge in the master, a PR should be created for that and on the mean time the task from **in Progress**  will be moved to **Reviewed** on the kanboard.
Then the **request for changes** will be initiated on the same PR by adding comments to the PR, and have discussion related to that. Once the is changes the done, it's again committied on the same branch and the PR is updated accordingly.
Once all the suggestions/reviews are done, than **Approved** status is given to that PR, and it's moved from to **Done** tasks on the board.
Below is the rough draft of what's happening actually in terms of github.

![PR Process](/public/img/pr_process.png)
(The figure has been collected from [here](https://www.swarmia.com/blog/a-complete-guide-to-code-reviews/))

#### Code Review Guidlines

To maintain code review standards across developers, it's a good idea to have guidelines for what to focus on in code reviews. Here's what we recommend focusing on:

- [x] **Functionality:** Does the code behave as the PR author likely intended? Does the code behave as users would expect?
- [x] **Complexity:** Would another developer be able to easily understand and use the code?
- [x] **Tests:** Does the PR have correct and well-designed automated tests?
- [x] **Naming:** Are names for variables, functions, etc. descriptive?
- [x] **Comments:** Are the comments clear and useful?
- [x] **Documentation:** Did the author also update relevant documentation?

Developers shouldn't spend their time reviewing things that can be automatically checked. Like for the pdf files or .md files, there's no need for this check list as it is specifically for the Dev tasks.

## Individual Contributions

The individual contributions for each team member can be found here:

- [Adithya](docs/Individual%20Contributions/Assignment%204/Adithya_Sudhan.md) - [Assignment 04](docs/Individual%20Contributions/Assignment%204/Adithya_Sudhan.md) | [Assignment 03](docs/Individual%20Contributions/Assignment%203/Adithya_Sudhan.md) | [Assignment 02](docs/Individual%20Contributions/Assignment%202/Adithya_Sudhan.md) | [Kanban Board](https://github.com/orgs/MUN-COMP6905/projects/11/views/2)
- [Mehadi](docs/Individual%20Contributions/Assignment%204/Mehadi_Hassan.md) - [Assignment 04](docs/Individual%20Contributions/Assignment%204/Mehadi_Hassan.md) | [Assignment 03](docs/Individual%20Contributions/Assignment%203/Mehadi_Hassan.md) | [Assignment 02](docs/Individual%20Contributions/Assignment%202/Mehadi_Hassan.md) | [Kanban Board](https://github.com/orgs/MUN-COMP6905/projects/11/views/1)
- [Majid](docs/Individual%20Contributions/Assignment%204/Majid_Burki.md) - [Assignment 04](docs/Individual%20Contributions/Assignment%204/Majid_Burki.md) | [Assignment 03](docs/Individual%20Contributions/Assignment%203/Majid_Burki.md) | [Assignment 02](docs/Individual%20Contributions/Assignment%202/Majid_Burki.md) | [Kanban Board](https://github.com/orgs/MUN-COMP6905/projects/11/views/10)
- [Heshani](docs/Individual%20Contributions/Assignment%204/Heshani_Hettiarachchi.md) - [Assignment 04](docs/Individual%20Contributions/Assignment%204/Heshani_Hettiarachchi.md) | [Assignment 03](docs/Individual%20Contributions/Assignment%203/Heshani_Hattiarachchi.md) | [Assignment 02](docs/Individual%20Contributions/Assignment%202/Heshani_Hattiarachchi.md) | [Kanban Board](https://github.com/orgs/MUN-COMP6905/projects/11/views/9)
- [Sumrish](docs/Individual%20Contributions/Assignment%204/Sumrish_Hanif.md) - [Assignment 04](docs/Individual%20Contributions/Assignment%204/Sumrish_Hanif.md) | [Assignment 03](docs/Individual%20Contributions/Assignment%203/Sumrish_Hanif.md) | [Assignment 02](docs/Individual%20Contributions/Assignment%202/Sumrish_Hanif.md) | [Kanban Board](https://github.com/orgs/MUN-COMP6905/projects/11/views/8)

All Done Tasks on the Kanban Board Grouped by User are available [here](https://github.com/orgs/MUN-COMP6905/projects/11/views/7)
<br>
<br>
<table>
    <caption><b>Table: Issue List for Assignment 04</b></caption>
    <tr>
        <td>Name</td>
        <td>Issue</td>
        <td>Merged to Master?</td>
    </tr>
    <tr>
        <td><a href = './docs/Individual%20Contributions/Assignment%204/Adithya_Sudhan.md'>Adithya</a>
        <td>Protect the master branch! (https://github.com/MUN-COMP6905/project-hteam/issues/149)</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td></td>
        <td>Decouple data layer via a middle layer to conform to DDD paradigm (https://github.com/MUN-COMP6905/project-hteam/issues/165)</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><a href = './docs/Individual%20Contributions/Assignment%204/Majid_Burki.md'>Majid</a></td>
        <td>Implement Functionality for the Quiz Retake Button (https://github.com/MUN-COMP6905/project-hteam/issues/162)</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td></td>
        <td>Connect Email Check Functionality with Front-End Sign Up Page (https://github.com/MUN-COMP6905/project-hteam/issues/161)
        </td>
        <td>Yes</td>
    </tr>
    <tr>
        <td></td>
        <td>Test Cases for Email Verification Class (https://github.com/MUN-COMP6905/project-hteam/issues/174)
        </td>
        <td>Yes</td>
    </tr>
    <tr>
        <td></td>
        <td>Create Architecture Diagram for Project (https://github.com/MUN-COMP6905/project-hteam/issues/175)
        </td>
        <td>Yes</td>
    </tr>
    <tr>
        <td></td>
        <td>Passing Objects to the UI (https://github.com/MUN-COMP6905/project-hteam/issues/173)
        </td>
        <td>No</td>
    </tr>
    <tr>
        <td><a href = 'docs/Individual%20Contributions/Assignment%204/Mehadi_Hassan.md'>Mehadi</a></td>
        <td>Integrate Student Dashboard and Quizbank with the backend  (https://github.com/MUN-COMP6905/project-hteam/issues/135)</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td></td>
        <td>Integrating Backend for the Admin Dashboard (https://github.com/MUN-COMP6905/project-hteam/issues/153)</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td></td>
        <td>Integrating backend for Sign Up Page (https://github.com/MUN-COMP6905/project-hteam/issues/155)</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td></td>
        <td>Bugfix: Fixed the issue with empty input field and mark calculation (https://github.com/MUN-COMP6905/project-hteam/pull/180)</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td></td>
        <td>Updated the main Readme file (https://github.com/MUN-COMP6905/project-hteam/issues/170)</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><a href = './docs/Individual%20Contributions/Assignment%204/Sumrish_Hanif.md'>Sumrish</a></td>
        <td>Removing the hardcoded parameters from the Take Quiz Scenario (https://github.com/MUN-COMP6905/project-hteam/issues/171)</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td></td>
        <td>Implement the functionality to read quiz answers from student input, check correct answer, submit quiz result to DB. (https://github.com/MUN-COMP6905/project-hteam/issues/157)</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td></td>
        <td>Implement routing to Result page, fetch the quiz results to display to quiz result page and redirect to student dashboard (https://github.com/MUN-COMP6905/project-hteam/issues/159)</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td></td>
        <td>Added unit test cases for Quiz submission and fetching marks from DB (https://github.com/MUN-COMP6905/project-hteam/issues/169)</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td></td>
        <td>Integration branch of take a Quiz flow to be merged in master (https://github.com/MUN-COMP6905/project-hteam/issues/179)</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><a href = './docs/Individual%20Contributions/Assignment%204/Heshani_Hettiarachchi.md'>Heshani</a>
        <td>Integrate Take a Quiz UI with database using data layer (https://github.com/MUN-COMP6905/project-hteam/issues/156)</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td></td>
        <td>Connecting QuizBank UI's Take Quiz button with Take Quiz UI passing required data  (https://github.com/MUN-COMP6905/project-hteam/issues/167)</td>
        <td>Yes</td>
    </tr>
     <tr>
        <td></td>
        <td>Adding Uint test to the task - Integrating Take Quiz UI with database using data layer (https://github.com/MUN-COMP6905/project-hteam/issues/168)</td>
        <td>Yes</td>
    </tr>
</table>

## How To Run

### On the cloud

- To view the project running on Codesandbox [Click Here](https://0mj3mq-3000.csb.app) and use [these](#credentials-to-use) credentials.

### Locally

To run the code locally, you’ll need to define your environment variables through the `.env.local` file or creating a `.env` file first. For a sample `.env` file, refer to `.env.example`. Use the same mongodb url (since it is set to the team mongodb instance url) and use your appropriate localhost url for the nextauth and host keys.

Update the `NEXTAUTH_URL` on the `.env.local` file to the appropriate host URL that the terminal gives after running the project.

For example if the project is being run on the port 3000 locally then the changes will look like this -
```shell
NEXTAUTH_URL ='http://localhost:3000'
```

Once done, go to your console and run the following commands in the order specified.

This command will install all the prerequisite packages defined in the `package.json` file required to run the project and perform the testings.

```javascript
npm install 
```

This command will run the project in dev mode:

```javascript
npm run dev
```

(make sure to update the env file with the correct `NEXTAUTH_URL`)

To run the test cases make sure you have installed all the libraries and then:

```javascript
npm install
npm run test
```

### Credentials to Use

Sign in with the credentials:

- Admin: Email: `mehadi@mun.ca` and  password: `1234`
- Student: Email: `adi@mun.com` and  password: `1234`

## UML Diagrams

### UML diagram for Sprint 01
![UML Diagram Sprint 01](docs/UML/UML_Sprint_1.png)

### UML diagram for Sprint 02
![UML Diagram Sprint 02](docs/UML/UML_Sprint_2.png)

- A data layer was added to separate the UI code from the backend.
- UI layer now needs to import a concrete MongoQuizData obejct to reach the database. Therefore, the db code has been removed from the UI code.
- The data layer implements two interfaces so that in the future we can replace mongo with another db client which implements the same interface.
- Quiz, Questions and User collection has been used in the MongoDB to support the application.
- Unit tests were written for the data layer as well as other business class that yet to be integrated end to end.

### UML diagram for Sprint 03
![UML Diagram Sprint 03](docs/UML/Sprint3-UML.png)

## Architecture discussion

- The UML attempts to provide a glimpse of the 3 layered architecture we've decided on. They are: the UI, the middle/business layer and finally the data layer. Each of them ideally stay separate and decoupled. We acheive this using the Domain Driven Design (DDD) paradigm, where the core of the project is the domain (which is independent of all else), around which everything else, including the app layer and data layer circles, in the shape of an onion, giving the DDD paradigm its pseudonym called the "onion" architecture.

![Onion Architecture](docs/Architecture/onion.png)<br>

- In our project, the UI layer only depends on the QuizDataService, which lies in the domain(middle) layer. The datalayer, which contains code that calls MongoDB apis, also depends on this same domain layer. Thus, we're able to make both the app layer and data layer independent of each other by making them function via the implementing the same interfaces. An object of the class QuizDataService is imported and made available to any caller who wants to call the datalayer to get the data it needs, without ever knowing anything about MongoDB. Thus, this data layer can be implemented using any db technology. 

- "In the Layered Architecture, as understood by the majority of people, virtually all layers can depend on the infrastructure layer. This causes some bad coupling. A change in the infrastructure layer like changing some library or switching a database provider could spill changes all over your business logic. Onion Architecture is about protecting the business logic, hence the dependency rule."  - https://dzone.com/articles/onion-architecture-is-interesting
- We have therefore, by using the Onion principle, resorted to the Dependency Inversion principle from an architectural layer perspective. Thus, the most important code in our application (domain layer) depends on nothing, and instead, everything depends on the domain layer. This is, therefore, controlled and directed coupling. 

### How would we replace the database tech stack?
- For example, we'd make a SQLServerQuizData class that implements the same interfaces that currently is implemented by MongoQuizData(the concrete implementation that contains mongo code). 
- Then, in dbservice(in the middle layer), we modify the body of the methods in QuizDataService class to use the SQLServerQuizData import (and property) instead of the MongoQuizData import. 
- Thus by replacing what is returned form the middle layer(dbservice), the UI never needs to know the data layer implementation ever changed to use SQLServer.


## What works?

- The user starts at the landing page.
- A new user can create an account with the role of Admin or Student. Emails with domain ending at `mun.ca` are allowed to register.
- Sign in with the credentials. If you log in using the Admin credentials (`email: mehadi@mun.ca` and  `password: 1234`) it should redirect to the Admin home page and if logged in with the student credentials (`email: adi@mun.ca` and  `password: 1234`) the user will be redirected to the student dashboard.
- If logged in as admin; user can see the list of available quizzes and delete the quizzes if required
- If logged in as student; user can see all the quizzes that they has taken (New users will see empty table).
- If the student user navigates to the Take a Quiz tab from the student dashboard, and takes a quiz that already appears on the student dashboard, then a new quiz with the score obtained on the latest attempt is added to the student dashboard.
- If the student user navigates to the Home tab of the student dashboard, and 'retakes' a quiz, then a new quiz with the score obtained on the latest attempt is added to the student dashboard and the older attempt's score is invalidated, i.e, set to -1.
- If the user presses `Take a quiz` from the navbar it will show all the available quizzes and upon pressing `Take Quiz` button the user will taken to the quiz page
- From the quiz page user will be available to answer the questions and upon submission it will show the results on the result screen. Upon clicking "Main Menu" from here, it will take the quiz taker back to the student dashboard, where a new row will have been added with the same score as shown on the result screen.
- User session has been implemented where user can login, logout and cannot access protected pages without being logged in with the right account.

## Available Screens

1. **Login Page**: This is the login page where both the admin and students can sign in to their accounts.<br/>
![Login Page](docs/UI_Screenshots/Assignment_4/01_Signin.png)

2. **Sign up Page**: This is the sign up page where both the admin and students can create a new account.<br/>
![Sign up Page](docs/UI_Screenshots/Assignment_4/02_Signup.png)

3. **Admin Dashboard**: This the the dashboard that an admin sees when they login.<br/>
![Admin Dashboard](docs/UI_Screenshots/Assignment_4/03_AdminDashboard.png)

4. **Student Dashboard**: This the the dashboard that a Student sees when they login.<br/>
![Student Dashboard](docs/UI_Screenshots/Assignment_4/04_StudentDashboard.png)

5. **Quiz Bank**: This the the quizbank page where the students can see available quizzes that they can participate.<br/>
![Quizbank](docs/UI_Screenshots/Assignment_4/05_Quizbank.png)

6. **Take Quiz**: This the the  page where the students can see participate in taking the quiz and submit there answers.<br/>
![Take Quiz](docs/UI_Screenshots/Assignment_4/06_Takequiz.png)

7. **Result Page**: This the the  page where the students can see there results once they submit the quiz.<br/>
![Result Page](docs/UI_Screenshots/Assignment_4/07_Result.png)

## Demo

Here is a video presentation on how to run the project and navigate throughout the application

[![Project Demo](https://img.youtube.com/vi/2T6PEtq0ir0/0.jpg)](https://www.youtube.com/watch?v=2T6PEtq0ir0)

## Performance Review

Each developer reviewed the other developers performances out of 1 to 5 in the following criteria -

- **Communication**: How willing the team member was in communicating with others and was updated on all the team discussions
- **Technical Contribution**: How sound the team member was in the technical part
- **Timely Delivery**: How efficiently the team member submitted on time.

You can find the performance reviews [here](docs/Performance%20Review/Performance_Review_Sprint3.pdf)

## Issue Tracker or Kanban Board

You can find the issue tracker/kanban board for the project [here](https://github.com/orgs/MUN-COMP6905/projects/11/).

## Attributions

Inspiration for this project was taken from the following resources:

- [Code Sandbox](https://codesandbox.io/)
- [Typescript and MongoDB App](https://github.com/danybeltran/nextjs-typescript-and-mongodb)
- [NextAuth.js](https://next-auth.js.org/)
- [Typescript](https://www.w3schools.com/typescript/)
- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/getting-started)
- [Mongoose](https://mongoosejs.com/)
- [Quiza Redis](https://github.com/VinGitonga/quiza_redis)
- [Node.js](https://nodejs.org/en/)
