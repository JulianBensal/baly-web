// pages/ContactPage.tsx
import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import FormSelector from './FormSelector';
import SellForm from './SellForm';
import EventForm from './EventForm';
import SponsorshipForm from './SponsorshipForm';

const ContactPage: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState('');

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate async call
    console.log(data);
    setIsSubmitting(false);
    setSubmitFeedback('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
  };

  const renderForm = () => {
    switch (selectedSubject) {
      case 'sell':
        return <SellForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />;
      case 'event':
        return <EventForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />;
      case 'sponsorship':
        return <SponsorshipForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />;
      default:
        return null;
    }
  };

  return (
    <Flex direction="column" minH="100vh" bg="black" color="white" fontFamily="sans-serif">
      <Box bg="black" color="white" py={12}>
        <Box maxW="2xl" mx="auto" textAlign="center">
          <Heading as="h2" size="2xl" color="#FFD700" mb={6}>Contacto</Heading>
          <Text>
            Estamos disponibles para recibir feedback, críticas y elogios sobre nuestras bebidas energéticas y servicios. Tu opinión es importante para nosotros.
          </Text>
          <Text mt={4}>
            Contáctanos directamente en: <a href="mailto:contact@baly.com" className="text-[#FFD700] hover:underline">contact@baly.com</a>
          </Text>
          <Text mt={2}>
            Teléfono: <a href="tel:+541234567890" className="text-[#FFD700] hover:underline">+54 (123) 456-7890</a>
          </Text>
        </Box>
      </Box>

      <Box id="contact-us" bg="gray.900" color="white" py={16}>
        <Box maxW="7xl" mx="auto" px={6}>
          <Heading as="h3" size="xl" color="#FFD700" mb={8}>Contáctanos</Heading>
          <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
            <Box flex={1}>
              <Heading as="h4" size="lg" mb={4}>Seleccione el asunto:</Heading>
              <FormSelector selectedSubject={selectedSubject} setSelectedSubject={setSelectedSubject} />
            </Box>
            <Box flex={2}>
              {renderForm()}
              {submitFeedback && (
                <Text color="green.500" mt={2} role="alert">{submitFeedback}</Text>
              )}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactPage;
