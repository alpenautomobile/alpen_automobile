import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'

function LegalSectionHeader({ title }: { title: string }) {
  return (
    <Box mb={{ base: 7, md: 8 }} >
          <Flex align="center" gap={4}>
        <Box
          w="4px"
          h={{ base: '27px', md: '32px' }}
          bg="#b21a18"
          borderRadius="full"
          flexShrink={0}
          boxShadow="0 0 14px rgba(178,26,24,0.3)"
        />

        <Heading
          as="h1"
          color="white"
          fontSize={{ base: 'md', md: 'xl'}}
          lineHeight="1"
          fontWeight="800"
          letterSpacing="-0.035em"
        >
          {title}
        </Heading>
      </Flex>
    </Box>
  )
}

function PrivacySection({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <Box
      position="relative"
      p={{ base: 5, md: 7 }}
      borderRadius="16px"
      border="1px solid rgba(255,255,255,0.09)"
      background="
        linear-gradient(
          145deg,
          rgba(255,255,255,0.04) 0%,
          rgba(255,255,255,0.012) 100%
        )
      "
      boxShadow="0 16px 40px rgba(0,0,0,0.18)"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        w="3px"
        h="100%"
        bg="
          linear-gradient(
            180deg,
            #b21a18 0%,
            rgba(178,26,24,0.12) 100%
          )
        "
      />

      <Flex
        align={{ base: 'flex-start', md: 'center' }}
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: 2, md: 3 }}
        mb={4}
      >
        <Text
          color="#b21a18"
          fontSize="12px"
          fontWeight="800"
          letterSpacing="0.08em"
          textTransform="uppercase"
        >
          Abschnitt {number}
        </Text>

        <Heading
          as="h2"
          color="white"
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight="700"
        >
          {title}
        </Heading>
      </Flex>

      <Box
        color="rgba(255,255,255,0.68)"
        fontSize={{ base: 'sm', md: '15px' }}
        lineHeight="1.8"
      >
        {children}
      </Box>
    </Box>
  )
}

export default function Datenschutz() {
  return (
    <Box
      as="main"
      position="relative"
      h="100%"
      minH={0}
      w="100%"
      bg="#000000"
      color="white"
      overflowX="hidden"
      overflowY="auto"
    >
      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        bg="
          radial-gradient(
            circle at 78% 12%,
            rgba(255,255,255,0.035),
            transparent 30%
          ),
          linear-gradient(
            180deg,
            #151515 0%,
            #222222 48%,
            #171717 100%
          )
        "
      />

      <Container
        position="relative"
        zIndex={1}
        w="100%"
        maxW="100%"
        px={{ base: 4, md: '6%' }}
        pt={5}
        pb={{ base: 8, md: 0 }}
      >
        <LegalSectionHeader title="Datenschutzerklärung" />

        <Box
          maxW="900px"
          mb={{ base: 8, md: 10 }}
        >
          <Text
            color="rgba(255,255,255,0.72)"
            fontSize={{ base: 'sm', md: 'lg' }}
            lineHeight="1.75"
            mb={4}
          >
            Der vertrauensvolle Umgang mit personenbezogenen Daten ist für
            Alpen Automobile ebenso selbstverständlich wie Transparenz und
            Sorgfalt beim Fahrzeughandel.
          </Text>

          <Text
            color="rgba(255,255,255,0.58)"
            fontSize={{ base: 'sm', md: '15px' }}
            lineHeight="1.75"
          >
            In dieser Datenschutzerklärung informieren wir darüber, welche
            personenbezogenen Daten wir verarbeiten, zu welchen Zwecken dies
            erfolgt und welche Rechte Ihnen zustehen.
          </Text>
        </Box>

        <Stack spacing={{ base: 5, md: 6 }}>
          <PrivacySection number="01" title="Verantwortlicher">
            <Stack spacing={1}>
              <Text color="white" fontWeight="700">
                Alpen Automobile
              </Text>

              <Text>Inhaber: Christoph Gärtner</Text>

              <Text pt={3}>
                Auf Berg 83
                <br />
                9493 Mauren
                <br />
                Liechtenstein
              </Text>

              <Text pt={3}>Telefon: +41 (0) 76 819 32 73</Text>

              <Text>
                E-Mail:{' '}
                <Link
                  href="mailto:info@alpenautomobile.ch"
                  color="white"
                  _hover={{ color: '#b21a18' }}
                >
                  info@alpenautomobile.ch
                </Link>
              </Text>

              <Text>
                Website:{' '}
                <Link
                  href="https://www.alpenautomobile.ch"
                  target="_blank"
                  rel="noreferrer"
                  color="white"
                  _hover={{ color: '#b21a18' }}
                >
                  www.alpenautomobile.ch
                </Link>
              </Text>
            </Stack>
          </PrivacySection>

          <PrivacySection number="02" title="Geltungsbereich">
            <Text>
              Diese Datenschutzerklärung gilt für den Besuch unserer Website,
              die Kontaktaufnahme per E-Mail, Telefon und WhatsApp,
              Fahrzeuganfragen sowie die Anbahnung und Abwicklung von
              Kaufverträgen.
            </Text>
          </PrivacySection>

          <PrivacySection number="03" title="Rechtsgrundlagen">
            <Text>
              Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen
              der geltenden datenschutzrechtlichen Bestimmungen. Je nach
              Verarbeitung stützen wir uns insbesondere auf die
              Vertragserfüllung oder Vertragsanbahnung, gesetzliche
              Verpflichtungen, berechtigte Interessen oder – soweit
              erforderlich – Ihre Einwilligung.
            </Text>
          </PrivacySection>

          <PrivacySection
            number="04"
            title="Hosting und Bereitstellung der Website"
          >
            <Text>
              Unsere Website wird bei der Hostpoint AG in Rapperswil-Jona,
              Schweiz, gehostet. Beim Besuch der Website werden technisch
              erforderliche Server-Logfiles verarbeitet, beispielsweise die
              IP-Adresse, der Zeitpunkt des Zugriffs und Browserinformationen.
              Dies dient dem sicheren und stabilen Betrieb der Website.
            </Text>

            <Text mt={3}>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </Text>
          </PrivacySection>

          <PrivacySection number="05" title="SSL-/TLS-Verschlüsselung">
            <Text>
              Unsere Website verwendet eine zeitgemäße
              SSL-/TLS-Verschlüsselung zum Schutz der Datenübertragung.
            </Text>
          </PrivacySection>

          <PrivacySection number="06" title="Kontaktaufnahme per E-Mail">
            <Text>
              Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre
              Angaben ausschließlich zur Bearbeitung Ihrer Anfrage oder zur
              Vertragsanbahnung. Bitte beachten Sie, dass die Übertragung
              unverschlüsselter E-Mails Sicherheitslücken aufweisen kann.
            </Text>
          </PrivacySection>

          <PrivacySection number="07" title="Kontaktaufnahme per Telefon">
            <Text>
              Bei telefonischen Anfragen verarbeiten wir ausschließlich die
              zur Bearbeitung Ihres Anliegens erforderlichen
              personenbezogenen Daten.
            </Text>
          </PrivacySection>

          <PrivacySection number="08" title="Kommunikation über WhatsApp">
            <Text>
              Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Angaben zur
              Bearbeitung Ihrer Anfrage verarbeitet. Bitte übermitteln Sie
              über WhatsApp keine besonderen Kategorien personenbezogener
              Daten oder andere vertrauliche Informationen. Für die
              Verarbeitung durch WhatsApp gelten zusätzlich deren
              Datenschutzbestimmungen.
            </Text>
          </PrivacySection>

          <PrivacySection number="09" title="Fahrzeuganfragen">
            <Text>
              Personenbezogene Daten im Zusammenhang mit Fahrzeuganfragen
              werden ausschließlich zur Bearbeitung Ihrer Anfrage und
              gegebenenfalls zur Vertragsanbahnung verarbeitet.
            </Text>

            <Text mt={3}>
              Eine Nutzung zu Werbezwecken erfolgt nicht ohne Ihre
              ausdrückliche Einwilligung. Kommt kein Vertragsverhältnis
              zustande, werden Ihre Daten gelöscht, sobald sie nicht mehr
              erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen.
            </Text>
          </PrivacySection>

          <PrivacySection
            number="10"
            title="Vertragsabwicklung und Rechnungsstellung"
          >
            <Text>
              Zur Durchführung von Kaufverträgen verarbeiten wir die hierfür
              erforderlichen personenbezogenen Daten. Rechtsgrundlagen sind
              Art. 6 Abs. 1 lit. b und lit. c DSGVO.
            </Text>
          </PrivacySection>

          <PrivacySection
            number="11"
            title="Weitergabe personenbezogener Daten"
          >
            <Text>
              Eine Weitergabe erfolgt nur, soweit dies zur
              Vertragsdurchführung, aufgrund gesetzlicher Verpflichtungen
              oder mit Ihrer Einwilligung erforderlich ist.
            </Text>

            <Text mt={3}>
              Mögliche Empfänger sind insbesondere Treuhänder, Garantie- und
              Versicherungsdienstleister, Werkstätten, Behörden, Banken,
              Hostinganbieter und sonstige Auftragsverarbeiter.
            </Text>
          </PrivacySection>

          <PrivacySection
            number="12"
            title="Grenzüberschreitende Geschäftsbeziehungen"
          >
            <Text>
              Im Rahmen unserer Geschäftstätigkeit können personenbezogene
              Daten, soweit erforderlich, an Empfänger in Liechtenstein, der
              Schweiz oder Deutschland übermittelt werden.
            </Text>
          </PrivacySection>

          <PrivacySection number="13" title="Speicherdauer">
            <Text>
              Wir speichern personenbezogene Daten nur so lange, wie dies zur
              Erfüllung des jeweiligen Zwecks erforderlich ist oder
              gesetzliche Aufbewahrungspflichten bestehen.
            </Text>
          </PrivacySection>

          <PrivacySection number="14" title="Externe Links">
            <Text>
              Unsere Website enthält ausschließlich Links zu externen
              Diensten, beispielsweise Instagram, YouTube und WhatsApp. Erst
              nach Anklicken eines Links gelten die Datenschutzbestimmungen
              des jeweiligen Anbieters.
            </Text>
          </PrivacySection>

          <PrivacySection
            number="15"
            title="Rechte betroffener Personen"
          >
            <Text>
              Ihnen stehen im Rahmen der geltenden datenschutzrechtlichen
              Bestimmungen verschiedene Rechte hinsichtlich Ihrer
              personenbezogenen Daten zu.
            </Text>

            <Text mt={3}>
              Hierzu gehören insbesondere das Recht auf Auskunft,
              Berichtigung, Löschung sowie – soweit die gesetzlichen
              Voraussetzungen vorliegen – weitere Betroffenenrechte nach der
              DSGVO. Zur Ausübung Ihrer Rechte können Sie sich jederzeit an
              uns wenden.
            </Text>
          </PrivacySection>

          <PrivacySection number="16" title="Beschwerderecht">
            <Text>
              Sie haben das Recht, sich bei der Datenschutzstelle des
              Fürstentums Liechtenstein zu beschweren. Wir freuen uns jedoch,
              wenn Sie sich zunächst direkt an uns wenden.
            </Text>
          </PrivacySection>

          <PrivacySection number="17" title="Datensicherheit">
            <Text>
              Wir treffen angemessene technische und organisatorische
              Maßnahmen zum Schutz Ihrer personenbezogenen Daten.
            </Text>
          </PrivacySection>

          <PrivacySection number="18" title="Aktualität">
            <Text>
              Diese Datenschutzerklärung wird bei Änderungen unserer Website
              oder unserer Geschäftsprozesse angepasst.
            </Text>

            <Text
              mt={4}
              color="white"
              fontWeight="600"
            >
              Stand: August 2026
            </Text>
          </PrivacySection>
        </Stack>
      </Container>
    </Box>
  )
}