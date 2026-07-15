import React from 'react'
import { Box, Container, Text, Image, HStack } from '@chakra-ui/react'
import { FaInstagram, FaYoutube, FaWhatsapp, FaCopyright } from 'react-icons/fa'
import { FiPhone, FiMail } from 'react-icons/fi'

export default function Footer(){
  return (
    <Box
      as="footer"
      width="100%"
      bg="#181818"
      color="white"
      zIndex={50}
      position={{ base: 'static', md: 'fixed' }}
      bottom={{ base: 'auto', md: 0 }}
      left={0}
      right={0}
    >
      <Container
        maxW="100%"
        px="6%"
        py={3}
        display="flex"
        flexDirection="column"
        gap={4}
      >
        <Box
          display={{ base: 'flex', md: 'none' }}
          flexDirection="column"
          alignItems="center"
          gap={4}
          width="100%"
        >
          <HStack spacing={10} justify="center" width="100%" flexWrap="wrap">
            <Box as="a" href="https://wa.me/41768193273" target="_blank" rel="noreferrer" display="flex" alignItems="center" gap={2}>
              <Box as="span" display="inline-flex" alignItems="center" color="whiteAlpha.800" transition="color 0.2s ease" _hover={{ color: '#b21a18' }}>
                <FaWhatsapp size={20} />
              </Box>
              {/* <Text fontSize="sm">WhatsApp</Text> */}
            </Box>
            <Box as="a" href="https://www.instagram.com" target="_blank" rel="noreferrer" display="flex" alignItems="center" gap={2}>
              <Box as="span" display="inline-flex" alignItems="center" color="whiteAlpha.800" transition="color 0.2s ease" _hover={{ color: '#b21a18' }}>
                <FaInstagram size={20} />
              </Box>
              {/* <Text fontSize="sm">Instagram</Text> */}
            </Box>
            <Box as="a" href="https://www.youtube.com" target="_blank" rel="noreferrer" display="flex" alignItems="center" gap={2}>
              <Box as="span" display="inline-flex" alignItems="center" color="whiteAlpha.800" transition="color 0.2s ease" _hover={{ color: '#b21a18' }}>
                <FaYoutube size={20} />
              </Box>
              {/* <Text fontSize="sm">YouTube</Text> */}
            </Box>
          </HStack>

          <HStack spacing={{ base: 3, md: 4 }} justify="center" width="100%" flexWrap="wrap">
            <Box as="a" href="tel:+41768193273" display="flex" alignItems="center" gap={2} minW={{ base: '160px', md: 'auto' }} _hover={{ textDecoration: 'none' }}>
              <Box as="span" display="inline-flex" alignItems="center" color="whiteAlpha.800" transition="color 0.2s ease" _hover={{ color: '#b21a18' }}>
                <FiPhone size={20} />
              </Box>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="300" color="inherit">+41 76 819 32 73</Text>
            </Box>
            <Box display="flex" alignItems="center" gap={2} minW={{ base: '190px', md: 'auto' }}>
              <Box as="span" display="inline-flex" alignItems="center" color="whiteAlpha.800" transition="color 0.2s ease" _hover={{ color: '#b21a18' }}>
                <FiMail size={20} />
              </Box>
              <Text fontSize={{ base: 'sm', md: 'md' }} color="inherit">info@alpen-automobile.ch</Text>
            </Box>
          </HStack>

          {/* <HStack spacing={2} justify="center" width="100%">
            <FaCopyright size={14} />
            <Text fontSize="sm" color="whiteAlpha.800">© 2024 Alpen Automobile. Alle Rechte vorbehalten.</Text>
          </HStack> */}
        </Box>

        <Box
          display={{ base: 'none', md: 'flex' }}
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Image
              src="/footer_logo.png"
              alt="Alpen Automobile"
              maxW={{ base: '77px', md: '92px' }}
              objectFit="contain"
            />
            <Text fontSize={{ base: 'sm', md: 'md' }} textAlign={{ base: 'center', md: 'left' }} fontWeight="400" color="whiteAlpha.800">
              © 2026 Alpen Automobile. Alle Rechte vorbehalten.
            </Text>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" gap={6}>
            <Box as="a" href="tel:+41768193273" display="flex" alignItems="center" gap={2} _hover={{ textDecoration: 'none' }}>
              <Box as="span" display="inline-flex" alignItems="center" color="whiteAlpha.800" transition="color 0.2s ease" _hover={{ color: '#b21a18' }}>
                <FiPhone size={18} />
              </Box>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="200" color="inherit">+41 76 819 32 73</Text>
            </Box>
            <Box display="flex" alignItems="center" gap={2}>
              <Box as="span" display="inline-flex" alignItems="center" color="whiteAlpha.800" transition="color 0.2s ease" _hover={{ color: '#b21a18' }}>
                <FiMail size={18} />
              </Box>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="200" color="inherit">info@alpen-automobile.ch</Text>
            </Box>
          </Box>
          <HStack spacing={4} alignItems="center">
            <Box as="a" href="https://www.instagram.com" target="_blank" rel="noreferrer" display="flex" alignItems="center" gap={2}>
              <Box as="span" display="inline-flex" alignItems="center" color="whiteAlpha.800" transition="color 0.2s ease" _hover={{ color: '#b21a18' }}>
                <FaInstagram size={18} />
              </Box>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="200">Instagram</Text>
            </Box>
            <Box as="a" href="https://www.youtube.com" target="_blank" rel="noreferrer" display="flex" alignItems="center" gap={2}>
              <Box as="span" display="inline-flex" alignItems="center" color="whiteAlpha.800" transition="color 0.2s ease" _hover={{ color: '#b21a18' }}>
                <FaYoutube size={18} />
              </Box>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="200">YouTube</Text>
            </Box>
            <Box as="a" href="https://wa.me/41768193273" target="_blank" rel="noreferrer" display="flex" alignItems="center" gap={2}>
              <Box as="span" display="inline-flex" alignItems="center" color="whiteAlpha.800" transition="color 0.2s ease" _hover={{ color: '#b21a18' }}>
                <FaWhatsapp size={18} />
              </Box>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="200">WhatsApp</Text>
            </Box>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}


