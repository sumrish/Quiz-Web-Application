# [Mehadi Hassan 202287115](https://github.com/mehadihn)

This document highlights the individual tasks done, the approaches that were used, the state of completion, the design principles used, and how the code was reviewed. This document also highlights any issues that arose and how they were addressed personally and through the team.

- [Individual Tasks Done](#individual-tasks-done)
- [Approaches](#approaches)
- [State of Completion](#state-of-completion)
- [Design Principles](#design-principles)
- [Code Review Process](#code-review-process)

## Individual Tasks Done

As per the discussion with the team, I was assigned the following tasks. The issue links are also embedded in the headlines.

- **[Implemented User Session](#implemented-user-session) ([Issue](https://github.com/MUN-COMP6905/project-hteam/issues/87) / [PR](https://github.com/MUN-COMP6905/project-hteam/pull/88)):** Adds the functionality to prevent unwanted access to protected page with correctly logged in.

- **[Implemented Backend for QuizBank](#implemented-backend-for-quizbank) ([Issue](https://github.com/MUN-COMP6905/project-hteam/issues/104) / [PR](https://github.com/MUN-COMP6905/project-hteam/pull/109)):** Added the backend functionality for the UI to show DB data.

- **[Integrate Student Dashboard and Quizbank with the backend](#integrate-student-dashboard-and-quizbank-with-the-backend) ([Issue](https://github.com/MUN-COMP6905/project-hteam/issues/120) / [PR](https://github.com/MUN-COMP6905/project-hteam/pull/135)):** Rebase the  integration branch with the master.

- **[Password Checker](#password-checker) ([Issue](https://github.com/MUN-COMP6905/project-hteam/issues/126) / [PR](https://github.com/MUN-COMP6905/project-hteam/pull/134)):** A separate class to check the user password and to make sure all the proper conventions are followed.

- **[Added methods in the data layer](#added-methods-in-the-data-layer) ([Issue](https://github.com/MUN-COMP6905/project-hteam/issues/126) / [PR](https://github.com/MUN-COMP6905/project-hteam/pull/134)):** Added new functions in the data layer to enhance functionality.

- **[Unit Testing](#unit-testing) ([Issue](https://github.com/MUN-COMP6905/project-hteam/issues/126) / [PR](https://github.com/MUN-COMP6905/project-hteam/pull/134)):** Wrote unit test for differnet compopent of data layer and other classes.

- **[Update the Readme File](#update-the-readme-file) ([Issue](https://github.com/MUN-COMP6905/project-hteam/issues/136) / [PR](https://github.com/MUN-COMP6905/project-hteam/pull/137)):** Updated the group readme file for sprint 2 and assignment 3.

- **[Participated in solving issues and code review](#participated-in-solving-issues-and-code-review)**

## Approaches

### [Implemented User Session](https://github.com/MUN-COMP6905/project-hteam/pull/88)

From the previous sprint the session were not added properly and as a result anyone could access the pages specially new pages with the direct link without being logged in. I added the user session as a result a user has to be logged in to access protected pages and unwanted access to unauthorized pages have been prevented as well.

### [Implemented Backend for QuizBank](https://github.com/MUN-COMP6905/project-hteam/pull/109)

The UI for the list of quizzes were made but there were no backend for that page. I worked on getting the data from the database form `getServerSideProps` and passed the value to the quizbank. From their the value was passed to quizTable and saved as an array which interfaced `Quiz`. Modified the UI code for better readability as well. Also added a new column to display the marks of each quiz. Necessary changes have been made on the UI code as well as DB and backend code. Furthermore, it needed to added in a [integration brach and a PR](https://github.com/MUN-COMP6905/project-hteam/pull/119) to make it compatible with the data layer.

### [Integrate Student Dashboard and Quizbank with the backend](https://github.com/MUN-COMP6905/project-hteam/pull/135)

Rebased the Student dashboard and the quizbank page with the master once the data layer was merged. There were lot of conflicts that required solving. As all the PR(s) were working simultaneously obvious conflicts were there. Required detailed understanding of all the codebase and all the other developers coding tasks to resolve the conflicts. I have tried to merge the brach but there were a lot to conflicts that could not allow me merge. We will do it on the next sprint.

### [Password Checker](https://github.com/MUN-COMP6905/project-hteam/pull/134)

Added a class to check the password that user writes to sign up to ensure all the convention are there. It checks if the user has inputted 8 characters or not, contains numeric and special characters and so on. Also wrote unit testing for that as well with mocha will all the test cases.

### [Added methods in the data layer](https://github.com/MUN-COMP6905/project-hteam/pull/134)

Added multiple methods in the data layer like finding user to check if the user exists or not. The purpose is to make sure if there is a user with the same email to prevent it from creating another account. Another method to find answer for the question and return a boolean value to check the answers with the user answer.

### [Unit Testing](https://github.com/MUN-COMP6905/project-hteam/pull/134)

Added unit testing for different components. But there were a lot of issues to do unit testing with mocha as it doesn't directly support TypeScript code off the book. I worked with [Adithya](https://github.com/xocolatl-aficionado) on one of his PR's called [Add tests for data layer](https://github.com/MUN-COMP6905/project-hteam/pull/132) to make the mocha working by adding runner classes and so on.

After the mocha was properly working all the other back end developers could focus on writing there own unit testing. I worked on writing the unit test for the [password checker](#password-checker) to ensure it passes all the test cases. Furthermore, wrote test cases for few of the functions in the [data layer](#added-methods-in-the-data-layer) such as `finduser`, `checkQuesAns` and so on.

### Participated in solving issues and code review

When there were new issues created by other developers with help-wanted. I tried to solve them from my expertise ([Issue 1](https://github.com/MUN-COMP6905/project-hteam/issues/94), [Issue 2](https://github.com/MUN-COMP6905/project-hteam/issues/123), [Issue 3](https://github.com/MUN-COMP6905/project-hteam/issues/90)) and also commented on developers code bases when they created a new Pull Request and asked for changes when necessary.

### Update the Readme file

Updated the main readme file for this sprint and documented all the links and changes. 

## State of Completion

### [Implemented User Session](#implemented-user-session):

The session has been added completly on all the pages with added feature of user role. It can be safely said that the pages cannot be accessed directly without logged in. Even after logged in a student will not be allowed to access a page for admin and vice versa.

### [Implemented Backend for QuizBank](#implemented-backend-for-quizbank)

The backend functionality to show the list of quizzes has been properly completed. All the quiz that are on the MongoDB database shows correctly. However, we still do not have the option to attempt the quiz in this sprint and it will be worked on the next sprint.

### [Integrate Student Dashboard and Quizbank with the backend](#integrate-student-dashboard-and-quizbank-with-the-backend)

The codebase has not been successfully merged to the master branch as I have tried to merge the branch but there were a lot to conflicts that could not allow me merge. Due to time constraint as I couldn't solve all the conflicts, I will do it on the next sprint.

### [Password Checker](#password-checker)

This is a stand alone class which takes the string input and checks whether all the cases are up to the convention or not. We still do not have the sign up functionality ready but it will be used on the sign up to ensure strong password is given.

### [Added methods in the data layer](#added-methods-in-the-data-layer)

The data layer contains a lot of functionalities that all the developer wrote individually. Most of the functionalities are being used in the project to separate the DB code with the UI code. There are few functions which are currently not being used.

### [Unit Testing](#unit-testing)

All the unit tests are properly working and passing all the test cases. There were few issues to run the unit tests with the data layer as it uses TypeScript and MongoDB but it has been overcome and successful test cases have been written to ensure the functions works what they are supposed to perform.

### [Participated in solving issues and code review](#participated-in-solving-issues-and-code-review)

I have tried my level best to help the other developers with there queries in the `help-wanted` issues. Most of them were successful in solving the problems. Also, did extensive code as well as functionality reviews on all the PR's asked for clarification and changes when necessary. The developers made all the necessary changes when requested.

## Design Principles

As I mostly worked on the backend with the users and with the quizbank. The project is done using NextJS which enforces one to use SOLID architecture in a sense and makes the user put all the data in specific folder architecture. Also the data layer that we worked on and I added couple of methods to it as well is interfaced and separated form the UI part. Although the drawback is that to pass the data from data layer to frontend the UI should not know about the concrete class but it does. The data layer implements the `IGetQuizData` to ensure that all the functionalities have been implemented. The functions in the data layer each has one of the tasks for example the function that I wrote `findUser` looks to find the user itself and `checkAns` checks the answer of the quiz and returns boolean value. Moreover, `PasswordCheck` class adds the single functionality of checking the password and letting the user know if it has met all the cases or not. In summary it follows the SOLID design as there are interface and abstractions there and each functionalities are depended and decoupled from each other.

## Code Review Process

All the working modules were first tested on the local machine and then were put on Codesandbox so that it could be assured that the code would work on other devices. The codesandbox URL were shared on the PR(s) for other developers to check, After that, the pull requests were made and the other project members reviewed the codes. The codes were reviewed on Functionality, Complexity, Naming, Comments, Documentations. Once everyone has done reviewing with there and given there approvals it was merged into the main branch. For this sprint there were unit tests to ensure the codes functionalities as well.
