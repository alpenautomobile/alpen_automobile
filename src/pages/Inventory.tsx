import React from 'react'
import { Container, Heading, SimpleGrid, Box, Image, Text, Button } from '@chakra-ui/react'

export default function Inventory(){
  return (
    <Container maxW="100%" px="6%" py={12}>
      <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} mb={6}>Fahrzeugbestand</Heading>
      <SimpleGrid columns={{base:1, md:3}} spacing={6}>
        {[1,2,3,4,5,6].map((i)=> (
          <Box key={i} borderWidth="1px" borderRadius="md" overflow="hidden">
            <Image src={`/card${(i%3)+1}.jpg`} alt="car" />
            <Box p={4}>
              <Heading fontSize={{ base: 'md', md: 'lg' }}>Beispiel Fahrzeug {i}</Heading>
              <Text fontSize={{ base: 'sm', md: 'md' }} mt={2}>CHF {49000 + i*1000}.-</Text>
              <Button mt={4} variant="link" fontSize={{ base: 'sm', md: 'md' }}>Mehr ansehen →</Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}
