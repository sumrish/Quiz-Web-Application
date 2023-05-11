# Adithya Sudhan 202292768

- [Adithya Sudhan 202292768](#adithya-sudhan-202292768)
  - [Individual Tasks Done](#individual-tasks-done)
  - [Approaches](#approaches)
  - [State of Completion](#state-of-completion)
  - [Design Principles](#design-principles)
  - [Code Review Process](#code-review-process)

## Individual Tasks Done

As per the discussion with the team, I was assigned the following tasks.

- "Admin page routing"
[Issue](https://github.com/MUN-COMP6905/project-hteam/issues/61)
PR: https://github.com/MUN-COMP6905/project-hteam/pull/75

This user story was supposed to fix the routing to the /admin page that is only accessible to the admin users. It involved playing around with Next Auth settings and callbacks, which proved tricky to navigate due to the lack of sufficient documentation with respect to React code. Therefore, this effort involved substantial effort from my end since it was my first time working directly with next auth. 

- "Git + codesandbox strategy"

Issue: https://github.com/MUN-COMP6905/project-hteam/issues/84
PR: https://github.com/MUN-COMP6905/project-hteam/pull/89

This user story was intended to add more documentation regarding our Git strategy and to make a walkthrough of it so that team members could rely on it when needed. The problem with our prior strategy around using codesandbox.io was that team members ended up only uploading/pushing their code onto codesandbox.io when they were done developing locally. This is non ideal for two reasons: codesandbox.io offers the ability to develop code online directly, which can reduce development time and encourage frequent testing. By making the git process around this convoluted, I inadvertently pushed the team away from codesandbox.io for development. As team facilitator, I also did not get around to writing a full fledged wiki on the git process, which probably made the process daunting for more than 1 team member. Therefore, this PR is set to address this. 

- "Meeting notes"
Issue: https://github.com/MUN-COMP6905/project-hteam/issues/96
PR: https://github.com/MUN-COMP6905/project-hteam/pull/97

This user story was intended to add meeting notes for March 17th for which I was the note taker. 

- "Data layer"
Issue: https://github.com/MUN-COMP6905/project-hteam/issues/65
PR: https://github.com/MUN-COMP6905/project-hteam/pull/103

This user story is an architectural improvement over what the team had done prior. We used to have database code (calling mongodb libraries for example) directly intertwined with the react component code, which meant tight coupling between the front end and the backend. This PR follows somewhat the idea mentioned in note 9 about an adapter that would make both the UI code and database code depend on abstractions. However, in the current state, the UI code, that will use this data layer, does still need to import and instantiate the concrete data layer class to do operations on the db, which is still coupling, albeit lesser than before. 

- "Add unit tests"
Issue: https://github.com/MUN-COMP6905/project-hteam/issues/131
PR: https://github.com/MUN-COMP6905/project-hteam/pull/132

This user story is about adding unit tests to cover the data layer code that was committed. This involved a good amount of work fixing the configuration files so that typescript files would be run via Mocha and constitutes substantial effort. 

- "Build pipeline"
Issue: https://github.com/MUN-COMP6905/project-hteam/issues/108
This is a work in progress and could not be completed because of the time it took to write unit tests. 

## Approaches

- By thinking about the technical problems at hand in detail and discussing it with the team, we were able to come up better solutions. The PRs have ample discusison on them that show case our thinking. 


## State of Completion

Except the [work](https://github.com/MUN-COMP6905/project-hteam/issues/108) on the build pipeline, all else is merged into master. 

## Design Principles

- SOLID priciples were upheld while reviewing PRs and this is visible in the PR reviews that came after the meeting in which code review standards were updated. 

- In the item to add the data layer, I applied interface segregation and tried to make the UI independent of the backend. However, it must be noted that the front end still does need to know the constructor of the backend class to call it, which is not 100% decoupled. This may be fixed via a future PR. Pls see the description of the PRs to gain a deeper understanding of the work. 


- We are currently in discussions to introduce a middle layer to allow the database to further be decoupled from the front end. This will guide us toward a Domain driven Design. The UML diagram on the main readme shows the state of our code. 

## Code Review Process

- The team had agreed to periodic deadlines in a meeting and since then we made more regular progress toward our goals. 
- We also use a checklist to review PRs.

