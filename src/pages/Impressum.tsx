import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FiMail, FiPhone } from 'react-icons/fi'

function LegalSectionHeader({ title }: { title: string }) {
  return (
    <Box mb={{ base: 7, md: 8 }}>
      <Flex align="center" gap={4}>
        <Box
          w="4px"
          h={{ base: '27px', md: '32px' }}
          bg="#b21a18"
          borderRadius="full"
          flexShrink={0}
          boxShadow="0 0 14px rgba(178,26,24,0.3)"
        />

        <Heading
          as="h1"
          color="white"
          fontSize={{ base: 'xl', md: '2xl' }}
          lineHeight="1"
          fontWeight="800"
          letterSpacing="-0.035em"
        >
          {title}
        </Heading>
      </Flex>
    </Box>
  )
}

function LegalCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Box
      p={{ base: 5, md: 6 }}
      borderRadius="16px"
      border="1px solid rgba(255,255,255,0.10)"
      background="
        linear-gradient(
          145deg,
          rgba(255,255,255,0.045) 0%,
          rgba(255,255,255,0.015) 100%
        )
      "
      boxShadow="0 16px 40px rgba(0,0,0,0.20)"
    >
      <Heading
        as="h2"
        color="white"
        fontSize={{ base: 'md', md: 'lg' }}
        fontWeight="700"
        mb={4}
      >
        {title}
      </Heading>

      <Box
        color="rgba(255,255,255,0.68)"
        fontSize={{ base: 'sm', md: '15px' }}
        lineHeight="1.75"
      >
        {children}
      </Box>
    </Box>
  )
}

export default function Impressum() {
  return (
    <Box
      as="main"
      position="relative"
      h="100%"
      minH={0}
      w="100%"
      bg="#000000"
      color="white"
      overflowX="hidden"
      overflowY="auto"
    >
      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        bg="
          radial-gradient(
            circle at 78% 12%,
            rgba(255,255,255,0.035),
            transparent 30%
          ),
          linear-gradient(
            180deg,
            #151515 0%,
            #222222 48%,
            #171717 100%
          )
        "
      />

      <Container
        position="relative"
        zIndex={1}
        w="100%"
        maxW="100%"
        px={{ base: 4, md: '6%' }}
        pt={{ base: 5, md: 8 }}
        pb={{ base: 8, md: 0 }}
      >
        <LegalSectionHeader title="Impressum" />

        <Text
          maxW="760px"
          color="rgba(255,255,255,0.68)"
          fontSize={{ base: 'sm', md: 'lg' }}
          lineHeight="1.7"
          mb={{ base: 8, md: 10 }}
        >
          Rechtliche Informationen und Kontaktdaten von Alpen Automobile.
        </Text>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 5, md: 6 }}
          alignItems="stretch"
        >
          <LegalCard title="Unternehmensangaben">
            <Stack spacing={1}>
              <Text color="white" fontWeight="700">
                Alpen Automobile
              </Text>

              <Text>Christoph Gärtner, Inhaber</Text>

              <Text pt={3}>
                Auf Berg 83
                <br />
                9493 Mauren
                <br />
                Liechtenstein
              </Text>
            </Stack>
          </LegalCard>

          <LegalCard title="Kontakt">
            <Stack spacing={4}>
              <Flex align="center" gap={3}>
                <Box color="#b21a18">
                  <FiPhone size={17} />
                </Box>

                <Link
                  href="tel:+41768193273"
                  color="white"
                  _hover={{ color: '#b21a18' }}
                >
                  +41 (0) 76 819 32 73
                </Link>
              </Flex>

              <Flex align="center" gap={3}>
                <Box color="#b21a18">
                  <FiMail size={17} />
                </Box>

                <Link
                  href="mailto:info@alpenautomobile.ch"
                  color="white"
                  _hover={{ color: '#b21a18' }}
                >
                  info@alpenautomobile.ch
                </Link>
              </Flex>

              <Link
                href="https://www.alpenautomobile.ch"
                target="_blank"
                rel="noreferrer"
                color="white"
                _hover={{ color: '#b21a18' }}
              >
                www.alpenautomobile.ch
              </Link>
            </Stack>
          </LegalCard>

          <LegalCard title="Unternehmensform">
            <Text>
              Einzelunternehmen nach liechtensteinischem Recht.
            </Text>
          </LegalCard>

          <LegalCard title="Handelsregister">
            <Text>
              Nicht im Handelsregister des Fürstentums Liechtenstein
              eingetragen.
            </Text>
          </LegalCard>

          <LegalCard title="Mehrwertsteuer">
            <Text>MWST-Nr.: wird ergänzt, sobald vorhanden.</Text>
          </LegalCard>

          <LegalCard title="Verantwortlich für den Datenschutz">
            <Stack spacing={1}>
              <Text color="white">Christoph Gärtner</Text>

              <Link
                href="mailto:info@alpenautomobile.ch"
                color="rgba(255,255,255,0.68)"
                _hover={{ color: '#b21a18' }}
              >
                info@alpenautomobile.ch
              </Link>
            </Stack>
          </LegalCard>

          <LegalCard title="Vertretungsberechtigt">
            <Text>Christoph Gärtner</Text>
          </LegalCard>

          <LegalCard title="Haftungsausschluss">
            <Text>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
              erstellt. Dennoch übernimmt Alpen Automobile keine Gewähr für
              die Aktualität, Vollständigkeit und Richtigkeit der
              bereitgestellten Informationen.
            </Text>
          </LegalCard>

          <LegalCard title="Externe Links">
            <Text>
              Diese Website enthält Links zu externen Websites Dritter,
              insbesondere YouTube, Instagram und WhatsApp. Für deren Inhalte
              und Datenschutzbestimmungen sind ausschließlich die jeweiligen
              Betreiber verantwortlich.
            </Text>
          </LegalCard>

          <LegalCard title="Urheberrecht">
            <Text>
              Alle Inhalte dieser Website, insbesondere Texte, Fotografien,
              Logos und Grafiken, unterliegen dem Urheberrecht. Eine
              Verwendung außerhalb der gesetzlichen Schranken bedarf der
              vorherigen schriftlichen Zustimmung von Alpen Automobile.
            </Text>
          </LegalCard>

          <Box gridColumn={{ base: 'auto', lg: '1 / -1' }}>
            <LegalCard title="Markenhinweis">
              <Text>
                „Alpen Automobile“ ist die Geschäftsbezeichnung des oben
                genannten Einzelunternehmens.
              </Text>
            </LegalCard>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}