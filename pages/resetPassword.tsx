/**
 * Defined Reset Password functionality.
 */
import React from "react";
import { useRouter } from 'next/router'
import { InputGroup, Card, InputLeftElement, Input, 
        Center, useToast, Link,Text, FormControl } from "@chakra-ui/react";
import { LockIcon, TimeIcon } from '@chakra-ui/icons'
import { Box,useColorModeValue,SimpleGrid,Button,Image,chakra,Stack } from "@chakra-ui/react";

/**
 * Creates a User interface for Reset Password.
 * Ask for OTP, new Password and confirm Password.
 * If success it will re-direct to the login page.
*/
export default function resetPassword() {
    const cardStyle = {
        opacity: 0.95
    }
    const toast = useToast();
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        toast({
            title: "Success",
            description: "Integration of Password Reset with Backend will be done in next sprint ",
            status: "success",
            duration: 9000,
            isClosable: true,
            colorScheme: 'gray'
        })

        router.push("/")
        }

    return (
        <>
            <Box mx="auto" h={"100vh"} bg={"yellow.100"}>
                <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={0}
                    _after={{
                        opacity: 0.95,
                        pos: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        zIndex: -1,
                        content: '" "',
                    }}
                    bg={"yellow.100"}
                >
                    <Box
                        textAlign="center"
                        w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
                        m="auto"
                    >
                        <chakra.h1
                            fontSize={{ base: "4xl", sm: "3xl", md: "4xl" }}
                            letterSpacing="tight"
                            lineHeight="short"
                            fontWeight="extrabold"
                            color={useColorModeValue("gray.300", "gray.300")}
                        >
                            <chakra.span
                                display={{ base: "block", xl: "inline" }}
                                color={"gray.300"}
                                ml={10}
                            >
                                Reset Password
                            </chakra.span>
                        </chakra.h1>

                        <Card bgColor='#E7DEEA'
                            maxWidth='80vw' minHeight="44vh"
                            borderRadius={'30px'} sx={cardStyle}
                            marginStart={20}
                            mt={10}
                        >
                             <form action="" method="post" onSubmit={handleSubmit}>
                        <Stack spacing={4} mt={14} marginStart={8} marginEnd={8}
                        >
                            
                       
                            <FormControl id="otp" isRequired>
                            <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        fontSize='1.4em'
                                        children={<TimeIcon color='yellow.400' />}
                                    />
                                    <Input id="otp" bg='yellow.400' marginLeft={10} marginEnd={10} type='number' placeholder='Enter OTP' textColor={'white'} required />
                                </InputGroup>
                            </FormControl>

                            <FormControl id="password" isRequired>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        fontSize='1.4em'
                                        children={<LockIcon color='yellow.400' />}
                                    />
                                    <Input id="password" bg='yellow.400' marginLeft={10} marginEnd={10} type='text' placeholder='New Password' textColor={'white'} required/>
                                </InputGroup>
                            </FormControl>

                            <FormControl id="confirmPassword" isRequired>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        fontSize='1.4em'
                                        children={<LockIcon color='yellow.400' />}
                                    />
                                    <Input id="confirmPassword" bg='yellow.400' marginLeft={10} marginEnd={10} type='text' placeholder='Confirm Password' textColor={'white'} required/>
                                </InputGroup>
                            </FormControl>

                            <Center h='50px' color='white'>
                            <Button width={60} height={10} bg={useColorModeValue("yellow.400", "yellow.400")}
                                textColor={"white"}  size="lg" type="submit"
                                _hover={{
                                    bg: "gray.500",
                                  }}
                            >
                                Confirm
                            </Button>
                            </Center>
                            <Center h='50px' color='white' mt={8}>
                               <Link color="gray.600" fontSize={14} fontStyle={'italic'} onClick={() => router.push("/")}>Go back to Login</Link>
                            </Center>
                        </Stack>
                        </form>

                    </Card>
                    </Box>
                    <Box ml={20}>

                        <Image
                            src="/img/password.png"
                            alt="quiz"
                            fit="cover"
                            h={"100vh"}
                            bg="gray.100"
                            loading="lazy"
                        />
                    </Box>
                </SimpleGrid>
            </Box>
        </>
    )
}