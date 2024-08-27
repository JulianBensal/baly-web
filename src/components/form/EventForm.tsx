import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box, Button, Input, Select, Textarea, FormLabel as Label,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the DatePicker styles
import { format } from 'date-fns';
import { FaCalendarAlt } from 'react-icons/fa'; // Import the calendar icon

interface FormData {
  name: string;
  email: string;
  phone?: string;
  eventDate?: string;
  segment?: string;
  province?: string;
  city?: string;
  estimatedAttendance?: number;
  eventDescription?: string;
}

interface EventFormProps {
  onSubmit: (data: FormData) => void;
  isSubmitting: boolean;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit, isSubmitting }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();
  const [date, setDate] = useState<Date | null>(null);

  const handleDateChange = (selectedDate: Date | null) => {
    setDate(selectedDate);
    setValue("eventDate", selectedDate ? format(selectedDate, "dd/MM/yyyy") : "");
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} gap={4}>
      <Input {...register("name", { required: "El nombre es requerido" })} placeholder="Nombre" />
      {errors.name && <Box color="red.500">{errors.name.message}</Box>}
      
      <Input {...register("email", { required: "El correo electrónico es requerido" })} placeholder="Correo electrónico" type="email" />
      {errors.email && <Box color="red.500">{errors.email.message}</Box>}
      
      <Input {...register("phone")} placeholder="Teléfono" />

      <Box mt={4}>
        <Label>Fecha del evento</Label>
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          customInput={
            <Button
              w="full"
              justifyContent="start"
              leftIcon={<FaCalendarAlt />} // Use the imported calendar icon
              variant="outline"
              colorScheme="teal"
              textAlign="left"
            >
              {date ? format(date, "dd/MM/yyyy") : "Selecciona la fecha"}
            </Button>
          }
        />
      </Box>
      {errors.eventDate && <Box color="red.500">{errors.eventDate.message}</Box>}
      
      <Select 
        placeholder="Selecciona el segmento" 
        bg="gray.800" 
        color="white" 
        borderColor="gray.700" 
        mt={4} 
        {...register("segment")}
      >
        {["Emprendedurismo", "Deportivo", "Universitario", "Fiesta", "Otros"].map((segment) => (
          <option key={segment} value={segment.toLowerCase().replace(/\s+/g, '-')}>
            {segment}
          </option>
        ))}
      </Select>
      
      <Input {...register("province", { required: "La provincia es requerida" })} placeholder="Provincia" mt={4} />
      {errors.province && <Box color="red.500">{errors.province.message}</Box>}
      
      <Input {...register("city", { required: "La ciudad es requerida" })} placeholder="Ciudad" mt={4} />
      {errors.city && <Box color="red.500">{errors.city.message}</Box>}
      
      <Input {...register("estimatedAttendance", { required: "El público estimado es requerido" })} placeholder="Público estimado" type="number" mt={4} />
      {errors.estimatedAttendance && <Box color="red.500">{errors.estimatedAttendance.message}</Box>}
      
      <Textarea {...register("eventDescription", { required: "La descripción del evento es requerida" })} placeholder="Descripción del evento" mt={4} />
      {errors.eventDescription && <Box color="red.500">{errors.eventDescription.message}</Box>}
      
      <Button
        type="submit"
        w="full"
        isLoading={isSubmitting}
        bg="#FFD700"
        color="black"
        _hover={{ bg: '#FFA500' }}
        mt={6}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </Button>
    </Box>
  );
};

export default EventForm;
