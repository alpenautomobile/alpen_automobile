import React from 'react'
import { Box, Container, Heading, Text, Button, Flex, VStack } from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'

export default function Content() {
  return (
    <Box
      className="page"
      position="relative"
      bgImage="url('/TOP 8.png')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      h={{ base: 'auto', md: '55vh' }}
      minH="420px"
    >
      {/* <Box
        position="fixed"
        top="100px"
        left="0"
        w="100%"
        h={{ base: '24px', md: '34px' }}
        zIndex="1"
        pointerEvents="none"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 5 1440 135"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 0 0 H 1440 V 72 H 400 C 295 72, 330 122, 255 122 H 0 Z"
            fill="white"
          />
        </svg>
      </Box> */}

      <Box
        className="contentBox"
        position="relative"
        zIndex="2"
        pt={{ base: '80px', md: '110px' }}
      >
        <Container maxW="100%" px="6%" className="content">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="flex-start"
          >
            <VStack
              align="start"
              spacing={4}
              maxW={{ base: '100%', md: '650px' }}
            >
              <Heading as="h1" fontSize={{ base: '3xl', md: '6xl' }} lineHeight="short" color="white">Fahrzeuge, die überzeugen.</Heading>

              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color="whiteAlpha.900"
              >
                Jedes Fahrzeug erfüllt hohe Ausstattungsstandards, 
              verfügt über eine nachvollziehbare Historie 
              und eine vollständige Dokumentation.

              </Text>
              
              {/* <Text
                fontSize={{ base: 'sm', md: 'lg' }}
                color="whiteAlpha.900"
              >
                Ausstattung, die begeistert.
              </Text> */}

              <Flex pt={4}>
                <Button
                    role="group"
                  rightIcon={
                    <Box
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      w="30px"
                      h="30px"
                      borderRadius="full"
                      border="1px solid rgba(255,255,255,0.9)"
                        transition="transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease"
                        _groupHover={{ transform: 'translateX(3px) scale(1.08)' }}
                    >
                        <FiChevronRight size="16px" color="white" />
                    </Box>
                  }
                  iconSpacing={4}
                  bg="#b21a18"
                  color="white"
                  fontSize={{ base: 'sm', md: '0.88rem' }}
                  // fontWeight="700"
                  textTransform="uppercase"
                  letterSpacing="0.18em"
                  px={4}
                  py="13px"
                  minW="250px"
                  h="46px"
                  borderRadius="4px"
                  border="1px solid rgba(255,255,255,0.15)"
                  boxShadow="0 10px 18px rgba(0,0,0,0.2)"
                  _hover={{ bg: '#b21a18', boxShadow: '0 12px 22px rgba(0,0,0,0.24)' }}
                  _active={{ bg: '#8a1212' }}
                >
                  Fahrzeugbestand
                </Button>
              </Flex>
            </VStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
