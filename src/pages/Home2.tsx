import React from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Icon,
} from '@chakra-ui/react'
import Content from '../components/Content'
import { FiCheckCircle, FiSearch, FiUser } from 'react-icons/fi'

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
      'Als persönlicher Ansprechpartner begleite ich jeden Kunden individuell von Erstkontakt bis Auslieferung.\n Ihre Zufriedenheit ist mein wichtigster Anspruch.',
  }
]

export default function Home() {
  return (
    <Box>
      <Content />

      <Box
        bg="white"
        minH="calc(100vh - 200px)"
        width="100%"
      >
        <Container
          maxW="100%"
          h="100%"
          px="6%"
          py={{ base: 8, md: 10 }}
        >
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
            {features.map((feature) => {
              const FeatureIcon = feature.icon

              return (
                <Box
                  key={feature.title}
                  w="full"
                  px={0}
                  py={{ base: 6, lg: 0 }}
                  borderColor="gray.200"
                >
                  <Flex direction="column" align="center" gap={6}>
                    <Icon
                      as={FeatureIcon}
                      boxSize={{ base: '34px', md: '34px' }}
                      color="gray.900"
                      flexShrink={0}
                    />

                    <Box w="full">
                      <Heading
                        as="h3"
                        fontSize={{ base: 'md', md: 'lg' }}
                        fontWeight="600"
                        mb={3}
                        color="gray.900"
                        textAlign="center"
                      >
                        {feature.title}
                      </Heading>

                      <Box
                        w="40px"
                        h="2px"
                        bg="red.500"
                        mb={3}
                        mx="auto"
                      />

                      <Text
                        fontSize={{ base: 'sm', md: 'md' }}
                        lineHeight="1.7"
                        color="gray.700"
                        whiteSpace="pre-line"
                        textAlign="center"
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