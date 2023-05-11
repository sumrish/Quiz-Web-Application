/**
 * Login Module.
 * @module index
 * @see module:react
 * @see module:next
 * @see module:next-auth/react
 * @see module:chakra-ui/react
 * @see module:chakra-ui/icons
 */
import React, { useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";
import Head from "next/head";
import {
  Container,
  InputGroup,
  Card,
  CardBody,
  Img,
  Stack,
  Flex,
  InputRightElement,
  InputLeftElement,
  Input,
  Checkbox,
  Link,
  Button,
  extendTheme,
  useColorModeValue,
  FormControl,
  Center,
  IconButton,
  Text,
  useToast,
} from "@chakra-ui/react";
import { LockIcon, EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

/**
 * Creates a User interface for Login.
 * Allow user to login using email and password.
 * If successit directs to the homepage else
 * it will generate a toaste message for user
 */

const signPage: NextPage = () => {
  const cardStyle = {
    opacity: 0.95,
  };

  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => setShowPass(!showPass);
  const toast = useToast();

  const router = useRouter();
  const { data: session, status } = useSession();

  const handleSubmit = async (e: any) => {
    const userRole = (session: any) => {
      let role = session?.user?.role;
      if (role) return role;
      return null;
    };

    e.preventDefault();
    const email: string = e.target.email.value;
    const pass: string = e.target.pass.value;

    const res = await signIn("credentials", {
      email: email,
      password: pass,
      redirect: false,
    });

    if (res?.status == 200) {
      var role: any = userRole(session);
      if (role == "admin") {
        router.replace("/admin");
      } else if (role == "student") {
        router.replace("/student");
      }
    } else {
      toast({
        title: "Error",
        description: "Please enter the valid credientials",
        status: "error",
        duration: 3000,
        isClosable: true,
        colorScheme: "gray",
      });
    }
  };

  useEffect(() => {
    const userRole = (session: any) => {
      let role = session?.user?.role;
      if (role) return role;
      return null;
    };

    if (status === "authenticated") {
      var role: any = userRole(session);
      if (role == "admin") {
        router.replace("/admin");
      } else if (role == "student") {
        router.replace("/student");
      }
    }
  }, [status]);

  if (status === "unauthenticated")
    return (
      <>

      <Head>
            <title>Quiz App Login</title>
            <meta name="description" content="Quiz App Home for Admin" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
       </Head>

        <Container
          maxWidth="100vw"
          minHeight="100vh"
          alignContent={"center"}
          bgColor="yellow.100"
          _after={{
            opacity: 0.25,
          }}
        >
          <Container maxWidth="44vw" minHeight="20vh"></Container>
          <Container>
            <Card
              bgColor="#E7DEEA"
              maxWidth="30vw"
              minHeight="44vh"
              borderRadius={"30px"}
              sx={cardStyle}
              marginStart={16}
            >
              <Img
                borderRadius="full"
                boxSize="180px"
                alignSelf={"center"}
                src="/img/user.png"
                alt="user-image"
                marginTop={-20}
              ></Img>
              <CardBody>
                <Container minHeight="6vh"></Container>
                <form action="" method="post" onSubmit={handleSubmit}>
                  <Stack spacing={4}>
                    <FormControl id="email" isRequired>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          fontSize="1.4em"
                          children={<EmailIcon color="yellow.400" />}
                        />
                        <Input
                          id="email"
                          bg="yellow.400"
                          marginLeft={10}
                          marginEnd={10}
                          type="email"
                          placeholder="Email ID"
                          name="email"
                          textColor={"white"}
                          required
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl id="password" isRequired>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          fontSize="1.2em"
                          children={<LockIcon color="yellow.400" />}
                        />
                        <Input
                          id="password"
                          bg="yellow.400"
                          name="pass"
                          required
                          marginLeft={10}
                          marginEnd={10}
                          type={showPass ? "text" : "password"}
                          placeholder="Password"
                          textColor={"white"}
                        />
                        <InputRightElement>
                          <IconButton
                            size={"sm"}
                            aria-label={"password"}
                            marginEnd={20}
                            icon={showPass ? <ViewIcon /> : <ViewOffIcon />}
                            _hover={{
                              bg: "gray.800",
                            }}
                            color="gray.500"
                            isRound
                            onClick={handleShowPass}
                            bg={"yellow.400"}
                          />
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                  </Stack>

                  <Stack spacing={28} mt={10} isInline>
                    <Checkbox
                      ml={6}
                      size="sm"
                      color="gray.600"
                      colorScheme={"facebook"}
                      borderColor="gray.600"
                      defaultChecked
                    >
                      Remember me
                    </Checkbox>
                    <Link
                      color="gray.600"
                      fontSize={14}
                      fontStyle={"italic"}
                      onClick={() => router.push("/forgotPassword")}
                    >
                      Forgot Password?
                    </Link>
                  </Stack>

                  <Container maxWidth="50vw" minH={4}></Container>
                  <Center h="50px" color="white">
                    <Button
                      type="submit"
                      width={40}
                      height={10}
                      bg={useColorModeValue("yellow.400", "yellow.400")}
                      textColor={"white"}
                      _hover={{
                        bg: "gray.500",
                      }}
                    >
                      {" "}
                      LOGIN
                    </Button>
                  </Center>
                </form>
                <Center h="50px" color="white" mt={8}>
                  <Text textColor={"gray.600"}>Not a Member?</Text>
                  <Link
                    color="gray.600"
                    fontSize={14}
                    fontStyle={"italic"}
                    onClick={() => router.push("/signUp")}
                  >
                    Register here
                  </Link>
                </Center>
              </CardBody>
            </Card>
          </Container>
        </Container>
      </>
    );
};

export default signPage;
