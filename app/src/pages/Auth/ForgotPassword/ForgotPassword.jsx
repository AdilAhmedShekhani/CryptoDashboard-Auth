import { Button, Card, Center, FormControl, FormErrorMessage, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";

const ForgotPassword = () => {
  const forgotValidationSchema = object({
    email: string().email("Email is Invalid").required("Email is required"),
  });
  return (
    <Center minH="100vh">
      <Card>
        <Text fontWeight="medium" textStyle="h1">
          Forgot Password
        </Text>
        <Text textStyle="p2" color="black.60" mt="4">
          Enter your email address for which account you want to reset your
          password.
        </Text>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={forgotValidationSchema}
        >
          {() => (
            <Form>
              <Stack mt="10" spacing={6}>
                <Field name="email">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        {...field}
                        name="email"
                        type="email"
                        placeholder="Enter Your email ..."
                      />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Button w="full" type="submit">
                  Reset Password
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Card>
    </Center>
  );
};

export default ForgotPassword;
