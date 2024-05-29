import {
  Card,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

const Signup = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="1rem" w="456px">
          <Text textStyle="h1">Welcome to Crypto App</Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Create a free account by filling data below
          </Text>
          <Stack mt="10">
            <Flex gap="4">
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input name="name" placeholder="Enter your name ..." />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="surname">Surname</FormLabel>
                <Input name="surname" placeholder="Enter Your surname ..." />
              </FormControl>
            </Flex>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Enter Your email ..."
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="Enter Your password ..."
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="repeatPassword">RepeatPassword</FormLabel>
              <Input
                name="repeatPassword"
                type="password"
                placeholder="Enter Your repeatPassword ..."
              />
            </FormControl>
            <Checkbox>
              <Text textStyle="p3">
                I agree with{" "}
                <Text as="span" color="p.purple">
                  {" "}
                  Terms and Conditions
                </Text>
              </Text>
            </Checkbox>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
};

export default Signup;
