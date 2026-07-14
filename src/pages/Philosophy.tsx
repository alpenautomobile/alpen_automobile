import React from 'react'
import { Container, Heading, SimpleGrid, Box, Text } from '@chakra-ui/react'

export default function Philosophy(){
  return (
    <Container maxW="100%" px="6%" py={12}>
      <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} mb={6}>Über Alpen Automobile</Heading>
      <Text fontSize={{ base: 'sm', md: 'md' }} mb={6}>Qualität statt Masse. Sorgfalt statt Zufall. Persönliche Begleitung statt anonymer Fahrzeughandel.</Text>
      <SimpleGrid columns={{base:1, md:3}} spacing={6}>
        <Box p={4} borderWidth="1px" borderRadius="md"><Heading fontSize={{ base: 'md', md: 'lg' }}>Anspruch</Heading><Text fontSize={{ base: 'sm', md: 'md' }} mt={2}>Wir stehen für Fahrzeuge, die höchsten Ansprüchen gerecht werden.</Text></Box>
        <Box p={4} borderWidth="1px" borderRadius="md"><Heading fontSize={{ base: 'md', md: 'lg' }}>Sorgfalt</Heading><Text fontSize={{ base: 'sm', md: 'md' }} mt={2}>Sorgfalt ist für uns kein Extra, sondern die Grundlage jeder Arbeit.</Text></Box>
        <Box p={4} borderWidth="1px" borderRadius="md"><Heading fontSize={{ base: 'md', md: 'lg' }}>Transparenz</Heading><Text fontSize={{ base: 'sm', md: 'md' }} mt={2}>Offene Kommunikation, ehrliche Informationen und klare Abläufe.</Text></Box>
      </SimpleGrid>
    </Container>
  )
}
