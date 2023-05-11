import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../../components/ResultHeader";
import Footer from "../../components/Footer";
import Result from "../../components/Result";
import { Box, Container, Card, Text, Button, Stack} from "@chakra-ui/react";
import MongoQuizData from "../../src/data/dbconnection";
import Quiz from "../../src/business/models/Quiz";
import Student from "../../src/business/models/Student";
import { useRouter } from 'next/router'

interface QuizBankProps {
  quiz: Quiz;
  subject: string;
  questionCount: number;
  marks: number;

}

let subject, questionCount = 0 , marks = 0;;

export async function getServerSideProps(req) {
  try {
    let data = JSON.parse(req.query.data)

    var qd = new MongoQuizData();
    subject = data.subject;
    questionCount = data.questionCount;
    marks = data.marks;
    console.log(subject , questionCount, marks)
    let quiz = await qd.findQuiz(subject);
    return {
      props: {
        quiz: JSON.parse(JSON.stringify(quiz)),
        subject: subject,
        questionCount: questionCount,
        marks: marks

      },
    };
  } catch (e) {
    console.error(e);
  }
}
/**
 * Function to build the Student Quiz Result page with components
 * @returns the Quiz Result page for students build with the components Navigation Bar, Report Card, anf optionns to switch to various views and the footer. 
 */
export default function QuizResult(quiz: QuizBankProps) {
  const router = useRouter();

  const handleSubmit = async (e: any) => { 
    router.push("/student") 
  };


  let per_question_mark = 0
  per_question_mark = quiz.quiz.maxMarks / quiz.questionCount
  console.log("marks:" , marks)
  console.log("per_question_mark:" , per_question_mark)
  let correct_question = quiz.marks / per_question_mark

  return (
    <>
      <Head>
        <title>Quiz App</title>
        <meta name="description" content="Quiz App Home for students" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <NavBar />
          <Box justifyContent="center">
            <Result/>
            <Container maxWidth='64vw' minHeight="20vh">
                    <Card bgColor='#D9D9D9'
                    maxWidth='100vw' minHeight="25vh"
                    borderRadius={'10px'} 
                    marginStart={16}
                    >
                        <Text align={'center'} py={1} fontSize={20} fontFamily={"Work Sans"} fontWeight={"bold"} color={"gray.800"}>Your Final Score: {Math.floor(quiz.marks)}</Text>
                        <Text align={'center'} py={1} fontSize={20} fontFamily={"Work Sans"} fontWeight={"bold"} color={"gray.800"}>Maximum Score: {quiz.quiz.maxMarks}</Text>
                        <Text align={'center'} py={1} fontSize={20} fontFamily={"Work Sans"} fontWeight={"bold"} color={"gray.800"}>Correct Questions: {Math.ceil(correct_question)}</Text>
                        <Text align={'center'} py={1} fontSize={20} fontFamily={"Work Sans"} fontWeight={"bold"} color={"gray.800"}>Total Questions: {quiz.questionCount}</Text>
                    </Card>
                </Container>
          </Box>
          <Box flex="1"  mx="auto" justifyContent="center">
                 <Stack  spacing={20} mt={14}  direction='row'>
                            <Button colorScheme="orange" onClick={ handleSubmit } >Main Menu </Button>
                        </Stack>
          </Box>
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
}
