import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";

import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./style.css";
import { Avatar, Box, Flex, keyframes, MenuDivider } from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";

const Signup = () => {
  const toast = useToast();

  const size = "70px";
  const color = "teal";

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <div className="back">
      <VStack spacing="5px">
        <Flex
          justifyContent="space-around"
          alignItems="center"
          h="216px"
          w="full"
          overflow="hidden"
        >
          {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}

          <Box
            as="div"
            position="relative"
            w={size}
            h={size}
            _before={{
              content: "''",
              position: "relative",
              display: "block",
              width: "300%",
              height: "300%",
              boxSizing: "border-box",
              marginLeft: "-100%",
              marginTop: "-100%",
              borderRadius: "50%",
              bgColor: color,
              animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
            }}
          >
            <a
              href="https://www.linkedin.com/in/dnyaneshwarshinde0611/"
              target="_blank"
            >
              <Avatar
                src="https://cdn3.iconfinder.com/data/icons/social-round-corner/512/linkdin__social_media_logo-256.png"
                size="full"
                position="absolute"
                top={0}
              />
            </a>

            {/* {FaLinkedinIn} */}
          </Box>

          <Box
            as="div"
            position="relative"
            w={size}
            h={size}
            _before={{
              content: "''",
              position: "relative",
              display: "block",
              width: "300%",
              height: "300%",
              boxSizing: "border-box",
              marginLeft: "-100%",
              marginTop: "-100%",
              borderRadius: "50%",
              bgColor: color,
              animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
            }}
          >
            <a href="https://github.com/create-dan" target="_blank">
              <Avatar
                src="https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/github-square-social-media-256.png"
                size="full"
                position="absolute"
                top={0}
              />
            </a>
          </Box>

          <Box
            as="div"
            position="relative"
            w={size}
            h={size}
            _before={{
              content: "''",
              position: "relative",
              display: "block",
              width: "300%",
              height: "300%",
              boxSizing: "border-box",
              marginLeft: "-100%",
              marginTop: "-100%",
              borderRadius: "50%",
              bgColor: color,
              animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
            }}
          >
            <a
              onClick={() =>
                (window.location = "mailto:dnyaneshwars0611@email.com")
              }
            >
              <Avatar
                src="https://cdn1.iconfinder.com/data/icons/picons-social/57/61-google-inbox-256.png"
                size="full"
                position="absolute"
                top={0}
              />
            </a>
          </Box>
        </Flex>
        );
        <h1>Contact : +91-9370061654</h1>
      </VStack>
    </div>
  );
};

export default Signup;
