import React from 'react'
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  Link,
  Show,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Link as RouterLink,
  useLocation,
  useNavigate,
} from 'react-router-dom'

const navItems = [
  { label: 'Startseite', to: '/' },
  { label: 'Fahrzeugbestand', to: '/inventory' },
  { label: 'Dienstleistungen', to: '/services' },
  { label: 'Kontakt', to: '/contact' },
  { label: 'Über mich', to: '/about' },
]

export default function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleMobileNavigation = (path: string) => {
    onClose()
    navigate(path)
  }

  return (
    <Box
      as="nav"
      className="header"
      position="sticky"
      top={0}
      zIndex={40}
      h={{ base: '52px', md: '80px' }}
      bg="#000000"
      _after={{
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: 0,
        left: '-3%',
        width: '107%',
        height: '1px',
        background:
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)',
        boxShadow:
          '0 1px 2px rgba(255,255,255,0.18)',
      }}
    >
      <Container
        maxW="100%"
        px={{ base: 4, md: '6%' }}
        h="100%"
      >
        <Flex
          align="center"
          justify="space-between"
          h="100%"
          gap={2}
        >
          <Link
            as={RouterLink}
            to="/"
            display="inline-flex"
            alignItems="center"
            mt={{ base: 1, md: 0 }}
            _hover={{ opacity: 0.9 }}
            _focus={{ boxShadow: 'none' }}
          >
            <Image
              src="/header_logo5.png"
              alt="Alpen"
              className="logo"
              h={{ base: '28px', md: '42px' }}
              w={{ base: '80px', md: '132px' }}
            />
          </Link>

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
              const isActive =
                location.pathname === item.to

              return (
                <Box
                  as="li"
                  key={item.to}
                  className="nav-item"
                >
                  <Link
                    as={RouterLink}
                    to={item.to}
                    className={
                      isActive
                        ? 'nav-link active'
                        : 'nav-link'
                    }
                    color="white"
                    display="inline-block"
                    fontSize={{ base: 'sm', lg: 'md' }}
                    fontWeight="600"
                    transition="transform 0.2s ease"
                    _hover={{
                      transform:
                        'translateX(2px) scale(1.04)',
                    }}
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
              rightIcon={
                <HamburgerIcon color="white" />
              }
              variant="ghost"
              color="white"
              fontSize={{ base: 'sm', md: 'md' }}
              borderRadius="lg"
              onClick={onOpen}
              px={3}
              py={2}
              _hover={{
                bg: 'rgba(255,255,255,0.1)',
              }}
              _active={{
                bg: 'rgba(255,255,255,0.18)',
              }}
              _focus={{ boxShadow: 'none' }}
            >
              Menu
            </Button>
          </Show>

          <Drawer
            placement="right"
            isOpen={isOpen}
            onClose={onClose}
            size="full"
            blockScrollOnMount={false}
            returnFocusOnClose={false}
          >
            <DrawerOverlay bg="blackAlpha.300" />

            <DrawerContent
              p={0}
              bg="#000000"
            >
              <DrawerCloseButton
                top={3}
                right={4}
                h="25px"
                w="25px"
                color="white"
                bg="rgba(255,255,255,0.1)"
                border="1px solid"
                borderColor="whiteAlpha.500"
                borderRadius="full"
                fontSize="8px"
                zIndex={10}
                _hover={{
                  bg: 'white',
                  color: '#000000',
                  borderColor: 'white',
                }}
                _focus={{ boxShadow: 'none' }}
              />

              <DrawerHeader
                h="56px"
                minH="56px"
                pt={0}
                pb={0}
                px={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
                bg="#000000"
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '5%',
                  width: '90%',
                  height: '1px',
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)',
                  boxShadow:
                    '0 1px 8px rgba(255,255,255,0.18)',
                }}
              >
                <Image
                  src="/logo_design_5.png"
                  alt="Alpen"
                  h="40px"
                  w="auto"
                />
              </DrawerHeader>

              <DrawerBody p={8}>
                <VStack
                  spacing={0}
                  align="stretch"
                >
                  {navItems.map((item) => {
                    const isActiveItem =
                      location.pathname === item.to

                    return (
                      <Box
                        as="button"
                        type="button"
                        key={item.to}
                        onClick={() =>
                          handleMobileNavigation(item.to)
                        }
                        display="inline-flex"
                        alignItems="center"
                        width="fit-content"
                        pl={0}
                        py={4}
                        fontSize={{
                          base: 'md',
                          md: 'lg',
                        }}
                        fontWeight="500"
                        color={
                          isActiveItem
                            ? 'white'
                            : 'whiteAlpha.900'
                        }
                        bg="transparent"
                        border="none"
                        cursor="pointer"
                        textAlign="left"
                        transition="transform 0.2s ease"
                        borderBottom="1px solid"
                        borderBottomColor={
                          isActiveItem
                            ? '#b21a18'
                            : 'transparent'
                        }
                        _hover={{
                          transform:
                            'translateX(3px) scale(1.01)',
                        }}
                        _focus={{ boxShadow: 'none' }}
                      >
                        {item.label}
                      </Box>
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