# Majid Khan Burki 202292752

This document highlights the individual tasks done, the approaches that were used, the state of completion, the design principles used, and how the code was reviewed. This document also highlights any issues that arose and how they were addressed personally and through the team.

- [Majid Khan Burki 202292752](#majid-khan-burki-202292752)
  - [Individual Tasks Done](#individual-tasks-done)
  - [Approaches](#approaches)
    - [Quiz Retake Functionality](#quiz-retake-functionality)
    - [Integration of Email Validation Code into Sign Up Page](#integration-of-email-validation-code-into-sign-up-page)
    - [Email Validation](#email-validation)
    - [Test Cases for Email Validation](#test-cases-for-email-validation)
    - [Architecture Diagram](#architecture-diagram)
    - [Passing Objects to UI](#passing-objects-to-ui)
  - [State of Completion](#state-of-completion)
  - [Design Principles](#design-principles)
  - [Code Review Process](#code-review-process)

## Individual Tasks Done

As per the discussion with the team, I was assigned the following tasks.

- **Quiz Retake Functionality:** [Issue](https://github.com/MUN-COMP6905/project-hteam/issues/162). Wrote code for the user to be able to able to retake a quiz. This works when the user clicks on the **Retake** button next to the quizzes displayed on the *Student Dashboard*. Once the user has clicked this button, the marks for the quiz (that the user clicked the button against) are set to zero and the user is redirected to the cooresponding quiz page where the user can then retake that quiz. [Check the PR by clicking here](https://github.com/MUN-COMP6905/project-hteam/pull/188)

- **Email Validation:** [Issue](https://github.com/MUN-COMP6905/project-hteam/issues/161). Can be found under `/src/business/validation/emailCheck.ts`. Worked on this in Sprint 2 as well, however in this sprint, made some slight modifications to this code. [Check the PR by clicking here](https://github.com/MUN-COMP6905/project-hteam/pull/163)

- **Email Validation Test Cases:** [Issue](https://github.com/MUN-COMP6905/project-hteam/issues/174). Wrote test cases in Mocha for the EmailCheck class. Test cases can be found under `/test/emailCheck.test.ts`. These ensure that all the methods of the EmailCheck class work as intended. All test cases seem to pass after running `npm test`. [Check the PR by clicking here](https://github.com/MUN-COMP6905/project-hteam/pull/163)

- **Integrate Email Validation Code Into Sign Up Page:** [Issue](https://github.com/MUN-COMP6905/project-hteam/issues/161). Integrated the email validation code, found under `/src/business/validation/emailCheck.ts`, into the main sign up page. After this integration, the user will not be able to enter an email that doesn't belong to blocked domains by the organization and the user will only be able to sign up using approved email domains. [Check the PR by clicking here](https://github.com/MUN-COMP6905/project-hteam/pull/163)

- **Architecture Diagram:** [Issue](https://github.com/MUN-COMP6905/project-hteam/issues/175). Collaborated with Adithya to create an architecture diagram for this project. The architecture that we are using is an  **Onion** architecture and the diagram seems to depict that quite accurately.<br>
![Onion Architecture](docs/Architecture/onion.png)
(The figure has been collected from [here](https://dzone.com/articles/onion-architecture-is-interesting))

- **Passing Objects to the UI:** [Issue](https://github.com/MUN-COMP6905/project-hteam/issues/173). The theory here was to  pass objects instead of plain models to the UI. The reason for doing this was to incorporate different questions type into the UI with ease. However, this was not completed due to time constraints, but substantial effort was made.

- **Team Code Review:** Reviewed and verified code of team members as well on my end and gave approvals where necessary and earned.

## Approaches

Adding to the above heading, the approaches will be explained here.

### Quiz Retake Functionality

The approach here was to allow the user to retake a quiz that they have already attempted. This works when the user clicks on the **Retake Quiz** button next to a list of quizzes displayed to the users on the *Student Home* page. Once the user clicks on this button, the marks for that quiz are set to 0 and the user is redirected to the corresponding quiz page where they can retake their quiz.

### Integration of Email Validation Code into Sign Up Page

The approach here was inspired by [Mehadi Hassan's approach for password check](https://github.com/MUN-COMP6905/project-hteam/issues/155). I simply integrated the `EmailCheck` class into the *Sign Up* page. I defined the `options` which included the `allowedDomains`, `blockedDomains`, and `allowOrganizationEmail` attributes in the *Sign Up* page file where they were passed to the `verifyEmail` method of the EmailCheck class. Through that, it is ensure that the user enters the correct email only and only allow organizational email address i.e. `mun.ca`.

### Email Validation

Approach was very similar to the one used in [Sprint 2](../Assignment%203/Majid_Burki.md#email-validation) except error messages were also incorporated to be passed to the front end for the user's sake.

### Test Cases for Email Validation

The approach here was to write test cases for the EmailCheck class in mocha to test all of the methods and see if they run as intended.

### Architecture Diagram

The approach here was to use a tool such as Draw.io to draw the architecture diagram. This architecture was decided by the team and this diagram was made in collaboration with the team facilitator, Adithya.

### Passing Objects to UI

Time constraint didn't allow, hence this wasn't completed. But, effort was made. The apporach in mind was to pass objects to the UI instead of plain models.

## State of Completion

Everthing else seems to be working and complete, except for [Passing Objects to the UI](https://github.com/MUN-COMP6905/project-hteam/issues/173) as time constraint didn't allow for this to be completed. But, effort was made nonetheless.

## Design Principles

Design principles of OOP were ensured and the code was kept as decoupled as possible.

## Code Review Process

Code was diagrams were reviewed by teams on GitHub using pre-defined checklist (can be seen under PRs). PRs were only merged when approval was given by all corresponding team members.
