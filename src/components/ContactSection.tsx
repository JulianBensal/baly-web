// components/ContactSection.tsx

import React from 'react';
import { Box, Heading, Stack, Input, Textarea, FormControl, Button } from "@chakra-ui/react";

const ContactSection: React.FC = () => {
  return (
    <Box id="contact" w="full" py={{ base: 12, md: 24 }} bg="gray.950">
      <Box maxW="7xl" mx="auto" px="4">
        <Heading as="h2" size="2xl" fontWeight="extrabold" textAlign="center" mb="12" color="#FFD700">Contact Us</Heading>
        <Stack as="form" maxW="md" mx="auto" mt="8" spacing="4">
          <Input placeholder="Name" bg="gray.800" color="white" borderColor="gray.700" borderRadius="full" />
          <Input placeholder="Email" type="email" bg="gray.800" color="white" borderColor="gray.700" borderRadius="full" />
          <Input placeholder="Subject" bg="gray.800" color="white" borderColor="gray.700" borderRadius="full" />
          <FormControl>
            <Textarea
              minH="100px"
              bg="gray.800"
              color="white"
              borderColor="gray.700"
              borderRadius="3xl"
              placeholder="Message"
              focusBorderColor="#FFD700"
            />
          </FormControl>
          <Button bg="#FFD700" color="black" _hover={{ bg: '#FFA500' }} borderRadius="full" fontWeight="bold" size="lg">
            Send Message
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default ContactSection;
