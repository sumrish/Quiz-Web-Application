/**
 * To create title card for QuizBank Page
 */
import { Box, Heading, chakra } from "@chakra-ui/react";

/**
 * Creating the title card for the quizbank page
 * @returns the title of quizbank page
 */
export default function Card() {
  return (
    <Box textAlign={"center"} width={"100%"} margin={"auto"} paddingTop={'2vh'}>
      <Heading fontSize={'4xl'}>Quiz Bank</Heading>
    </Box>
  );
}
