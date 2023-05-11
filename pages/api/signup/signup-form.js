import { QuizDataServiceInstance } from "../../../src/business/services/dbservice";

export default async (req, res) => {
  try {
    let user = await QuizDataServiceInstance.findUser(req.body.email);

    if (user.email === "NotFound") {
      QuizDataServiceInstance.addUser(
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.role
      );
      res.status(200).json();
    } else {
      res.status(500).json();
    }
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
