# Sumrish Hanif  202196728

## Role and Tasks

As per the team's decision, the role assigned to me was of back-end developer. The new coding tasks I needed to take up in the current sprint was related to the linking of a Quiz Result UI once the student has taken up the quiz to the database [Quiz Result](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?pane=issue&itemId=25155100). Apart from that the coding tasks was to get the user input, calculate the quiz marks and store them in database corresponding to that specific user, [Marks Calculation](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?pane=issue&itemId=25138474). Apart from these tasks, as my both tasks were dependent on the othe group mate so I have to use hardcoded values to complete my tasks. But once the merging is done, I work on removing all the hardcoded parameters from the code and use all the run time values. [Remove Hardcoded Values](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?pane=issue&itemId=25584523).
Once all the code is mergerd into the integration branch and is working according to the requirement than merging of integration branch to master branch was done. [Integration Branch merged into Master Branch](https://github.com/orgs/MUN-COMP6905/projects/11?pane=issue&itemId=25674596).
While doing the merging I come to know about a bug which occurs when I skip a user input, so it just make marks calculation and correct question calculation bugy. I have open a bug corresponding to that bug following the software processes related to bugs. [Calculation Bug](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?pane=issue&itemId=25610669)

Also I was assigned to document the [Minutes of meeting 3](https://github.com/orgs/MUN-COMP6905/projects/11?pane=issue&itemId=25764208)

## Test Cases

**Test Cases** for each feature has been added where possible. As I was dealing with the backend integration, So I started with writing the unit test cases related to the functionality of storing the quiz marks in database and also fetching the marks of the corresponding user. [Unit Test](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?pane=issue&itemId=25576892)

## Approaches

To complete these tasks, I used the **Kanban board** for tracking my performance for each task and whether I have followed the software processes properly. To do so I have created all my tasks on kanboard. In these tasks, I have written my **user stories** and added **labels** to the tasks whether those were coding, documentation,testing,help wanted, enhancement and the current sprint. On top of that, I linked the **pull requests** of that task with my issue tickets. For a better understanding of the reader, I have added **acceptance criteria** to each user story corresponding to my issue ticket.

Apart from the tracking on the Kanban board, I used **pull requests** for each of my tasks where I mentioned the link to **CodeSandBox**, where I tested my code remotely as well, as it was the proposed way from the team to follow. Even in the pull requests I have attached the **screenshot** of the unit test being passed which I have developed for this Quiz web application, and upon approval from the teammates accoridng to the coding standards, I only merged my PR into the master repository of our code, so it helped me to avoid any **conflicts** from the other peers who were working on the same repo at the same time. 

For each task where possible, I have added the **codesandbox** link so the end user can easily verify each task on the run time instead of cloning each branch on his computer to verify my task. 

Following the software process that no code completely works properly, and there are always some underlying bugs which just appears under certain circumstance. Similarly, I have encountered the **bug**, and created the issue for that.  

## Code Review

All the **Pull Requesta** are approved by the team on the github, even if some changes were needed they were highlighted in my pull requests and upon resolution of those and once code review is done and approved by the team, I closed my pull request and merged my code. 

So I make sure to follow all the processes which were decided by the team for the current sprint.
There was a shared check list for the code reviews, which was followed for all the coding tasks PRs and once the status was set approved from each team member,than the PR was merged into the master branch.

## State of completion

All the **Code Tasks** which I was assigned to develop for this sprint and enhancements  are completed from my end and are merged into the master repo after the consent of my team. 
All the **Test cases** related to the backend funtionality are written extensively, considering all the possible inputs and expected outcomes of each test performed. 
There appears a **Bug** related to the user input, which because of my minimal prior knowlegde related to the chakra UI, even after spending hours I was unable to solve it so just open a bug for that and link that in the pull request as well.

## Design Principles

For the implementation of my backend tasks assigned to me, I made sure that my code is **decoupled** form the UI part. Even I added is a **modularity** in my code like seperating the database from the UI part, the database connections and method calls are made in a seperate layer which than communuicates with the database layer. So it not only increae the  **reuseability**, **maintainability** of the code but also made it decouple and very well helpful for implementing the 
**DRY** concept as well. Also it not only ensure the **understandability** for the layman to understand it easily as all the names are self explanatory and JSDoc has been added to the them.
Following the modularity approach, all the UI screens are under tha pages folder and even all the user interface part is kept separate from the business logic to ensure our application has code that is completely decoupled from the business logic and to ensure the **understandability** of the code JSDoc has been added in each of my respective code file so the reader can easily understand.

