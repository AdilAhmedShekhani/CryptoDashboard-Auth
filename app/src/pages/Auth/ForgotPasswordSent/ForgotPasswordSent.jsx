import {
  Box,
  Card,
  Center,
  Container,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const ForgotPasswordSent = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showCard={true}
        >
          <VStack spacing={6}>
            <Icon as={BsPatchCheckFill} boxSize="48px" color="green" />
            <Text textStyle="h4" fontWeight="medium" color="p.black">
              Successfully Sent
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              We have sent instructions on how to reset your password to{" "}
              <Box as="b" color="p.black">
                jenny.wilson@gmail.com
              </Box>{" "}
              Please follow the instructions from the email. We have Sent you an
              email verification to{" "}
            </Text>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default ForgotPasswordSent;
