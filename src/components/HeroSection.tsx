// components/HeroSection.tsx

import React from 'react';
import { Box, Stack, Heading, Text, Button } from "@chakra-ui/react";

const HeroSection: React.FC = () => {
  return (
    <Box id="home" w="full" py={{ base: 12, md: 24 }} bgImage="url('/placeholder.svg?height=600&width=1200&text=Baly+Hero+Image')" bgSize="cover" bgPosition="center" position="relative" overflow="hidden">
      <Box position="absolute" inset="0" bgGradient="linear(to-r, black, transparent)" />
      <Box position="relative" zIndex="10" px={{ base: 4, md: 6 }}>
        <Stack spacing="4" align="flex-start">
          <Stack spacing="2">
            <Heading as="h1" size="2xl" fontWeight="extrabold" color="#FFD700" lineHeight="none">
              Energize Your Future
            </Heading>
            <Text maxW="700px" color="white" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="medium">
              Experience the next level of energy drinks with Baly. Engineered for peak performance.
            </Text>
          </Stack>
          <Button 
            bg="#FFD700" 
            color="black" 
            _hover={{ 
              bg: '#FFA500',
              shadow: 'xl' 
            }} 
            borderRadius="full" 
            size="lg" 
            fontWeight="bold" 
            px="8" 
            py="3" 
            shadow="lg"
          >
            Shop Now
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default HeroSection;
