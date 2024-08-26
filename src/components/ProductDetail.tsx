// components/ProductDetail.tsx

import React from 'react';
import { Box, Flex, Heading, Text, Button, Stack, Image } from "@chakra-ui/react";
import { FaShoppingCart } from 'react-icons/fa';
import { FlavorName } from './types';

interface ProductDetailProps {
  selectedFlavor: { id: number, name: FlavorName };
  selectedSize: { name: string; volume: string; price: number };
  isSugarFree: boolean;
  setIsSugarFree: (value: boolean) => void;
  setSelectedSize: (size: { name: string; volume: string; price: number }) => void;
  addToCart: () => void;
  sizes: { name: string; volume: string; price: number }[];
  productInfo: Record<FlavorName, { description: string; details: string; image: string }>;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ selectedFlavor, selectedSize, isSugarFree, setIsSugarFree, setSelectedSize, addToCart, sizes, productInfo }) => {
  return (
    <Stack direction={{ base: "column", md: "row" }} spacing="8" align="flex-start">
      <Box bg="gray.900" p="6" borderRadius="lg" w="full">
        <Heading as="h2" size="lg" fontWeight="bold" mb="4" color="#FFD700">
          Baly Energy Drink {selectedFlavor.name}
        </Heading>
        <Text mb="4" fontSize="lg">
          Con una combinación de Taurina, Cafeína y Vitaminas del Complejo B, Baly {selectedFlavor.name} es el sabor que conquistó Argentina. No importa el rol, estamos juntos siempre. ¡Baly es lo mejor del rol!
        </Text>
        <Button
          onClick={() => setIsSugarFree(!isSugarFree)}
          bg="#FFD700"
          color="black"
          _hover={{ bg: '#FFA500' }}
          size="lg"
          mb="4"
        >
          {isSugarFree ? "Ver versión con azúcar" : "Conoce la versión sin azúcar"}
        </Button>
        <Flex gap="4" mb="4">
          {sizes.map((size) => (
            <Button
              key={size.name}
              onClick={() => setSelectedSize(size)}
              bg={selectedSize.name === size.name ? '#FFD700' : 'gray.700'}
              color={selectedSize.name === size.name ? 'black' : 'white'}
              _hover={{ bg: '#FFA500' }}
              size="lg"
            >
              {size.name}
            </Button>
          ))}
        </Flex>
        <Stack spacing="2" mb="6" fontSize="lg">
          <Text><strong>Taurina:</strong> 765mg | {selectedSize.volume}</Text>
          <Text><strong>Cafeína:</strong> 60mg | {selectedSize.volume}</Text>
          <Text><strong>No alcohólico</strong></Text>
        </Stack>
        <Button 
          bg="#FFD700"
          color="black"
          _hover={{ bg: '#FFA500' }}
          w="3/4"
          fontSize="xl"
          py="6"
          fontWeight="bold"
          onClick={addToCart}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="lg"
          shadow="lg"
        >
          <Box as={FaShoppingCart} mr="2" />
          Comprar - ARS {selectedSize.price}
        </Button>
      </Box>
      <Flex justify="center" align="center" bg="gray.800" borderRadius="lg" p="6" w="full" h="500px">
        <Image
          src={`/placeholder.svg?height=400&width=200&text=Baly+${selectedFlavor.name}+${selectedSize.name}${isSugarFree ? '+Sin+Azúcar' : ''}`}
          alt={`Baly ${selectedFlavor.name} ${selectedSize.name}`}
          maxH="full"
          maxW="full"
          objectFit="contain"
        />
      </Flex>
    </Stack>
  );
}

export default ProductDetail;
