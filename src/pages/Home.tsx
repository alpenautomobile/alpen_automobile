import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import {
  FiCheckCircle,
  FiChevronRight,
  FiSearch,
  FiUser,
} from 'react-icons/fi'

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
  },
]

const UNIFIED_HOVER = {
  transform: 'translateX(2px) scale(1.04)',
}

/*
 * Applies only to touch-capable tablets in landscape orientation.
 * Phone and normal desktop layouts are not changed.
 */
const IPAD_LANDSCAPE =
  '@media (min-width: 768px) and (max-width: 1366px) and (orientation: landscape) and (any-pointer: coarse)'

export default function Home() {
  return (
    <Box
      minH="100vh"
      bg="white"
      display="flex"
      flexDirection="column"
    >
      {/* Hero section */}
      <Box
        className="page"
        position="relative"
        bgImage={{
          base: "url('/homepage_mobile_version.png')",
          sm: "url('/homepage_ipad_version.png')",
          md: "url('/homepage_desktop_version.png')",
        }}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h={{
          base: '55vh',
          sm: '33vh',
          md: '55vh',
        }}
        minH="400px"
      >
        <Box
          className="contentBox"
          position="relative"
          zIndex="2"
          pt={{
            base: '65px',
            sm: '70px',
            md: '24px',
          }}
          sx={{
            [IPAD_LANDSCAPE]: {
              height: '100%',
              paddingTop: 0,
              display: 'flex',
              alignItems: 'center',
            },
          }}
        >
          <Container
            maxW="100%"
            px={{
              base: 4,
              md: 4,
              lg: '6%',
            }}
            className="content"
            position="relative"
            zIndex={1}
            sx={{
              [IPAD_LANDSCAPE]: {
                width: '100%',
                height: '100%',
              },
            }}
          >
            <Flex
              w="100%"
              direction={{
                base: 'column',
                md: 'row',
              }}
              align="center"
              justify="flex-start"
              sx={{
                /*
                 * Original iPad portrait behaviour.
                 */
                '@media (min-width: 768px) and (max-width: 1023.98px)': {
                  alignItems: 'flex-start',
                },

                /*
                 * iPad landscape only.
                 */
                [IPAD_LANDSCAPE]: {
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                },
              }}
            >
              <VStack
                align="start"
                spacing={4}
                maxW={{
                  base: '100%',
                  md: '560px',
                  lg: '600px',
                  xl: '650px',
                }}
                mt={{
                  base: '-3',
                  md: '4vh',
                  lg: '6vh',
                  xl: '11vh',
                }}
                position="relative"
                isolation="isolate"
                sx={{
                  /*
                   * Original iPad portrait behaviour.
                   */
                  '@media (min-width: 768px) and (max-width: 1023.98px)': {
                    width: '100%',
                    maxWidth: '100%',
                    marginInlineStart: 0,
                    marginInlineEnd: 0,
                    alignSelf: 'flex-start',
                  },

                  /*
                   * Original iPad Air 2 overlay.
                   */
                  '@media only screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-min-device-pixel-ratio: 2)': {
                    '&::before': {
                      top: '-45px',
                      bottom: '-55px',
                      left: '-16px',
                      right: '-25px',

                      background: `
                        linear-gradient(
                          90deg,
                          rgba(0, 0, 0, 0.58) 0%,
                          rgba(0, 0, 0, 0.48) 34%,
                          rgba(0, 0, 0, 0.27) 60%,
                          rgba(0, 0, 0, 0.08) 82%,
                          transparent 100%
                        )
                      `,

                      WebkitMaskImage: `
                        linear-gradient(
                          to bottom,
                          transparent 0%,
                          rgba(0, 0, 0, 0.18) 10%,
                          rgba(0, 0, 0, 0.68) 25%,
                          black 40%,
                          black 64%,
                          rgba(0, 0, 0, 0.68) 80%,
                          rgba(0, 0, 0, 0.18) 92%,
                          transparent 100%
                        )
                      `,

                      maskImage: `
                        linear-gradient(
                          to bottom,
                          transparent 0%,
                          rgba(0, 0, 0, 0.18) 10%,
                          rgba(0, 0, 0, 0.68) 25%,
                          black 40%,
                          black 64%,
                          rgba(0, 0, 0, 0.68) 80%,
                          rgba(0, 0, 0, 0.18) 92%,
                          transparent 100%
                        )
                      `,
                    },
                  },

                  /*
                   * iPad landscape only.
                   * This rule comes after the portrait rules so it overrides
                   * them only when the iPad is rotated.
                   */
                  [IPAD_LANDSCAPE]: {
                    width: '54%',
                    maxWidth: '560px',
                    marginTop: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    alignSelf: 'center',
                    alignItems: 'flex-start',
                    textAlign: 'left',

                    '&::before': {
                      top: '-75px',
                      bottom: '-80px',
                      left: '-6vw',
                      right: '-110px',

                      background: `
                        linear-gradient(
                          90deg,
                          rgba(0, 0, 0, 0.64) 0%,
                          rgba(0, 0, 0, 0.54) 32%,
                          rgba(0, 0, 0, 0.34) 57%,
                          rgba(0, 0, 0, 0.12) 78%,
                          transparent 100%
                        )
                      `,

                      WebkitMaskImage: `
                        linear-gradient(
                          to bottom,
                          transparent 0%,
                          rgba(0, 0, 0, 0.12) 8%,
                          rgba(0, 0, 0, 0.56) 22%,
                          rgba(0, 0, 0, 0.9) 35%,
                          black 43%,
                          black 61%,
                          rgba(0, 0, 0, 0.9) 70%,
                          rgba(0, 0, 0, 0.56) 82%,
                          rgba(0, 0, 0, 0.12) 93%,
                          transparent 100%
                        )
                      `,

                      maskImage: `
                        linear-gradient(
                          to bottom,
                          transparent 0%,
                          rgba(0, 0, 0, 0.12) 8%,
                          rgba(0, 0, 0, 0.56) 22%,
                          rgba(0, 0, 0, 0.9) 35%,
                          black 43%,
                          black 61%,
                          rgba(0, 0, 0, 0.9) 70%,
                          rgba(0, 0, 0, 0.56) 82%,
                          rgba(0, 0, 0, 0.12) 93%,
                          transparent 100%
                        )
                      `,
                    },
                  },
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  zIndex: -1,

                  top: {
                    base: '-45px',
                    md: '-85px',
                    lg: '-100px',
                    xl: '-130px',
                  },

                  bottom: {
                    base: '-55px',
                    md: '-90px',
                    lg: '-105px',
                    xl: '-130px',
                  },

                  left: {
                    base: '-16px',
                    md: '-5vw',
                    lg: '-6vw',
                    xl: '-7vw',
                  },

                  right: {
                    base: '-25px',
                    md: '-110px',
                    lg: '-140px',
                    xl: '-180px',
                  },

                  background: {
                    base: `
                      linear-gradient(
                        90deg,
                        rgba(0, 0, 0, 0.58) 0%,
                        rgba(0, 0, 0, 0.48) 34%,
                        rgba(0, 0, 0, 0.27) 60%,
                        rgba(0, 0, 0, 0.08) 82%,
                        transparent 100%
                      )
                    `,

                    md: `
                      linear-gradient(
                        90deg,
                        rgba(0, 0, 0, 0.62) 0%,
                        rgba(0, 0, 0, 0.52) 32%,
                        rgba(0, 0, 0, 0.32) 57%,
                        rgba(0, 0, 0, 0.11) 78%,
                        transparent 100%
                      )
                    `,

                    lg: `
                      linear-gradient(
                        90deg,
                        rgba(0, 0, 0, 0.64) 0%,
                        rgba(0, 0, 0, 0.54) 32%,
                        rgba(0, 0, 0, 0.34) 56%,
                        rgba(0, 0, 0, 0.12) 77%,
                        transparent 100%
                      )
                    `,

                    xl: `
                      linear-gradient(
                        90deg,
                        rgba(0, 0, 0, 0.68) 0%,
                        rgba(0, 0, 0, 0.58) 32%,
                        rgba(0, 0, 0, 0.38) 55%,
                        rgba(0, 0, 0, 0.14) 75%,
                        transparent 100%
                      )
                    `,
                  },

                  WebkitMaskImage: {
                    base: `
                      linear-gradient(
                        to bottom,
                        transparent 0%,
                        rgba(0, 0, 0, 0.18) 10%,
                        rgba(0, 0, 0, 0.68) 25%,
                        black 40%,
                        black 64%,
                        rgba(0, 0, 0, 0.68) 80%,
                        rgba(0, 0, 0, 0.18) 92%,
                        transparent 100%
                      )
                    `,

                    md: `
                      linear-gradient(
                        to bottom,
                        transparent 0%,
                        rgba(0, 0, 0, 0.12) 8%,
                        rgba(0, 0, 0, 0.52) 21%,
                        rgba(0, 0, 0, 0.88) 34%,
                        black 43%,
                        black 61%,
                        rgba(0, 0, 0, 0.88) 70%,
                        rgba(0, 0, 0, 0.52) 82%,
                        rgba(0, 0, 0, 0.12) 93%,
                        transparent 100%
                      )
                    `,

                    lg: `
                      linear-gradient(
                        to bottom,
                        transparent 0%,
                        rgba(0, 0, 0, 0.12) 8%,
                        rgba(0, 0, 0, 0.56) 22%,
                        rgba(0, 0, 0, 0.9) 35%,
                        black 43%,
                        black 61%,
                        rgba(0, 0, 0, 0.9) 70%,
                        rgba(0, 0, 0, 0.56) 82%,
                        rgba(0, 0, 0, 0.12) 93%,
                        transparent 100%
                      )
                    `,

                    xl: `
                      linear-gradient(
                        to bottom,
                        transparent 0%,
                        rgba(0, 0, 0, 0.15) 8%,
                        rgba(0, 0, 0, 0.65) 22%,
                        black 38%,
                        black 62%,
                        rgba(0, 0, 0, 0.65) 78%,
                        rgba(0, 0, 0, 0.15) 92%,
                        transparent 100%
                      )
                    `,
                  },

                  maskImage: {
                    base: `
                      linear-gradient(
                        to bottom,
                        transparent 0%,
                        rgba(0, 0, 0, 0.18) 10%,
                        rgba(0, 0, 0, 0.68) 25%,
                        black 40%,
                        black 64%,
                        rgba(0, 0, 0, 0.68) 80%,
                        rgba(0, 0, 0, 0.18) 92%,
                        transparent 100%
                      )
                    `,

                    md: `
                      linear-gradient(
                        to bottom,
                        transparent 0%,
                        rgba(0, 0, 0, 0.12) 8%,
                        rgba(0, 0, 0, 0.52) 21%,
                        rgba(0, 0, 0, 0.88) 34%,
                        black 43%,
                        black 61%,
                        rgba(0, 0, 0, 0.88) 70%,
                        rgba(0, 0, 0, 0.52) 82%,
                        rgba(0, 0, 0, 0.12) 93%,
                        transparent 100%
                      )
                    `,

                    lg: `
                      linear-gradient(
                        to bottom,
                        transparent 0%,
                        rgba(0, 0, 0, 0.12) 8%,
                        rgba(0, 0, 0, 0.56) 22%,
                        rgba(0, 0, 0, 0.9) 35%,
                        black 43%,
                        black 61%,
                        rgba(0, 0, 0, 0.9) 70%,
                        rgba(0, 0, 0, 0.56) 82%,
                        rgba(0, 0, 0, 0.12) 93%,
                        transparent 100%
                      )
                    `,

                    xl: `
                      linear-gradient(
                        to bottom,
                        transparent 0%,
                        rgba(0, 0, 0, 0.15) 8%,
                        rgba(0, 0, 0, 0.65) 22%,
                        black 38%,
                        black 62%,
                        rgba(0, 0, 0, 0.65) 78%,
                        rgba(0, 0, 0, 0.15) 92%,
                        transparent 100%
                      )
                    `,
                  },

                  pointerEvents: 'none',
                }}
              >
                <Heading
                  as="h1"
                  fontSize={{
                    base: '3xl',
                    sm: '4xl',
                    md: '4xl',
                    xl: '5xl',
                  }}
                  lineHeight="short"
                  color="white"
                >
                  Fahrzeuge, die überzeugen.
                </Heading>

                <Text
                  fontSize={{
                    base: 'sm',
                    sm: 'md',
                    md: 'md',
                    xl: 'lg',
                  }}
                  lineHeight={{
                    base: '1.7',
                    md: '1.65',
                  }}
                  color="white"
                  maxW="640px"
                >
                  Jedes Fahrzeug erfüllt hohe
                  Ausstattungsstandards, verfügt über eine
                  nachvollziehbare Historie und eine vollständige
                  Dokumentation.
                </Text>

                <Flex
                  pt={{
                    base: 16,
                    md: 8,
                    xl: 6,
                  }}
                  sx={{
                    [IPAD_LANDSCAPE]: {
                      paddingTop: '24px',
                    },
                  }}
                >
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
                        _groupHover={{
                          transform:
                            'translateX(3px) scale(1.08)',
                        }}
                      >
                        <FiChevronRight
                          size="16px"
                          color="white"
                        />
                      </Box>
                    }
                    iconSpacing={4}
                    bg="#b21a18"
                    color="white"
                    fontSize={{
                      base: 'sm',
                      md: '0.88rem',
                    }}
                    textTransform="uppercase"
                    letterSpacing="0.18em"
                    px={4}
                    py="1px"
                    minW="250px"
                    h="46px"
                    borderRadius="4px"
                    border="1px solid rgba(255,255,255,0.15)"
                    boxShadow="0 10px 18px rgba(0,0,0,0.2)"
                    _hover={UNIFIED_HOVER}
                    _active={{
                      bg: '#8a1212',
                    }}
                  >
                    Fahrzeugbestand
                  </Button>
                </Flex>
              </VStack>
            </Flex>
          </Container>
        </Box>
      </Box>

      {/* Features section */}
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
          px={{
            base: 4,
            md: '6%',
          }}
          py={{
            base: 4,
            md: 10,
          }}
        >
          <SimpleGrid
            templateColumns={{
              base: '1fr',
              md: 'repeat(3, minmax(0, 1fr))',
            }}
            spacing={{
              base: 6,
              lg: '26px',
            }}
            w="full"
            sx={{
              /*
               * iPad landscape only:
               * one feature per row.
               */
              [IPAD_LANDSCAPE]: {
                gridTemplateColumns: 'minmax(0, 1fr)',
                rowGap: '24px',
              },
            }}
          >
            {features.map((feature) => {
              const FeatureIcon = feature.icon

              return (
                <Box
                  key={feature.title}
                  w="full"
                  minW={0}
                  px={0}
                  py={{
                    base: 6,
                    lg: 0,
                  }}
                  borderColor="gray.200"
                  sx={{
                    [IPAD_LANDSCAPE]: {
                      paddingTop: '24px',
                      paddingBottom: '24px',
                    },
                  }}
                >
                  <Flex
                    direction="column"
                    align={{
                      base: 'center',
                      md: 'flex-start',
                    }}
                    gap={6}
                    sx={{
                      [IPAD_LANDSCAPE]: {
                        alignItems: 'center',
                      },
                    }}
                  >
                    <Icon
                      as={FeatureIcon}
                      boxSize={{
                        base: '34px',
                        md: '34px',
                      }}
                      color="gray.900"
                      flexShrink={0}
                    />

                    <Box
                      w="full"
                      sx={{
                        [IPAD_LANDSCAPE]: {
                          maxWidth: '680px',
                          marginInline: 'auto',
                        },
                      }}
                    >
                      <Heading
                        as="h3"
                        fontSize={{
                          base: 'md',
                          md: 'xl',
                        }}
                        fontWeight="600"
                        mb={3}
                        color="gray.900"
                        textAlign={{
                          base: 'center',
                          md: 'left',
                        }}
                        sx={{
                          [IPAD_LANDSCAPE]: {
                            textAlign: 'center',
                          },
                        }}
                      >
                        {feature.title}
                      </Heading>

                      <Box
                        w="40px"
                        h="2px"
                        bg="red.500"
                        mb={3}
                        mx={{
                          base: 'auto',
                          md: 0,
                        }}
                        sx={{
                          [IPAD_LANDSCAPE]: {
                            marginInline: 'auto',
                          },
                        }}
                      />

                      <Text
                        fontSize={{
                          base: 'sm',
                          md: 'md',
                        }}
                        lineHeight="1.7"
                        color="gray.700"
                        whiteSpace="pre-line"
                        textAlign={{
                          base: 'center',
                          md: 'left',
                        }}
                        sx={{
                          [IPAD_LANDSCAPE]: {
                            textAlign: 'center',
                          },
                        }}
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