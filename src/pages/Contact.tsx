import React from 'react'
import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Text,
  VStack,
  Flex,
  HStack,
  Image,
  Icon,
} from '@chakra-ui/react'
import { FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp, FaYoutube } from 'react-icons/fa'

const RED = '#b21a18'

const UNIFIED_HOVER = {
  transform: 'translateX(2px) scale(1.04)',
}

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
          m={0}
        >
          {title}
        </Heading>
      </Flex>
    </Box>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="transform 160ms ease, opacity 160ms ease"
      _hover={UNIFIED_HOVER}
    >
      {children}
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
      bg="#000000"
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
        pt={{ base: 5, md: 10 }}
        pb={{ base: 8, md: 12 }}
      >
        <SectionHeader title="Kontakt" />

        <Text
          fontSize={{ base: 'sm', md: 'md'}}
          color="whiteAlpha.850"
          lineHeight="1.6"
          mt={0}
          mb={8}
          maxW="760px"
        >
          Für einen persönlichen Austausch zu meinen Dienstleistungen oder
          Fahrzeugen sowie zur Vereinbarung eines Besichtigungstermins stehe ich
          Ihnen unter den folgenden Kontaktmöglichkeiten gerne zur Verfügung.
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 8, md: 12 }}
        >
          <Box maxW="620px">
            <Heading
              fontSize={{ base: 'md', md: 'lg' }}
              color="white"
              mb={6}
            >
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
                p={3}
                bg="rgba(255,255,255,0.035)"
                borderRadius="xl"
                border="1px solid rgba(255,255,255,0.15)"
                _hover={UNIFIED_HOVER}
                transition="background 0.2s ease"
              >
                <Box color="#25D366">
                  <FaWhatsapp size={18} />
                </Box>

                <Text color="white" fontSize={{ base: 'sm', md: 'md'}}>
                  WhatsApp schreiben
                </Text>
              </Box>

              <Box
                as="a"
                href="tel:+41768193273"
                display="flex"
                alignItems="center"
                gap={3}
                p={3}
                bg="rgba(255,255,255,0.035)"
                borderRadius="xl"
                border="1px solid rgba(255,255,255,0.15)"
                _hover={UNIFIED_HOVER}
                transition="background 0.2s ease"
              >
                <Box color="whiteAlpha.700">
                  <FiPhone size={18} />
                </Box>

                <Text color="white" fontSize={{ base: 'sm', md: 'md'}}>
                  +41 76 819 32 73
                </Text>
              </Box>

              <Box
                as="a"
                href="mailto:info@alpenautomobile.ch"
                display="flex"
                alignItems="center"
                gap={3}
                p={3}
                bg="rgba(255,255,255,0.035)"
                borderRadius="xl"
                border="1px solid rgba(255,255,255,0.15)"
                _hover={UNIFIED_HOVER}
                transition="background 0.2s ease"
              >
                <Box color="whiteAlpha.700">
                  <FiMail size={18} />
                </Box>

                <Text color="white" fontSize={{ base: 'sm', md: 'md'}} >
                  info@alpenautomobile.ch
                </Text>
              </Box>
            </VStack>

            {/* Social media */}
            <Box mt={12}>
              <Heading
                fontSize={{ base: 'md', md: 'lg' }}
                color="white"
                mb={6}
              >
                Folgen Sie mir auf Social Media
              </Heading>

              <HStack spacing={5}>
                <SocialLink
                  href="https://www.instagram.com/alpen_automobile"
                  label="Instagram"
                >
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    boxSize={{ base: '20px', md: '24px' }}
                    objectFit="contain"
                  />
                </SocialLink>

                <SocialLink
                  href="https://www.youtube.com/@alpenautomobile"
                  label="YouTube"
                >
                  <Icon
                    as={FaYoutube}
                    boxSize={{ base: '31px', md: '34px' }}
                    color="#ff0000"
                  />
                </SocialLink>
              </HStack>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}