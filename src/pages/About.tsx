import React from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'

const RED = '#b21a18'

function SectionHeader({ title }: { title: string }) {
  return (
    <Box mb={{ base: 7, md: 8 }}>
      <Flex align="center" gap={4}>
        <Box
          w="4px"
          h={{ base: '26px', md: '32px' }}
          bg={RED}
          borderRadius="full"
          flexShrink={0}
        />

      <Heading
        as="h1"
        fontSize={{ base: 'md', md: 'xl'}}
        lineHeight="1"
        fontWeight="800"
        letterSpacing="-0.035em"
        color="white"
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
      bg="#000000"
      color="white"
      overflow="hidden"
    >
      {/* Background */}
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
            #000000 0%,
            #282828 45%,
            #000000 100%
          )
        "
      />

      <Container
        position="relative"
        zIndex={1}
        w="100%"
        maxW="100%"
        px={{ base: 4, md: '6%' }}
        pt={5}
        pb={{ base: 8, md: 0 }}
      >
        <SectionHeader title="Über mich" />

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 9, lg: 14, xl: 20 }}
          alignItems="start"
        >
          {/* Text */}
          <Box maxW={{ lg: '720px' }}>
            <Heading
              as="h2"
              fontSize={{
                base: 'md',
                md: 'xl',
              }}
              lineHeight="1.08"
              fontWeight="800"
              letterSpacing="-0.045em"
              color="white"
              mb={2}
            >
              Ich bin Christoph.
            </Heading>

            <Heading
              as="h3"
              fontSize={{
                base: 'md',
                md: 'xl',
              }}
              lineHeight="1.15"
              fontWeight="400"
              letterSpacing="-0.03em"
              color="whiteAlpha.750"
              mb={{ base: 5, md: 8 }}
            >
              Gründer von{' '}
              <Box
                as="span"
                fontWeight="700"
              >
                Alpen Automobile.
              </Box>
            </Heading>

            {/* Underline */}
            <Box
              w="72px"
              h="1px"
              bg="whiteAlpha.400"
              mb={{ base: 5, md: 8 }}
            />

            {/* Mobile image */}
            <Box
              display={{ base: 'block', lg: 'none' }}
              width="100%"
              mb={7}
            >
              <Image
                src="/christoph.png"
                alt="Christoph, Gründer von Alpen Automobile"
                width="100%"
                height={{
                  base: '380px',
                  sm: '480px',
                  md: '580px',
                }}
                objectFit="cover"
                objectPosition="center top"
                borderRadius={{ base: '8px', md: '12px' }}
                border="1px solid rgba(255,255,255,0.14)"
                boxShadow="0 20px 55px rgba(0,0,0,0.32)"
              />
            </Box>

            <Text
              fontSize={{ base: 'sm', md: 'md'}}
              color="whiteAlpha.850"
              lineHeight="1.8"
              mb={5}
            >
              Die Begeisterung für hochwertige Fahrzeuge begleitet mich seit
              vielen Jahren. Mit Alpen Automobile habe ich den Schritt gemacht,
              diese Leidenschaft mit einem eigenen Fahrzeughandel zu verbinden.
            </Text>

            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color="whiteAlpha.850"
              lineHeight="1.8"
              mb={5}
            >
              Als Einzelunternehmer begleite ich meine Kunden vom ersten Kontakt
              bis zur Fahrzeugübergabe persönlich und stehe ihnen dabei als
              direkter Ansprechpartner zur Seite. Sorgfalt, Transparenz und eine
              vertrauensvolle Zusammenarbeit stehen für mich an erster Stelle.
            </Text>

            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color="whiteAlpha.850"
              lineHeight="1.8"
              mb={5}
            >
              Ich konzentriere mich bewusst auf wenige, sorgfältig ausgewählte
              Fahrzeuge anstatt auf ein möglichst großes Angebot. Jedes davon
              muss mich hinsichtlich Ausstattung, Zustand und Historie
              überzeugen. Ich biete nur Fahrzeuge an, hinter denen ich persönlich
              stehe und die ich auch selbst gerne fahren würde.
            </Text>

            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color="whiteAlpha.850"
              lineHeight="1.8"
            >
              Vertrauen entsteht für mich durch offene Kommunikation, ehrliche
              Informationen und nachvollziehbare Abläufe. Mein wichtigstes Ziel
              ist, dass Sie nicht nur bei der Fahrzeugübergabe zufrieden sind,
              sondern auch langfristig überzeugt davon sind, mit Alpen Automobile
              die richtige Entscheidung getroffen zu haben.
            </Text>
          </Box>

          {/* Desktop image */}
          <Box
            display={{ base: 'none', lg: 'block' }}
            position="sticky"
            top="32px"
            maxW="590px"
            justifySelf="end"
            width="100%"
          >
            <Image
              src="/christoph.png"
              alt="Christoph, Gründer von Alpen Automobile"
              width="100%"
              height="615px"
              objectFit="cover"
              objectPosition="center top"
              borderRadius="12px"
              border="1px solid rgba(255,255,255,0.14)"
              boxShadow="0 20px 55px rgba(0,0,0,0.32)"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}