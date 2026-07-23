import React from 'react'
import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaWhatsapp, FaYoutube } from 'react-icons/fa'
import {
  FiChevronRight,
  FiMail,
  FiPhone,
} from 'react-icons/fi'

type FooterProps = {
  stickyOnMobile?: boolean
}

const RED = '#b21a18'

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="transform 160ms ease, opacity 160ms ease"
      _hover={{
        transform: 'translateY(-1px) scale(1.08)',
        opacity: 0.9,
      }}
    >
      {children}
    </Box>
  )
}

function DesktopFooter() {
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      py={{ md: 4, lg: 2 }}
    >
      <Box
        display="grid"
        gridTemplateColumns={{
          md: '1.1fr 1.7fr 1fr 1.15fr',
          lg: '1.15fr 1.75fr 1fr 1.2fr',
        }}
        alignItems="center"
        width="100%"
        columnGap={{
          md: 6,
          lg: 10,
        }}
      >
        {/* Logo and copyright */}
        <Flex
          align="center"
          gap={{ md: 3, lg: 4 }}
          minW={0}
        >
          <Image
            src="/footer_logo.png"
            alt="Alpen Automobile"
            w={{ md: '76px', lg: '92px' }}
            flexShrink={0}
            objectFit="contain"
          />

          <Text
            color="whiteAlpha.800"
            fontSize={{ md: '11px', lg: '13px' }}
            lineHeight="1.45"
            minW={0}
          >
            © 2026 Alpen Automobile.
            <br />
            Alle Rechte vorbehalten.
          </Text>
        </Flex>

        {/* Contact */}
        <Box minW={0}>
          <Flex
            align="center"
            gap={{
              md: 4,
              lg: 7,
            }}
            minW={0}
          >
            <Flex
              as="a"
              href="tel:+41768193273"
              align="center"
              gap={2}
              color="whiteAlpha.850"
              whiteSpace="nowrap"
              _hover={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Box color={RED} flexShrink={0}>
                <FiPhone size={15} />
              </Box>

              <Text fontSize={{ md: '11px', lg: '13px' }}>
                +41 76 819 32 73
              </Text>
            </Flex>

            <Box
              w="1px"
              h="18px"
              bg="whiteAlpha.300"
              flexShrink={0}
            />

            <Flex
              as="a"
              href="mailto:info@alpenautomobile.ch"
              align="center"
              gap={2}
              color="whiteAlpha.850"
              minW={0}
              _hover={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Box color={RED} flexShrink={0}>
                <FiMail size={15} />
              </Box>

              <Text
                fontSize={{ md: '11px', lg: '13px' }}
                whiteSpace="nowrap"
              >
                info@alpenautomobile.ch
              </Text>
            </Flex>
          </Flex>
        </Box>

        {/* Social links */}
        <Box minW={0}>
          <HStack spacing={{ md: 5, lg: 7 }}>
            <SocialLink
              href="https://wa.me/41768193273"
              label="WhatsApp"
            >
              <Box color="#25D366">
                <FaWhatsapp size={21} />
              </Box>
            </SocialLink>

            <SocialLink
              href="https://www.instagram.com/alpen_automobile"
              label="Instagram"
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                boxSize="19px"
                objectFit="contain"
              />
            </SocialLink>

            <SocialLink
              href="https://www.youtube.com/@alpenautomobile"
              label="YouTube"
            >
              <Box color="#ff0000">
                <FaYoutube size={21} />
              </Box>
            </SocialLink>
          </HStack>
        </Box>

        {/* Legal */}
        <Box minW={0}>
          <Flex
            align="center"
            gap={{
              md: 3,
              lg: 5,
            }}
            whiteSpace="nowrap"
          >
            <Link
              as={RouterLink}
              to="/impressum"
              color="whiteAlpha.750"
              fontSize={{ md: '11px', lg: '13px' }}
              textDecoration="none"
              transition="color 160ms ease"
              _hover={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Impressum
            </Link>


            <Box
              w="4px"
              h="4px"
              bg={RED}
              borderRadius="full"
              flexShrink={0}
            />
            
            <Link
              as={RouterLink}
              to="/datenschutz"
              color="whiteAlpha.750"
              fontSize={{ md: '11px', lg: '13px' }}
              textDecoration="none"
              transition="color 160ms ease"
              _hover={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Datenschutz
            </Link>

          </Flex>
        </Box>
      </Box>
    </Box>
  )
}


function MobileFooter() {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      py={2.5}
    >
      <Flex
        align="center"
        justify="center"
        flexWrap="wrap"
        columnGap={4}
        rowGap={1.5}
        color="whiteAlpha.750"
      >
        <Flex
          as="a"
          href="tel:+41768193273"
          align="center"
          gap={1.5}
          color="whiteAlpha.850"
          whiteSpace="nowrap"
          _hover={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <Box color={RED} mr={1.}>
            <FiPhone size={10} />
          </Box>

          <Text fontSize="11px">
            +41 76 819 32 73
          </Text>
        </Flex>

        <Flex
          as="a"
          href="mailto:info@alpenautomobile.ch"
          align="center"
          gap={2}
          color="whiteAlpha.850"
          whiteSpace="nowrap"
          _hover={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <Box color={RED} mr={1.5}>
            <FiMail size={10} />
          </Box>

          <Text fontSize="11px">
            info@alpenautomobile.ch
          </Text>
        </Flex>
      <HStack
        justify="center"
        spacing={3}
        ml={1.5}
      >
        <SocialLink
          href="https://wa.me/41768193273"
          label="WhatsApp"
        >
          {/* <Box color="#fff"> */}
          <Box color="#25D366">
            <FaWhatsapp size={14} />
          </Box>
        </SocialLink>

        <SocialLink
          href="https://www.instagram.com/alpen_automobile"
          label="Instagram"
        >
          <Image
            src="/instagram.png"
            alt="Instagram"
            boxSize="12px"
            objectFit="contain"
          />
        </SocialLink>

        <SocialLink
          href="https://www.youtube.com/@alpenautomobile"
          label="YouTube"
        >
          {/* <Box color="#fff"> */}
          <Box color="#ff0000">
            <FaYoutube size={15} />
          </Box>
        </SocialLink>
      </HStack>

        <Text
          color="rgba(255,255,255,0.55)"
          fontSize="12px"
        >          
        </Text>

         <Link
          as={RouterLink}
          to="/impressum"
          color="whiteAlpha.650"
          fontSize="11px"
          whiteSpace="nowrap"
          textDecoration="none"
          _hover={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Impressum
        </Link>
                <Text
          color="rgba(255,255,255,0.55)"
          fontSize="6px"
        >
          |
        </Text>

        <Link
          as={RouterLink}
          to="/datenschutz"
          color="whiteAlpha.650"
          fontSize="11px"
          whiteSpace="nowrap"
          textDecoration="none"
          _hover={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Datenschutz
        </Link>

       
      </Flex>
    </Box>
  )
}

export default function Footer({
  stickyOnMobile = false,
}: FooterProps) {
  return (
    <Box
      as="footer"
      width="100%"
      color="white"
      zIndex={50}
      position={{
        base: stickyOnMobile ? 'sticky' : 'relative',
        md: 'relative',
      }}
      bottom={stickyOnMobile ? 0 : undefined}
      mt="auto"
      bg="
        radial-gradient(
          circle at 75% 0%,
          rgba(255,255,255,0.025),
          transparent 28%
        ),
        linear-gradient(
          145deg,
          #171719 0%,
          #101012 65%,
          #0d0d0f 100%
        )
      "
      borderTop="1px solid rgba(255,255,255,0.10)"
      boxShadow="0 -12px 35px rgba(0,0,0,0.24)"
    >
      <Container
        maxW="100%"
        px={{
          base: 4,
          md: '3%',
          lg: '4%',
        }}
      >
        <MobileFooter />
        <DesktopFooter />
      </Container>
    </Box>
  )
}