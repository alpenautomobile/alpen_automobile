import React from 'react'
import { Container, Heading, Text, SimpleGrid, Box } from '@chakra-ui/react'

function SectionUnderline() {
  return (
    <Box
      w={{ base: '44px', md: '64px' }}
      h="3px"
      bg="#d31313"
      borderRadius="full"
    />
  )
}

export default function About() {
  return (
    <Box
      as="main"
      position="relative"
      minH="100vh"
      w="100%"
      bg="#181818"
      color="white"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        bg="
          radial-gradient(
            circle at 75% 20%,
            rgba(255,255,255,0.035),
            transparent 30%
          ),
          linear-gradient(
            180deg,
            #181818 0%,
            #282828 45%,
            #181818 100%
          )
        "
      />

      <Container
        position="relative"
        zIndex={1}
        maxW="1600px"
        px={{ base: 5, sm: 6, md: 8, lg: 12, xl: 16 }}
        pt={{ base: 10, md: 14, xl: 16 }}
        pb={{ base: 12, md: 16, xl: 20 }}
      >
        <Heading
          as="h1"
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl', xl: '6xl' }}
          lineHeight={{ base: '1.05', md: '0.98' }}
          fontWeight="800"
          letterSpacing="-0.035em"
          mb={{ base: 5, md: 6 }}
        >
          Über Alpen Automobile
        </Heading>

        <SectionUnderline />

        <Text
          fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}
          color="whiteAlpha.850"
          lineHeight="1.6"
          mt={{ base: 7, md: 9 }}
          mb={8}
        >
          Wir begleiten Sie persönlich und diskret auf dem Weg zu Ihrem nächsten Fahrzeug.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <Box
            p={5}
            bg="rgba(255,255,255,0.035)"
            border="1px solid rgba(255,255,255,0.15)"
            borderRadius="md"
          >
            <Heading fontSize={{ base: 'md', md: 'lg' }} color="white">
              Erfahrung
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="whiteAlpha.800" mt={2}>
              Langjährige Expertise im Premiumsegment.
            </Text>
          </Box>

          <Box
            p={5}
            bg="rgba(255,255,255,0.035)"
            border="1px solid rgba(255,255,255,0.15)"
            borderRadius="md"
          >
            <Heading fontSize={{ base: 'md', md: 'lg' }} color="white">
              Vertrauen
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="whiteAlpha.800" mt={2}>
              Diskretion, Fairness und absolute Verlässlichkeit.
            </Text>
          </Box>

          <Box
            p={5}
            bg="rgba(255,255,255,0.035)"
            border="1px solid rgba(255,255,255,0.15)"
            borderRadius="md"
          >
            <Heading fontSize={{ base: 'md', md: 'lg' }} color="white">
              Leidenschaft
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="whiteAlpha.800" mt={2}>
              Automobile sind unsere Leidenschaft.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
