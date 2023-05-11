# Sumrish Hanif  202196728

## Role and Tasks

As per the team's decision, the role assigned to me was of front-end developer and designer for designing all the UI's assignmed to me. The new coding tasks I needed to take up in the current sprint was related to the creation of a Quiz Result UI once the student has taken up the quiz [Quiz Result](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?pane=issue&itemId=23252241). Apart from that the coding tasks from the previous sprint which I have modified in the current sprint is [Sign Up,Forgot Passsword and Reset Password](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?layout=table&visibleFields=%5B%22Title%22%2C%22Assignees%22%2C%22Status%22%2C%22Labels%22%5D&pane=issue&itemId=23539546).
In above task, I modified the screen of signup by adding some new input fields like Username and Confirm Password and also added the require checks for all the fields. Similalry for the rest of two screens of forgot password and reser password, continue button was removed and adding direct routing according to the user input. Added toast messages for succcess/failure. Added require checks for each input field.

Apart from the coding task, I shared the [code review checklist](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?visibleFields=%5B%22Title%22%2C%22Assignees%22%2C%22Status%22%2C%22Labels%22%5D&sortedBy%5Bdirection%5D=desc&sortedBy%5BcolumnId%5D=Assignees&pane=issue&itemId=24303045) with the team, to be used as a standard for the each pull request approval. 

Also I was assigned to document the [Minutes of meeting 2](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?layout=table&visibleFields=%5B%22Title%22%2C%22Assignees%22%2C%22Status%22%2C%22Labels%22%5D&sortedBy%5Bdirection%5D=desc&sortedBy%5BcolumnId%5D=Assignees&pane=issue&itemId=23247598).

For the design part, the UI was designed using Figma [Quiz Result UI](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?layout=table&visibleFields=%5B%22Title%22%2C%22Assignees%22%2C%22Status%22%2C%22Labels%22%5D&sortedBy%5Bdirection%5D=desc&sortedBy%5BcolumnId%5D=Assignees&pane=issue&itemId=23250496).

## Test Cases

**Test Cases** for each feature has been added where possible. As I was dealing with the core UI, So I started with the [automated test cases](https://github.com/MUN-COMP6905/project-hteam/issues/110#issuecomment-1482786055) but was getting too much diffciulty in doing that as it was above my knowledge. So I shifted my approach to the **Manual Unit testings** using the Black Box testing and having the decision table technique for that [Login,](https://github.com/MUN-COMP6905/project-hteam/issues/111) [SignUp,](https://github.com/MUN-COMP6905/project-hteam/issues/110) [Forgot Password-Reset Password](https://github.com/MUN-COMP6905/project-hteam/issues/113). As the Quiz Result UI was having no input values, It is just displaying results of the student which has not been integrated to the backend yet. So as there's no points to test in in the Quiz Result screen, so there were no test cases for that.

## Approaches

To complete these tasks, I used the **Kanban board** for tracking my performance for each task and whether I have followed the software processes properly. To do so I have created all my tasks on kanboard. In these tasks, I have written my **user stories** and added **labels** to the tasks whether those were coding, documentation,testing,help wanted, enhancement and the current sprint. On top of that, I linked the **pull requests** of that task with my issue tickets. For a better understanding of the reader, I have added **acceptance criteria** to each user story corresponding to my issue ticket.

Apart from the tracking on the Kanban board, I used **pull requests** for each of my tasks where I mentioned the link to **CodeSandBox**, where I tested my code remotely as well, as it was the proposed way from the team to follow. Even in the pull requests I have attached the **screenshot** of the screens which I have developed for this Quiz web application, and upon approval from the teammates accoridng to the coding standards, I only merged them into the master repository of our code, so it helped me to avoid any **conflicts** from the other peers who were working on the same repo at the same time. 

For each task where possible, I have added the **codesandbox** link so the end user can easily verify each task on the run time instead of cloning each branch on his computer to verify my task. 

## Code Review

All the **UI designs** are approved by the team in the team meetings even if some changes were needed they were highlighted in my pull requests and upon resolution of those and once code review is done and approved by the team, I closed my pull request and merged my code. 

So I make sure to follow all the processes which were decided by the team for the current sprint.
As I mentioned earlier, I shared a check list for the code reviews, which was followed for all the coding tasks PRs and once the status was set approved from each team member,than the PR was merged into the master branch.

## State of completion

All the **User interface** which I was assigned to develop for this sprint and enhancements  are completed from my end and are merged into the master repo after the consent of my team. 
All the **Test cases** from login, sign up and forgot password, reset password features are written extensively, considering all the possible inputs and expected outcomes of each test performed. 
Also the **Figma UI** has been done and is posted in the main project docs folder under Quiz_Result_Figma_UI.
**Minutes of Meeting 2** are posted in the meetings folder. 

## Design Principles

For the implementation of the front end, we decided to use Chakra UI which is a modular and accessible component library that is used for building the react applications. I applied the DRY and decoupling concepts while implementing the UI, I made sure that my code is not repetitive and that it is even separated from the middleware and database. To acheive that I added the header and footer files in the components folder, so for same header and footer we can just import those files for the new screen. Hence it increases the **reuseability**, **maintainability**, and **de-coupled** the code as well. I have followed the modularity approach that all my screens are under tha pages folder and even all the user interface part is kept separate from the business logic to ensure our application has code that is completely decoupled from the business logic and to ensure the **understandability** of the code JSDoc has been added in each of my respective code file so the reader can easily understand.
