// components/AboutSection.tsx

import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

const AboutSection: React.FC = () => {
  return (
    <Box id="about" w="full" py={{ base: 12, md: 24 }} bg="black">
      <Box maxW="7xl" mx="auto" px="4">
        <Heading as="h2" size="2xl" fontWeight="extrabold" textAlign="center" mb="12" color="#FFD700">About Baly</Heading>
        <Text mt="4" color="white" textAlign="center" maxW="2xl" mx="auto" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="medium">
          Born in Argentina, Baly is on a mission to provide the energy you need to face your daily challenges. 
          Our unique formula combines high-quality ingredients to offer you an unparalleled energy boost.
        </Text>
      </Box>
    </Box>
  );
}

export default AboutSection;
