# Heshani 202292233

This document highlights the individual tasks done, the approaches that were used, the state of completion, the design principles used, and how the code was reviewed. This document also highlights any issues that arose and how they were addressed personally and through the team.

## Table of Contents

- [Individual Tasks Done](#individual-tasks-done)
- [Approaches](#approaches)
- [State of Completion](#state-of-completion)
- [Design Principles](#design-principles)
- [Code Review Process](#code-review-process)

## Individual Tasks Done

As per the discussion with the team, I was assigned the following tasks.

- **Creating the Website Template:**  I was assigned to create the website template for a web application. I have created a figma wireframe to showcase my idea for the home pages and shared the file with the team for suggestions which could be made directly to the figma file as comments.
[Figma Wireframe](https://www.figma.com/file/aR1KQFndPcvA3XuTrpHL72/Quizzeria-App-UI-Wireframe---COMP-6905-HTeam?node-id=0%3A1&t=T9fPepdqKFdu7nj8-0)

Find the task issue here[Task Issue](https://github.com/orgs/MUN-COMP6905/projects/11?pane=issue&itemId=22056720)

- **Implementing the home page for Students:** This is the main UI for the students or the quiztakers which they see just after a successful login. This was done by Chakra UI and typescript with dummy data and successfully merged to the team repository  for the backend developers to feed data for this view from the database.
[Task Issue](https://github.com/orgs/MUN-COMP6905/projects/11?pane=issue&itemId=22319027)

- **Implementing the home page for Admins:** This is the main UI for the admins or the people who add and manage quizzes, which they see just after a successful login. This was done by Chakra UI and typescript with dummy data and successfully merged to the team repository  for the backend developers to feed data for this view from the database.
[Task Issue](https://github.com/orgs/MUN-COMP6905/projects/11?pane=issue&itemId=22319082)

## Approaches

Adding to the above heading, the approaches will be explained here.

### Choice of Chakra UI for implementing User Interfaces

I was assigned to create the web template for the sign and we came to a team agreement for using Chakra UI for front end design,  since it is a popular open-source user interface (UI) component library that provides a set of reusable UI components for building modern and responsive web applications.

### Selection of Chakra UI for the implementation of UI can be justified with the following reasons

- It is built on top of React, a popular JavaScript library for building user interfaces. So it is compatible with all the React frameworks.
- It has [separate documentation for Next.JS](https://chakra-ui.com/getting-started/nextjs-guide) including video guides.
- Wide range of UI components (buttons, forms, cards, grids) which can be easy to integrate with Next.JS. These components are already optimized for accessibility and responsiveness and with that, supports speedy rendering.
- Chakra UI components are designed to be flexible and extensible. So the customizations can be  done easily.

### Design and Develop the website templates

Design and developing the User interfaces was done in following steps:

1. Discussed the stack of the product and finalized the UI in Chakra UI Since we had decided to do the development with Next.js and typescript, I checked how we could use it in our app environment.
2. Designed basic wireframe for the initial screens using the chakra UI public github in Figma and shared with the team, so that they could add direct comments to the file. Figms is a great tool for creating prototypes in a shareable environment. With the team agreement for the wireframes, I moved to the implementation process.
3. Investigated how to integrate Chakra UI in a Next Js / Typescript environment -  this was done as a self study task.
4. Upon the agreement with the team, got the task defined to the current sprint as  creating the basic web layout and home pages for the student and the admin
5. Implemented Website Template using reusable components (Navigation bar / Footer / Title card)
6. Implemented Home Page for Students
7. Implemented Home page for Admins
9. Merged the implementations to the main branch after the code reviews, and upon approval of all the team members.
8. All the codes are well defined with the JS docs comments to be used by the other developers in the team.

## State of Completion

- Creating the website template is completed and have done the two home pages and with the team’s agreement for this sprint.
- All the work is reviewed by all the team members and upon the approval comments from all of them in the issue,  and successfully merged to the main branch.
- Search and logout functionalities are postponed to the next sprint upon the team agreement.

## Usage of Design Principles

- **Dry:**  Used the design principle DRY by using the reusable components. In react, we can create components for common UI features like Navigation Bar, Footer, Text Cards. Then we can simply create layout pages simply using those web components we created. So we do not have to repeat creating common features in every page.

- **Decoupling:** Decoupled the design from the Quiz module design by using only a JSON of data as an interface which the module has sent to the database.

- **SOLID:** By assigning single responcibility for each component

## Code Review Process

- Each time, code is done in sepatate branches addressing an issue in the Kan Board.
- Once a single issue is addressed, it is first run in the local machine and uploaded to the codesandbox.io for testing in a cloud environment. The codesandbox.io code is shared in the issue description and everyone can test the part individually and provide their comments or approvals.
- The codes were merged to the main branch only after getting the approval of all the developers.
