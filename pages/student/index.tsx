import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../../components/studentNavbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import QuizTable from "../../components/studentHomeTable";
import { Box } from "@chakra-ui/react";
import UserQuiz from "../../src/business/models/Quiz";
import { useSession, getSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { QuizDataServiceInstance } from "../../src/business/services/dbservice";

export async function getServerSideProps({ req }) {
  try {
    const session = await getSession({ req });
    const dbUser = session?.user?.name;
    let quizzes: UserQuiz[] =
      (await QuizDataServiceInstance.findQuizzesTakenByUser(dbUser)) ?? [
        {
          //dummy data in case the query returns nothing
          id: 0,
          name: "DummyQuizName",
          subject: "DummySubject",
          marks: 0,
        } as UserQuiz,
      ];
    return {
      props: { quizzes: JSON.parse(JSON.stringify(quizzes)) },
    };
  } catch (e) {
    console.error(e);
  }
}

export default function StudentHome({ quizzes }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  const userRole = (session: any) => {
    let role = session?.user?.role;
    if (role) return role;
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
            <title>Quiz App</title>
            <meta name="description" content="Quiz App Home for students" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <ChakraProvider>
            <Box minHeight="100vh" display="flex" flexDirection="column">
              <NavBar />
              <Box justifyContent="center">
                <Card />
              </Box>
              <Box flex="1" width="80%" mx="auto" justifyContent="center">
                <QuizTable quizzes={quizzes} />
              </Box>
              <Footer />
            </Box>
          </ChakraProvider>
        </>
      );
    }
  }
}
