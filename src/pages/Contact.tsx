import React, { useState } from 'react'
import { Container, Heading, SimpleGrid, Box, FormControl, FormLabel, Input, Textarea, Button, Text, VStack, Alert, AlertIcon } from '@chakra-ui/react'
import { FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          phone,
          message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setName(''); setEmail(''); setPhone(''); setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Container maxW="100%" px={{ base: 4, md: '6%' }} py={{ base: 8, md: 12 }} bg="#181818" minH="100%">
      <Heading fontSize={{ base: 'xl', md: '3xl' }} mb={6} color="white">Kontakt</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }}>
        <Box>
          <form onSubmit={handleSubmit}>
            {status === 'success' && (
              <Alert status="success" borderRadius="md" mb={4} bg="green.800" color="white">
                <AlertIcon />
                Nachricht erfolgreich gesendet!
              </Alert>
            )}
            {status === 'error' && (
              <Alert status="error" borderRadius="md" mb={4} bg="red.800" color="white">
                <AlertIcon />
                Fehler beim Senden. Bitte versuchen Sie es erneut.
              </Alert>
            )}
            <FormControl mb={4} isRequired>
              <FormLabel color="whiteAlpha.800" fontSize="sm">Ihr Name</FormLabel>
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.300"
                color="white"
                _placeholder={{ color: 'whiteAlpha.400' }}
                _hover={{ borderColor: 'whiteAlpha.500' }}
                _focus={{ borderColor: 'whiteAlpha.700', boxShadow: 'none' }}
              />
            </FormControl>
            <FormControl mb={4} isRequired>
              <FormLabel color="whiteAlpha.800" fontSize="sm">E-Mail</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.300"
                color="white"
                _placeholder={{ color: 'whiteAlpha.400' }}
                _hover={{ borderColor: 'whiteAlpha.500' }}
                _focus={{ borderColor: 'whiteAlpha.700', boxShadow: 'none' }}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel color="whiteAlpha.800" fontSize="sm">Telefonnummer</FormLabel>
              <Input
                value={phone}
                onChange={e => setPhone(e.target.value)}
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.300"
                color="white"
                _placeholder={{ color: 'whiteAlpha.400' }}
                _hover={{ borderColor: 'whiteAlpha.500' }}
                _focus={{ borderColor: 'whiteAlpha.700', boxShadow: 'none' }}
              />
            </FormControl>
            <FormControl mb={6} isRequired>
              <FormLabel color="whiteAlpha.800" fontSize="sm">Ihre Nachricht</FormLabel>
              <Textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.300"
                color="white"
                rows={5}
                _placeholder={{ color: 'whiteAlpha.400' }}
                _hover={{ borderColor: 'whiteAlpha.500' }}
                _focus={{ borderColor: 'whiteAlpha.700', boxShadow: 'none' }}
              />
            </FormControl>
            <Button
              type="submit"
              isLoading={status === 'loading'}
              loadingText="Wird gesendet..."
              bg="#b21a18"
              color="white"
              w={{ base: '100%', md: 'auto' }}
              px={8}
              _hover={{ bg: '#9a1614' }}
              _active={{ bg: '#7e110f' }}
            >
              Nachricht senden
            </Button>
          </form>
        </Box>

        <Box>
          <Heading fontSize={{ base: 'md', md: 'lg' }} color="white" mb={6}>Kontaktdaten</Heading>
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
              bg="whiteAlpha.100"
              borderRadius="xl"
              border="1px solid"
              borderColor="whiteAlpha.200"
              _hover={{ bg: 'whiteAlpha.200', textDecoration: 'none' }}
              transition="background 0.2s ease"
            >
              <Box color="#25D366"><FaWhatsapp size={18} /></Box>
              <Text color="white" fontSize="sm">WhatsApp schreiben</Text>
            </Box>
            <Box
              as="a"
              href="tel:+41768193273"
              display="flex"
              alignItems="center"
              gap={3}
              p={4}
              bg="whiteAlpha.100"
              borderRadius="xl"
              border="1px solid"
              borderColor="whiteAlpha.200"
              _hover={{ bg: 'whiteAlpha.200', textDecoration: 'none' }}
              transition="background 0.2s ease"
            >
              <Box color="whiteAlpha.700"><FiPhone size={18} /></Box>
              <Text color="white" fontSize="sm">+41 76 819 32 73</Text>
            </Box>
            <Box
              as="a"
              href="mailto:info@alpen-automobile.ch"
              display="flex"
              alignItems="center"
              gap={3}
              p={4}
              bg="whiteAlpha.100"
              borderRadius="xl"
              border="1px solid"
              borderColor="whiteAlpha.200"
              _hover={{ bg: 'whiteAlpha.200', textDecoration: 'none' }}
              transition="background 0.2s ease"
            >
              <Box color="whiteAlpha.700"><FiMail size={18} /></Box>
              <Text color="white" fontSize="sm">info@alpen-automobile.ch</Text>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  )
}
