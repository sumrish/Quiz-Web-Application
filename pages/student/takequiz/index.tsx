import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../../../components/studentNavbar";
import Footer from "../../../components/Footer";
import ShortAnswerQuestionList from "../../../components/shortAnswerQuestions";
import { Box, Heading, chakra } from "@chakra-ui/react";
import { QuizDataServiceInstance } from "../../../src/business/services/dbservice";
import Question from "../../../src/business/models/question";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import { useSession } from "next-auth/react";

interface TakeAQuizProps {
  questions: Array<Question>;
  subjectValue: string;
  timeValue: number;
  emailValue:string;
  totalMarks:number;
}

export async function getServerSideProps(context) {
  const { subject } = context.query;
  const subjectValue = subject ? subject : ''; //to derive subject value from query parameters and assigning " " as default value
  try {
    let questions = await QuizDataServiceInstance.findQuestionListOfAQuiz(subjectValue);
    const quiz = await QuizDataServiceInstance.findQuiz(subjectValue);
    const timeValue = quiz?.time;
    const totalMarks = quiz?.maxMarks;
    return {
      props: {
        questions: JSON.parse(JSON.stringify(questions)),
        subjectValue,
        timeValue: Number(timeValue),
        totalMarks: Number(totalMarks),
      },
    };
  } 
  catch (e) {
    console.error(e);
    console.log("Error Occurred");
    return {
      props: {},
    };
  }
}
/**
 * Function to return Take a Quiz UI for students
 * @returns Attempt a Quiz UI for students
 */
export default function takeAQuiz({ questions,subjectValue,timeValue,emailValue,totalMarks}: TakeAQuizProps) {
  /**
   * To set time to be reduced by 1 in every 60 seconds (60000 milliseconds)
   */
  const [currentTime, setCurrentTime] = useState(timeValue);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => prevTime - 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);
  const router = useRouter();
  const { data: session, status } = useSession();

  const userRole = (session: any) => {
    let role = session?.user?.role;
    if (role) return role;
    return null;
  };
  const userEmail = (session: any) => {
    let email = session?.user?.email;
    if (email) return email;
    return null;
  };
  useEffect(() => {
    if (status === "unauthenticated") router.replace("/");
  }, [status]);
  if (status === "authenticated") {
    var role: any = userRole(session);

    if (role == "admin") {
      router.replace("/admin");
    } else if (role == "student") {
      return (
        <>
          <Head>
            <title>{subjectValue}</title>
            <meta name="description" content="Quiz App Home for students" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <ChakraProvider>
            <Box minHeight="100vh" display="flex" flexDirection="column">
              <NavBar />
              <Box textAlign={"center"} width={"100%"} margin={"auto"} paddingTop={'2vh'}>
                <Heading fontSize={'4xl'}>{subjectValue}</Heading>
                <chakra.h3 fontSize={'xl'} paddingTop={'1vh'}>{currentTime} min</chakra.h3>
              </Box>
              <Box flex="1" mx="auto" justifyContent="center" alignContent={"center"}>
                <ShortAnswerQuestionList questions={questions} subjectValue={subjectValue} emailValue={userEmail(session)} totalMarks={totalMarks}/>
              </Box>
              <Footer />
            </Box>
          </ChakraProvider>
        </>
      );
    }
  }
}
