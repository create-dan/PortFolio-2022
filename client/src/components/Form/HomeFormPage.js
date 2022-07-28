import {
  Box,
  Container,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import "./style.css";

function Homepage() {
  const history = useNavigate();

  //   useEffect(() => {
  //     const user = JSON.parse(localStorage.getItem("userInfo"));

  //     if (user) history.push("/chats");
  //   }, [history]);

  return (
    <div className="back">
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Flex
            justifyContent="space-around"
            alignItems="center"
            
            w="full"
            overflow="hidden"
          >
            <Text fontSize="4xl" fontFamily="Work sans">
              Hello..!
            </Text>
          </Flex>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab>Connet</Tab>
              <Tab>Contact Me</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
}

export default Homepage;
