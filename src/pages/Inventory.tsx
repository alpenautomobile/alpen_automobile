import React, { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from '@chakra-ui/icons'
import {
  FiMail,
  FiPhone,
  FiExternalLink,
  FiZoomIn,
  FiZoomOut,
  FiRotateCcw
} from 'react-icons/fi'
import { LuExpand } from 'react-icons/lu'

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
  autoScoutUrl:
    'https://www.autoscout24.ch/de/d/bmw-330d-xdrive-touring-12345678',
}

const galleryImages = [
  {
    id: 1,
    src: '/card1.jpg',
    alt: 'BMW M330d Außenansicht mit geöffneten Türen',
  },
  {
    id: 2,
    src: '/card2.jpg',
    alt: 'BMW M330d Seitenansicht',
  },
  {
    id: 3,
    src: '/card3.jpg',
    alt: 'BMW M330d Innenraum',
  },
  {
    id: 4,
    src: '/card1.jpg',
    alt: 'BMW M330d Außenansicht',
  },
  {
    id: 5,
    src: '/card2.jpg',
    alt: 'BMW M330d weitere Ansicht',
  },
]


function SectionHeader({ title }: { title: string }) {
  return (
    <Box mb={{ base: 7, md: 8 }}>
      <Flex align="center" gap={4}>
        <Box
          w="4px"
          h={{ base: '26px', md: '32px' }}
          bg="#b21a18"
          borderRadius="full"
          flexShrink={0}
        />
        <Heading
          as="h1"
          fontSize={{ base: 'xl', md: '2xl' }}
          lineHeight="1"
          fontWeight="800"
          letterSpacing="-0.035em"
          color="white"
          m={0}
        >
          {title}
        </Heading>
      </Flex>
    </Box>
  )
}

export default function Inventory() {
  const [selectedImageId, setSelectedImageId] = useState(1)
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)

  const [touchStartDistance, setTouchStartDistance] = useState<
    number | null
  >(null)

  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)

  const selectedImageIndex = galleryImages.findIndex(
    (image) => image.id === selectedImageId,
  )

  const selectedImage =
    galleryImages[selectedImageIndex] ?? galleryImages[0]

  const showPreviousImage = () => {
    const previousIndex =
      (selectedImageIndex - 1 + galleryImages.length) %
      galleryImages.length

    setSelectedImageId(galleryImages[previousIndex].id)
    setZoomLevel(1)
  }

  const showNextImage = () => {
    const nextIndex =
      (selectedImageIndex + 1) % galleryImages.length

    setSelectedImageId(galleryImages[nextIndex].id)
    setZoomLevel(1)
  }

  const openFullscreen = () => {
    setZoomLevel(1)
    setIsFullscreenOpen(true)
  }

  const closeFullscreen = () => {
    setIsFullscreenOpen(false)
    setZoomLevel(1)
    setTouchStartX(null)
    setTouchEndX(null)
    setTouchStartDistance(null)
  }

  const handleZoomIn = () => {
    setZoomLevel((currentZoom) =>
      Math.min(currentZoom + 0.25, 3),
    )
  }

  const handleZoomOut = () => {
    setZoomLevel((currentZoom) =>
      Math.max(currentZoom - 0.25, 1),
    )
  }

  const handleResetZoom = () => {
    setZoomLevel(1)
  }

  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>,
  ) => {
    if (event.touches.length === 1 && zoomLevel === 1) {
      setTouchStartX(event.touches[0].clientX)
      setTouchEndX(null)
    }

    if (event.touches.length === 2) {
      const distance = Math.hypot(
        event.touches[0].clientX -
          event.touches[1].clientX,
        event.touches[0].clientY -
          event.touches[1].clientY,
      )

      setTouchStartDistance(distance)
    }
  }

  const handleTouchMove = (
    event: React.TouchEvent<HTMLDivElement>,
  ) => {
    if (event.touches.length === 1 && zoomLevel === 1) {
      setTouchEndX(event.touches[0].clientX)
    }

    if (
      event.touches.length === 2 &&
      touchStartDistance !== null
    ) {
      const distance = Math.hypot(
        event.touches[0].clientX -
          event.touches[1].clientX,
        event.touches[0].clientY -
          event.touches[1].clientY,
      )

      const ratio = distance / touchStartDistance

      setZoomLevel((currentZoom) =>
        Math.min(
          Math.max(currentZoom * ratio, 1),
          3,
        ),
      )

      setTouchStartDistance(distance)
    }
  }

  const handleTouchEnd = () => {
    if (
      touchStartX !== null &&
      touchEndX !== null &&
      zoomLevel === 1
    ) {
      const swipeDistance = touchStartX - touchEndX
      const minimumSwipeDistance = 50

      if (swipeDistance > minimumSwipeDistance) {
        showNextImage()
      }

      if (swipeDistance < -minimumSwipeDistance) {
        showPreviousImage()
      }
    }

    setTouchStartX(null)
    setTouchEndX(null)
    setTouchStartDistance(null)
  }

  const handleWheelZoom = (
    event: React.WheelEvent<HTMLDivElement>,
  ) => {
    if (window.innerWidth < 768) {
      return
    }

    event.preventDefault()

    if (event.deltaY < 0) {
      handleZoomIn()
    } else {
      handleZoomOut()
    }
  }

  return (
    <Box
      className="inventory-page"
      as="main"
      position="relative"
      minH="100vh"
      w="100%"
      bg="#000000"
      color="white"
      overflow="hidden"
    >
      <Box
        className="inventory-page-background"
        position="absolute"
        inset={0}
        pointerEvents="none"
        bg="
          radial-gradient(
            circle at 75% 20%,
            rgba(255,255,255,0.035),
            transparent 30%
          ),
          linear-gradient(
            180deg,
            #000000 0%,
            #282828 45%,
            #000000 100%
          )
        "
      />

      <Container
        className="inventory-container"
        position="relative"
        zIndex={1}
        w="100%"
        maxW="100%"
        px={{ base: 4, md: '6%' }}
        pt={{ base: 5, md: 8 }}
        pb={{ base: 8, md: 0 }}
        minH="100vh"
        flex="1"
        overflowY={{
          base: 'visible',
          md: 'hidden',
        }}
        css={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
      <SectionHeader title="Fahrzeugbestand" />

      <Flex
        className="inventory-layout"
        mt={{
          base: 6,
          md: 8,
        }}
        direction={{
          base: 'column',
          md: 'row',
        }}
        gap={{
          base: 4,
          md: 6,
        }}
      >
        {/* Gallery */}
        <Box
          className="inventory-gallery"
          flex="1"
          minW={0}
        >
          <Box
            className="inventory-main-image"
            position="relative"
            h={{
              base: '260px',
              sm: '340px',
              md: '560px',
            }}
            borderRadius="xl"
            overflow="hidden"
            bg="#111"
          >
            <Image
              className="inventory-main-photo"
              src={selectedImage.src}
              alt={selectedImage.alt}
              objectFit="cover"
              objectPosition="center"
              w="100%"
              h="100%"
              userSelect="none"
              draggable={false}
            />

            <IconButton
              aria-label="Vorheriges Bild"
              icon={<ChevronLeftIcon boxSize={6} />}
              position="absolute"
              top="50%"
              left={2}
              transform="translateY(-50%)"
              color="white"
              bg="blackAlpha.700"
              border="1px solid"
              borderColor="whiteAlpha.300"
              borderRadius="full"
              size="md"
              zIndex={2}
              onClick={showPreviousImage}
              _hover={{
                bg: 'blackAlpha.900',
              }}
              _active={{
                transform: 'translateY(-50%) scale(0.94)',
              }}
            />

            <IconButton
              aria-label="Nächstes Bild"
              icon={<ChevronRightIcon boxSize={6} />}
              position="absolute"
              top="50%"
              right={2}
              transform="translateY(-50%)"
              color="white"
              bg="blackAlpha.700"
              border="1px solid"
              borderColor="whiteAlpha.300"
              borderRadius="full"
              size="md"
              zIndex={2}
              onClick={showNextImage}
              _hover={{
                bg: 'blackAlpha.900',
              }}
              _active={{
                transform: 'translateY(-50%) scale(0.94)',
              }}
            />

            <IconButton
              aria-label="Vollbild öffnen"
              icon={<LuExpand size={18} />}
              position="absolute"
              bottom={2}
              right={2}
              color="white"
              bg="blackAlpha.700"
              border="1px solid"
              borderColor="whiteAlpha.300"
              borderRadius="full"
              size="md"
              zIndex={2}
              onClick={openFullscreen}
              _hover={{
                bg: 'blackAlpha.900',
              }}
            />
          </Box>

          {/* Thumbnails */}
          <Flex
            className="inventory-thumbnails"
            mt={3}
            gap={2}
            overflowX="auto"
            pb={1}
            css={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-x',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            {galleryImages.map((image) => {
              const isSelected =
                selectedImageId === image.id

              return (
                <Box
                  className="inventory-thumbnail"
                  key={image.id}
                  as="button"
                  type="button"
                  flexShrink={0}
                  w={{
                    base: '80px',
                    md: '100px',
                  }}
                  h={{
                    base: '60px',
                    md: '68px',
                  }}
                  p={0}
                  borderRadius="lg"
                  overflow="hidden"
                  border="2px solid"
                  borderColor={
                    isSelected
                      ? 'white'
                      : 'transparent'
                  }
                  onClick={() => {
                    setSelectedImageId(image.id)
                    setZoomLevel(1)
                  }}
                  transition="
                    border-color 150ms ease,
                    opacity 150ms ease,
                    transform 150ms ease
                  "
                  _hover={{
                    transform: 'translateY(-2px)',
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    objectFit="cover"
                    objectPosition="center"
                    w="100%"
                    h="100%"
                    opacity={isSelected ? 1 : 0.5}
                  />
                </Box>
              )
            })}
          </Flex>

          {/* Mobile action buttons */}
          <Stack
            spacing={3}
            mt={4}
            display={{
              base: 'flex',
              md: 'none',
            }}
          >
            <Button
              as="a"
              href="mailto:info@alpenautomobile.ch ?subject=Fahrzeuganfrage%3A%20BMW%20M330d%20xDrive%20SAG%20Touring"
              w="100%"
              h="46px"
              bg="#b21a18"
              color="white"
              fontWeight="600"
              fontSize="sm"
              leftIcon={<FiMail size={16} />}
              _hover={{
                bg: '#9a1614',
              }}
              _active={{
                bg: '#7e110f',
              }}
            >
              Fahrzeug anfragen
            </Button>

            <Button
              as="a"
              href="tel:+41768193273"
              w="100%"
              h="46px"
              variant="outline"
              borderColor="whiteAlpha.300"
              color="white"
              fontWeight="600"
              fontSize="sm"
              leftIcon={<FiPhone size={16} />}
              _hover={{
                bg: 'whiteAlpha.100',
              }}
            >
              Anrufen
            </Button>
          </Stack>
        </Box>

        {/* Vehicle information */}
        <Box
          className="inventory-info-column"
          w={{
            base: '100%',
            md: '340px',
            lg: '365px',
          }}
          flexShrink={0}
          order={{
            base: -1,
            md: 0,
          }}
        >
          <Box
            className="inventory-info-card"
            h="100%"
            minH={{
              base: 'auto',
              md: '454px',
            }}
            px={{
              base: 5,
              md: 7,
            }}
            py={{
              base: 3,
              md: 8,
            }}
            borderRadius="16px"
            border="1px solid rgba(255, 255, 255, 0.10)"
            background="
              radial-gradient(
                circle at 80% 5%,
                rgba(255, 255, 255, 0.025),
                transparent 34%
              ),
              linear-gradient(
                145deg,
                #171719 0%,
                #101012 100%
              )
            "
            boxShadow="
              0 18px 45px rgba(0, 0, 0, 0.28),
              inset 0 1px 0 rgba(255, 255, 255, 0.025)
            "
          >
            <Flex
              direction="column"
              h="100%"
            >
              <Box>
                <Heading
                  className="inventory-title"
                  color="white"
                  fontSize={{
                    base: 'md',
                    md: '2xl',
                  }}
                  lineHeight="1.2"
                  fontWeight="700"
                  letterSpacing="-0.025em"
                  mb={2}
                  mt={2}
                >
                  {vehicle.title}
                </Heading>

                <Text
                  className="inventory-subtitle"
                  color="rgba(255, 255, 255, 0.52)"
                   fontSize={{
                    base: 'md',
                    md: 'xl',
                  }}
                  lineHeight="1.5"
                  mb={5}
                >
                  {vehicle.subtitle}
                </Text>

                <Box
                  h="1px"
                  bg="rgba(255, 255, 255, 0.09)"
                  mb={4}
                />

                <Text
                  className="inventory-price"
                  color="#b21a18"
                  fontSize={{
                    base: 'md',
                    md: 'xl',
                  }}
                  lineHeight="1"
                  fontWeight="700"
                  letterSpacing="-0.035em"
                  whiteSpace="nowrap"
                  mb={4}
                >
                  CHF {vehicle.price.toLocaleString('de-CH')}
                </Text>

                <Box
                  h="1px"
                  bg="rgba(255, 255, 255, 0.09)"
                />

                <Button
                  className="inventory-autoscout-link"
                  as="a"
                  href={vehicle.autoScoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  w="100%"
                  h="66px"
                  ml={-3}
                  bg="transparent"
                  color="rgba(255, 255, 255, 0.72)"
                  borderRadius={0}
                  justifyContent="flex-start"
                  fontSize="13px"
                  fontWeight="400"
                  leftIcon={<FiExternalLink size={16} />}
                  rightIcon={<ChevronRightIcon boxSize={5} />}
                  display="inline-flex"
                  transformOrigin="left center"
                  transition="transform 160ms ease"
                  sx={{
                    '.chakra-button__icon:first-of-type': {
                      marginInlineEnd: '14px',
                    },
                    '.chakra-button__icon:last-of-type': {
                      marginInlineStart: 'auto',
                    },
                  }}
                  _hover={{
                    bg: 'transparent',
                    color: 'rgba(255, 255, 255, 0.72)',
                    transform: 'scale(1.03)',
                  }}
                  _active={{
                    bg: 'transparent',
                  }}
                >
                  Auf AutoScout24.ch ansehen
                </Button>
              </Box>

              <Stack
                className="inventory-desktop-actions"
                spacing={3}
                mt="auto"
                pt={4}
                display={{
                  base: 'none',
                  md: 'flex',
                }}
              >
                <Button
                  as="a"
                  href="mailto:info@alpenautomobile.ch?subject=Fahrzeuganfrage%3A%20BMW%20M330d%20xDrive%20SAG%20Touring"
                  w="100%"
                  h="52px"
                  borderRadius="6px"
                  border="1px solid #b21a18"
                  bg="#b21a18"
                  color="white"
                  fontWeight="500"
                  fontSize="14px"
                  leftIcon={<FiMail size={16} />}
                  boxShadow="
                    0 10px 24px rgba(178, 26, 24, 0.22),
                    inset 0 1px 0 rgba(255, 255, 255, 0.10)
                  "
                  transition="all 160ms ease"
                  _hover={{
                    bg: '#9a1614',
                    borderColor: '#9a1614',
                    transform: 'translateY(-1px)',
                    boxShadow:
                      '0 13px 28px rgba(178, 26, 24, 0.30)',
                  }}
                  _active={{
                    bg: '#7e110f',
                    borderColor: '#7e110f',
                    transform: 'translateY(0)',
                  }}
                >
                  Fahrzeug anfragen
                </Button>

                <Button
                  as="a"
                  href="tel:+41768193273"
                  w="100%"
                  h="52px"
                  borderRadius="6px"
                  variant="outline"
                  borderColor="rgba(255, 255, 255, 0.12)"
                  bg="rgba(0, 0, 0, 0.08)"
                  color="rgba(255, 255, 255, 0.72)"
                  fontWeight="400"
                  fontSize="14px"
                  leftIcon={<FiPhone size={16} />}
                  transition="all 160ms ease"
                  _hover={{
                    bg: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                    color: 'white',
                  }}
                  _active={{
                    bg: 'rgba(255, 255, 255, 0.03)',
                  }}
                >
                  Anrufen
                </Button>
              </Stack>
            </Flex>
          </Box>
        </Box>
      </Flex>

   

      {/* Fullscreen image viewer */}
      <Modal
        isOpen={isFullscreenOpen}
        onClose={closeFullscreen}
        size="full"
        isCentered
      >
        <ModalOverlay bg="rgba(0, 0, 0, 0.96)" />

        <ModalContent
          bg="#080808"
          boxShadow="none"
          maxW="100vw"
          w="100vw"
          h="100dvh"
          minH="100dvh"
          m={0}
          borderRadius={0}
          overflow="hidden"
        >
          {/* Image counter */}
          <Text
            position="absolute"
            top={{
              base: 4,
              md: 6,
            }}
            left={{
              base: 4,
              md: 6,
            }}
            color="whiteAlpha.900"
            bg="blackAlpha.600"
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="full"
            px={3}
            py={1.5}
            fontSize="sm"
            fontWeight="600"
            zIndex={30}
          >
            {selectedImageIndex + 1} /{' '}
            {galleryImages.length}
          </Text>

          {/* Zoom and close controls */}
          <Flex
            position="absolute"
            top={{
              base: 3,
              md: 5,
            }}
            right={{
              base: 3,
              md: 5,
            }}
            align="center"
            gap={2}
            zIndex={30}
          >
            <Flex
              display={{
                base: 'none',
                md: 'flex',
              }}
              align="center"
              gap={2}
            >
              <IconButton
                aria-label="Bild verkleinern"
                icon={<FiZoomOut size={18} />}
                color="white"
                bg="blackAlpha.700"
                border="1px solid"
                borderColor="whiteAlpha.300"
                borderRadius="full"
                onClick={handleZoomOut}
                isDisabled={zoomLevel <= 1}
                _hover={{
                  bg: 'blackAlpha.900',
                }}
                _disabled={{
                  opacity: 0.35,
                  cursor: 'not-allowed',
                }}
              />

              <IconButton
                aria-label="Zoom zurücksetzen"
                icon={<FiRotateCcw size={17} />}
                color="white"
                bg="blackAlpha.700"
                border="1px solid"
                borderColor="whiteAlpha.300"
                borderRadius="full"
                onClick={handleResetZoom}
                _hover={{
                  bg: 'blackAlpha.900',
                }}
              />

              <IconButton
                aria-label="Bild vergrößern"
                icon={<FiZoomIn size={18} />}
                color="white"
                bg="blackAlpha.700"
                border="1px solid"
                borderColor="whiteAlpha.300"
                borderRadius="full"
                onClick={handleZoomIn}
                isDisabled={zoomLevel >= 3}
                _hover={{
                  bg: 'blackAlpha.900',
                }}
                _disabled={{
                  opacity: 0.35,
                  cursor: 'not-allowed',
                }}
              />
            </Flex>

            <IconButton
              aria-label="Vollbild schließen"
              icon={<CloseIcon boxSize={3.5} />}
              color="white"
              bg="blackAlpha.700"
              border="1px solid"
              borderColor="whiteAlpha.300"
              borderRadius="full"
              onClick={closeFullscreen}
              _hover={{
                bg: '#b21a18',
                borderColor: '#b21a18',
              }}
            />
          </Flex>

          <ModalBody
            p={0}
            position="relative"
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* Previous image */}
            <IconButton
              aria-label="Vorheriges Bild"
              icon={<ChevronLeftIcon boxSize={6} />}
              position="absolute"
              top="50%"
              left={2}
              transform="translateY(-50%)"
              color="white"
              bg="blackAlpha.700"
              border="1px solid"
              borderColor="whiteAlpha.300"
              borderRadius="full"
              size="md"
              zIndex={30}
              onClick={showPreviousImage}
              _hover={{ bg: 'blackAlpha.900' }}
              _active={{ transform: 'translateY(-50%) scale(0.94)' }}
            />

            {/* Image viewport */}
            <Flex
              w="100%"
              h="100dvh"
              align="center"
              justify="center"
              overflow={
                zoomLevel > 1 ? 'auto' : 'hidden'
              }
              px={{
                base: 2,
                md: 20,
              }}
              py={{
                base: 14,
                md: 8,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onDoubleClick={() => {
                setZoomLevel((currentZoom) =>
                  currentZoom === 1 ? 2 : 1,
                )
              }}
              onWheel={handleWheelZoom}
              sx={{
                touchAction:
                  zoomLevel > 1
                    ? 'pan-x pan-y'
                    : 'pan-y',
              }}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                display="block"
                minW="80%"
                minH="00%"
                maxW="100%"
                maxH="100%"
                objectFit="contain"
                userSelect="none"
                draggable={false}
                transform={`scale(${zoomLevel})`}
                transformOrigin="center center"
                transition="transform 150ms ease"
                borderRadius={{
                  base: 'md',
                  md: 'xl',
                }}
                cursor={{
                  base: 'default',
                  md:
                    zoomLevel > 1
                      ? 'zoom-out'
                      : 'zoom-in',
                }}
              />
            </Flex>

            {/* Next image */}
            <IconButton
              aria-label="Nächstes Bild"
              icon={<ChevronRightIcon boxSize={6} />}
              position="absolute"
              top="50%"
              right={2}
              transform="translateY(-50%)"
              color="white"
              bg="blackAlpha.700"
              border="1px solid"
              borderColor="whiteAlpha.300"
              borderRadius="full"
              size="md"
              zIndex={30}
              onClick={showNextImage}
              _hover={{ bg: 'blackAlpha.900' }}
              _active={{ transform: 'translateY(-50%) scale(0.94)' }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      </Container>
    </Box>
  )
}
