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
  FiCalendar,
  FiDisc,
  FiSettings,
  FiMail,
  FiPhone,
  FiGitBranch,
  FiZap,
  FiDroplet,
  FiUsers,
  FiShield,
  FiPackage,
  FiExternalLink,
  FiZoomIn,
  FiZoomOut,
  FiRotateCcw,
} from 'react-icons/fi'

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

const details = [
  {
    icon: FiCalendar,
    label: 'Erstzulassung',
    value: vehicle.year,
  },
  {
    icon: FiSettings,
    label: 'Getriebe',
    value: vehicle.transmission,
  },
  {
    icon: FiDroplet,
    label: 'Kraftstoff',
    value: vehicle.fuel,
  },
  {
    icon: FiPackage,
    label: 'Karosserie',
    value: vehicle.body,
  },
  {
    icon: FiDisc,
    label: 'Kilometerstand',
    value: vehicle.km,
  },
  {
    icon: FiGitBranch,
    label: 'Antrieb',
    value: vehicle.drive,
  },
  {
    icon: FiZap,
    label: 'Leistung',
    value: vehicle.power,
  },
  {
    icon: FiUsers,
    label: 'Türen / Sitze',
    value: vehicle.seats,
  },
] as const

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
    <Container
      w="100%"
      maxW="100%"
      px={{
        base: 4,
        md: '6%',
      }}
      py={{
        base: 4,
        md: 6,
      }}
      bg="#181818"
      minH="100vh"
      flex="1"
      overflowY={{
        base: 'visible',
        md: 'auto',
      }}
      css={{
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <Flex
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
          flex="1"
          minW={0}
        >
          <Box
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
              icon={
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M6 16H4v4h4v-2H6v-2zm0-8h2V6h2V4H4v4zm12 8h-2v2h-2v2h4v-4zm-2-8V4h-4v2h2v2h2z" />
                </svg>
              }
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
              href="mailto:info@alpen-automobile.ch?subject=Fahrzeuganfrage%3A%20BMW%20M330d%20xDrive%20SAG%20Touring"
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

            <QualityBox />
          </Stack>
        </Box>

        {/* Vehicle information */}
        <Box
          w={{
            base: '100%',
            md: '340px',
          }}
          flexShrink={0}
          order={{
            base: -1,
            md: 0,
          }}
        >
          <Box
            bg="#1e1e1e"
            borderRadius="xl"
            p={{
              base: 4,
              md: 5,
            }}
            border="1px solid"
            borderColor="whiteAlpha.100"
            h="100%"
          >
            <Heading
              fontSize={{
                base: '18px',
                md: '2xl',
              }}
              color="white"
              lineHeight="1.25"
              fontWeight="700"
              mb={2}
            >
              {vehicle.title}
            </Heading>

            <Text
              color="whiteAlpha.600"
              fontSize="sm"
              mb={2}
            >
              {vehicle.subtitle}
            </Text>

            <Text
              color="#b21a18"
              fontSize={{
                base: 'xl',
                md: '3xl',
              }}
              fontWeight="700"
              mb={3}
            >
              CHF {vehicle.price.toLocaleString('de-CH')}
            </Text>

            <Flex
              gap={2}
              wrap="wrap"
              mb={{
                base: 0,
                md: 4,
              }}
            >
              <Button
                as="a"
                href={vehicle.autoScoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                h="44px"
                px={0}
                bg="transparent"
                color="white"
                border="none"
                borderRadius={0}
                fontSize="13px"
                fontWeight="600"
                leftIcon={
                  <FiExternalLink size={16} />
                }
                rightIcon={
                  <ChevronRightIcon boxSize={5} />
                }
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

            {/* Desktop action buttons */}
            <Stack
              spacing={3}
              mb={4}
              display={{
                base: 'none',
                md: 'flex',
              }}
            >
              <Button
                as="a"
                href="mailto:info@alpen-automobile.ch?subject=Fahrzeuganfrage%3A%20BMW%20M330d%20xDrive%20SAG%20Touring"
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

            <Box
              display={{
                base: 'none',
                md: 'block',
              }}
            >
              <QualityBox />
            </Box>
          </Box>
        </Box>
      </Flex>

      {/* Vehicle details */}
      <Box
        mt={6}
        bg="#1e1e1e"
        borderRadius="xl"
        p={{
          base: 4,
          md: 5,
        }}
        border="1px solid"
        borderColor="whiteAlpha.100"
      >
        <Heading
          fontSize="md"
          fontWeight="700"
          color="white"
          mb={4}
        >
          Fahrzeugdetails
        </Heading>

        <SimpleGrid
          columns={{
            base: 1,
            sm: 2,
            md: 4,
          }}
          spacing={{
            base: 0,
            md: 0,
          }}
        >
          {details.map(
            ({ icon: Icon, label, value }, index) => (
              <Flex
                key={label}
                align="center"
                gap={3}
                py={{
                  base: 3,
                  md: 4,
                }}
                px={{
                  base: 0,
                  md: 4,
                }}
                borderRight={{
                  md:
                    index % 4 !== 3
                      ? '1px solid'
                      : 'none',
                }}
                borderBottom={{
                  base: '1px solid',
                  md:
                    index < 4
                      ? '1px solid'
                      : 'none',
                }}
                borderColor="whiteAlpha.100"
              >
                <Box
                  color="whiteAlpha.500"
                  flexShrink={0}
                >
                  <Icon size={17} />
                </Box>

                <Box minW={0}>
                  <Text
                    color="whiteAlpha.500"
                    fontSize="xs"
                  >
                    {label}
                  </Text>

                  <Text
                    color="white"
                    fontSize="sm"
                    fontWeight="600"
                  >
                    {value}
                  </Text>
                </Box>
              </Flex>
            ),
          )}
        </SimpleGrid>
      </Box>

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
              size={{
                base: 'md',
                md: 'lg',
              }}
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
              icon={
                <ChevronLeftIcon
                  boxSize={{
                    base: 7,
                    md: 9,
                  }}
                />
              }
              position="absolute"
              top="50%"
              left={{
                base: 3,
                md: 6,
              }}
              transform="translateY(-50%)"
              color="white"
              bg="blackAlpha.700"
              border="1px solid"
              borderColor="whiteAlpha.300"
              borderRadius="full"
              size={{
                base: 'md',
                md: 'lg',
              }}
              zIndex={30}
              onClick={showPreviousImage}
              _hover={{
                bg: 'blackAlpha.900',
                borderColor: 'whiteAlpha.600',
              }}
              _active={{
                transform:
                  'translateY(-50%) scale(0.94)',
              }}
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
                maxW="100%"
                maxH="100%"
                objectFit="contain"
                userSelect="none"
                draggable={false}
                transform={`scale(${zoomLevel})`}
                transformOrigin="center center"
                transition="transform 150ms ease"
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
              icon={
                <ChevronRightIcon
                  boxSize={{
                    base: 7,
                    md: 9,
                  }}
                />
              }
              position="absolute"
              top="50%"
              right={{
                base: 3,
                md: 6,
              }}
              transform="translateY(-50%)"
              color="white"
              bg="blackAlpha.700"
              border="1px solid"
              borderColor="whiteAlpha.300"
              borderRadius="full"
              size={{
                base: 'md',
                md: 'lg',
              }}
              zIndex={30}
              onClick={showNextImage}
              _hover={{
                bg: 'blackAlpha.900',
                borderColor: 'whiteAlpha.600',
              }}
              _active={{
                transform:
                  'translateY(-50%) scale(0.94)',
              }}
            />

            <Text
              display={{
                base: 'block',
                md: 'none',
              }}
              position="absolute"
              bottom={5}
              left="50%"
              transform="translateX(-50%)"
              color="whiteAlpha.600"
              fontSize="11px"
              whiteSpace="nowrap"
              zIndex={20}
              pointerEvents="none"
            >
              Wischen oder Pfeile verwenden
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  )
}

function QualityBox() {
  return (
    <Flex
      align="center"
      gap={3}
      p={3}
      bg="whiteAlpha.50"
      borderRadius="xl"
      border="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Box
        color="whiteAlpha.600"
        flexShrink={0}
      >
        <FiShield size={20} />
      </Box>

      <Box>
        <Text
          color="white"
          fontSize="xs"
          fontWeight="600"
        >
          Geprüfte Qualität
        </Text>

        <Text
          color="whiteAlpha.500"
          fontSize="xs"
        >
          Alle Fahrzeuge werden sorgfältig geprüft.
        </Text>
      </Box>
    </Flex>
  )
}