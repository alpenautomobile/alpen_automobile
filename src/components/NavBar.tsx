import React from 'react'
import { Box, Container, Flex, HStack, Link, IconButton, Button, Image, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure, VStack, Show } from '@chakra-ui/react'
import { HamburgerIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Startseite', to: '/' },
  { label: 'Fahrzeugbestand', to: '/inventory' },
  { label: 'Dienstleistungen', to: '/services' },
  { label: 'Social Media', to: '/social' },
  { label: 'Über mich', to: '/philosophy' },
]

export default function NavBar(){
  const location = useLocation()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      as="nav"
      className="header"
      position="sticky"
      top={0}
      zIndex={40}
      h={{ base: '50px', md: '80px' }}
      bg="#181818"
      borderBottom="1px solid"
      borderColor="whiteAlpha.300"
    >
      <Container maxW="100%" px="6%" h="100%">
        <Flex align="center" justify="space-between" h="100%" gap={2}>
          <Image
            src="/header_logo.png"
            alt="Alpen"
            className="logo"
            h={{ base: '30px', md: '36px' }}
            w={{ base: '124px', md: '150px' }}
          />

        <HStack
          as="ul"
          className="nav-links"
          spacing={{ base: 8, md: 16 }}
          listStyleType="none"
          p={0}
          flex="1"
          minW={0}
          ml={{ md: 28 }}
          overflowX="auto"
          whiteSpace="nowrap"
          justify="flex-start"
          display={{ base: 'none', md: 'flex' }}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.to
            return (
              <Box as="li" key={item.to} className="nav-item">
                <Link
                  as={RouterLink}
                  to={item.to}
                  className={isActive ? 'nav-link active' : 'nav-link'}
                  color="white"
                  display="inline-block"
                  fontSize={{ base: 'sm', lg: 'md' }}
                  fontWeight="600"
                  transition="transform 0.2s ease, color 0.2s ease, text-shadow 0.2s ease"
                  _hover={{ color: 'gray.200', transform: 'translateX(2px) scale(1.04)', textShadow: '0 1px 8px rgba(255,255,255,0.18)' }}
                  _focus={{ boxShadow: 'none' }}
                >
                  {item.label}
                </Link>
              </Box>
            )
          })}
        </HStack>

        <Show below="md">
          <Button
            aria-label="Open menu"
            rightIcon={<HamburgerIcon color="white" />}
            variant="ghost"
            color="white"
            fontSize={{ base: 'sm', md: 'md' }}
            _hover={{ bg: 'rgba(255,255,255,0.1)' }}
            _active={{ bg: 'rgba(255,255,255,0.18)' }}
            borderRadius="lg"
            onClick={onOpen}
            px={3}
            py={2}
          >
            Menu
          </Button>
        </Show>

        <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay bg="blackAlpha.300" />
          <DrawerContent p={0} bg="#181818">
            <DrawerCloseButton
              mt={4}
              mr={4}
              color="whiteAlpha.900"
              bg="#0f0f0f"
              border="1px solid"
              borderColor="whiteAlpha.500"
              borderRadius="full"
              _hover={{ bg: '#111111', borderColor: 'whiteAlpha.700' }}
              _focus={{ boxShadow: 'none' }}
            />
            <DrawerHeader
              minH="90px"
              pt={6}
              pb={4}
              borderBottom="1px solid"
              borderColor="whiteAlpha.300"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image src="/logo_design_5.png" alt="Alpen" h="44px" w="auto" />
            </DrawerHeader>
            <DrawerBody p={4}>
              <VStack spacing={0} align="stretch">
                {navItems.map((item) => {
                  const isActiveItem = location.pathname === item.to
                  return (
                    <Button
                      key={item.to}
                      as={RouterLink}
                      to={item.to}
                      variant="ghost"
                      justifyContent="flex-start"
                      pl={0}
                      py={4}
                      fontSize={{ base: 'md', md: 'lg' }}
                      fontWeight={isActiveItem ? '700' : '600'}
                      color={isActiveItem ? '#b21a18' : 'whiteAlpha.900'}
                      bg="transparent"
                      transition="transform 0.2s ease, background-color 0.2s ease, color 0.2s ease"
                      borderBottom={isActiveItem ? '2px solid' : '2px solid transparent'}
                      borderBottomColor={isActiveItem ? '#b21a18' : 'transparent'}
                      borderColor="transparent"
                      _hover={{ bg: 'whiteAlpha.100', color: 'white', transform: 'translateX(3px) scale(1.01)' }}
                      _focus={{ boxShadow: 'none' }}
                      onClick={onClose}
                    >
                      {item.label}
                    </Button>
                  )
                })}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        </Flex>
      </Container>
    </Box>
  )
}
