'use client'

import React, { useState } from 'react'
import { Button, Input, Box, Image, Flex, Text, Heading, IconButton, Link, Stack, Textarea, FormControl } from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { FaShoppingCart, FaFacebook, FaInstagram, FaLinkedin, FaPlay, FaPause } from 'react-icons/fa'

const flavors: { id: number; name: FlavorName; image: string }[] = [
    { id: 1, name: "Tradicional", image: "/placeholder.svg?height=96&width=96&text=Tradicional" },
    { id: 2, name: "Amarillo", image: "/placeholder.svg?height=96&width=96&text=Amarillo" },
    { id: 3, name: "Verde", image: "/placeholder.svg?height=96&width=96&text=Verde" },
    { id: 4, name: "Rojo", image: "/placeholder.svg?height=96&width=96&text=Rojo" },
    { id: 5, name: "Próximamente", image: "/placeholder.svg?height=96&width=96&text=Próximamente+1" },
    { id: 6, name: "Próximamente", image: "/placeholder.svg?height=96&width=96&text=Próximamente+2" },
  ];

const sizes = [
  { name: "2L", volume: "2000ml", price: 1000 },
  { name: "473ml", volume: "473ml", price: 500 },
  { name: "250ml", volume: "250ml", price: 300 },
]

type FlavorName = 'Tradicional' | 'Amarillo' | 'Verde' | 'Rojo' | 'Próximamente';

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
  

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedSize, setSelectedSize] = useState(sizes[1])
  const [isSugarFree, setIsSugarFree] = useState(false)

  const [selectedFlavor, setSelectedFlavor] = useState<{ id: number, name: FlavorName }>({
    id: 1,
    name: "Tradicional"
  });

  const togglePlay = () => {
    const video = document.getElementById('promoVideo') as HTMLVideoElement
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1)
  }

  return (
    <Flex direction="column" minH="100vh" bg="black" color="white" fontFamily="sans-serif">
      <Box as="header" position="sticky" top="0" zIndex="50" w="full" borderBottom="1px" borderColor="gray.800" bg="blackAlpha.800" backdropFilter="blur(10px)">
        <Flex align="center" justify="space-between" py="4" px="6">
          <Link href="/" display="flex" alignItems="center">
            <Image src="/placeholder.svg?height=32&width=32&text=Logo" alt="Baly Logo" h="8" w="auto" />
            <Text display={{ base: 'none', sm: 'inline-block' }} fontWeight="bold" color="#FFD700" ml="2">Baly</Text>
          </Link>
          <Flex as="nav" display={{ base: 'none', md: 'flex' }} align="center" gap="6">
            {['home', 'products', 'about', 'contact'].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                color={activeSection === section ? '#FFD700' : 'white'}
                fontWeight="bold"
                onClick={() => setActiveSection(section)}
                _hover={{ color: '#FFD700' }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </Flex>
          <Flex align="center">
            <Button bg="#FFD700" color="black" _hover={{ bg: '#FFA500' }} borderRadius="full" onClick={addToCart}>
              <Box as={FaShoppingCart} mr="2" />
              <Text display={{ base: 'none', sm: 'inline' }}>Carrito</Text>
              <Text ml="1">({cartCount})</Text>
            </Button>
            <IconButton
              aria-label="Toggle Menu"
              display={{ base: 'inline-flex', md: 'none' }}
              icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </Flex>
        </Flex>
        {isMenuOpen && (
          <Box display={{ md: 'none' }} p="4">
            <Stack spacing="4">
              {['home', 'products', 'about', 'contact'].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  color={activeSection === section ? '#FFD700' : 'white'}
                  fontWeight="bold"
                  onClick={() => {
                    setActiveSection(section)
                    setIsMenuOpen(false)
                  }}
                  _hover={{ color: '#FFD700' }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
            </Stack>
          </Box>
        )}
      </Box>

      <Box as="main" flex="1">
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

        <Box id="products" py={{ base: 12, md: 24 }}>
          <Box maxW="7xl" mx="auto" px="4">
            <Heading as="h2" size="2xl" fontWeight="bold" mb="12" textAlign="center" color="#FFD700">Nuestros Productos</Heading>
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
          </Box>
        </Box>

        <Box bg="#FFD700" py="16" position="relative">
          <Box maxW="7xl" mx="auto" px="4">
            <Stack direction={{ base: "column", md: "row" }} spacing="8" align="center">
              <Box>
                <Heading as="h3" size="lg" fontWeight="bold" mb="4" color="black">Información del Producto</Heading>
                <Text color="black" fontSize="lg" mb="4">
                  {productInfo[selectedFlavor.name].description}
                </Text>
                <Text color="black" fontSize="lg" mb="4">
                  {productInfo[selectedFlavor.name].details}
                </Text>
                <Button bg="black" color="white" _hover={{ bg: 'gray.800' }} size="lg">
                  Más Información
                </Button>
              </Box>
              <Flex justify="center">
                <Image
                  src={productInfo[selectedFlavor.name].image}
                  alt={`Baly ${selectedFlavor.name} Bottle Tilted`}
                  maxH="400px"
                  objectFit="contain"
                  transform="rotate(-12deg)"
                />
              </Flex>
            </Stack>
          </Box>
          <Box position="absolute" top="0" left="0" right="0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 110C120 100 240 80 360 73.3C480 67 600 73 720 76.7C840 80 960 80 1080 73.3C1200 67 1320 53 1380 46.7L1440 40V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="black"/>
            </svg>
          </Box>
        </Box>

        <Box id="about" w="full" py={{ base: 12, md: 24 }} bg="black">
          <Box maxW="7xl" mx="auto" px="4">
            <Heading as="h2" size="2xl" fontWeight="extrabold" textAlign="center" mb="12" color="#FFD700">About Baly</Heading>
            <Text mt="4" color="white" textAlign="center" maxW="2xl" mx="auto" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="medium">
              Born in Argentina, Baly is on a mission to provide the energy you need to face your daily challenges. 
              Our unique formula combines high-quality ingredients to offer you an unparalleled energy boost.
            </Text>
          </Box>
        </Box>

        <Box id="contact" w="full" py={{ base: 12, md: 24 }} bg="gray.950">
          <Box maxW="7xl" mx="auto" px="4">
            <Heading as="h2" size="2xl" fontWeight="extrabold" textAlign="center" mb="12" color="#FFD700">Contact Us</Heading>
            <Stack as="form" maxW="md" mx="auto" mt="8" spacing="4">
              <Input placeholder="Name" bg="gray.800" color="white" borderColor="gray.700" borderRadius="full" />
              <Input placeholder="Email" type="email" bg="gray.800" color="white" borderColor="gray.700" borderRadius="full" />
              <Input placeholder="Subject" bg="gray.800" color="white" borderColor="gray.700" borderRadius="full" />
              <FormControl>
                <Textarea
                  minH="100px"
                  bg="gray.800"
                  color="white"
                  borderColor="gray.700"
                  borderRadius="3xl"
                  placeholder="Message"
                  focusBorderColor="#FFD700"
                />
              </FormControl>
              <Button bg="#FFD700" color="black" _hover={{ bg: '#FFA500' }} borderRadius="full" fontWeight="bold" size="lg">
                Send Message
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box as="footer" w="full" py="8" bg="gray.900" color="white">
        <Box maxW="7xl" mx="auto" px="4">
          <Stack direction={{ base: "column", md: "row" }} spacing="8">
            <Stack spacing="4">
              <Flex align="center" gap="4">
                <Image src="/placeholder.svg?height=32&width=32&text=Logo" alt="Baly Logo" h="8" w="auto" />
                <Text fontSize="sm">© 2023 Baly. Todos los derechos reservados.</Text>
              </Flex>
              <Stack fontSize="sm">
                <Text>Email: info@baly.com</Text>
                <Text>Teléfono: +54 11 1234-5678</Text>
              </Stack>
              <Button variant="link" color="#FFD700" _hover={{ color: '#FFA500' }} p="0" h="auto">
                Políticas de Privacidad
              </Button>
            </Stack>

            <Stack align="center" spacing="4">
              <Stack direction="row" spacing="4">
                <Link href="#" _hover={{ color: '#FFD700' }}>
                  <Box as={FaFacebook} boxSize="6" />
                  <Text srOnly>Facebook</Text>
                </Link>
                <Link href="#" _hover={{ color: '#FFD700' }}>
                  <Box as={FaInstagram} boxSize="6" />
                  <Text srOnly>Instagram</Text>
                </Link>
                <Link href="#" _hover={{ color: '#FFD700' }}>
                  <Box as={FaLinkedin} boxSize="6" />
                  <Text srOnly>LinkedIn</Text>
                </Link>
              </Stack>
              <Button variant="outline" borderColor="#FFD700" color="#FFD700" _hover={{ bg: '#FFD700', color: 'black' }}>
                Ir a Contacto
              </Button>
              <Button variant="outline" borderColor="#FFD700" color="#FFD700" _hover={{ bg: '#FFD700', color: 'black' }}>
                Ver Productos
              </Button>
            </Stack>

            <Stack align="flex-end" spacing="4" fontSize="sm">
              <Link href="#home" _hover={{ color: '#FFD700' }}>Inicio</Link>
              <Link href="#products" _hover={{ color: '#FFD700' }}>Productos</Link>
              <Link href="#about" _hover={{ color: '#FFD700' }}>Nosotros</Link>
              <Link href="#contact" _hover={{ color: '#FFD700' }}>Contacto</Link>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Flex>
  )
}
