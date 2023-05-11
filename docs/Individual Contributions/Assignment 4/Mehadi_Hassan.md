# [Mehadi Hassan 202287115](https://github.com/mehadihn)

This document highlights the individual tasks done, the approaches that were used, the state of completion, the design principles used, and how the code was reviewed. This document also highlights any issues that arose and how they were addressed personally and through the team.

- [Individual Tasks Done](#individual-tasks-done)
- [Approaches](#approaches)
- [State of Completion](#state-of-completion)
- [Design Principles](#design-principles)
- [Code Review Process](#code-review-process)

## Individual Tasks Done

As per the discussion with the team, I was assigned the following tasks. The issue links are also embedded in the headlines.

- **[Integrated Student Dashboard and Quizbank with the backend](#integrated-student-dashboard-and-quizbank-with-the-backend) ([Issue](https://github.com/MUN-COMP6905/project-hteam/issues/120) / [PR](https://github.com/MUN-COMP6905/project-hteam/pull/135))** 

- **[Integrated Backend for the Admin Dashboard](#integrated-backend-for-the-admin-dashboard) ([Issue](https://github.com/MUN-COMP6905/project-hteam/issues/153) / [PR](https://github.com/MUN-COMP6905/project-hteam/pull/154))**

- **[Integrated backend for Sign Up Page](#integrated-backend-for-sign-up-page) ([Issue](https://github.com/MUN-COMP6905/project-hteam/issues/155) / [PR](https://github.com/MUN-COMP6905/project-hteam/pull/158))**

- **[Bugfix: Fixed the issue with empty input field and mark calculation](#bugfix-fixed-the-issue-with-empty-input-field-and-mark-calculation) ([Issue](https://github.com/MUN-COMP6905/project-hteam/issues/177) / [PR](https://github.com/MUN-COMP6905/project-hteam/pull/180))**

- **[Unit Testing](#unit-testing-and-documentations)**

- **[Participated in solving issues and code reviews](#participated-in-solving-issues-and-code-reviews)**

- **[Updated the Readme File](#updated-the-readme-file) ([Issue](https://github.com/MUN-COMP6905/project-hteam/issues/170) / [PR](https://github.com/MUN-COMP6905/project-hteam/pull/172))**

## Approaches

### [Integrated Student Dashboard and Quizbank with the backend](https://github.com/MUN-COMP6905/project-hteam/pull/135)

This is a task from previous sprint where due to time limitation and complexity of solving the conflicts I could not complete in the pervious one. The first task that I did was to solve this problem for this sprint. Removed all the hard coded values with the data layer call. Added session where necessary. As multiple developer were working on this we decided to add a integration branch before merging in to the master branch. So I made the necessary changes before the merging as there were a lot of conflicts and I had to go through the other developers work to understand and make the necessary changes.

### [Integrated Backend for the Admin Dashboard](https://github.com/MUN-COMP6905/project-hteam/pull/154)

The admin dashboard did not have the backend integrated with the db and code. I first checked how the db has been designed and what should be the ideal way of fetching and displaying all the data. First of all added a new method in the Datalayer (`findAllQuizzesWithQuizTakersCount()`) to show the available quizzes with all the values, especially the number of quiz takers. This was a complex query as I have to first go though each users and take the quiz value and match it with the existing quiz db. After both the match I have to count the quiztakers and send it to the db call. Moreover, added interfaces for the admin dashboard (AdminQuizList) to add the quizTakers, added delete button functionalities and added methods in the datalayer `unlinkQuestionFromQuiz` and `deleteQuiz`. This functions delete the quiz from the db and unlink the questions with the respected quiz. Lastly, added test cases for the `findAllQuizzesWithQuizTakersCount` `unlinkQuestionFromQuiz` and `deleteQuiz` method with added users and quizzes on the test file and ensured all the functionalities are working as intended without breaking any of the existing tasks.

### [Integrated backend for Sign Up Page](https://github.com/MUN-COMP6905/project-hteam/pull/158)

We had a sign up page for users but there were no backend integrated for that. I have added new functions in the datalayer to add new user named `addUser()` which adds user to the DB when given all the necessary fields. First of all I collected all the input that the user gave in the form. Before sending the values to the backend I wanted to ensure all the fields are okay. For example first of all it was checked if the user has input all the fields or not. Then I moved on to check if both the password and re-enter password fields are same or not. If they are not same raised an error `toast` to show the user that the passwords don't match with each other. After that I used the `PasswordCheck` function that I implemented to ensure the password is following all the conventions once it has been confirmed the value has been passed to the backend. For passing the value to the backend a separate `API` has been created by me to handle the request. Inside the `API` first I checked whether the email/user already existed or not by using `findUser` function of data layer that I implemented on the last sprint. IF the user already exists then I don't insert the value and if the user don't exist I set the response code to 200 `res.status(200)` to let the backend where the `API` was called to ensure the data has been inserted and redirect them to the sign in page with a success message. All the methods like `addUser` `findUser` `PasswordCheck` are tested by mocha unit tests.

### [Bugfix: Fixed the issue with empty input field and mark calculation](https://github.com/MUN-COMP6905/project-hteam/pull/180)

When the other developers made the quiz ui there was a bug identified where if the user skips one of the questions the marks were not properly calculated and all the other parameters were showing wrong. I decided to solve the issue. I went over thoroughly of that part and tried to understand what is causing the issue. What I found was the question indexes were being passed as `input0` , `input1` and so on, but when we move to the next page of the same quiz, the index/key again starts from `input0` instead of increasing from the last page, which shouldn't be the case.  When formulating the answers given by the user into the array, only the typed values have been inserted without any track of which question answer it is.  When checking the answers, it was being checked sequentially with the question's answer with the user answers but the user answer array was only inserting the values of typed instances. So checking them sequentially won't work. I tried to solve this issue by introducing an index parameter `ansGivenByUserIndexes` which will hold all the indexes of the questions and when the answers were being matched with the actual answers, I modified the logic to only match the indexes with the indexes of the questions that user answered. This way the function was properly calculating the marks and the other parameters.

### Unit Testing and documentations

Added unit testing for different components. All the functionalities that I have added comes with mocha unit tests which ensures the new functionalities are working as intended and not breaking any previous tasks or existing codebase.

### Participated in solving issues and code reviews

When there were new issues created by other developers or requested help in tasks, I tried to solve them from my expertise. Two of the developers were new to the backend functionalities and I helped them in solving issues. Also, commented on developers code bases when they created a new Pull Request and asked for changes when necessary.

### [Updated the Readme File](https://github.com/MUN-COMP6905/project-hteam/pull/172)

Updated the main readme file for this sprint and documented all the links and changes. 

## State of Completion

### [Integrated Student Dashboard and Quizbank with the backend](#integrated-student-dashboard-and-quizbank-with-the-backend)

The integration branch has been successfully merged into the master branch after resolving all the conflicts. The functionalities work as intended and passes all the test cases.

### [Integrated Backend for the Admin Dashboard](#integrated-backend-for-the-admin-dashboard)

The added task have been successfully merged into the master hence in the project making it one of the import functionalities of the project's admin portal. Although the edit [TODO]

### [Integrated backend for Sign Up Page](#integrated-backend-for-sign-up-page)

The task has been successfully completed and merged into the project. Now any user can create an account has an admin or student. New admin can access the functionalities of the admin dashboard whereas the students can create an account to check the quizzes they attempted and also take new quizzes.

### [Bugfix: Fixed the issue with empty input field and mark calculation](#bugfix-fixed-the-issue-with-empty-input-field-and-mark-calculation)

The bugfix has been tested by all the other developers and has successfully been merged into the integration branch of the take a quiz which has been later merged into the master. As a result, this task has been completed and resolved the bug in the other developers code.

### [Unit Testing](#unit-testing-and-documentations)

 All of my PR(s) has mocha unit tests in them. All the unit testing codes have been merged into the projects and have been successfully completed.

## Design Principles

The project is done using NextJS which enforces one to use SOLID architecture in a sense and makes the user put all the data in specific folder architecture. Also the data layer that we worked on and I added couple of methods to it as well is interfaced and separated form the UI part. All the functions that I wrote does one specific tasks and are not dependent one each other. In summary it follows the SOLID design as there are interface and abstractions which are either implemented or extended and each functionalities are independent and decoupled from each other.

## Code Review Process

All the working modules were first tested on the local machine and then were put on Codesandbox so that it could be assured that the code would work on other devices. The codesandbox URL were shared on the PR(s) for other developers to check, After that, the pull requests were made and the other project members reviewed the codes. The codes were reviewed on Functionality, Complexity, Naming, Comments, Documentations. Once everyone has done reviewing with there and given there approvals it was merged into the main branch. There were unit tests to ensure the codes functionalities as well.
