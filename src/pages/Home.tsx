import React from 'react'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Icon,
  VStack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FiCheckCircle, FiSearch, FiUser, FiChevronRight } from 'react-icons/fi'

const features = [
  {
    title: 'Sorgfältige Auswahl',
    icon: FiCheckCircle,
    text:
      'Ist für mich kein Extra, sondern eine Grundlage.\n Mein Ziel ist es Sportlichkeit, Komfort und Alltagstauglichkeit zu verbinden.',
  },
  {
    title: 'Transparenz',
    icon: FiSearch,
    text:
      'Als Basis für gegenseitiges Vertrauen stehe ich für offene Kommunikation,ehrliche Informationen und klare Abläufe.',
  },
  {
    title: 'Persönliche Betreuung',
    icon: FiUser,
    text:
      'Als persönlicher Ansprechpartner begleite ich jeden Kunden individuell von Erstkontakt bis Auslieferung. Ihre Zufriedenheit ist mein wichtigster Anspruch.',
  }
]

export default function Home() {
  return (
    <Box minH="100vh" bg="white" display="flex" flexDirection="column">
      <Box
        className="page"
        position="relative"
        bgImage={{ base: "url('/mobile_version_5.png')", md: "url('/desktop_version_1.png')" }}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h={{ base: '55vh', md: '55vh' }}
        minH="380px"
      >
        <Box
          className="contentBox"
          position="relative"
          zIndex="2"
          pt={{ base: '80px', md: '24px' }}
        >
          <Container maxW="100%" px={{ base: 4, md: '6%' }} className="content">
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align="center"
              justify="flex-start"
            >
              <VStack
                align="start"
                spacing={4}
                maxW={{ base: '100%', md: '650px' }}
                mt={{ base: -2, lg: '11vh' }}
              >
                <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} lineHeight="short" color="white">Fahrzeuge, die überzeugen.</Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg' }}
                  color="whiteAlpha.900"
                >
                  Jedes Fahrzeug erfüllt hohe Ausstattungsstandards, 
                  verfügt über eine nachvollziehbare Historie 
                  und eine vollständige Dokumentation.

                </Text>

                <Flex pt={{ base: 10, md: 6 }} >
                  <Button
                    as={RouterLink}
                    to="/inventory"
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
                    textTransform="uppercase"
                    letterSpacing="0.18em"
                    px={4}
                    py="1px"
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

      <Box
        bg="white"
        width="100%"
        flex="1"
        display="flex"
      >
        <Container
          maxW="100%"
          h="100%"
          flex="1"
          px={{ base: 4, md: '6%' }}
          py={{ base: 4, md: 10 }}
        >
          <SimpleGrid templateColumns={{ base: '1fr', md: 'repeat(3, minmax(0, 1fr))' }} spacing={{ base: 6, lg: '26px' }} w="full">
            {features.map((feature) => {
              const FeatureIcon = feature.icon

              return (
                <Box
                  key={feature.title}
                  w="full"
                  minW={0}
                  px={0}
                  py={{ base: 6, lg: 0 }}
                  borderColor="gray.200"
                >
                  <Flex direction="column" align={{ base: 'center', md: 'flex-start' }} gap={6}>
                    <Icon
                      as={FeatureIcon}
                      boxSize={{ base: '34px', md: '34px' }}
                      color="gray.900"
                      flexShrink={0}
                    />

                    <Box w="full">
                      <Heading
                        as="h3"
                        fontSize={{ base: 'md', md: 'xl' }}
                        fontWeight="600"
                        mb={3}
                        color="gray.900"
                        textAlign={{ base: 'center', md: 'left' }}
                      >
                        {feature.title}
                      </Heading>

                      <Box
                        w="40px"
                        h="2px"
                        bg="red.500"
                        mb={3}
                        mx={{ base: 'auto', md: '0' }}
                      />

                      <Text
                        fontSize={{ base: 'sm', md: 'md' }}
                        lineHeight="1.7"
                        color="gray.700"
                        whiteSpace="pre-line"
                        textAlign={{ base: 'center', md: 'left' }}
                      >
                        {feature.text}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              )
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
}