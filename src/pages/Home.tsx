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
      'Als persönlicher Ansprechpartner begleite ich jeden Kunden individuell von Erstkontakt bis Auslieferung. Ihre Zufriedenheit ist mein wichtigster Anspruch.',
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
                        fontSize={{ base: 'md', md: 'lg' }}
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