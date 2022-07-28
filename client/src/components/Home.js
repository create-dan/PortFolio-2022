import React from "react";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import "./homeStyle.css";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="homeBack">
        <Container maxW={"5xl"}>
          <Stack
            textAlign={"center"}
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Hello Everyone ,
              <Text as={"span"} color={"orange.400"}>
                I'm Dnyaneshwar Shinde
              </Text>
            </Heading>
            <Text color={"gray.500"} maxW={"3xl"}>
              I am third-year INFORMATION TECHNOLOGY undergraduate at WCE ,
              Sangli. Starting with competitive programming has taught me to
              think logically and how to be solution oriented. Working on Data
              structures and Algorithms to improve my problem solving skills. My
              hobbies are reading and playing cricket and I always enjoy working
              with others.
            </Text>
            <Stack spacing={12} direction={"row"}>
              <a
                href="https://drive.google.com/file/d/1-DeshpeQikGEQ-IIqZeXfR-uC_wdoRfa/view?usp=sharing"
                target="_blank"
              >
                <Button
                  rounded={"full"}
                  px={6}
                  colorScheme={"orange"}
                  bg={"orange.400"}
                  _hover={{ bg: "orange.500" }}
                >
                  Download Resume
                </Button>
              </a>

              {/* <Button rounded={"full"} px={6}>
              Learn more
            </Button> */}
            </Stack>
            {/* <Flex w={"full"}>
            <Illustration
              height={{ sm: "24rem", lg: "28rem" }}
              mt={{ base: 12, sm: 16 }}
            />
          </Flex> */}
          </Stack>
        </Container>
      </div>
    </>
  );
};

export default Home;
