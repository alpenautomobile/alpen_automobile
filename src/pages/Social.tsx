import React from 'react'
import { Container, Heading, SimpleGrid, Box, Text, Image } from '@chakra-ui/react'

export default function Social(){
  return (
    <Container maxW="100%" px={{ base: 4, md: '6%' }} py={12}>
      <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} mb={6}>Social Media</Heading>
      <Text fontSize={{ base: 'sm', md: 'md' }} mb={6}>Folgen Sie Alpen Automobile auf unseren Kanälen für exklusive Einblicke.</Text>
      <SimpleGrid columns={{base:1, md:3}} spacing={6}>
        <Box borderWidth="1px" p={4} borderRadius="md"><Heading fontSize={{ base: 'md', md: 'lg' }}>YouTube</Heading><Text fontSize={{ base: 'sm', md: 'md' }} mt={2}>Fahrzeugvorstellungen, Tests und Marktanalysen.</Text></Box>
        <Box borderWidth="1px" p={4} borderRadius="md"><Heading fontSize={{ base: 'md', md: 'lg' }}>Instagram</Heading><Text fontSize={{ base: 'sm', md: 'md' }} mt={2}>Ästhetik, Details und Momente aus der Alpen Welt.</Text></Box>
        <Box borderWidth="1px" p={4} borderRadius="md"><Heading fontSize={{ base: 'md', md: 'lg' }}>TikTok</Heading><Text fontSize={{ base: 'sm', md: 'md' }} mt={2}>Kurz, dynamisch und relevant.</Text></Box>
      </SimpleGrid>
    </Container>
  )
}
