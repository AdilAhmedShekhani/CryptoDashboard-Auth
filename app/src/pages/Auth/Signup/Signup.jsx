import { Card, Center, Container, Text } from "@chakra-ui/react";

const Signup = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="1rem" w="456px">
          <Text textStyle="h1">Welcome to Crypto App</Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Create a free account by filling data below
          </Text>
        </Card>
      </Center>
    </Container>
  );
};

export default Signup;
