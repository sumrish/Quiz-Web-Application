# Sumrish Hanif  202196728

## Role and Tasks

As per the team's decision, the role assigned to me was of front-end developer and the tasks I needed to take up in the current sprint were related to the creation of a user interface of login flow which involved [login](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?pane=issue&itemId=22421511), [signup](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?pane=issue&itemId=22054995), [forgot password and reset password screens](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?pane=issue&itemId=22415991) and [routing between each screen back and forth](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?pane=issue&itemId=22421511). 

Apart from the coding task, I was assigned to document the [Minutes of meeting 3](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?pane=issue&itemId=22325110), as well as to create a [project-level UML diagram](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?pane=issue&itemId=22637885).

## Approaches

To complete these tasks, I used the **Kanban board** for tracking my performance for each task and whether I have followed the software processes properly. To do so I have created all my tasks on kanboard. In these tasks, I have written my **user stories** and added **labels** to the tasks whether those were coding, documentation, or self-study for the current sprint. On top of that, I linked the **pull requests** of that task with my issue tickets. For a better understanding of the reader, I have added **acceptance criteria** to each user story corresponding to my issue ticket.

Apart from the tracking on the Kanban board, I used **pull requests** for each of my tasks where I mentioned the link to **CodeSandBox**, where I tested my code remotely as well, as it was the proposed way from the team to follow. Even in the pull requests I have attached the **screenshot** of the screens which I have developed for this Quiz web application, and upon approval from the teammates I only merged them into the master repository of our code, so it helped me to avoid any **conflicts** from the other peers who were working on the same repo at the same time. 

For each task where possible, I have added the **codesandbox** link so the end user can easily verify each task on the run time instead of cloning each branch on his computer to verify my task. 

## Code Review

All the **UI designs** are approved by the team in the team meetings even if some changes were needed they were highlighted in my pull requests and upon resolution of those and once code review is done and approved by the team, I closed my pull request and merged my code. 

So I make sure to follow all the processes which were decided by the team for the current sprint.
As there was a working dependency between the tasks we have in this sprint so I created several pull requests instead of just doing my whole work in the single pull request and blocking other teammates to do their work. Once after my screen was created I just merged that in the repo so the next person can work on it as well instead of waiting for me to complete the whole user interface things.

As I have already explained that I create one screen and merged that in the master so the final commit of mine including every task of mine will be available in the following branch which I have listed below:

## State of completion

All the **User interface** which I was assigned to develop are completed from my end and are merged into the master repo after the consent of my team. 
All the **routing** from login to forgot password and login to signup back and forth is completely done.
Also the **UML** has been done and is posted in the main project read.me
**Minutes of Meeting 3** are posted in the meetings folder. 

## Design Principles

For the implementation of the front end, we decided to use Chakra UI which is a modular and accessible component library that is used for building the react applications. I applied the DRY and decoupling concepts while implementing the UI, I made sure that my code is not repetitive and that it is even separated from the middleware and database. I have followed the modularity approach that all my screens are under tha pages folder and even all the user interface part is kept separate from the business logic to ensure our application has code that is completely decoupled from the business logic and to ensure the understandability of the code JSDoc has been added in each of my respective code file so the reader can easily understand.
