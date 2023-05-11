# Heshani 202292233

This document briefs the individual tasks done, approaches used for completing the tasks, state of the task, how the design principles were utilized in the code, how the tests for the code done and also highlights the issues that arose and how they were addressed addressed 

## Table of Contents
- [Individual Tasks Done](#individual-tasks-done)
- [Approach used for the individual tasks](#approach-used-for-the-individual-tasks)
- [State of Completion](#state-of-completion)
- [Utilization of Design Principles](#utilization-of-design-principles)
- [Code Review Process](#code-review-process)
- [Implementation of test cases](implementation-of-test-cases)
- [Issues faced and How they were addressed](issues-faced-and-how-they-were-addressed)

## Individual Tasks Done
There were 2 new main tasks assigned to me for this sprint and I added some enhancements for my tasks of my previous sprint. In this sprint, we were focusing on students or the quiz takers and we needed to complete design and implement all the UI Screens for the students. Along with the Implementation I had to create unit tests for my work. 

### Design Tasks:
1. ### Designing Wireframes for Student/Quiztakers UI pages via figma [Task](https://github.com/MUN-COMP6905/project-hteam/issues/76)

* [Figma Wireframe :](https://www.figma.com/file/aR1KQFndPcvA3XuTrpHL72/Quizzeria-App-UI-Wireframe---COMP-6905-HTeam?node-id=0-1&t=QD6qTC2MUkH9SUEq-0)

* [UI design PDF:](../../Figma%20UI%20Wireframes/Quizzeria%20UI%20prototype%20for%20students%20-%20take%20a%20quiz.pdf)

* [UI design pdf preview](https://github.com/MUN-COMP6905/project-hteam/blob/ff2828180a5407ea9b8024c6ec3d39d0740bf4e5/docs/Figma%20UI%20Wireframes/Quizzeria%20UI%20prototype%20for%20students%20-%20take%20a%20quiz.pdf)


### Coding Tasks:
1. ### Implementing Quiz Bank Screen (UI) for students [Task](https://github.com/MUN-COMP6905/project-hteam/issues/45)
This is the second tab of the main menu for students. This view contains all the unattempted quizzes available to the student who is logged in to the system. 
The student can check all the available quizzes, select one to attempt and attempt that quiz by clicking on the “Take a Quiz” button displayed along with all the available quizzes.
As an enhancement to the user experience (UX in front end development), pagination has been added to the quiz list, so that the user does not have to scroll along lengthy quiz lists, he can just navigate among them using page numbers.

2. ### Implementing Take a Quiz Screen (UI) for students [Task](https://github.com/MUN-COMP6905/project-hteam/issues/77)
When a student clicks on the “Take a Quiz” button along with a quiz, he will be redirected to this screen in order to attempt the intended quiz. With the team agreement, by default this will be a short answer quiz for this sprint.
Pagination is added to the question list as well, so that the quiz taker can easily navigate within the questions and the timer is kept appearing  to the quiztaker without being hidden. 

3. ### Enhancements to the Student Home / Dashboard screen (UI) by optimizing the code and applying some design enhancements (Task from previous sprint) [Task](https://github.com/MUN-COMP6905/project-hteam/issues/116)
Pagination was added to this page so that the users can easily navigate between the quizzes. 
Also styles , colors, fonts of the nav bar and the headings of the site have been improved.


### Testing Tasks / Unit Testing
1. ### Implementing Unit tests for the above UI tasks [Task](https://github.com/MUN-COMP6905/project-hteam/issues/129)


### Documentation Taks
1. #### Documentation of Meeting minutes [Task](https://github.com/MUN-COMP6905/project-hteam/issues/121)
Notes were recorded in the meeting on 25-3-2022 which I was the Note taker.And made them available to the team so that everyone can follow up the team decisions taken. 

2. #### Adding available UI scenes to the main readme file under “Available Screens” section.

Also, when a self study is required, we are creating issues under the label self study [eg: Task](https://github.com/MUN-COMP6905/project-hteam/issues/122) and whenever help is needed for resolving an issue we are creating issues under the label help wanted [eg: Task](https://github.com/MUN-COMP6905/project-hteam/issues/123) so that the team can get to know our current status exactly and help us to get the encountered issues resolved.


## Approach used for the individual tasks
1. After defining the intended tasks, I created issues in the kanban board and assigned them to myself with proper descriptions and labels. Added proper user stories describing the tasks. They are initially created in the backlog and moved to the “in-progress” column once I start attempting that task.
2. I created the wireframes for the design of the UI’s on Figma Prototyping tool and shared with the team so that they could add their suggestions and comments directly to the figma file or as comments to the task issue in kanban board. 
    * Even in the design, I used reusable components in designing the figma file applying DRY concept in designing.  
3. After discussing with the team, we modified and finalized the design and added it to the docs folder of the project for reference for everyone.
4. Implemented the UI with Chakra UI and Next Js covering all the functionalities agreed in the wireframe. 
5. For the implementation used reusable components assigning a single task for them and combining them as required in the pages utilizing DRY and SOLID design principles. So that the repetitive work was minimized since the common components like header, footer were created once and used in several plages. 
6. All the code sections are well documented with the JS doc comments for easy understanding of the other developers.
7. After completing each single task, the work is tested in the local PC and in a cloud environment called codesandbox.
8. Then the issue is moved to the needs review column. In the task description, the changes made  and the preview link of the task in a cloud based codesandbox environment is added. If it is a UI implementation, a screenshot is also added to the description for quick reviews before adding a Pull Request. 
9. Refining and updating the code happens based on the reviews and concerns in code review and comments of the PR.
10. The pages were merged upon the approval of all the team members.They all are adding comets of approval based on a list of criteria agreed in the first meeting of the sprint. 


## State of Completion

All the assigned tasks are attempted completed and successfully. Some of them are merged into the main branch after the approval of the whole team. And some are done and not merged since they are waiting for approval from all the team members. 
This state is mentioned in the main readme file. 


## Utilization of Design Principles

* **Decoupling:** Decoupled the design from the Quiz module design by using only a JSON of data as an interface which the module has sent to the database.Also decoupled the styles from the UI code as much as possible for enhancing the performance and the readability of the code. Further, Decoupling is used in all the Chakra UI components since they are predefined and the design of components are completely hidden to the UI pages they are used.  


* **DRY:** DRY stands for "Don't Repeat Yourself".Used the design principle DRY by using the reusable components. In react, we can create components for common UI features like Navigation Bar, Footer, Text Cards. Then we can simply create layout pages simply using those web components we created. So we do not have to repeat creating common features in every page.This principle emphasizes on the importance of writing clean and concise code, avoiding duplication of code, and using reusable components whenever possible. In a Next.js Chakra UI environment, this could be achieved easily.


* **SOLID:** SOLID stands for Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. These principles help to write maintainable and extensible code. In a Next.js Chakra UI environment, these principles can be applied by creating modular and well-organized code, using interfaces for component communication, and using dependency injection to manage dependencies.In the design many of the SOLID principles were addressed by using reusable components which were assigned single responsibility, managing dependencies in the pages with dependency injection, using interface pages like quiz bank, and take-a-quiz for component communication.

## Code Review Process

- Each time, code is done in sepatate branches addressing an issue in the Kan Board.
- Once a single issue is addressed, it is first run in the local machine and uploaded to the codesandbox.io for testing in a cloud environment. The codesandbox.io code is shared in the issue description and everyone can test the part individually and provide their comments or approvals.
- By each developer in the team, the code is evaluated by the following criteria. 
    * Functionality - Whether the functionality works as intended
    * Complexity - How complex and how understandable
    * Naming - Has followed the naming convensions
    * Comments - sufficient js docs
    * Documentation - proper documentation on code

- If there are any issues, concerns in the code, developers can add them as comments and the PR is not approved until all the marked issued are resolved. 
- The codes were merged to the main branch only after getting the approval of all the developers.

## Implementation of test cases

* Since my tasks were involved in UI tasks I created a manual list of checks to be done for UI testing upon the confirmation of the professor. This UI unit testing is written in the natural language and by following these checks it it ensured that the UI code is not broken.
* Added the test case file to the tests folder. 
* [Preview of Manual Test Cases for Student UI](https://github.com/MUN-COMP6905/project-hteam/blob/01d24a93a194513be36f0d20d1b4ec4e8aad90a1/test/manual-ui-testing-for-student-section.pdf)

## Issues faced and How they were addressed

For the tasks we, as a team, imposed team level deadlines so that we have enough time to do the code reviews and merging into the main branch. I could make the PR s before the deadline but for some tasks it took some more time due to the following practical issues:

* Limitations in the frameworks used and Lack of knowledge in Next js and chakra UI - A huge learning curve was involved with the tasks. 
    * There were design limitations in Chakra UI framework like their pagination library is depreciated and I had to research for alternative solutions.[eg: Help Wanted Task](https://github.com/MUN-COMP6905/project-hteam/issues/92) 
    * Again there were limitations in Next Js like it does not allow importing styles to the components. Since the alternative I found for pagination involved manual css styles I had to do an investigation to overcome this limitation.  [eg: Self Study Task](https://github.com/MUN-COMP6905/project-hteam/issues/122) 
    * Also in the “ Take a Quiz” page, I had to change the method I used for serializing the question list since I had used the question id for that. Actually questions are coming from a different question bank and in a quiz, question numbers are not in a sequential order. So after making a lot of attempts I raised a “Help Wanted” issue and had to wait for another developer to help me. [eg: Help Wanted Task](https://github.com/MUN-COMP6905/project-hteam/issues/123)
* Also getting approvals from all the developers was demanding more time even though it was really effective because the availability of each member is different. 
* Also I received worthwhile feedback and suggestions from the other developers to improve and optimize the code and since that involved a lot of investigation and research work it took some time than I expected. 
* Also sometimes the codesandbox link gives a 502 error and other developers had to wait until it is fixed in order to see the live preview of the task. 

