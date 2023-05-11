# Adithya Sudhan 202292768

- [Adithya Sudhan 202292768](#adithya-sudhan-202292768)
  - [Individual Tasks Done](#individual-tasks-done)
  - [Approaches](#approaches)
  - [State of Completion](#state-of-completion)
  - [Design Principles](#design-principles)
  - [Code Review Process](#code-review-process)

## Individual Tasks Done

As per the discussion with the team, I was assigned the following tasks.

- "Find and implement a better continuous deployment strategy"
[Issue](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?pane=issue&itemId=23746462)

This user story was supposed to fix the team process of building and deploying our code. Altough code sandbox work for us, the deploys go stale after a while and we wanted to look into a way to have something free but more permanent so that our deployments dont disappear after a week or so. But I didnt have enough time to fix this, and decided other items took priority. 

- "Decouple data layer further from front end using DDD approach"

[Issue](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?pane=issue&itemId=25484153)

[PR](https://github.com/MUN-COMP6905/project-hteam/pull/183)

This user story was intended to fix the prior version of our decoupling work which,as mentioned in the submission last time, had a drawback.

Speaking in pseuducode, I turned this version:
```
>>>some front end index.ts...
import MongoQuizData from '../datalayer'
                              ~~~~
render(){
   var mqd = new MongoQuizData()
   var quizzes = mqd.findAllQuizzes() // i need to make an object mqd before i can call the method i care about
   return quizzes
}
```

into: 

```
>>>some front end index.ts...
import QuizDataServiceInstance from '../middlelayer'
                                        ~~~~~~
render(){
   //that's right - no more 'new'() ing things in the UI layer. Therefore datalayer implementation details no longer 'leak' into the front end
   var quizzes = QuizDataServiceInstance.findAllQuizzes() // i can simply call the method i care about
   return quizzes
}
```
by utilizing the single design pattern and the ```Domain Driven Design``` paradigm. 
Unit tests were added in this item. 

- "Protect our master branch from mishaps using a pipeline trigger"
[Issue](https://github.com/orgs/MUN-COMP6905/projects/11/views/1?pane=issue&itemId=24372249)

[PR](https://github.com/MUN-COMP6905/project-hteam/pull/150)

This user story was intended to preserve copies of the master branch after every merge to it, so that accidental rebases on the wrong branch / bad changes can easily be reversed with loss of effort. This is a team process improvement and is a workaround to make sure we can branch protect even using the free version of Github. As team facilitator, this issue was of prime importance since team efforts cannot be allowed to go to waste due to an accident, and a backup strategy is part of every reasonable software team. 


## Approaches

- The approach taken in the team process task was to ensure redundancy of stable code so that a backup may be used in the event of an unexpected mishap. 
- The approach taken in the decoupling code task was to apply design patterns (Singleton) and paradigms (DDD) to solving the problem of coupling. 


## State of Completion

The code task for decoupling and the yml pipeline trigger item, were merged into master. The "continuous deployment strategy" item was moved into the Wont Fix column on the board. 

## Design Principles

- SOLID priciples were upheld while reviewing PRs and this is visible in the PR reviews that came after the meeting in which code review standards were updated. 

- In the item to decouple the data layer further, I applied interface segregation, singleton pattern and domain driven design to make the UI truly independent of the backend. The details of this are available in the PR description. This fixes the issue that we promised we would fix last Sprint. 

## Code Review Process
 
- We used a checklist to review PRs like last time and filled whatever fields were appropriate. 
- Reviews this Sprint though were based more on best effort than perfection due to the time constraint (finals week). Therefore the scrutiny may be lesser than last Sprint. We also had to face many more rebases this time around than last Sprints because of the major changes we tackled this Sprint. As is obvious, these rebases affect all team members, and slows down the process of merging in due to the ehlp some team members need and the resolution that need be done on the dev's end to ensure old functionality is not broken by new code. It was a team effort tackling these rebases live (online or in person). 