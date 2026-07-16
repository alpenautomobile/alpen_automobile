import React from 'react'
import { Container, Heading, Text, SimpleGrid, Box } from '@chakra-ui/react'

export default function About(){
  return (
    <Container maxW="100%" px={{ base: 4, md: '6%' }} py={12}>
      <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} mb={6}>Über Alpen Automobile</Heading>
      <Text fontSize={{ base: 'sm', md: 'md' }} mb={6}>Wir begleiten Sie persönlich und diskret auf dem Weg zu Ihrem nächsten Fahrzeug.</Text>
      <SimpleGrid columns={{base:1, md:3}} spacing={6}>
        <Box p={4} borderWidth="1px" borderRadius="md"><Heading fontSize={{ base: 'md', md: 'lg' }}>Erfahrung</Heading><Text fontSize={{ base: 'sm', md: 'md' }} mt={2}>Langjährige Expertise im Premiumsegment.</Text></Box>
        <Box p={4} borderWidth="1px" borderRadius="md"><Heading fontSize={{ base: 'md', md: 'lg' }}>Vertrauen</Heading><Text fontSize={{ base: 'sm', md: 'md' }} mt={2}>Diskretion, Fairness und absolute Verlässlichkeit.</Text></Box>
        <Box p={4} borderWidth="1px" borderRadius="md"><Heading fontSize={{ base: 'md', md: 'lg' }}>Leidenschaft</Heading><Text fontSize={{ base: 'sm', md: 'md' }} mt={2}>Automobile sind unsere Leidenschaft.</Text></Box>
      </SimpleGrid>
    </Container>
  )
}
