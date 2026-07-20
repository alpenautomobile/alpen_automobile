import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Text,
  VStack,
  Flex,
} from '@chakra-ui/react'
import { FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

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

export default function Contact() {
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
        <SectionHeader title="Kontakt" />

        <Text
          fontSize={{ base: 'sm', md: 'lg' }}
          color="whiteAlpha.850"
          lineHeight="1.6"
          mt={0}
          mb={8}
          maxW="760px"
        >
          Für eine persönliche Beratung oder die Besichtigung eines Fahrzeugs
          stehe ich Ihnen gern zur Verfügung.
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 8, md: 12 }}
        >
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
                _hover={{
                  bg: 'rgba(255,255,255,0.07)',
                  textDecoration: 'none',
                }}
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
                _hover={{
                  bg: 'rgba(255,255,255,0.07)',
                  textDecoration: 'none',
                }}
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
                href="mailto:info@alpenautomobile.ch"
                display="flex"
                alignItems="center"
                gap={3}
                p={4}
                bg="rgba(255,255,255,0.035)"
                borderRadius="xl"
                border="1px solid rgba(255,255,255,0.15)"
                _hover={{
                  bg: 'rgba(255,255,255,0.07)',
                  textDecoration: 'none',
                }}
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