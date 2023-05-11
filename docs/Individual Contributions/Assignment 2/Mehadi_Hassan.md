# Mehadi Hassan 202287115

This document highlights the individual tasks done, the approaches that were used, the state of completion, the design principles used, and how the code was reviewed. This document also highlights any issues that arose and how they were addressed personally and through the team.

- [Mehadi Hassan 202287115](#mehadi-hassan-202287115)
  - [Individual Tasks Done](#individual-tasks-done)
  - [Approaches](#approaches)
    - [Created Basic App Structure](#created-basic-app-structure)
    - [User Authentications](#user-authentications)
    - [Bug Fix - Logged User Name was not showing](#bug-fix---logged-user-name-was-not-showing)
  - [State of Completion](#state-of-completion)
  - [Design Principles](#design-principles)
  - [Code Review Process](#code-review-process)

## Individual Tasks Done

As per the discussion with the team, I was assigned the following tasks. The issue links are also embedded in the headlines.

- **[Created Basic App Structure](https://github.com/MUN-COMP6905/project-hteam/issues/27):** As the team discussed and settled on working on NextJs and MongoDB as the project stack there was a necessity for a basic structure. I created a basic application where we used Next.JS and MongoDB where all the basic functionalities like add, delete, update and fetch. Other developers will use this as a skeleton code and work on top of that.

- **[User Authentications](https://github.com/MUN-COMP6905/project-hteam/issues/35):** The user authentication was done by using NextAuth which provides authentication features. In our project, we have used the credential providers although there are other options like signing with Google, GitHub and so on which we may use in the later sprints. The task checks the user email and password that is received from the user input and checks with the MongoDB server. If the values are correct, the session is updated to authenticated and routes the user to the next page.

- **[Bug Fix](https://github.com/MUN-COMP6905/project-hteam/issues/63):** After logging in the navbar did not use to show the user name in the top left corner. I checked the code that the other developer worked on and found the issue of the code. The issue was the session part was not properly added to that portion of the code. I added the session part and made the user name fetched from the browser cache/session and plotted on the nav bar.

## Approaches

### Created Basic App Structure

I studied NextJS and MongoDB documentation to understand how the process and the architecture work. Tried to make a couple of demo applications.  Created the MongoDB database with a dummy collection for testing purposes. Also used the MongoDB adapter to connect the Next.JS code to the MongoDB database. The final working version was a post application which had all the CRUD applications with MongoDB and a working NextJS app. This base application had all the core functionalities like how to create the NextJS application, Connect the MongoDB with the NextJS application, make the DB Operations and so on.
  
### User Authentications

We could have done the authentication part in a couple of ways, but we went with the NextAuth. First, l looked at all the other options and compared the ease of use, flexibility and security. NextAuth has more advantages over other libraries like OAuth, Passport, and Keycloak. First of all, as we are using NextJS so NextAuth will be easier to integrate with the project. Furthermore, it provides all kinds of authentication services starting from credentials to logging in by using Google, GitHub and other services. Lastly, the documentation was much more well-written and easier to understand. As a result, the team members and I decided to work with the NextAuth.

### Bug Fix - Logged User Name was not showing

When we were demoing the application, I noticed the username was not showing on the navbar. As a result, I went to the branch the other developer was working in and tried to go through all the codes. I found that the session containing all the user data needed to be appropriately implemented. So, I created a bug issue and started working on it. I have implemented the session part and plotted the user name on the navbar.

## State of Completion

- **Created Basic App Structure:**  
The skeleton app was completed and used by the other developers as an inspiration and was used by others as a starting point. The demo application is also available on the Issue and PR.

- **User Authentication:** The session and NextAuth have been properly implemented and working. The value is also fetched from the Database and checked for the user and the routing is also done properly. Although the passwords are not encrypted which I will do in the next Sprint.

- **Bug Fix - Logged User Name was not showing:** The bug has been fixed and the user name was showing on the navbar.

## Design Principles

As I mostly worked on the backend with user auth the user part was the center of the design. To make user access more convenient, the credential provider was used. NextJS by default forces the SOLID methodoloy where all the files are in the pages file and have to put the API in a specific folder. The auth part has been decoupled by using middleware and custom authintication. The session provider was added to the app to make sure all the pages are properly authenticated on the app structure. Also, the scalability was kept in mind as we will be going to add other login methodologies in the later sprints.

## Code Review Process

All the working modules were first tested on the local machine and then were put on Codesandbox so that it could be assured that the code would work on other devices. After that, the pull requests were made and the other project members reviewed the codes, and only after everyone's approval was it merged into the main branch.
