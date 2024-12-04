import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PromoVideoSection from './components/PromoVideoSection';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ContactPage from './components/form/ContactPage'; // Import the new ContactPage component
import NewsletterPopup from './components/NewsletterPopup'; // Import the NewsletterPopup component
import { Flex, Box, Heading } from "@chakra-ui/react";
import { FlavorName } from './components/types';
import Tradicional from './assets/Carrusel/Tradicional_Carrusel.webp';
import Amarillo from './assets/Carrusel/Amarillo_Carrusel.webp';
import Verde from './assets/Carrusel/Verde_Carrusel.webp';
import Rojo from './assets/Carrusel/Rojo_Carrusel.webp';
import Proximamente from './assets/Gustos/Próximamente.png';

const sizes = [
  { name: "2L", volume: "2000ml", price: 1000 },
  { name: "473ml", volume: "473ml", price: 500 },
  { name: "250ml", volume: "250ml", price: 300 },
];

const flavors: { id: number; name: FlavorName; image: string }[] = [
  { id: 1, name: "Tradicional", image: Tradicional }, // Default size
  { id: 2, name: "Tropical", image: Amarillo },
  { id: 3, name: "Manzana verde", image: Verde },
  { id: 4, name: "Sandía", image: Rojo },
  { id: 5, name: "Próximamente", image: Proximamente },
  { id: 6, name: "Próximamente", image: Proximamente },
];

const productInfo: Record<FlavorName, { description: string; details: string; image: string }> = {
  "Tradicional": {
    description: "Baly Tradicional ofrece el sabor clásico de la bebida energética, cítrico y distintivo.",
    details: "La presencia de cafeína, taurina y vitaminas del complejo B contribuye a un sabor realmente funcional, que te impulsa y te da energía para todos los momentos.",
    image: Tradicional
  },
  "Tropical": {
    description: "Con notas deanana y maracuyá, Baly Tropical proporciona una experiencia de sabor única. ",
    details: "¡Refrescate y disfruta de la energía del verano durante todo el año!",
    image: Amarillo
  },
  "Manzana verde": {
    description: "Con su esencia única y su toque brasileño, es la elección ideal para aquellos que buscan un sabor increíble.",
    details: "La manzana verde se destaca por su suavidad y acidez equilibrada, y la presencia de cafeína, taurina y vitaminas del complejo B contribuye a un sabor realmente funcional, que te impulsa y te da energía para todos los momentos.",
    image: Verde
  },
  "Sandía": {
    description: "Las notas dulces de la sandía se destacan, y además de su increíble sabor",
    details: "Baly Sandía ofrece la energía que ya conoces con un toque especial.",
    image: Rojo
  },
  "Próximamente": {
    description: "Estamos trabajando en nuevos y emocionantes sabores.",
    details: "Mantente atento a nuestras redes sociales para ser el primero en probar nuestras nuevas creaciones.",
    image: Proximamente
  }
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [isSugarFree, setIsSugarFree] = useState(false);

  const [selectedFlavor, setSelectedFlavor] = useState<{ id: number, name: FlavorName }>({
    id: 1,
    name: "Tradicional"
  });

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <Router>
      <Flex direction="column" minH="100vh" bg="black" color="white" fontFamily="sans-serif">
        <Header 
          isMenuOpen={isMenuOpen} 
          cartCount={cartCount} 
          activeSection={activeSection} 
          onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} 
          onSectionClick={(section) => setActiveSection(section)} 
          onAddToCart={addToCart}
        />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <PromoVideoSection />
              <Box id="products" py={{ base: 12, md: 24 }}>
                <Box maxW="7xl" mx="auto" px="4">
                  <Heading as="h2" size="2xl" fontWeight="bold" mb="12" textAlign="center" color="#FFD700">Nuestros Productos</Heading>
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
            </>
          } />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <NewsletterPopup /> {/* Add the NewsletterPopup component here */}
      </Flex>
    </Router>
  );
};

export default App;
