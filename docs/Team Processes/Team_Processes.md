# Team Processes

This document contains information about the team standards and processes that were adopted for this project.

## Git

- Branches will be named `<name-of-dev>/<issue-#>/<oneline-description>`.

- As and when conflicts occur with the master branch, a 
git rebase will be executed to align the branch and maintain a clean history



## Technical Discussions

- As and when necessary, the team will get together on Discord and call/screen share to hold technical meetings and decide on how to solve the present issue. 

## User stories

- A format was agreed upon for user stories and this was made a template so that the team can easily created via the Issues tab on github. 

## Testing

- codesandbox.io wil be used to test code so that everyone can ensure their code runs uniformly w/o local issues.
- Mocha unit tests will be added to ensure the developers tasks are working properly at the same time it is not breaking any previous implementations.

## Deployment

- codesandbox.io can be used to 'deliver' code so that
- Devs can use the link to attach to the PR to prove working code
- The marker can use a url to test the final product and see the code.

## Deadlines

- The team agreed on weekly deadlines to merge code so that bottlenecks due to certain work item scould be avoided.
- These deadlines were followed except in some minor cases due to issues resolving conflicts in Git. **The code deadlines were set to 19th March, 24th March, 28th March.**

## Problems Faced

- Since the technology stack was new for all team members, all members were involved in their own tasks most of the time and reviewing and integrating each other's work posed a challenge.
- **Resolving the conflicts between team members code combined with our rigorous standards around testing (A codesandbox link for each PR) meant that we could not merge in new functionalities that are mostly complete on the frontend and backend. We will need to try to resolve such git conflicts earlier on the next sprint.**
- Bottlenecks because of the approval process as all team members weren't available all the time.
- Lack of experience in Javascript and Typescript made debugging very difficult and since Typescript has a steep learning curve, that didn't help either.
- Some difficulty around using the free version of Code Sandbox as it doesn't allow private repos to be deployed and the free version has a CPU limitation as well.
- The free server of MongoDB Atlas has limited space which caused a bit problems for testing purposes.
- Lack of experience around Git for most team members caused problems as Git has its own learning curve.
