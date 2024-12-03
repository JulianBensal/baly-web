// pages/index.tsx
'use client';

import React, { useState } from 'react';
import Header from '../src/components/Header';
import HeroSection from '../src/components/HeroSection';
import PromoVideoSection from '../src/components/PromoVideoSection';
import ProductList from '../src/components/ProductList';
import ProductDetail from '../src/components/ProductDetail';
import AboutSection from '../src/components/AboutSection';
import Footer from '../src/components/Footer';
import NewsletterPopup from '../src/components/NewsletterPopup';
import { Flex, Box, Heading } from '@chakra-ui/react';
import { FlavorName } from '../src/components/types';
import Tradicional from '../src/assets/Carrusel/Tradicional_Carrusel.webp';
import Amarillo from '../src/assets/Carrusel/Amarillo_Carrusel.webp';
import Verde from '../src/assets/Carrusel/Verde_Carrusel.webp';
import Rojo from '../src/assets/Carrusel/Rojo_Carrusel.webp';
import Proximamente from '../src/assets/Gustos/Próximamente.png';

const sizes = [
  { name: '2L', volume: '2000ml', price: 1000 },
  { name: '473ml', volume: '473ml', price: 500 },
  { name: '250ml', volume: '250ml', price: 300 },
];

const flavors: { id: number; name: FlavorName; image: string }[] = [
  { id: 1, name: 'Tradicional', image: Tradicional },
  { id: 2, name: 'Tropical', image: Amarillo },
  { id: 3, name: 'Manzana verde', image: Verde },
  { id: 4, name: 'Sandía', image: Rojo },
  { id: 5, name: 'Próximamente', image: Proximamente },
  { id: 6, name: 'Próximamente', image: Proximamente },
];

const productInfo: Record<
  FlavorName,
  { description: string; details: string; image: string }
> = {
  Tradicional: {
    description:
      'Baly Tradicional ofrece el sabor clásico de la bebida energética, cítrico y distintivo.',
    details:
      'La presencia de cafeína, taurina y vitaminas del complejo B contribuye a un sabor realmente funcional, que te impulsa y te da energía para todos los momentos.',
    image: Tradicional,
  },
  Tropical: {
    description:
      'Con notas de banana y maracuyá, Baly Tropical proporciona una experiencia de sabor única.',
    details: '¡Refrescate y disfruta de la energía del verano durante todo el año!',
    image: Amarillo,
  },
  'Manzana verde': {
    description:
      'Con su esencia única y su toque brasileño, es la elección ideal para aquellos que buscan un sabor increíble.',
    details:
      'La manzana verde se destaca por su suavidad y acidez equilibrada, y la presencia de cafeína, taurina y vitaminas del complejo B contribuye a un sabor realmente funcional, que te impulsa y te da energía para todos los momentos.',
    image: Verde,
  },
  Sandía: {
    description:
      'Las notas dulces de la sandía se destacan, y además de su increíble sabor',
    details: 'Baly Sandía ofrece la energía que ya conoces con un toque especial.',
    image: Rojo,
  },
  Próximamente: {
    description: 'Estamos trabajando en nuevos y emocionantes sabores.',
    details:
      'Mantente atento a nuestras redes sociales para ser el primero en probar nuestras nuevas creaciones.',
    image: Proximamente,
  },
};

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [isSugarFree, setIsSugarFree] = useState(false);

  const [selectedFlavor, setSelectedFlavor] = useState<{ id: number; name: FlavorName }>({
    id: 1,
    name: 'Tradicional',
  });

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <Flex
      direction="column"
      minH="100vh"
      bg="black"
      color="white"
      fontFamily="sans-serif"
    >
      <Header
        isMenuOpen={isMenuOpen}
        cartCount={cartCount}
        activeSection={activeSection}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        onSectionClick={(section) => setActiveSection(section)}
        onAddToCart={addToCart}
      />
      <HeroSection />
      <PromoVideoSection />
      <Box id="products" py={{ base: 12, md: 24 }}>
        <Box maxW="7xl" mx="auto" px="4">
          <Heading
            as="h2"
            size="2xl"
            fontWeight="bold"
            mb="12"
            textAlign="center"
            color="#FFD700"
          >
            Nuestros Productos
          </Heading>
          <ProductList
            flavors={flavors}
            selectedFlavor={selectedFlavor}
            setSelectedFlavor={setSelectedFlavor}
          />
          <ProductDetail
            selectedFlavor={selectedFlavor}
            selectedSize={selectedSize}
            isSugarFree={isSugarFree}
            setIsSugarFree={setIsSugarFree}
            setSelectedSize={setSelectedSize}
            addToCart={addToCart}
            sizes={sizes}
            productInfo={productInfo}
          />
        </Box>
      </Box>
      <AboutSection />
      <Footer />
      <NewsletterPopup />
    </Flex>
  );
};

export default HomePage;
