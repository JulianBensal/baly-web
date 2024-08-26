// components/PromoVideoSection.tsx

import React from 'react';
import { Box, Flex, IconButton, Heading, Text } from "@chakra-ui/react";
import { FaPlay, FaPause } from 'react-icons/fa';

interface PromoVideoSectionProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

const PromoVideoSection: React.FC<PromoVideoSectionProps> = ({ isPlaying, togglePlay }) => {
  return (
    <Box w="full" bg="gray.900" position="relative" overflow="hidden" height="calc(100vh - 80px)">
      <Box
        as="video"
        id="promoVideo"
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        objectFit="cover"
        loop
        muted
        playsInline
        poster="/placeholder.svg?height=600&width=1200&text=Baly+Video+Poster"
      >
        <source src="/baly-promo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
      <Flex position="absolute" inset="0" bg="blackAlpha.500" align="center" justify="center">
        <IconButton
          aria-label="Toggle Play"
          borderRadius="full"
          size="lg"
          bg="blackAlpha.500"
          color="#FFD700"
          _hover={{ bg: "blackAlpha.700" }}
          onClick={togglePlay}
          icon={isPlaying ? <Box as={FaPause} fontSize="2xl" /> : <Box as={FaPlay} fontSize="2xl" />}
        />
      </Flex>
      <Box position="absolute" bottom="8" left="8" right="8" color="white">
        <Heading as="h2" size="xl" fontWeight="extrabold" mb="2" color="#FFD700">Experience Baly Energy</Heading>
        <Text fontSize="lg" fontWeight="medium">Discover how Baly pushes you beyond your limits</Text>
      </Box>
    </Box>
  );
}

export default PromoVideoSection;
