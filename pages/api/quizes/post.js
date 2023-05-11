/**

A default export function that updates the marks of a user's quiz using the QuizDataServiceInstance
@async
@function
@param {Object} req - The request object containing the user's email, subject and marks
@param {Object} res - The response object that sends back the updated post
@throws {Error} - If an error occurs while updating the marks
*/

import  { QuizDataServiceInstance } from "../../../src/business/services/dbservice"

export default async (req, res) => {
  try {
    
    
    const { email } = req.query;
    const {subject} = req.body;
    const { marks } = req.body;

 
    var post = await QuizDataServiceInstance.resetUserMarks(email,subject,marks);

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};