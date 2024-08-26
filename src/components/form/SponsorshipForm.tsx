// components/SponsorshipForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Input, Select, Textarea, FormLabel as Label } from '@chakra-ui/react';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  socialMedia?: string;
  segment?: string;
  comments?: string;
  mediaKit?: FileList; // Add this line to include the mediaKit field
}

interface SponsorshipFormProps {
  onSubmit: (data: FormData) => void;
  isSubmitting: boolean;
}

const SponsorshipForm: React.FC<SponsorshipFormProps> = ({ onSubmit, isSubmitting }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const sponsorshipSegments = [
    "Lifestyle", "Deportes", "E-Sports / Streaming", "Bar", "Otros"
  ];

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} gap={4}>
      <Input {...register("name", { required: "El nombre es requerido" })} placeholder="Nombre" />
      {errors.name && <Box color="red.500">{errors.name.message}</Box>}
      
      <Input {...register("email", { required: "El email es requerido" })} placeholder="Email" type="email" />
      {errors.email && <Box color="red.500">{errors.email.message}</Box>}
      
      <Input {...register("phone")} placeholder="Teléfono" />
      
      <Input {...register("socialMedia")} placeholder="Red Social" />
      
      <Select 
        placeholder="Selecciona el segmento" 
        bg="gray.800" 
        color="white" 
        borderColor="gray.700" 
        mt={2} 
        {...register("segment")}
      >
        {sponsorshipSegments.map((segment) => (
          <option key={segment} value={segment.toLowerCase().replace(/\s+/g, '-')}>
            {segment}
          </option>
        ))}
      </Select>
      
      <Textarea {...register("comments")} placeholder="Comentarios" />
      
      <Box>
        <Label htmlFor="mediaKit">Media Kit / Presentación</Label>
        <Input id="mediaKit" type="file" {...register("mediaKit")} />
      </Box>
      
      <Button
        type="submit"
        w="full"
        isLoading={isSubmitting}
        bg="#FFD700"
        color="black"
        _hover={{ bg: '#FFA500' }}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </Button>
    </Box>
  );
};

export default SponsorshipForm;