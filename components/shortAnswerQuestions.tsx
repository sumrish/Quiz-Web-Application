/**
 * Creating the component for displaying short answer quiz with pagination
 */
import { useState } from "react"; //for pagination
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Flex,
  useToast,
} from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";

/**
 * to load css styles to the page since there are no default pagination in Chakra UI
 */
import GlobalStyles from "./globalStyles"
import Question from "../src/business/models/question";
import adminHome from "../pages/admin";
import { useSession, getSession, signIn, signOut } from "next-auth/react";

/**
  Function to update the marks in the database.
  @async
  @function
  @param {string} email - The email of the user taking the quiz.
  @param {string} subject - The subject of the quiz.
  @param {number} marks - The marks scored by the user.
  @returns {Promise<void>} Nothing.
*/

export async function updateMarks(email: string, subject: string, marks: number) {

  try {
    const options: any = {
      method: "POST",

      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },

      body: `{"marks": ${marks}, "subject": "${subject}", "email": "${email}" }`,

    };

    let response = await fetch(`/api/quizes/quizMarks`, options)

  } catch (error) {
    console.log("An error occured while updating marks ", error);
  }
}

type Question = {
  id: number;
  text: string;
};

interface ShortAnswerQuestionsProps {
  questions: Question[];
  subjectValue: string;
  emailValue: string;
  totalMarks: number;
}

/**
 * define question items per page for pagination
 */
const ITEMS_PER_PAGE = 3;

/**
 * Passing fetched data to the UI mapping the data fielts with form data attributes.
 * Since the questions for a quizz coming from the questionbank, there id's are not serialized, so added auto incrementing question id using indec variable
 * @returns returns a UI with short answer quizz containing quiz items(question and input for ander) and pagination for easy navigation
 */
const ShortAnswerQuestions = ({ questions, subjectValue, emailValue, totalMarks }: ShortAnswerQuestionsProps) => {
  /**
   * Calculations for pagination
   */
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();

  /**
   * Determining number of pages in total for pagination
   */

  let indexUpdate = 0;
  const totalPages = Math.ceil(questions.length / ITEMS_PER_PAGE);
  const handlePageClick = ({ selected }: { selected: number }) => {
    indexUpdate = ITEMS_PER_PAGE
    setCurrentPage(selected);

  };
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentQuestions = questions.slice(startIndex, endIndex);
  const [formValues, setFormValues] = useState([]);

  const { data: session, status } = useSession();

  const handleChange = (event, index) => {
    indexUpdate = currentPage * ITEMS_PER_PAGE;
    const { name, value } = event.target;
    const newFormValues = [...formValues];
    newFormValues[index + indexUpdate] = { ...newFormValues[index + indexUpdate], [name]: value };
    setFormValues(newFormValues);
  };

  let marks = 0

  /**
  Function that handles form submission.
  @param {Object} event - The event object for the form submission.
  */
  const handleSubmit = (event) => {
    event.preventDefault();
    let finalArray = []
    let ansGivenByUserIndexes = []
    const ansGivenByUser = (dict) => {

      for (var key in dict) {
        if (dict.hasOwnProperty(key)) {
          ansGivenByUserIndexes.push(parseInt(key.match(/\d+/)[0]) - 1);
          finalArray.push(dict[key]);
        }
      }
    }

    formValues.map(x => ansGivenByUser(x))
    let per_question_mark = 0
    per_question_mark = totalMarks / questions.length
    per_question_mark.toFixed(2);

    for (let j = 0; j < finalArray.length; j++) {
      if (questions[ansGivenByUserIndexes[j]].answer.toLowerCase() == finalArray[j].toLowerCase()) {
        marks = marks + per_question_mark
      }
    }

    updateMarks(emailValue, subjectValue, Math.floor(marks))

    const myData = { subject: subjectValue, questionCount: questions.length, marks: Math.floor(marks) }
    router.replace({
      pathname: '/student/quizResult',
      query: { data: JSON.stringify(myData) }
    })
  };


  return (
    <Flex>
      <GlobalStyles />
      <VStack spacing={10} align={"stretch"} justify={"center"}>
        <form action="" method="post" onSubmit={handleSubmit}>
          {currentQuestions.map((q, index) => (
            <Box
              key={q.question}
              bg="#F2F2E4"
              p={4}
              borderRadius="lg"
              borderWidth="1px"
              borderColor="gray.200"
              marginTop={"3"}
            >
              <FormControl id="answer">
                <FormLabel>
                  Question {startIndex + index + 1}: {q.question}
                </FormLabel>
                <Input
                  type="text"
                  id="answer"
                  backgroundColor={"white"} width="50%"
                  key={startIndex + index + 1}
                  name={`input${startIndex + index + 1}`} // use a unique name for each input
                  value={q ? q[`input${index}`] : String} // use the corresponding value from the state
                  onChange={(event) => handleChange(event, startIndex + index + 1)}
                />
              </FormControl>
            </Box>
          ))}

          <Flex justifyContent="center" mt={10}>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={totalPages}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
          </Flex>
          <Flex justifyContent="center" mt={10}>
            <Button id="submit" type="submit" colorScheme="orange" mt={4} >
              {" "}
              Submit
            </Button>
          </Flex>
        </form>
      </VStack>
    </Flex>
  );
};
export default ShortAnswerQuestions;
