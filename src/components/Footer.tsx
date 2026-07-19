import React from 'react'
import {
  Box,
  Container,
  Text,
  Image,
  HStack,
} from '@chakra-ui/react'
import {
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa'
import { FiPhone, FiMail } from 'react-icons/fi'

type FooterProps = {
  stickyOnMobile?: boolean
}

export default function Footer({
  stickyOnMobile = false,
}: FooterProps) {
  return (
    <Box
      as="footer"
      width="100%"
      bg="#181818"
      color="white"
      zIndex={50}
      position={{
        base: stickyOnMobile ? 'sticky' : 'relative',
        md: 'fixed',
      }}
      bottom={0}
      left={{ md: 0 }}
      right={{ md: 0 }}
      mt="auto"
      _before={{
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: '-3%',
        width: '107%',
        height: '1px',
        background:
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)',
        boxShadow:
          '0 1px 8px rgba(255,255,255,0.18)',
      }}
    >
      <Container
        maxW="100%"
        px={{ base: 4, md: '6%' }}
        py={{ base: 3, md: 1 }}
        display="flex"
        flexDirection="column"
        gap={{ base: 2, md: 4 }}
      >
        {/* Mobile footer */}
        <Box
          display={{ base: 'flex', md: 'none' }}
          flexDirection="column"
          alignItems="center"
          gap={2}
          width="100%"
        >
          <HStack
            spacing={{ base: 8, md: 10 }}
            justify="center"
            width="100%"
            flexWrap="wrap"
          >
            <Box
              as="a"
              href="https://wa.me/41768193273"
              target="_blank"
              rel="noreferrer"
              display="flex"
              alignItems="center"
              aria-label="WhatsApp"
            >
              <Box
                as="span"
                display="inline-flex"
                alignItems="center"
                color="#25D366"
                transition="transform 0.2s ease, opacity 0.2s ease"
                _hover={{
                  transform: 'scale(1.12)',
                  opacity: 0.9,
                }}
              >
                <FaWhatsapp size={17} />
              </Box>
            </Box>

            <Box
              as="a"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              aria-label="Instagram"
              transition="transform 0.2s ease, opacity 0.2s ease"
              _hover={{
                transform: 'scale(1.12)',
                opacity: 0.9,
              }}
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                boxSize="15px"
                objectFit="contain"
              />
            </Box>

            <Box
              as="a"
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              display="flex"
              alignItems="center"
              aria-label="YouTube"
            >
              <Box
                as="span"
                display="inline-flex"
                alignItems="center"
                color="#FF0000"
                transition="transform 0.2s ease, opacity 0.2s ease"
                _hover={{
                  transform: 'scale(1.12)',
                  opacity: 0.9,
                }}
              >
                <FaYoutube size={18} />
              </Box>
            </Box>
          </HStack>

          <HStack
            spacing={{ base: 6, md: 4 }}
            justify="center"
            width="100%"
            flexWrap="wrap"
            alignItems="center"
          >
            <Box
              as="a"
              href="tel:+41768193273"
              display="flex"
              alignItems="center"
              gap={1}
              _hover={{ textDecoration: 'none' }}
            >
              <Text
                fontSize={{ base: 'xs', md: 'md' }}
                fontWeight="300"
                color="inherit"
              >
                +41 76 819 32 73
              </Text>
            </Box>

            <Text
              display={{ base: 'inline-flex', md: 'none' }}
              color="whiteAlpha.600"
              fontSize="xs"
            >
              |
            </Text>

            <Box
              as="a"
              href="mailto:info@alpenautomobile.ch"
              display="flex"
              alignItems="center"
              gap={1}
              _hover={{ textDecoration: 'none' }}
            >
              <Text
                fontSize={{ base: 'xs', md: 'md' }}
                color="inherit"
              >
                info@alpenautomobile.ch
              </Text>
            </Box>
          </HStack>
        </Box>

        {/* Desktop footer */}
        <Box
          display={{ base: 'none', md: 'flex' }}
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Image
              src="/footer_logo.png"
              alt="Alpen Automobile"
              maxW={{ base: '77px', md: '92px' }}
              objectFit="contain"
            />

            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              textAlign={{
                base: 'center',
                md: 'left',
              }}
              fontWeight="400"
              color="whiteAlpha.800"
            >
              © 2026 Alpen Automobile. Alle Rechte vorbehalten.
            </Text>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={8}
          >
            <Box
              as="a"
              href="tel:+41768193273"
              display="flex"
              alignItems="center"
              gap={2}
              _hover={{ textDecoration: 'none' }}
            >
              <Box
                as="span"
                display="inline-flex"
                alignItems="center"
                color="whiteAlpha.800"
                transition="color 0.2s ease"
                _hover={{ color: '#b21a18' }}
              >
                <FiPhone size={15} />
              </Box>

              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="200"
                color="inherit"
              >
                +41 76 819 32 73
              </Text>
            </Box>

            <Box
              as="a"
              href="mailto:info@alpenautomobile.ch"
              display="flex"
              alignItems="center"
              gap={2}
              _hover={{ textDecoration: 'none' }}
            >
              <Box
                as="span"
                display="inline-flex"
                alignItems="center"
                color="whiteAlpha.800"
                transition="color 0.2s ease"
                _hover={{ color: '#b21a18' }}
              >
                <FiMail size={15} />
              </Box>

              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="200"
                color="inherit"
              >
                info@alpenautomobile.ch
              </Text>
            </Box>
          </Box>

          <HStack
            spacing={8}
            alignItems="center"
          >
            <Box
              as="a"
              href="https://wa.me/41768193273"
              target="_blank"
              rel="noreferrer"
              display="inline-flex"
              alignItems="center"
              aria-label="WhatsApp"
              transition="transform 0.2s ease, opacity 0.2s ease"
              _hover={{
                transform: 'scale(1.12)',
                opacity: 0.9,
              }}
            >
              <Box
                as="span"
                display="inline-flex"
                alignItems="center"
                color="#25D366"
              >
                <FaWhatsapp size={18} />
              </Box>
            </Box>

            <Box
              as="a"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              aria-label="Instagram"
              transition="transform 0.2s ease, opacity 0.2s ease"
              _hover={{
                transform: 'scale(1.12)',
                opacity: 0.9,
              }}
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                boxSize="15px"
                objectFit="contain"
              />
            </Box>

            <Box
              as="a"
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              display="inline-flex"
              alignItems="center"
              aria-label="YouTube"
              transition="transform 0.2s ease, opacity 0.2s ease"
              _hover={{
                transform: 'scale(1.12)',
                opacity: 0.9,
              }}
            >
              <Box
                as="span"
                display="inline-flex"
                alignItems="center"
                color="#FF0000"
              >
                <FaYoutube size={19} />
              </Box>
            </Box>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}