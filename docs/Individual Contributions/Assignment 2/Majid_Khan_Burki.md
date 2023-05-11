# Majid Khan Burki 202292752

This document highlights the individual tasks done, the approaches that were used, the state of completion, the design principles used, and how the code was reviewed. This document also highlights any issues that arose and how they were addressed personally and through the team.

- [Majid Khan Burki 202292752](#majid-khan-burki-202292752)
  - [Individual Tasks Done](#individual-tasks-done)
  - [Approaches](#approaches)
    - [Choice of Database](#choice-of-database)
    - [Database Schema](#database-schema)
    - [Retaking Quiz](#retaking-quiz)
    - [Folder Restructuring](#folder-restructuring)
  - [State of Completion](#state-of-completion)
  - [Design Principles](#design-principles)
  - [Code Review Process](#code-review-process)

## Individual Tasks Done

As per the discussion with the team, I was assigned the following tasks.

- **Create DB:** MongoDB was the choice of the database as per [team discussions](readme.md#db-choice). Hence, I created a MongoDB database on the cloud, i.e. Mongo Atlas, and shared it with the team. I also ensured the team had access to this DB.

- **Database Schema:** After team discussion and self-thought, I designed a schema for the database (which is still tentative and is subject to change) using Mongoose and wrote code for connecting with the database through Mongoose. I tested this code on my machine and it worked. Shared this with the team through Code Sandbox as well.
However, in the finalized version of the current project, the native MongoDB  adapter has been used as some problems arose after trying to incorporate Mongoose in the initial project skeleton presented by the team. Tried extensively and spent hours, but decided on the native MongoDB adapter for the time being. However, in future sprints, Mongoose/Typegoose will be incorporated as that makes the code look better and is a better practice overall.

- **Code for Retaking Quiz:** Wrote code in typescript and javascript for the API that takes values from the front end and using backend logic updates the value in the DB and displays it on the front end as well. To be specific, added functionality for the **Retake Quiz** button. However, this functionality isn’t fully complete and is subject to change in future sprints.

- **Project ReadMe:** Wrote the main [ReadMe](readme.md) for the project it self after a lot of thought and discussion with the team. For further details on what’s inside the file, refer to the [ReadMe](readme.md).

- **Folder Restructuring:** Performed clean-up and restructuring of the folders of the main project. Removed unnecessary files, used proper conventions for file names, and updated code to work on the updated folder structure. This was done to ensure easy reviewing of the project for any potential reviewer.

## Approaches

Adding to the above heading, the approaches will be explained here.

### Choice of Database

The choice of database for the project was MongoDB. I and the team came to this conclusion after an extensive discussion. SQL was brought up, but I pointed out that MongoDB pairs well with the stack that we’ve chosen, the discussion can be found in the main [ReadMe](readme.md#db-choice) as well. It’s also a good learning opportunity for the team to familiarize themself with a NoSQL database such as MongoDB. 

### Database Schema

The schema for the database was designed keeping the concept of de-coupling in mind. Two collections exist in the database, Students and Quizes. This is subject to change and will be updated in future releases. For the Quiz collection specifically, I had a more document-nested approach and the team had a different approach. In the end, went with the approach suggested by the team as it was more simple and will prove easy to implement in the future.

### Retaking Quiz

The approach used for the time being is that when a student clicks on the **Retake Quiz** button, their current quiz score is updated to -1 on the front end as well as the DB. The score wasn’t set to 0 as getting a 0 on the quiz is a possibility. A -1 score on the quiz indicates that the quiz needs to be retaken.

### Folder Restructuring

The approach for this was to use industry conventions and easy-to-read names for the files. Changes in the code were made appropriately.

## State of Completion

**DB Schema:** The current schema is tentative and is not being used in the project explicitly, however, this will be added in future releases. Mongoose will replace the native MongoDB adapter and the schema defined through Mongoose will be incorporated.
**Code for Retaking Quiz:** The current functionality only sets the value to -1 for the marks once the student clicks on **Retake Quiz**. The actual redirection needs to be coded.
**Project ReadMe:** The project ReadMe is tentative and is subject to change as the project matures. However, for the time being, I would say it’s 90% complete. This value is arbitrary.

## Design Principles

I tried to ensure the code is as decoupled as possible, however, this can be improved. The code is very coupled in the current state. 

## Code Review Process

The code was reviewed by running it first on my local machine. Then run it on Code Sandbox and share it with the team.
