import React from "react";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Tag,
  Divider,
  StackDivider,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Project = (props) => {
  // console.log(props);
  const {
    title,
    description,
    githubUrl,
    deployedUrl,
    techStack,
    imageUrl,
    isDeployed,
  } = props.project;
  console.log(techStack);
  return (
    <>
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 5 }}>
            {/* <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
             
           
            
            </Heading> */}
            <h4 className="fw-bold" style={{ fontSize: "30px" }}>
              {/* Book Store App */}
              {title}
            </h4>
            <h4 className="fw-bold" style={{ fontSize: "20px" }}>
              Tech Stack :-
            </h4>

            <div className="container ">
              {techStack.map((ele) => {
                return <Tag className="mx-2 mb-2">{ele}</Tag>;
              })}

              {/* <Tag className="">{techStack}</Tag>
             
              <Tag className="mx-2">MERN</Tag>
              <Tag className="mx-2">MERN</Tag> */}
            </div>

            <Text color={"gray.500"}>
              {/* Snippy is a rich coding snippets app that lets you create your own
              code snippets, categorize them, and even sync them in the cloud so
              you can use them anywhere. All that is free! */}
              {description}
            </Text>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
              >
                <a href={githubUrl} target="_blank">
                  Github Link
                </a>
              </Button>
            { isDeployed &&   <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                // leftIcon={<PlayIcon h={4} w={4} color={"gray.300"} />}
              >
                <a href={deployedUrl} target="_blank">
                  Deployed Link
                </a>
              </Button>}
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            {/* <Blob
              w={"150%"}
              h={"150%"}
              position={"absolute"}
              top={"-20%"}
              left={0}
              zIndex={-1}
              color={useColorModeValue("red.50", "red.400")}
            /> */}
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <IconButton
                aria-label={"Play Button"}
                variant={"ghost"}
                _hover={{ bg: "transparent" }}
                // icon={<PlayIcon w={12} h={12} />}
                size={"lg"}
                color={"white"}
                position={"absolute"}
                left={"50%"}
                top={"50%"}
                transform={"translateX(-50%) translateY(-50%)"}
              />
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={imageUrl}
              />
            </Box>
          </Flex>
        </Stack>
        <Divider className="container"></Divider>
      </Container>
    </>
  );
};

export default Project;
