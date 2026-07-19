import React from 'react'
import {
  Box,
  Circle,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import {
  FiCheckSquare,
  FiClipboard,
  FiFileText,
  FiSearch,
  FiShield,
  FiTruck,
  FiUsers,
} from 'react-icons/fi'
import { LuHandshake } from 'react-icons/lu'
import { LuCarFront } from 'react-icons/lu'

type ServiceStep = {
  number: string
  text: string
  icon: React.ElementType
}

const steps: ServiceStep[] = [
  {
    number: '01',
    icon: FiUsers,
    text: 'Persönliches Erstgespräch mit Aufnahme Ihrer Vorstellungen',
  },
  {
    number: '02',
    icon: FiClipboard,
    text: 'Festlegung von Fahrzeugtyp, Ausstattung, Budget und weiteren Anforderungen',
  },
  {
    number: '03',
    icon: FiSearch,
    text: 'Gezielte Suche nach passenden Fahrzeugen',
  },
  {
    number: '04',
    icon: FiCheckSquare,
    text: 'Vorauswahl und gemeinsame Abstimmung geeigneter Angebote',
  },
  {
    number: '05',
    icon: FiShield,
    text: 'Prüfung von Zustand, Ausstattung, Historie und Unterlagen',
  },
  {
    number: '06',
    icon: LuHandshake,
    text: 'Führung der Verhandlung sowie Unterstützung bei der finalen Kaufentscheidung',
  },
  {
    number: '07',
    icon: FiFileText,
    text: 'Abwicklung des Fahrzeugkaufs mit dem Verkäufer',
  },
  {
    number: '08',
    icon: FiTruck,
    text: 'Durchführung oder Koordination der Fahrzeugabholung im In- und Ausland',
  },
  {
    number: '09',
    icon: LuCarFront,
    text: 'Persönliche Übergabe beziehungsweise Auslieferung des Fahrzeugs',
  },
]

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

function DesktopStepCard({ step }: { step: ServiceStep }) {
  const Icon = step.icon

  return (
    <Flex
      align="center"
      minH={{ xl: '116px', '2xl': '124px' }}
      px={{ xl: 5, '2xl': 6 }}
      py={5}
      bg="rgba(255,255,255,0.018)"
      border="1px solid rgba(255,255,255,0.15)"
      borderRadius="5px"
      transition="border-color 180ms ease, background-color 180ms ease, transform 180ms ease"
      _hover={{
        bg: 'rgba(255,255,255,0.035)',
        borderColor: 'rgba(255,255,255,0.25)',
        transform: 'translateY(-2px)',
      }}
    >
      <Circle
        size={{ xl: '48px', '2xl': '52px' }}
        bg="#c91414"
        color="white"
        fontSize={{ xl: 'lg', '2xl': 'xl' }}
        fontWeight="700"
        flexShrink={0}
        boxShadow="0 0 0 1px rgba(255,60,60,0.35)"
      >
        {step.number}
      </Circle>

      <Circle
        size={{ xl: '56px', '2xl': '62px' }}
        ml={{ xl: 4, '2xl': 5 }}
        border="1px solid rgba(255,255,255,0.23)"
        color="whiteAlpha.900"
        flexShrink={0}
      >
        <Box
          as={Icon}
          boxSize={{ xl: 6, '2xl': 7 }}
          strokeWidth="1.7"
        />
      </Circle>

      <Box
        h="52px"
        w="1px"
        bg="rgba(255,255,255,0.16)"
        mx={{ xl: 4, '2xl': 5 }}
        flexShrink={0}
      />

      <Text
        color="whiteAlpha.900"
        fontSize={{ xl: 'sm', '2xl': 'md' }}
        lineHeight="1.55"
        fontWeight="400"
      >
        {step.text}
      </Text>
    </Flex>
  )
}

function MobileStepCard({ step }: { step: ServiceStep }) {
  const Icon = step.icon

  return (
    <Flex
      align="flex-start"
      gap={4}
      px={4}
      py={4}
      bg="rgba(255,255,255,0.025)"
      border="1px solid rgba(255,255,255,0.14)"
      borderRadius="8px"
    >
      <Circle
        size="42px"
        bg="#c91414"
        color="white"
        fontSize="sm"
        fontWeight="700"
        flexShrink={0}
      >
        {step.number}
      </Circle>

      <Circle
        size="44px"
        border="1px solid rgba(255,255,255,0.22)"
        color="whiteAlpha.900"
        flexShrink={0}
      >
        <Box as={Icon} boxSize={5} strokeWidth="1.7" />
      </Circle>

      <Text
        pt={1}
        color="whiteAlpha.900"
        fontSize="sm"
        lineHeight="1.55"
      >
        {step.text}
      </Text>
    </Flex>
  )
}

export default function Services() {
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
        <SimpleGrid
          columns={1}
          spacing={{ base: 8, lg: 10, xl: 14 }}
          alignItems="start"
          mb={{ base: 8, md: 10, xl: 14 }}
        >
          <Box
            maxW={{ base: '100%', lg: '760px' }}
          >
            <Heading
              as="h1"
              fontSize={{
                base: 'xl',
                md: '2xl',
              }}
              lineHeight={{ base: '1.05', md: '0.98' }}
              fontWeight="800"
              letterSpacing="-0.035em"
              wordBreak="break-word"
              mb={{ base: 5, md: 4 }}
            >
              Fahrzeugbeschaffung
            </Heading>

            <SectionUnderline />

            <Box mt={{ base: 7, md: 9 }}>
              <Text
                fontSize={{ base: 'sm', md: 'lg'}}
                color="whiteAlpha.850"
                lineHeight="1.6"
                mb={2}
              >
                Sie sind auf der Suche nach Ihrem neuen Wunschfahrzeug?
              </Text>

              <Text
                fontSize={{ base: 'sm', md: 'lg' }}
                color="whiteAlpha.750"
                lineHeight="1.6"
              >
                Gern begleite ich Sie oder übernehme den gesamten
                Beschaffungsprozess.
              </Text>
            </Box>
          </Box>
        </SimpleGrid>

        <Box>
          <Heading
            as="h2"
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="800"
            letterSpacing="-0.02em"
            mb={3}
          >
            Ablauf
          </Heading>
        </Box>

        <SimpleGrid
          display={{ base: 'none', xl: 'grid' }}
          columns={3}
          spacing={4}
          mt={5}
        >
          {steps.map((step) => (
            <DesktopStepCard key={step.number} step={step} />
          ))}
        </SimpleGrid>

        <SimpleGrid
          display={{ base: 'grid', xl: 'none' }}
          columns={{ base: 1, md: 2 }}
          spacing={3}
          mt={5}
        >
          {steps.map((step) => (
            <MobileStepCard key={step.number} step={step} />
          ))}
        </SimpleGrid>

        <Box
          display={{ base: 'block', md: 'none' }}
          mt={8}
          p={5}
          border="1px solid rgba(255,255,255,0.12)"
          borderRadius="8px"
          bg="rgba(255,255,255,0.025)"
        >
          <Text
            color="#e11b22"
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.18em"
            textTransform="uppercase"
            mb={2}
          >
            Persönlich betreut
          </Text>

          <Text
            color="whiteAlpha.800"
            fontSize="sm"
            lineHeight="1.65"
          >
            Von der ersten Vorstellung bis zur persönlichen Übergabe Ihres
            Fahrzeugs werden alle Schritte transparent und zuverlässig
            begleitet.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}