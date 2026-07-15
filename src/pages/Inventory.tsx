import React, { useRef, useState } from 'react'
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@chakra-ui/icons'

const vehicle = {
  title: 'Audi Q5 S line',
  subtitle: '2021 · 42.000 km',
  price: 57900,
  image: '/card1.jpg',
  badge: 'Sofort verfügbar',
  condition: 'Gebraucht',
  fuel: 'Hybrid',
  color: 'Schwarz',
  transmission: 'Automatik',
}

const galleryImages = [
  { id: 1, src: '/card1.jpg', alt: 'Luxus Innenraum 1' },
  { id: 2, src: '/card2.jpg', alt: 'Luxus Innenraum 2' },
  { id: 3, src: '/card3.jpg', alt: 'Luxus Innenraum 3' },
  { id: 4, src: '/card1.jpg', alt: 'Luxus Innenraum 4' },
  { id: 5, src: '/card2.jpg', alt: 'Luxus Innenraum 5' },
]

export default function Inventory() {
  const galleryRef = useRef<HTMLDivElement | null>(null)
  const [selectedImageId, setSelectedImageId] = useState(1)
  const selectedImageIndex = galleryImages.findIndex((image) => image.id === selectedImageId)
  const selectedImage = galleryImages[selectedImageIndex] || galleryImages[0]

  const showPreviousImage = () => {
    const previousIndex = (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length
    setSelectedImageId(galleryImages[previousIndex].id)
  }

  const showNextImage = () => {
    const nextIndex = (selectedImageIndex + 1) % galleryImages.length
    setSelectedImageId(galleryImages[nextIndex].id)
  }

  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false)

  const handleFullscreen = async () => {
    if (!galleryRef.current) {
      setIsFullscreenOpen(true)
      return
    }

    const elem = galleryRef.current as any
    try {
      if (elem.requestFullscreen) {
        await elem.requestFullscreen()
        return
      }
      if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen()
        return
      }
      if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen()
        return
      }
      setIsFullscreenOpen(true)
    } catch (error) {
      setIsFullscreenOpen(true)
    }
  }

  const closeFullscreen = () => {
    setIsFullscreenOpen(false)
  }

  return (
    <Container
      w="100%"
      maxW="100%"
      px={{ base: '6%', md: '6%' }}
      py={4}
      bg="#181818"
      minH="0"
      flex="1"
      overflowX="hidden"
      overflowY={{ base: 'visible', md: 'auto' }}
      css={{ WebkitOverflowScrolling: 'touch' }}
      borderTop="1px solid"
      borderColor="whiteAlpha.300"
    >
      <Stack spacing={10}>
        <Box>
          <Heading fontSize={{ base: 'xl', md: 'xl' }} mb={3} color="white">
            Fahrzeugbestand
          </Heading>
          <Text maxW="3xl" color="gray.300" fontSize="lg">
            BMW M330d xDrive SAG Touring M-Sport Pro Individual
          </Text>
        </Box>

        <Box
          bg="#181818"
          borderRadius="3xl"
          overflow="hidden"
          boxShadow="2xl"
          ref={galleryRef}
          // border="1px solid"
          // borderColor="whiteAlpha.300"
        >
          <Box>
            <Box position="relative" h={{ base: '320px', md: '520px' }} borderRadius="3xl" overflow="hidden">
              <Box position="absolute" inset={0} overflow="hidden">
                <Image src={selectedImage.src} alt={selectedImage.alt} objectFit="cover" w="100%" h="100%" />
              </Box>

              <IconButton
                aria-label="Vorheriges Bild"
                icon={<ChevronLeftIcon />}
                position="absolute"
                top="50%"
                left={4}
                transform="translateY(-50%)"
                color="white"
                bg="#181818"
                _hover={{ bg: 'rgba(255,255,255,0.18)' }}
                border="1px solid rgba(255,255,255,0.22)"
                boxShadow="0 12px 30px rgba(0,0,0,0.35)"
                borderRadius="full"
                size="lg"
                onClick={showPreviousImage}
                zIndex={2}
              />
              <IconButton
                aria-label="Nächstes Bild"
                icon={<ChevronRightIcon />}
                position="absolute"
                top="50%"
                right={4}
                transform="translateY(-50%)"
                color="white"
                bg="rgba(0,0,0,0.72)"
                _hover={{ bg: 'rgba(255,255,255,0.18)' }}
                border="1px solid rgba(255,255,255,0.22)"
                boxShadow="0 12px 30px rgba(0,0,0,0.35)"
                borderRadius="full"
                size="lg"
                onClick={showNextImage}
                zIndex={2}
              />
              <IconButton
                aria-label="Vollbild anzeigen"
                icon={<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 16H4v4h4v-2H6v-2zm0-8h2V6h2V4H4v4zm12 8h-2v2h-2v2h4v-4zm-2-8V4h-4v2h2v2h2z"/></svg>}
                position="absolute"
                bottom={4}
                right={4}
                color="white"
                bg="rgba(0,0,0,0.72)"
                _hover={{ bg: 'rgba(255,255,255,0.18)' }}
                border="1px solid rgba(255,255,255,0.22)"
                boxShadow="0 12px 30px rgba(0,0,0,0.35)"
                borderRadius="full"
                size="lg"
                onClick={handleFullscreen}
                zIndex={2}
              />
            </Box>
          </Box>

          <Box mt={4}>
            <SimpleGrid columns={{ base: 3, md: 5 }} spacing={3}>
              {galleryImages.map((image) => (
                <Box
                  key={image.id}
                  as="button"
                  minH="80px"
                  borderRadius="2xl"
                  overflow="hidden"
                  border={selectedImageId === image.id ? '2px solid rgba(255,255,255,0.9)' : '2px solid transparent'}
                  onClick={() => setSelectedImageId(image.id)}
                  transition="border-color 150ms ease, opacity 150ms ease"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    opacity={selectedImageId === image.id ? 1 : 0.7}
                  />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>

        <Box
          bg="#181818"
          // bg="#0f0f0f"
          borderRadius="3xl"
          border="1px solid"
          borderColor="whiteAlpha.200"
          p={{ base: 4, md: 6 }}
        >
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align={{ base: 'flex-start', md: 'center' }} gap={4}>
            <Box>
              <Heading fontSize={{ base: '2xl', md: '3xl' }} color="white" mb={2}>
                {vehicle.title}
              </Heading>
              <Text color="gray.300" fontSize="md" mb={2}>
                {vehicle.subtitle}
              </Text>
            </Box>
            <Text color="#b21a18" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700">
              CHF {vehicle.price.toLocaleString('de-CH')}
            </Text>
          </Flex>

          <Flex wrap="wrap" gap={3} mt={4}>
            <Badge variant="solid" bg="whiteAlpha.100" color="white" px={3} py={1} borderRadius="full">
              {vehicle.badge}
            </Badge>
            <Badge variant="solid" bg="whiteAlpha.100" color="white" px={3} py={1} borderRadius="full">
              {vehicle.condition}
            </Badge>
            <Badge variant="solid" bg="whiteAlpha.100" color="white" px={3} py={1} borderRadius="full">
              {vehicle.fuel}
            </Badge>
            <Badge variant="solid" bg="whiteAlpha.100" color="white" px={3} py={1} borderRadius="full">
              {vehicle.color}
            </Badge>
            <Badge variant="solid" bg="whiteAlpha.100" color="white" px={3} py={1} borderRadius="full">
              {vehicle.transmission}
            </Badge>
          </Flex>
        </Box>

        <Modal isOpen={isFullscreenOpen} onClose={closeFullscreen} size="full">
          <ModalOverlay bg="blackAlpha.900" />
          <ModalContent bg="transparent" boxShadow="none" maxW="100vw" minH="100vh" overflow="hidden">
            <ModalCloseButton color="white" mt={4} mr={4} zIndex={3} />
            <ModalBody p={0} bg="#181818" overflow="auto" css={{ WebkitOverflowScrolling: 'touch', touchAction: 'auto' }}>
              <Box position="relative" minH="100vh" display="flex" justifyContent="center" alignItems="center">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  objectFit="contain"
                  w="100%"
                  h="100%"
                  maxH="100vh"
                  bg="#181818"
                  userSelect="none"
                  sx={{ touchAction: 'auto' }}
                />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Stack>
    </Container>
  )
}
