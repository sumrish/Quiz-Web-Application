/**

A React component that renders a table of quizzes.
@param {Array<UserQuiz>} quizzes - An array of quizzes to display in the table.
*/

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Center,
} from "@chakra-ui/react";
import Quiz, { UserQuiz } from "../src/business/models/Quiz";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";



/**
 * Interface props to define the Quiz
 */
interface QuizProps {
  quizzes: Array<UserQuiz>;
}

export default function QuizTable({ quizzes }: QuizProps) {

  // Router object
  const router = useRouter();

  // Session object
  const session = useSession();

  // Extracting user's email from the session
  var myEmail = session.data?.user?.email;


  /**
  
  An async function that updates the marks of a quiz in the database.
  
  @param {string} email - The email address of the user taking the quiz.
  
  @param {string} subject - The subject of the quiz.
  
  @param {number} marks - The marks obtained by the user in the quiz.
  */

  const updateMarks = async (email: string, subject: string, marks: number) => {
    try {


      const options: any = {
        method: "POST",

        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ subject: `${subject}`, marks: `${marks}` }),
      };

      let response = await fetch(`/api/quizes/post?email=${email}`, options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));

      router.replace("/student/takequiz?subject=" + subject)

    } catch (error) {
      console.log("An error occured while updating marks ", error);
    }
  }


  return (
    <Table variant="striped">
      <Thead>
        <Tr>
          <Th>Quiz Name</Th>
          <Th>Subject</Th>
          <Th>Quiz Type</Th>
          <Th>Marks</Th>
          <Th textAlign={"right"}></Th>
        </Tr>
      </Thead>
      <Tbody>
        {quizzes.map((userQuiz) => (
          <Tr key={userQuiz._id}>
            <Td>{userQuiz.name}</Td>
            <Td>{userQuiz.subject}</Td>
            <Td>{userQuiz.type}</Td>
            <Td>{userQuiz.marks}</Td>
            <Td textAlign={"right"}>
              <Button
                colorScheme="orange"
                onClick={() => updateMarks(myEmail ?? "", userQuiz.subject, -1)}
              >
                Retake Quiz
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
