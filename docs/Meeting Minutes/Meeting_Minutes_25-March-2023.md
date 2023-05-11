# Meeting Minutes H-Team 25-March-2023

Scrum Master: Majid
Note Taker: Heshani

Team meeting held online via Discord

Meeting time 9.30-11.00 PM

- Majid Khan Burki
- Adithya Sudan
- Sumrish Hanif
- Heshani Hettiarachchi
- Mehadi Hassan

## Meeting Minutes Bullets

- There were two main purposes to the meeting. 
1. Give an idea about the back end code and its current status to the front end developers
Mehadi and Majid have been working on the backend for data retrieval and connecting them with the front end code and Adis has been working on a middle layer for separating the database from the UI. 

- Since the base repositories were different and Mehadi's and Majid's work will have potential to conflict, they were suggested to commit their work into an integration branch first. (This merging will be happen by monday - 27/03/2023)
- All the members were reminded to review their work and add comments on the concerns by Sunday so that they can attempt the merge after resolving if there are any conflicts in their individual tasks. 

2. To come to a team agreement about the mongodb database data retrieval model for displaying in quiz bank UI
For data retrieval.
- Adi and Magid have worked separately on this and came up with 2 approaches. So a discussion was held by explaining the two models and comparing the two modes with the pros and cons in order to find the best modal to go ahead with. 
- After the discussion, the team came to a conclusion to move forward with Adi's proposed model since it was feasible to overcome situations like data deletion. Majid has used the mongodb object id of a quiz as the identifier of a quiz and the problem was, once a data is deleted, this object id changes in a re insertion to the database. 

Adi's proposed model


![model-adi](discussionResources/25-3-2023/data%20retrival%20model%20-%20Adi.png)

Magid's proposed model


![model-majid](discussionResources/25-3-2023/data%20retrival%20model%20-%20Majid.png)

### Also the following points were discussed

* Members have found issues in codesandbox since it occurs a 500 - 501 server side unknown issues. Adi said he is working on finding an alternative solution which is available for "free".

* Testing for UI will be done manually upon getting the professor's confirmation by Sumrish. And if there is any javascript functionality involves, testing could be added for those coding.

### Dates for meetings and deadlines

* The next team deadline was imposed as 28-3-2023 

* The next in person meeting for the code review and discussing work issues was scheduled for Wednesday 29-3-2023.

