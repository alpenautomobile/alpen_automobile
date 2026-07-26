import React from 'react'
import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'

type FooterProps = {
  stickyOnMobile?: boolean
}

type SocialLinkProps = {
  href: string
  label: string
  children: React.ReactNode
  size: {
    base?: string
    md?: string
    xl?: string
  }
}

const RED = '#b21a18'

const LINK_HOVER = {
  transform: 'translateX(2px) scale(1.04)',
  textDecoration: 'none',
}

/*
 * Only affects touch devices in landscape orientation
 * with typical iPad landscape widths.
 */
const IPAD_LANDSCAPE_QUERY =
  '@media screen and (orientation: landscape) and (min-width: 900px) and (max-width: 1366px) and (any-pointer: coarse)'

function SocialLink({
  href,
  label,
  children,
  size,
}: SocialLinkProps) {
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
      boxSize={size}
      borderRadius="full"
      flexShrink={0}
      transition="transform 0.2s ease"
      _hover={LINK_HOVER}
      _focusVisible={{
        outline: '2px solid',
        outlineColor: 'whiteAlpha.700',
        outlineOffset: '2px',
      }}
    >
      {children}
    </Box>
  )
}

function DesktopFooter() {
  return (
    <Box display={{ base: 'none', md: 'block' }}>
      <Box
        display="grid"
        width="100%"
        alignItems="center"
        gridTemplateAreas={{
          md: `
            "brand contact"
            "social legal"
          `,
          xl: '"brand contact social legal"',
        }}
        gridTemplateColumns={{
          md: 'minmax(240px, 1fr) minmax(400px, 1.45fr)',
          xl: 'minmax(260px, 1.15fr) minmax(430px, 1.65fr) auto auto',
        }}
        columnGap={{
          md: 8,
          lg: 10,
          xl: 12,
        }}
        rowGap={{
          md: 1,
          xl: 0,
        }}
        py={1.5}
        sx={{
          [IPAD_LANDSCAPE_QUERY]: {
            gridTemplateAreas: '"brand contact social legal"',
            gridTemplateColumns:
              'max-content minmax(0, 1fr) max-content max-content',
            columnGap: '8px',
            rowGap: 0,

            '& .footer-brand': {
              gap: '6px',
            },

            '& .footer-brand img': {
              width: '52px',
              height: '26px',
            },

            '& .footer-brand p': {
              fontSize: '11px',
            },

            '& .footer-contact': {
              justifyContent: 'center',
              gap: 0,
            },

            '& .footer-contact > a': {
              paddingInline: '4px',
            },

            '& .footer-contact p': {
              fontSize: '11px',
            },

            '& .footer-social': {
              justifySelf: 'center',
              gap: '2px',
            },

            '& .footer-legal': {
              justifySelf: 'end',
              gap: '2px',
            },

            '& .footer-legal > a': {
              paddingInline: '4px',
              fontSize: '11px',
            },
          },
        }}
      >
        {/* Logo and copyright */}
        <Flex
          className="footer-brand"
          gridArea="brand"
          align="center"
          gap={2}
          minW={0}
        >
          <Image
            src="/footer_logo.png"
            alt="Alpen Automobile"
            w="60px"
            h="30px"
            mb={1}
          />

          <Text
            color="whiteAlpha.900"
            fontSize={{ md: '12px', xl: '13px' }}
            lineHeight="1.45"
            whiteSpace="nowrap"
            mt={0.5}
          >
            © 2026 Alpen Automobile
          </Text>
        </Flex>

        {/* Contact */}
        <Flex
          className="footer-contact"
          gridArea="contact"
          align="center"
          justify={{ md: 'flex-end', xl: 'flex-start' }}
          gap={{ md: 4, lg: 5, xl: 6 }}
          minW={0}
        >
          <Flex
            as="a"
            href="tel:+41768193273"
            align="center"
            gap={2}
            minH="36px"
            color="whiteAlpha.800"
            whiteSpace="nowrap"
            textDecoration="none"
            px={2}
            borderRadius="md"
            transition="transform 0.2s ease"
            _hover={LINK_HOVER}
            _focusVisible={{
              outline: '2px solid',
              outlineColor: 'whiteAlpha.700',
              outlineOffset: '3px',
            }}
          >
            <Icon
              as={FiPhone}
              color={RED}
              boxSize="14px"
              mb={0.5}
              flexShrink={0}
            />

            <Text fontSize={{ md: '12px', xl: '13px' }}>
              +41 76 819 32 73
            </Text>
          </Flex>

          <Box
            w="1px"
            h="16px"
            bg="whiteAlpha.300"
            flexShrink={0}
          />

          <Flex
            as="a"
            href="mailto:info@alpenautomobile.ch"
            align="center"
            gap={2}
            minH="36px"
            color="whiteAlpha.800"
            whiteSpace="nowrap"
            textDecoration="none"
            px={2}
            borderRadius="md"
            transition="transform 0.2s ease"
            _hover={LINK_HOVER}
            _focusVisible={{
              outline: '2px solid',
              outlineColor: 'whiteAlpha.700',
              outlineOffset: '3px',
            }}
          >
            <Icon
              as={FiMail}
              color={RED}
              boxSize="15px"
              flexShrink={0}
            />

            <Text fontSize={{ md: '12px', xl: '13px' }}>
              info@alpenautomobile.ch
            </Text>
          </Flex>
        </Flex>

        {/* Social links */}
        <HStack
          className="footer-social"
          gridArea="social"
          justifySelf={{ md: 'start', xl: 'center' }}
          spacing={{ md: 2, xl: 3 }}
        >
          <SocialLink
            href="https://wa.me/41768193273"
            label="WhatsApp"
            size={{ md: '34px', xl: '36px' }}
          >
            <Icon
              as={FaWhatsapp}
              color="#25D366"
              boxSize="19px"
            />
          </SocialLink>

          <SocialLink
            href="https://www.instagram.com/alpen_automobile"
            label="Instagram"
            size={{ md: '34px', xl: '36px' }}
          >
            <Image
              src="/instagram.png"
              alt=""
              boxSize="17px"
              objectFit="contain"
            />
          </SocialLink>

          <SocialLink
            href="https://www.youtube.com/@alpenautomobile"
            label="YouTube"
            size={{ md: '34px', xl: '36px' }}
          >
            <Icon
              as={FaYoutube}
              color="#ff0000"
              boxSize="21px"
            />
          </SocialLink>
        </HStack>

        {/* Legal links */}
        <Flex
          className="footer-legal"
          gridArea="legal"
          align="center"
          justifySelf="end"
          gap={{ md: 4, xl: 5 }}
          whiteSpace="nowrap"
        >
          <Link
            as={RouterLink}
            to="/impressum"
            display="inline-flex"
            alignItems="center"
            minH="36px"
            color="whiteAlpha.900"
            fontSize={{ md: '12px', xl: '13px' }}
            textDecoration="none"
            px={2}
            borderRadius="md"
            transition="transform 0.2s ease"
            _hover={LINK_HOVER}
            _focusVisible={{
              outline: '2px solid',
              outlineColor: 'whiteAlpha.100',
              outlineOffset: '3px',
            }}
          >
            Impressum
          </Link>

          <Box
            w="1px"
            h="16px"
            bg="whiteAlpha.300"
            flexShrink={0}
          />

          <Link
            as={RouterLink}
            to="/datenschutz"
            display="inline-flex"
            alignItems="center"
            minH="36px"
            color="whiteAlpha.900"
            fontSize={{ md: '12px', xl: '13px' }}
            textDecoration="none"
            px={2}
            borderRadius="md"
            transition="transform 0.2s ease"
            _hover={LINK_HOVER}
            _focusVisible={{
              outline: '2px solid',
              outlineColor: 'whiteAlpha.500',
              outlineOffset: '3px',
            }}
          >
            Datenschutz
          </Link>
        </Flex>
      </Box>
    </Box>
  )
}

function MobileFooter() {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      py={2}
    >
      {/* Contact row */}
      <Flex
        align="center"
        justify="center"
        flexWrap="wrap"
        columnGap={5}
        rowGap={1}
      >
        <Flex
          as="a"
          href="tel:+41768193273"
          align="center"
          gap={1.5}
          minH="30px"
          color="whiteAlpha.900"
          whiteSpace="nowrap"
          textDecoration="none"
          px={2}
          borderRadius="md"
          transition="transform 0.2s ease"
          _hover={LINK_HOVER}
          _focusVisible={{
            outline: '2px solid',
            outlineColor: 'whiteAlpha.700',
            outlineOffset: '2px',
          }}
        >
          <Icon
            as={FiPhone}
            color={RED}
            boxSize="13px"
            flexShrink={0}
            mb={1}
          />

          <Text fontSize="11px">
            +41 76 819 32 73
          </Text>
        </Flex>

        <Flex
          as="a"
          href="mailto:info@alpenautomobile.ch"
          align="center"
          gap={1.5}
          minH="30px"
          color="whiteAlpha.900"
          whiteSpace="nowrap"
          textDecoration="none"
          px={2}
          borderRadius="md"
          transition="transform 0.2s ease"
          _hover={LINK_HOVER}
          _focusVisible={{
            outline: '2px solid',
            outlineColor: 'whiteAlpha.700',
            outlineOffset: '2px',
          }}
        >
          <Icon
            as={FiMail}
            color={RED}
            boxSize="13px"
            flexShrink={0}
          />

          <Text fontSize="11.5px">
            info@alpenautomobile.ch
          </Text>
        </Flex>
      </Flex>

      {/* Social and legal row */}
      <Flex
        align="center"
        justify="center"
        flexWrap="wrap"
        columnGap={2}
        rowGap={1}
      >
        <HStack spacing={1}>
          <SocialLink
            href="https://wa.me/41768193273"
            label="WhatsApp"
            size={{ base: '30px' }}
          >
            <Icon
              as={FaWhatsapp}
              color="#25D366"
              boxSize="17px"
            />
          </SocialLink>

          <SocialLink
            href="https://www.instagram.com/alpen_automobile"
            label="Instagram"
            size={{ base: '30px' }}
          >
            <Image
              src="/instagram.png"
              alt=""
              boxSize="14px"
              objectFit="contain"
            />
          </SocialLink>

          <SocialLink
            href="https://www.youtube.com/@alpenautomobile"
            label="YouTube"
            size={{ base: '30px' }}
          >
            <Icon
              as={FaYoutube}
              color="#ff0000"
              boxSize="19px"
            />
          </SocialLink>
        </HStack>

        <Box
          w="1px"
          h="12px"
          bg="whiteAlpha.300"
          flexShrink={0}
        />

        <HStack spacing={3}>
          <Link
            as={RouterLink}
            to="/impressum"
            display="inline-flex"
            alignItems="center"
            minH="34px"
            color="whiteAlpha.900"
            fontSize="11.5px"
            whiteSpace="nowrap"
            textDecoration="none"
            px={2}
            borderRadius="md"
            transition="transform 0.2s ease"
            _hover={LINK_HOVER}
            _focusVisible={{
              outline: '2px solid',
              outlineColor: 'whiteAlpha.700',
              outlineOffset: '2px',
            }}
          >
            Impressum
          </Link>

          <Box
            w="1px"
            h="12px"
            bg="whiteAlpha.300"
            flexShrink={0}
          />

          <Link
            as={RouterLink}
            to="/datenschutz"
            display="inline-flex"
            alignItems="center"
            minH="34px"
            color="whiteAlpha.900"
            fontSize="11.5px"
            whiteSpace="nowrap"
            textDecoration="none"
            px={2}
            borderRadius="md"
            transition="transform 0.2s ease"
            _hover={LINK_HOVER}
            _focusVisible={{
              outline: '2px solid',
              outlineColor: 'whiteAlpha.700',
              outlineOffset: '2px',
            }}
          >
            Datenschutz
          </Link>
        </HStack>
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
      pb={{
        base: stickyOnMobile
          ? 'env(safe-area-inset-bottom)'
          : 0,
        md: 0,
      }}
      bg={`
        radial-gradient(
          circle at 50% 0%,
          rgba(255, 255, 255, 0.035) 0%,
          rgba(255, 255, 255, 0.012) 38%,
          transparent 72%
        ),
        linear-gradient(
          180deg,
          #0b0b0c 0%,
          #050506 45%,
          #000000 100%
        )
      `}
      borderTop="1px solid rgba(255,255,255,0.09)"
      boxShadow="0 -8px 24px rgba(0,0,0,0.3)"
    >
      <Container
        maxW="100%"
        px={{ base: 4, md: '6%' }}
      >
        <MobileFooter />
        <DesktopFooter />
      </Container>
    </Box>
  )
}