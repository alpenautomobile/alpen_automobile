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
  Stack,
  Text,
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@chakra-ui/icons'
import { FiCalendar, FiDisc, FiSettings, FiMail, FiPhone, FiGitBranch } from 'react-icons/fi'

const vehicle = {
  title: 'BMW M330d xDrive SAG Touring M-Sport Pro Individual',
  subtitle: '2021 · 42.000 km',
  price: 57900,
  image: '/card1.jpg',
  badge_1: '2021',
  badge_2: ' 42.000 km',
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
      px={{ base: 3, md: '6%' }}
      py={4}
      bg="#181818"
      minH="0"
      flex="1"
      overflowX="hidden"
      overflowY={{ base: 'visible', md: 'auto' }}
      css={{ WebkitOverflowScrolling: 'touch' }}
    >
      <Stack spacing={4} ref={galleryRef}>

        {/* Title, Price, Badges */}
        <Box>
          <Heading fontSize={{ base: '18px', md: '3xl' }} lineHeight="1.35" color="white" mb={1} fontWeight="700">
            BMW M330d xDrive SAG Touring
          </Heading>
          <Heading fontSize={{ base: '16px', md: '2xl' }} lineHeight="1.35" color="whiteAlpha.600" fontWeight="400" mb={3}>
            M-Sport Pro Individual
          </Heading>
          <Text color="#b21a18" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700" mb={4}>
            CHF {vehicle.price.toLocaleString('de-CH')}
          </Text>
          <Flex wrap="wrap" gap={2}>
            <Badge variant="solid" bg="whiteAlpha.100" color="white" fontSize="12px" px={3} py={2} borderRadius="full" whiteSpace="nowrap" display="inline-flex" alignItems="center" gap={2}>
              <FiCalendar size={12} />
              2021
            </Badge>
            <Badge variant="solid" bg="whiteAlpha.100" color="white" fontSize="12px" px={3} py={2} borderRadius="full" whiteSpace="nowrap" display="inline-flex" alignItems="center" gap={2}>
              <FiDisc size={12} />
              42'000 KM
            </Badge>
            <Badge variant="solid" bg="whiteAlpha.100" color="white" fontSize="12px" px={3} py={2} borderRadius="full" whiteSpace="nowrap" display="inline-flex" alignItems="center" gap={2}>
              <FiSettings size={12} />
              AUTOMATIK
            </Badge>
          </Flex>
        </Box>

        {/* Grey card: image, thumbnails, actions, details */}
        <Box bg="#222222" borderRadius="2xl" p={{ base: 3, md: 5 }} display="flex" flexDirection="column" gap={4}>

        {/* Main image */}
        <Box position="relative" h={{ base: '260px', md: '460px' }} borderRadius="xl" overflow="hidden">
          <Box position="absolute" inset={0} overflow="hidden">
            <Image src={selectedImage.src} alt={selectedImage.alt} objectFit="cover" objectPosition="center" w="100%" h="100%" />
          </Box>
          <IconButton
            aria-label="Vorheriges Bild"
            icon={<ChevronLeftIcon />}
            position="absolute"
            top="50%"
            left={2}
            transform="translateY(-50%)"
            color="white"
            bg="blackAlpha.700"
            _hover={{ bg: 'blackAlpha.900' }}
            border="1px solid rgba(255,255,255,0.22)"
            boxShadow="0 12px 30px rgba(0,0,0,0.35)"
            borderRadius="full"
            size="md"
            onClick={showPreviousImage}
            zIndex={2}
          />
          <IconButton
            aria-label="Nächstes Bild"
            icon={<ChevronRightIcon />}
            position="absolute"
            top="50%"
            right={2}
            transform="translateY(-50%)"
            color="white"
            bg="blackAlpha.700"
            _hover={{ bg: 'blackAlpha.900' }}
            border="1px solid rgba(255,255,255,0.22)"
            boxShadow="0 12px 30px rgba(0,0,0,0.35)"
            borderRadius="full"
            size="md"
            onClick={showNextImage}
            zIndex={2}
          />
          <IconButton
            aria-label="Vollbild anzeigen"
            icon={<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6 16H4v4h4v-2H6v-2zm0-8h2V6h2V4H4v4zm12 8h-2v2h-2v2h4v-4zm-2-8V4h-4v2h2v2h2z"/></svg>}
            position="absolute"
            bottom={2}
            right={2}
            color="white"
            bg="blackAlpha.700"
            _hover={{ bg: 'blackAlpha.900' }}
            border="1px solid rgba(255,255,255,0.22)"
            boxShadow="0 12px 30px rgba(0,0,0,0.35)"
            borderRadius="full"
            size="md"
            onClick={handleFullscreen}
            zIndex={2}
          />
        </Box>

        {/* Thumbnails */}
        <Flex
          overflowX="auto"
          gap={3}
          pb={2}
          sx={{ scrollSnapType: 'x mandatory', '&::-webkit-scrollbar': { display: 'none' } }}
        >
          {galleryImages.map((image) => (
            <Box
              key={image.id}
              as="button"
              flexShrink={0}
              minW={{ base: '22%', md: '18%' }}
              h="70px"
              borderRadius="xl"
              overflow="hidden"
              border={selectedImageId === image.id ? '2px solid white' : '1px solid transparent'}
              onClick={() => setSelectedImageId(image.id)}
              transition="border-color 150ms ease, opacity 150ms ease"
              sx={{ scrollSnapAlign: 'start' }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                objectFit="cover"
                objectPosition="center"
                w="100%"
                h="100%"
                opacity={selectedImageId === image.id ? 1 : 0.55}
              />
            </Box>
          ))}
        </Flex>

        {/* Action buttons */}
        <Flex gap={3}>
          <Button
            as="a"
            href="/contact"
            flex={1}
            bg="#b21a18"
            color="white"
            borderRadius="md"
            fontWeight="600"
            fontSize="sm"
            leftIcon={<FiMail size={15} />}
            _hover={{ bg: '#9a1614' }}
            _active={{ bg: '#7e110f' }}
          >
            Fahrzeug anfragen
          </Button>
          <Button
            as="a"
            href="tel:+41768193273"
            flex={1}
            variant="outline"
            borderColor="whiteAlpha.400"
            color="white"
            borderRadius="md"
            fontWeight="600"
            fontSize="sm"
            leftIcon={<FiPhone size={15} />}
            _hover={{ bg: 'whiteAlpha.100' }}
          >
            Anrufen
          </Button>
        </Flex>

        {/* Vehicle details */}
        <Box>
          <Heading fontSize="md" fontWeight="700" color="white" mb={3}>
            Fahrzeugdetails
          </Heading>
          <Box borderTop="1px solid" borderColor="whiteAlpha.200">
            {([
              { icon: FiSettings, label: 'Getriebe', value: 'Automatik' },
              { icon: FiDisc, label: 'Kilometerstand', value: "42'000 KM" },
              { icon: FiCalendar, label: 'Erstzulassung', value: '04 / 2021' },
              { icon: FiGitBranch, label: 'Antrieb', value: 'xDrive (Allrad)' },
            ] as const).map(({ icon: Icon, label, value }) => (
              <Flex key={label} align="center" justify="space-between" py={3} borderBottom="1px solid" borderColor="whiteAlpha.100">
                <Flex align="center" gap={3}>
                  <Box color="whiteAlpha.700"><Icon size={17} /></Box>
                  <Text color="whiteAlpha.800" fontSize="sm">{label}</Text>
                </Flex>
                <Text color="white" fontSize="sm" fontWeight="500">{value}</Text>
              </Flex>
            ))}
          </Box>
        </Box>

        </Box>

      </Stack>

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
    </Container>
  )
}
