import { Box, Button, Card, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { MdEmail } from "react-icons/md";

const RegisterEmailVerify = () => {
  return (
    <Card>
      <VStack spacing={6}>
        <Icon as={MdEmail} boxSize="48px" color="p.purple" />
        <Text textStyle="h4" color="p.black">
          Email Verification
        </Text>
        <Text textAlign="center" textStyle="p2" color="black.60">
          We have Sent you an email verification to{" "}
          <Box as="b" color="p.black">
            jenny.wilson@gmail.com
          </Box>
          . If you didn't receive it, click the button below.
        </Text>
        <Button w="full" variant="outline">
          Re-Send Email
        </Button>
      </VStack>
    </Card>
  );
};

export default RegisterEmailVerify;
