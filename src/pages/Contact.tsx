import { Container, Heading, SimpleGrid, Box, Text, VStack } from '@chakra-ui/react'
import { FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

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

export default function Contact() {
  return (
    <Box
      as="main"
      position="relative"
      minH="calc(100vh - 120px)"
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
        py={{ base: 10, md: 14, xl: 16 }}
      >
        <Heading
          as="h1"
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl', xl: '6xl' }}
          lineHeight={{ base: '1.05', md: '0.98' }}
          fontWeight="800"
          letterSpacing="-0.035em"
          mb={{ base: 5, md: 6 }}
        >
          Kontakt
        </Heading>

        <SectionUnderline />

        <Text
          fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}
          color="whiteAlpha.850"
          lineHeight="1.6"
          mt={{ base: 7, md: 9 }}
          mb={8}
        >
          Für eine persönliche Beratung oder die Besichtigung eines Fahrzeugs stehe ich Ihnen gern zur Verfügung.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }}>
          <Box>
            <Heading fontSize={{ base: 'md', md: 'lg' }} color="white" mb={6}>
              Kontaktdaten
            </Heading>
            <VStack align="stretch" spacing={4}>
              <Box
                as="a"
                href="https://wa.me/41768193273"
                target="_blank"
                rel="noreferrer"
                display="flex"
                alignItems="center"
                gap={3}
                p={4}
                bg="rgba(255,255,255,0.035)"
                borderRadius="xl"
                border="1px solid rgba(255,255,255,0.15)"
                _hover={{ bg: 'rgba(255,255,255,0.07)', textDecoration: 'none' }}
                transition="background 0.2s ease"
              >
                <Box color="#25D366">
                  <FaWhatsapp size={18} />
                </Box>
                <Text color="white" fontSize="sm">
                  WhatsApp schreiben
                </Text>
              </Box>
              <Box
                as="a"
                href="tel:+41768193273"
                display="flex"
                alignItems="center"
                gap={3}
                p={4}
                bg="rgba(255,255,255,0.035)"
                borderRadius="xl"
                border="1px solid rgba(255,255,255,0.15)"
                _hover={{ bg: 'rgba(255,255,255,0.07)', textDecoration: 'none' }}
                transition="background 0.2s ease"
              >
                <Box color="whiteAlpha.700">
                  <FiPhone size={18} />
                </Box>
                <Text color="white" fontSize="sm">
                  +41 76 819 32 73
                </Text>
              </Box>
              <Box
                as="a"
                href="mailto:info@alpenautomobile.ch "
                display="flex"
                alignItems="center"
                gap={3}
                p={4}
                bg="rgba(255,255,255,0.035)"
                borderRadius="xl"
                border="1px solid rgba(255,255,255,0.15)"
                _hover={{ bg: 'rgba(255,255,255,0.07)', textDecoration: 'none' }}
                transition="background 0.2s ease"
              >
                <Box color="whiteAlpha.700">
                  <FiMail size={18} />
                </Box>
                <Text color="white" fontSize="sm">
                  info@alpenautomobile.ch
                </Text>
              </Box>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
