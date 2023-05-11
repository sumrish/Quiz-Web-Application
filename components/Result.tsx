/**
 * To create title card for the whole site as a reusable component
 */
import { Box,chakra, Container,Card } from "@chakra-ui/react";

/**
 * Creating the title card for the dashboard pages for students ans admins
 * @returns the title of the tables in both dashboard pages
 */
export default function Result() {
  return (
    <Box textAlign={"center"} width={"100%"} margin={"auto"}>
      <chakra.h1
        py={5}
        fontSize={48}
        fontFamily={"Work Sans"}
        fontWeight={"bold"}
        color={"gray.800"}
      >
        Quiz Result
      </chakra.h1>
    </Box>
  );
}
