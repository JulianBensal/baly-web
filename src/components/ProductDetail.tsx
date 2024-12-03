import React from 'react';
import { Box, Flex, Heading, Text, Button, Stack, Image } from "@chakra-ui/react";
import { FaShoppingCart } from 'react-icons/fa';
import { FlavorName } from './types';
import { useState } from 'react';

import Tradicional_473ml from '../assets/Gustos/Tradicional_473ml.webp';
import Tradicional_250ml from '../assets/Gustos/Tradicional_250ml.webp';
import Tradicional_2L from '../assets/Gustos/Tradicional_2L.webp';
import Rojo_473ml from '../assets/Gustos/Rojo_473ml.webp';
import Rojo_250ml from '../assets/Gustos/Rojo_250ml.webp';
import Rojo_2L from '../assets/Gustos/Rojo_2L.webp';
import Amarillo_473ml from '../assets/Gustos/Amarillo_473ml.webp';
import Amarillo_250ml from '../assets/Gustos/Amarillo_250ml.webp';
import Amarillo_2L from '../assets/Gustos/Amarillo_2L.webp';
import Verde_473ml from '../assets/Gustos/Verde_473ml.webp';
import Verde_250ml from '../assets/Gustos/Verde_250ml.webp';
import Verde_2L from '../assets/Gustos/Verde_2L.webp';
import Proximamente from '../assets/Gustos/Próximamente_black.png';
import Amarillo_473ml_fin from '../assets/Gustos_Fin/Amarillo_473ml_fin.webp';
import Amarillo_250ml_fin from '../assets/Gustos_Fin/Amarillo_250ml_fin.webp';
import Amarillo_2L_fin from '../assets/Gustos_Fin/Amarillo_2L_fin.webp';
import Rojo_473ml_fin from '../assets/Gustos_Fin/Rojo_473ml_fin.webp';
import Rojo_250ml_fin from '../assets/Gustos_Fin/Rojo_250ml_fin.webp';
import Rojo_2L_fin from '../assets/Gustos_Fin/Rojo_2L_fin.webp';
import Tradicional_473ml_fin from '../assets/Gustos_Fin/Tradicional_473ml_fin.webp';
import Tradicional_250ml_fin from '../assets/Gustos_Fin/Tradicional_250ml_fin.webp';
import Tradicional_2L_fin from '../assets/Gustos_Fin/Tradicional_2L_fin.webp';
import Verde_473ml_fin from '../assets/Gustos_Fin/Verde_473ml_fin.webp';
import Verde_250ml_fin from '../assets/Gustos_Fin/Verde_250ml_fin.webp';
import Verde_2L_fin from '../assets/Gustos_Fin/Verde_2L_fin.webp';

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

type SizeName = '250ml' | '473ml' | '2L';

const sizeMapping: Record<SizeName, string> = {
  '250ml': '350px',
  '473ml': '350px',
  '2L': '500px'
};

const sizeMapping2: Record<SizeName, string> = {
  '250ml': '800px',
  '473ml': '800px',
  '2L': '1300px'
};

const ProductDetail: React.FC<ProductDetailProps> = ({ selectedFlavor, selectedSize, isSugarFree, setIsSugarFree, setSelectedSize, addToCart, sizes, productInfo }) => {
  const [currentSize, setCurrentSize] = useState(sizeMapping[selectedSize.name as SizeName]);
  const [currentSize2, setCurrentSize2] = useState(sizeMapping2[selectedSize.name as SizeName]);

  const handleImageLoad = () => {
    setCurrentSize(sizeMapping[selectedSize.name as SizeName]);
    setCurrentSize2(sizeMapping2[selectedSize.name as SizeName]);
  };
  
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
      case 'Sandía':
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
      case 'Tropical':
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
      case 'Manzana verde':
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

  const getImagePathFin = (flavor: FlavorName, size: string): string => {
    switch (flavor) {
      case 'Tradicional':
        switch (size) {
          case '473ml':
            return Tradicional_473ml_fin;
          case '250ml':
            return Tradicional_250ml_fin;
          case '2L':
            return Tradicional_2L_fin;
          default:
            return Tradicional_473ml_fin;
        }
      case 'Sandía':
        switch (size) {
          case '473ml':
            return Rojo_473ml_fin;
          case '250ml':
            return Rojo_250ml_fin;
          case '2L':
            return Rojo_2L_fin;
          default:
            return Rojo_473ml_fin;
        }
      case 'Tropical':
        switch (size) {
          case '473ml':
            return Amarillo_473ml_fin;
          case '250ml':
            return Amarillo_250ml_fin;
          case '2L':
            return Amarillo_2L_fin;
          default:
            return Amarillo_473ml_fin;
        }
      case 'Manzana verde':
        switch (size) {
          case '473ml':
            return Verde_473ml_fin;
          case '250ml':
            return Verde_250ml_fin;
          case '2L':
            return Verde_2L_fin;
          default:
            return Verde_473ml_fin;
        }
      default:
        return Proximamente; // Imagen por defecto
    }
  };

  const imagePathFin = getImagePathFin(selectedFlavor.name, selectedSize.name);

  const getFirstDescription = (flavor: FlavorName): string => {
    switch (flavor) {
      case 'Tradicional':
        return "Con una combinación de Taurina, Cafeína y Vitaminas del Complejo B, Baly Tradicional es el sabor que conquistó Brasil. No importa el plan, siempre estamos juntos. ¡Baly, lo mejor para disfrutar cada momento!";
      case 'Sandía':
        return "¡Ahora en Argentina! Baly Sandía ya ha conquistado a muchos consumidores en todo Brasil, con toda la frescura y jugosidad de la sandía. ¡No te quedes sin probarlo!";
      case 'Tropical':
        return "Baly Tropical, la mezcla de sabores que trae el gustito brasileño en un mix de frutas amarillas. Combinando los sabores de las frutas tropicales, este sabor es como tener el verano todo el año.";
      case 'Manzana verde':
        return "Preferido de muchos, Baly Manzana Verde es un sabor simple y auténtico, perfecto para quienes aprecian la frescura de la manzana verde.";
      default:
        return "Estamos trabajando en nuevos y emocionantes sabores.";
    }
  }

  return (
    <Stack spacing="8" align="flex-start" w="full">
      <Flex direction={{ base: "column", md: "row" }} w="full" gap="8">
        {/* Primer Box - Detalles del Producto */}
        <Box bg="gray.900" p="6" borderRadius="lg" w={{ base: "full", md: "50%" }}>
          <Heading as="h2" size="lg" fontWeight="bold" mb="4" color="#FFD700">
            Baly {selectedFlavor.name}
          </Heading>
          <Text mb="4" fontSize="lg">
            {getFirstDescription(selectedFlavor.name)}
          </Text>
          <Button
            onClick={() => setIsSugarFree(!isSugarFree)}
            bg={isSugarFree ? "green.300" : "gray.900"}
            color={isSugarFree ? "gray.900" : "green.300"}
            _hover={{ 
              bg: isSugarFree ? "gray.900" : "green.300", 
              color: isSugarFree ? "green.300" : "gray.900",
              borderColor: isSugarFree ? "green.300" : "gray.900"
            }}
            size="lg"
            mb="4"
            borderWidth="1px"
            borderColor={isSugarFree ? "gray.900" : "green.300"}
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
        <Flex
          justify="center"
          align="center"
          borderRadius="lg"
          p="6"
          w={{ base: "full", md: "50%" }}
          h="500px"
          position="relative" // Asegura que el contenedor sea relativo para posicionar el pseudo-elemento correctamente
          _before={{
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "120%",
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent 70%)",
            borderRadius: "50%",
            zIndex: 1,
            filter: "blur(20px)",
          }}
        >
          <Image
            src={imagePath}
            alt={`Baly ${selectedFlavor.name} ${selectedSize.name}`}
            maxH={currentSize} 
            maxW="full"
            objectFit="contain"
            position="relative"
            zIndex={2} // Asegura que la imagen esté encima del pseudo-elemento
            onLoad={handleImageLoad} 
          />
        </Flex>
      </Flex>

      {/* Sección de Información del Producto debajo de los Box */}
      <Box bg="#FFD700" py="16" px="8" borderRadius="lg" w="full" mt="8">
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap="8">
        <Box minH="200px" w="full"> {/* Establece una altura mínima y ancho completo para el texto */}
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
            src={imagePathFin}
            alt={`Baly ${selectedFlavor.name} Bottle Tilted`}
            maxH={currentSize2}	
            objectFit="contain"
            onLoad={handleImageLoad} 
          />
        </Box>
      </Flex>
      </Box>
    </Stack>
  );
}

export default ProductDetail;