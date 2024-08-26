// components/ProductList.tsx

import React from 'react';
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { FlavorName } from './types';

interface ProductListProps {
  flavors: { id: number; name: FlavorName; image: string }[];
  selectedFlavor: { id: number, name: FlavorName };
  setSelectedFlavor: (flavor: { id: number, name: FlavorName }) => void;
}

const ProductList: React.FC<ProductListProps> = ({ flavors, selectedFlavor, setSelectedFlavor }) => {
  return (
    <Flex wrap="wrap" justify="center" gap="6" mb="12">
      {flavors.map((flavor) => (
        <Box
          key={flavor.id}
          as="button"
          onClick={() => setSelectedFlavor(flavor)}
          transition="transform 0.3s ease-in-out"
          transform={selectedFlavor.id === flavor.id ? 'scale(1.1)' : 'scale(1)'}
          zIndex={selectedFlavor.id === flavor.id ? 10 : 0}
        >
          <Box
            w="24"
            h="24"
            overflow="hidden"
            borderRadius="lg"
            borderWidth={selectedFlavor.id === flavor.id ? '4px' : '1px'}
            borderColor={selectedFlavor.id === flavor.id ? '#FFD700' : 'gray.300'}
          >
            <Image src={flavor.image} alt={flavor.name} w="full" h="full" objectFit="cover" />
          </Box>
          <Text mt="2" textAlign="center" fontSize="sm" fontWeight="medium" color={selectedFlavor.id === flavor.id ? '#FFD700' : 'white'}>
            {flavor.name}
          </Text>
        </Box>
      ))}
    </Flex>
  );
}

export default ProductList;
