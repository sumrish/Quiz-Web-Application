import { Table, Thead, Tbody, Tr, Th, Td, Button, useToast } from "@chakra-ui/react";
import { AdminQuizList } from "../src/business/models/Quiz";
import { useRouter } from 'next/router'

interface QuizTableProps {
  quizzes: AdminQuizList[];
}

export default function QuizTable({quizzes}: QuizTableProps) {
  const router = useRouter();
  const toast = useToast();

  const handleClick = async (subject: string) => {
    const response = await fetch("/api/admin/deleteQuiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject }),
    });
    
    if (response.status == 200) {
      toast({
        title: "Success",
        description: 'Successfully deleted the quiz',
        status: "success",
        duration: 3000,
        isClosable: true,
        colorScheme: "gray",
      });
      router.replace("/admin")
    }
    else {
      toast({
        title: "Error",
        description: 'Something went wrong.',
        status: "error",
        duration: 4000,
        isClosable: true,
        colorScheme: "gray",
      });
    }
  };

  return (
    <Table variant="striped">
      <Thead>
        <Tr>
          <Th>Quiz Name</Th>
          <Th>Subject</Th>
          <Th>Quiz Type</Th>
          <Th>Marks</Th>
          <Th>Time</Th>
          <Th>Quiz Takers</Th>
          <Th>Attempts</Th>
          <Th textAlign={"right"}></Th>
          <Th textAlign={"right"}></Th>
        </Tr>
      </Thead>
      <Tbody>
        {quizzes.quiz.map((quiz) => (
          <Tr key={quiz.id}>
            <Td>{quiz.name}</Td>
            <Td>{quiz.subject}</Td>
            <Td>{quiz.type}</Td>
            <Td>{quiz.maxMarks}</Td>
            <Td>{quiz.time}</Td>
            <Td>{quiz.quizTakers}</Td>
            <Td>{quiz.attempts}</Td>
            <Td textAlign={"right"}>
              <Button colorScheme="orange">Edit</Button>
            </Td>
            <Td textAlign={"right"}>
              <Button colorScheme="orange" onClick={() => handleClick(quiz.subject)}>Delete</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
