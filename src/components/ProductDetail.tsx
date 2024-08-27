import React from 'react';
import { Box, Flex, Heading, Text, Button, Stack, Image } from "@chakra-ui/react";
import { FaShoppingCart } from 'react-icons/fa';
import { FlavorName } from './types';

import Tradicional_473ml from '../assets/Gustos/Tradicional_473ml.png';
import Tradicional_250ml from '../assets/Gustos/Tradicional_250ml.png';
import Tradicional_2L from '../assets/Gustos/Tradicional_2L.png';
import Rojo_473ml from '../assets/Gustos/Rojo_473ml.png';
import Rojo_250ml from '../assets/Gustos/Rojo_250ml.png';
import Rojo_2L from '../assets/Gustos/Rojo_2L.png';
import Amarillo_473ml from '../assets/Gustos/Amarillo_473ml.png';
import Amarillo_250ml from '../assets/Gustos/Amarillo_250ml.png';
import Amarillo_2L from '../assets/Gustos/Amarillo_2L.png';
import Verde_473ml from '../assets/Gustos/Verde_473ml.png';
import Verde_250ml from '../assets/Gustos/Verde_250ml.png';
import Verde_2L from '../assets/Gustos/Verde_2L.png';
import Proximamente from '../assets/Gustos/Próximamente.jpg';

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
  // Genera la ruta de la imagen según el sabor y el tamaño seleccionado
  const getImagePath = (flavor: FlavorName, size: string): string => {
    switch (flavor) {
      case 'Tradicional':
        switch (size) {
          case '473ml':
            return Tradicional_473ml;
          case '250ml':
            return Tradicional_250ml;
          case '2L':
            return Tradicional_2L;
          default:
            return Tradicional_473ml;
        }
      case 'Rojo':
        switch (size) {
          case '473ml':
            return Rojo_473ml;
          case '250ml':
            return Rojo_250ml;
          case '2L':
            return Rojo_2L;
          default:
            return Rojo_473ml;
        }
      case 'Amarillo':
        switch (size) {
          case '473ml':
            return Amarillo_473ml;
          case '250ml':
            return Amarillo_250ml;
          case '2L':
            return Amarillo_2L;
          default:
            return Amarillo_473ml;
        }
      case 'Verde':
        switch (size) {
          case '473ml':
            return Verde_473ml;
          case '250ml':
            return Verde_250ml;
          case '2L':
            return Verde_2L;
          default:
            return Verde_473ml;
        }
      default:
        return Proximamente; // Imagen por defecto
    }
  };

  const imagePath = getImagePath(selectedFlavor.name, selectedSize.name);

  return (
    <Stack spacing="8" align="flex-start" w="full">
      <Flex direction={{ base: "column", md: "row" }} w="full" gap="8">
        {/* Primer Box - Detalles del Producto */}
        <Box bg="gray.900" p="6" borderRadius="lg" w={{ base: "full", md: "50%" }}>
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

        {/* Segundo Box - Imagen del Producto */}
        <Flex justify="center" align="center" bg="gray.800" borderRadius="lg" p="6" w={{ base: "full", md: "50%" }} h="500px">
          <Image
            src={imagePath}
            alt={`Baly ${selectedFlavor.name} ${selectedSize.name}`}
            maxH="full"
            maxW="full"
            objectFit="contain"
          />
        </Flex>
      </Flex>

      {/* Sección de Información del Producto debajo de los Box */}
      <Box bg="#FFD700" py="16" px="8" borderRadius="lg" w="full" mt="8">
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap="8">
          <Box>
            <Heading as="h3" size="lg" fontWeight="bold" mb="4" color="black">
              Información del Producto
            </Heading>
            <Text fontSize="lg" color="black" mb="4">
              {productInfo[selectedFlavor.name].description}
            </Text>
            <Text fontSize="lg" color="black" mb="4">
              {productInfo[selectedFlavor.name].details}
            </Text>
          </Box>
          <Box>
            <Image
              src={productInfo[selectedFlavor.name].image}
              alt={`Baly ${selectedFlavor.name} Bottle Tilted`}
              maxH="400px"
              objectFit="contain"
              transform="rotate(-12deg)"
            />
          </Box>
        </Flex>
      </Box>
    </Stack>
  );
}

export default ProductDetail;