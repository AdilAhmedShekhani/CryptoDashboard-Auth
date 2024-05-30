import {
  Button,
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

import { Field, Form, Formik } from "formik";

import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="1rem" w="456px">
          <Text textStyle="h1">Welcome to Crypto App</Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Create a free account by filling data below
          </Text>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
              <Form>
                <Stack mt="10" spacing={6}>
                  <Flex gap="4">
                    <Field name="name">
                      {({ field, meta }) => (
                        <FormControl>
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Input
                            name="name"
                            placeholder="Enter your name ..."
                          />
                        </FormControl>
                      )}
                    </Field>

                    <FormControl>
                      <FormLabel htmlFor="surname">Surname</FormLabel>
                      <Input
                        name="surname"
                        placeholder="Enter Your surname ..."
                      />
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
                    <FormLabel htmlFor="repeatPassword">
                      RepeatPassword
                    </FormLabel>
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
                  <Button type="submit">Create Account</Button>
                  <Text textStyle="p3" color="black.60" textAlign="center">
                    Already have an Account?
                    <Link to="/signin">
                      <Text as="span" color="p.purple">
                        Log In
                      </Text>{" "}
                    </Link>
                  </Text>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default Signup;
