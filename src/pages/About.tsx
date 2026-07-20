import React from 'react'
import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Flex,
} from '@chakra-ui/react'

function SectionHeader({ title }: { title: string }) {
  return (
    <Box mb={{ base: 7, md: 8 }}>
      <Flex align="center" gap={4}>
        <Box
          w="4px"
          h={{ base: '26px', md: '32px' }}
          bg="#b21a18"
          borderRadius="full"
          flexShrink={0}
        />
        <Heading
          as="h1"
          fontSize={{ base: 'xl', md: '2xl' }}
          lineHeight="1"
          fontWeight="800"
          letterSpacing="-0.035em"
          color="white"
          m={0}
        >
          {title}
        </Heading>
      </Flex>
    </Box>
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
        px={{ base: 4, md: '6%' }}
        pt={{ base: 9, md: 8 }}
        pb={{ base: 8, md: 0 }}
      >
        <SectionHeader title="Über Mich" />

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
            Direkte Kommunikation und eine persönliche Betreuung stehen für mich an erster Stelle, 
            damit Sie sowohl mit der Abwicklung als auch mit Ihrem Fahrzeug nachhaltig zufrieden sind.

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
