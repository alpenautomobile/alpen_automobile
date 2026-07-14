import React from 'react'
import { Container, Heading, SimpleGrid, Box, Text } from '@chakra-ui/react'

export default function Services(){
  return (
    <Container maxW="100%" px="6%" py={12}>
      <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} mb={6}>Dienstleistungen</Heading>
      <SimpleGrid columns={{base:1, md:3}} spacing={6}>
        <Box p={6} borderWidth="1px" borderRadius="md"><Heading fontSize={{ base: 'md', md: 'lg' }}>Fahrzeugverkauf</Heading><Text fontSize={{ base: 'sm', md: 'md' }} mt={2}>Diskret, sicher und zum bestmöglichen Preis.</Text></Box>
        <Box p={6} borderWidth="1px" borderRadius="md"><Heading fontSize={{ base: 'md', md: 'lg' }}>Fahrzeugsbeschaffung</Heading><Text fontSize={{ base: 'sm', md: 'md' }} mt={2}>Wir finden das passende Fahrzeug für Sie.</Text></Box>
        <Box p={6} borderWidth="1px" borderRadius="md"><Heading fontSize={{ base: 'md', md: 'lg' }}>Importbegleitung</Heading><Text fontSize={{ base: 'sm', md: 'md' }} mt={2}>Transparent, effizient und rundum betreut.</Text></Box>
      </SimpleGrid>
    </Container>
  )
}
