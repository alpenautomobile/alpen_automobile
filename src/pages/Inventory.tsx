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
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { FiCalendar, FiDisc, FiSettings, FiMail, FiPhone, FiGitBranch, FiZap, FiDroplet, FiUsers, FiShield, FiPackage, FiExternalLink, FiZoomIn, FiZoomOut, FiRotateCcw } from 'react-icons/fi'

const vehicle = {
  title: 'BMW M330d xDrive SAG Touring',
  subtitle: 'M-Sport Pro Individual',
  price: 57900,
  year: '2021',
  km: "42'000 KM",
  transmission: 'Automatik',
  fuel: 'Diesel',
  body: 'Kombi',
  drive: 'xDrive (Allrad)',
  power: '265 PS (195 kW)',
  seats: '5 / 5',
  registration: '04 / 2021',
}

const galleryImages = [
  { id: 1, src: '/card1.jpg', alt: 'Bild 1' },
  { id: 2, src: '/card2.jpg', alt: 'Bild 2' },
  { id: 3, src: '/card3.jpg', alt: 'Bild 3' },
  { id: 4, src: '/card1.jpg', alt: 'Bild 4' },
  { id: 5, src: '/card2.jpg', alt: 'Bild 5' },
]

const details = [
  { icon: FiCalendar, label: 'Erstzulassung', value: '2021' },
  { icon: FiSettings, label: 'Getriebe', value: 'Automatik' },
  { icon: FiDroplet, label: 'Kraftstoff', value: 'Diesel' },
  { icon: FiPackage, label: 'Karosserie', value: 'Kombi' },
  { icon: FiDisc, label: 'Kilometerstand', value: "42'000 KM" },
  { icon: FiGitBranch, label: 'Antrieb', value: 'xDrive (Allrad)' },
  { icon: FiZap, label: 'Leistung', value: '265 PS (195 kW)' },
  { icon: FiUsers, label: 'Türen / Sitze', value: '5 / 5' },
] as const

export default function Inventory() {
  const mainImageRef = useRef<HTMLDivElement | null>(null)
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
  const [zoomLevel, setZoomLevel] = useState(1)
  const [touchStartDistance, setTouchStartDistance] = useState<number | null>(null)

  const handleFullscreen = async () => {
    const elem = mainImageRef.current as HTMLElement | null

    if (!elem) {
      setIsFullscreenOpen(true)
      return
    }

    try {
      if (typeof elem.requestFullscreen === 'function') {
        await elem.requestFullscreen()
        return
      }
      if (typeof (elem as any).webkitRequestFullscreen === 'function') {
        ;(elem as any).webkitRequestFullscreen()
        return
      }
      if (typeof (elem as any).msRequestFullscreen === 'function') {
        ;(elem as any).msRequestFullscreen()
        return
      }
    } catch {
      // fall back to the modal viewer if browser fullscreen is blocked
    }

    setIsFullscreenOpen(true)
  }

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 3))
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 1))
  const handleResetZoom = () => setZoomLevel(1)

  const handleTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length === 2) {
      const distance = Math.hypot(
        event.touches[0].clientX - event.touches[1].clientX,
        event.touches[0].clientY - event.touches[1].clientY,
      )
      setTouchStartDistance(distance)
    }
  }

  const handleTouchMove = (event: React.TouchEvent) => {
    if (event.touches.length !== 2 || touchStartDistance === null) return

    const distance = Math.hypot(
      event.touches[0].clientX - event.touches[1].clientX,
      event.touches[0].clientY - event.touches[1].clientY,
    )

    const ratio = distance / touchStartDistance
    const nextZoom = Math.min(Math.max(1 * ratio, 1), 3)
    setZoomLevel(nextZoom)
  }

  const handleTouchEnd = () => setTouchStartDistance(null)

  return (
    <Container
      w="100%"
      maxW="100%"
      px={{ base: 4, md: '6%' }}
      py={{ base: 4, md: 6 }}
      bg="#181818"
      minH="0"
      flex="1"
      overflowY={{ base: 'visible', md: 'auto' }}
      css={{ WebkitOverflowScrolling: 'touch' }}
    >
      {/* ── Desktop: two-column / Mobile: stacked ── */}
      <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 4, md: 6 }}>

        {/* ── LEFT: Gallery ── */}
        <Box flex="1" minW={0}>
          {/* Main image */}
          <Box ref={mainImageRef} position="relative" h={{ base: '260px', md: '560px' }} borderRadius="xl" overflow="hidden">
            <Box position="absolute" inset={0}>
              <Image src={selectedImage.src} alt={selectedImage.alt} objectFit="cover" objectPosition="center" w="100%" h="100%" />
            </Box>
            <IconButton aria-label="Vorheriges Bild" icon={<ChevronLeftIcon />} position="absolute" top="50%" left={2} transform="translateY(-50%)" color="white" bg="blackAlpha.700" _hover={{ bg: 'blackAlpha.900' }} border="1px solid rgba(255,255,255,0.22)" borderRadius="full" size="md" onClick={showPreviousImage} zIndex={2} />
            <IconButton aria-label="Nächstes Bild" icon={<ChevronRightIcon />} position="absolute" top="50%" right={2} transform="translateY(-50%)" color="white" bg="blackAlpha.700" _hover={{ bg: 'blackAlpha.900' }} border="1px solid rgba(255,255,255,0.22)" borderRadius="full" size="md" onClick={showNextImage} zIndex={2} />
            <IconButton
              aria-label="Vollbild"
              icon={<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M6 16H4v4h4v-2H6v-2zm0-8h2V6h2V4H4v4zm12 8h-2v2h-2v2h4v-4zm-2-8V4h-4v2h2v2h2z"/></svg>}
              position="absolute" bottom={2} right={2} color="white" bg="blackAlpha.700" _hover={{ bg: 'blackAlpha.900' }} border="1px solid rgba(255,255,255,0.22)" borderRadius="full" size="md" onClick={handleFullscreen} zIndex={2}
            />
          </Box>

          {/* Thumbnails */}
          <Flex
            mt={3} gap={2} overflowX="auto"
            css={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}
          >
            {galleryImages.map((image) => (
              <Box
                key={image.id}
                as="button"
                flexShrink={0}
                w={{ base: '80px', md: '100px' }}
                h={{ base: '60px', md: '68px' }}
                borderRadius="lg"
                overflow="hidden"
                border="2px solid"
                borderColor={selectedImageId === image.id ? 'white' : 'transparent'}
                onClick={() => setSelectedImageId(image.id)}
                transition="border-color 150ms ease, opacity 150ms ease"
              >
                <Image src={image.src} alt={image.alt} objectFit="cover" objectPosition="center" w="100%" h="100%" opacity={selectedImageId === image.id ? 1 : 0.5} />
              </Box>
            ))}
          </Flex>

          {/* Action buttons — mobile only */}
          <Stack spacing={3} mt={3} display={{ base: 'flex', md: 'none' }}>
            <Button
              as="a"
              href="mailto:info@alpen-automobile.ch?subject=Fahrzeuganfrage%3A%20BMW%20M330d%20xDrive%20SAG%20Touring"
              w="100%" bg="#b21a18" color="white" fontWeight="600" fontSize="sm"
              leftIcon={<FiMail size={15} />} _hover={{ bg: '#9a1614' }} _active={{ bg: '#7e110f' }}
            >
              Anfragen
            </Button>
            <Button
              as="a" href="tel:+41768193273"
              w="100%" variant="outline" borderColor="whiteAlpha.300" color="white" fontWeight="600" fontSize="sm"
              leftIcon={<FiPhone size={15} />} _hover={{ bg: 'whiteAlpha.100' }}
            >
              Anrufen
            </Button>
            {/* Quality badge — mobile only */}
            <Flex align="center" gap={3} p={3} bg="whiteAlpha.50" borderRadius="xl" border="1px solid" borderColor="whiteAlpha.100" mt={1}>
              <Box color="whiteAlpha.600" flexShrink={0}><FiShield size={20} /></Box>
              <Box>
                <Text color="white" fontSize="xs" fontWeight="600">Geprüfte Qualität</Text>
                <Text color="whiteAlpha.500" fontSize="xs">Alle Fahrzeuge werden sorgfältig geprüft.</Text>
              </Box>
            </Flex>
          </Stack>
        </Box>
        <Box w={{ base: '100%', md: '340px' }} flexShrink={0} order={{ base: -1, md: 0 }}>
          <Box bg="#1e1e1e" borderRadius="xl" p={{ base: 4, md: 5 }} border="1px solid" borderColor="whiteAlpha.100" h="100%">
            {/* Title */}
            <Heading fontSize={{ base: '18px', md: '2xl' }} color="white" lineHeight="1.25" fontWeight="700" mb={2}>
              {vehicle.title}
            </Heading>
            <Text color="whiteAlpha.600" fontSize="sm" mb={2}>{vehicle.subtitle}</Text>

            {/* Price */}
            <Text color="#b21a18" fontSize={{ base: 'xl', md: '3xl' }} fontWeight="700" mb={3}>
              CHF {vehicle.price.toLocaleString('de-CH')}
            </Text>

            {/* Spec badges */}
            <Flex gap={2} wrap="wrap" mb={{ base: 0, md: 4 }}>
              <Button
                as="a"
                href="https://www.autoscout24.ch/de/d/bmw-330d-xdrive-touring-12345678"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                h="44px"
                px={0}
                bg="transparent"
                color="white"
                border="none"
                borderRadius="0"
                fontSize="13px"
                fontWeight="600"
                leftIcon={<FiExternalLink size={16} />}
                rightIcon={<ChevronRightIcon boxSize={5} />}
                _hover={{
                  bg: 'transparent',
                  color: '#d22a21',
                  transform: 'translateX(2px)',
                }}
                _active={{
                  bg: 'transparent',
                  transform: 'translateX(0)',
                }}
                transition="all 150ms ease"
              >
                Auf AutoScout24.ch ansehen
              </Button>
            </Flex>

            {/* Action buttons — desktop only (mobile buttons are below the gallery) */}
            <Stack spacing={3} mb={4} display={{ base: 'none', md: 'flex' }}>
              <Button
                as="a"
                href="mailto:info@alpen-automobile.ch?subject=Fahrzeuganfrage%3A%20BMW%20M330d%20xDrive%20SAG%20Touring"
                w="100%" bg="#b21a18" color="white" fontWeight="600" fontSize="sm"
                leftIcon={<FiMail size={15} />} _hover={{ bg: '#9a1614' }} _active={{ bg: '#7e110f' }}
              >
                Anfragen
              </Button>
              <Button
                as="a" href="tel:+41768193273"
                w="100%" variant="outline" borderColor="whiteAlpha.300" color="white" fontWeight="600" fontSize="sm"
                leftIcon={<FiPhone size={15} />} _hover={{ bg: 'whiteAlpha.100' }}
              >
                Anrufen
              </Button>
            </Stack>

            {/* Quality badge — desktop only */}
            <Flex align="center" gap={3} p={3} bg="whiteAlpha.50" borderRadius="xl" border="1px solid" borderColor="whiteAlpha.100" display={{ base: 'none', md: 'flex' }}>
              <Box color="whiteAlpha.600" flexShrink={0}><FiShield size={20} /></Box>
              <Box>
                <Text color="white" fontSize="xs" fontWeight="600">Geprüfte Qualität</Text>
                <Text color="whiteAlpha.500" fontSize="xs">Alle Fahrzeuge werden sorgfältig geprüft.</Text>
              </Box>
            </Flex>

          </Box>
        </Box>
      </Flex>

      {/* ── Vehicle Details (full width below) ── */}
      <Box mt={6} bg="#1e1e1e" borderRadius="xl" p={{ base: 4, md: 5 }} border="1px solid" borderColor="whiteAlpha.100">
        <Heading fontSize="md" fontWeight="700" color="white" mb={4}>Fahrzeugdetails</Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 4, md: 0 }}>
          {details.map(({ icon: Icon, label, value }, i) => (
            <Flex
              key={label}
              align="center"
              gap={3}
              py={{ base: 2, md: 3 }}
              px={{ md: 4 }}
              borderRight={{ md: i % 4 !== 3 ? '1px solid' : 'none' }}
              borderBottom={{ md: i < 4 ? '1px solid' : 'none' }}
              borderColor="whiteAlpha.100"
            >
              <Box color="whiteAlpha.500" flexShrink={0}><Icon size={16} /></Box>
              <Box>
                <Text color="whiteAlpha.500" fontSize="xs">{label}</Text>
                <Text color="white" fontSize="sm" fontWeight="600">{value}</Text>
              </Box>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>

      <Modal isOpen={isFullscreenOpen} onClose={() => {
        setIsFullscreenOpen(false)
        setZoomLevel(1)
      }} size="full">
        <ModalOverlay bg="blackAlpha.900" />
        <ModalContent bg="transparent" boxShadow="none" maxW="100vw" minH="100vh" overflow="hidden">
          <ModalCloseButton color="white" mt={4} mr={4} zIndex={3} />
          <Box position="absolute" top={4} right={12} zIndex={3} display="flex" gap={2}>
            <IconButton aria-label="Verkleinern" icon={<FiZoomOut />} color="white" bg="blackAlpha.700" _hover={{ bg: 'blackAlpha.900' }} borderRadius="full" onClick={handleZoomOut} />
            <IconButton aria-label="Zurücksetzen" icon={<FiRotateCcw />} color="white" bg="blackAlpha.700" _hover={{ bg: 'blackAlpha.900' }} borderRadius="full" onClick={handleResetZoom} />
            <IconButton aria-label="Vergrößern" icon={<FiZoomIn />} color="white" bg="blackAlpha.700" _hover={{ bg: 'blackAlpha.900' }} borderRadius="full" onClick={handleZoomIn} />
          </Box>
          <ModalBody p={0} bg="#181818" overflow="auto" css={{ WebkitOverflowScrolling: 'touch' }}>
            <Box minH="100vh" display="flex" justifyContent="center" alignItems="center" px={4} py={4} overflow="auto">
              <Box
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onDoubleClick={() => setZoomLevel((prev) => (prev === 1 ? 2 : 1))}
                onWheel={(event) => {
                  event.preventDefault()
                  if (event.deltaY < 0) {
                    handleZoomIn()
                  } else {
                    handleZoomOut()
                  }
                }}
                cursor="zoom-in"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  objectFit="contain"
                  w="100%"
                  maxH="100vh"
                  bg="#181818"
                  userSelect="none"
                  transform={`scale(${zoomLevel})`}
                  transition="transform 150ms ease"
                  transformOrigin="center center"
                />
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  )
}