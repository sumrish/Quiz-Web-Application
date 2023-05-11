import { QuizDataServiceInstance } from "../../src/business/services/dbservice";

export async function getServerSideProps() {
  let quizzes = await QuizDataServiceInstance.findAllQuizzes();
  console.log("All Quizzes retrieved: ", quizzes);

  let oneQuiz = await QuizDataServiceInstance.findQuiz("Math");
  console.log("One Quiz retrieved: ", oneQuiz);
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function DemoHome() {
  return (
    <h1>
      This page was created to demo that the data layer works. Pls check the
      console for proof.{" "}
    </h1>
  );
}
