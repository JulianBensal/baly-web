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
import { Flex, Box, Heading } from "@chakra-ui/react";
import { FlavorName } from './components/types';
import Tradicional from './assets/Gustos/Tradicional_473ml.png';
import Amarillo from './assets/Gustos/Amarillo_473ml.png';
import Verde from './assets/Gustos/Verde_473ml.png';
import Rojo from './assets/Gustos/Rojo_473ml.png';
import Proximamente from './assets/Gustos/Próximamente.jpg';

const sizes = [
  { name: "2L", volume: "2000ml", price: 1000 },
  { name: "473ml", volume: "473ml", price: 500 },
  { name: "250ml", volume: "250ml", price: 300 },
];

const basePath = './assets/Gustos';

const getFlavorImage = (flavorName: FlavorName, size: string, basePath: string) => {
  if (flavorName === "Próximamente") {
    return `${basePath}/Próximamente_${size}.jpg`;
  } else {
    const path = `${basePath}/${flavorName}_${size}.png`;
    console.log(`Image path for ${flavorName} (${size}):`, path);
    return path;
  }
};

const flavors: { id: number; name: FlavorName; image: string }[] = [
  { id: 1, name: "Tradicional", image: Tradicional }, // Default size
  { id: 2, name: "Amarillo", image: Amarillo },
  { id: 3, name: "Verde", image: Verde },
  { id: 4, name: "Rojo", image: Rojo },
  { id: 5, name: "Próximamente", image: Proximamente },
  { id: 6, name: "Próximamente", image: Proximamente },
];

const productInfo: Record<FlavorName, { description: string; details: string; image: string }> = {
  "Tradicional": {
    description: "El Baly Tradicional tiene el sabor clásico de energéticos, intenso y refrescante.",
    details: "Es perfecto para quienes buscan un impulso de energía para enfrentar los desafíos diarios, ya sea en el trabajo, en los estudios o en los momentos de diversión.",
    image: "/placeholder.svg?height=400&width=200&text=Baly+Tradicional+Tilted"
  },
  "Amarillo": {
    description: "Baly Amarillo ofrece un sabor cítrico y vibrante, con notas de limón y naranja.",
    details: "Ideal para aquellos que buscan un sabor refrescante y un impulso de energía con un toque tropical.",
    image: "/placeholder.svg?height=400&width=200&text=Baly+Amarillo+Tilted"
  },
  "Verde": {
    description: "Baly Verde combina el sabor de las manzanas verdes con un toque de kiwi.",
    details: "Perfecto para los amantes de los sabores frutales que buscan una explosión de energía y frescura.",
    image: "/placeholder.svg?height=400&width=200&text=Baly+Verde+Tilted"
  },
  "Rojo": {
    description: "Baly Rojo mezcla el sabor intenso de las frutas rojas con un toque de guaraná.",
    details: "Diseñado para los que buscan un sabor audaz y una carga extra de energía para sus actividades más intensas.",
    image: "/placeholder.svg?height=400&width=200&text=Baly+Rojo+Tilted"
  },
  "Próximamente": {
    description: "Estamos trabajando en nuevos y emocionantes sabores.",
    details: "Mantente atento a nuestras redes sociales para ser el primero en probar nuestras nuevas creaciones.",
    image: "/placeholder.svg?height=400&width=200&text=Baly+Próximamente+Tilted"
  }
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [isSugarFree, setIsSugarFree] = useState(false);

  const [selectedFlavor, setSelectedFlavor] = useState<{ id: number, name: FlavorName }>({
    id: 1,
    name: "Tradicional"
  });

  const togglePlay = () => {
    const video = document.getElementById('promoVideo') as HTMLVideoElement;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

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
              <PromoVideoSection isPlaying={isPlaying} togglePlay={togglePlay} />
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
      </Flex>
    </Router>
  );
};

export default App;
