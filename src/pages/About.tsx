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
        w="100%"
        maxW="100%"
        px={{
          base: 4,
          md: '6%',
        }}
        py={{
          base: 4,
          md: 6,
        }}
      >
        <Heading
          as="h1"
          fontSize={{ base: 'xl', sm: '2xl' }}
          lineHeight={{ base: '1.05', md: '0.98' }}
          fontWeight="800"
          letterSpacing="-0.035em"
          mb={{ base: 5, md: 6 }}
          mt={{ base: 5, md: 9 }}
        >
          Über Mich
        </Heading>

        <SectionUnderline />

        <Box maxW="980px" mt={{ base: 7, md: 9 }} mb={10}>
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            color="whiteAlpha.850"
            lineHeight="1.75"
            mb={4}
          >
            Ich konzentriere mich bewusst auf wenige, sorgfältig ausgewählte Fahrzeuge statt auf ein möglichst großes Angebot. Ich wähle nur Fahrzeuge aus, welche durch Ausstattung, Zustand und Historie überzeugen – Fahrzeuge, die ich mit gutem Gewissen empfehlen kann und auch selbst gerne fahren würde.
          </Text>

          <Text
            fontSize={{ base: 'sm', md: 'md', xl: 'lg' }}
            color="whiteAlpha.850"
            lineHeight="1.75"
            mb={4}
          >
            Direkte Kommunikation und eine persönliche Betreuung stehen für mich dabei an erster Stelle damit Sie mit der Abwicklung und dem Fahrzeug vollkommend zufrieden sind.
          </Text>

          <Text
            fontSize={{ base: 'sm', md: 'md', xl: 'lg' }}
            color="whiteAlpha.900"
            lineHeight="1.75"
            fontWeight="600"
          >
            Jedes Fahrzeug von Alpen Automobile erfüllt meinen Qualitätsstandard
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
