import React from 'react'
import { Container, Heading, SimpleGrid, Box, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react'

export default function Contact(){
  return (
    <Container maxW="100%" px="6%" py={12}>
      <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} mb={6}>Kontakt</Heading>
      <SimpleGrid columns={{base:1, md:2}} spacing={8}>
        <Box>
          <form>
            <FormControl mb={3} isRequired>
              <FormLabel>Ihr Name</FormLabel>
              <Input />
            </FormControl>
            <FormControl mb={3} isRequired>
              <FormLabel>E-Mail</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Telefonnummer</FormLabel>
              <Input />
            </FormControl>
            <FormControl mb={3} isRequired>
              <FormLabel>Ihre Nachricht</FormLabel>
              <Textarea />
            </FormControl>
            <Button colorScheme="red">Nachricht senden</Button>
          </form>
        </Box>
        <Box>
          <Heading fontSize={{ base: 'md', md: 'lg' }}>Kontaktdaten</Heading>
          <Box mt={4}>
            +41 76 819 32 73
          </Box>
          <Box mt={2}>info@alpen-automobile.ch</Box>
        </Box>
      </SimpleGrid>
    </Container>
  )
}
