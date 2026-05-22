import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Download, ExternalLink, Linkedin, Mail, MapPin } from 'lucide-react'
import { cvPdfUrl, linkedinUrl } from '../assets'

gsap.registerPlugin(ScrollTrigger)

const quickLinks = [
  { label: 'CV', href: cvPdfUrl },
  { label: 'LinkedIn', href: linkedinUrl },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=VUyaDLgAAAAJ' },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Ayad-Al-Quraishi' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0001-7732-129X' },
  { label: 'Scopus', href: 'https://www2.scopus.com/authid/detail.uri?authorId=57343694600' },
]

const primaryEmail = 'ayad.alquraishi@tiu.edu.iq'

const contactActions = [
  { label: 'Email', href: `mailto:${primaryEmail}`, icon: Mail, primary: true },
  { label: 'Download CV', href: cvPdfUrl, icon: Download },
  { label: 'LinkedIn', href: linkedinUrl, icon: Linkedin },
]

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const contentEls = sectionRef.current?.querySelectorAll('.footer-animate')
      if (contentEls) {
        gsap.to(contentEls, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      id="contact"
      ref={sectionRef}
      style={{
        background: 'var(--dark-base)',
        padding: '80px 24px 40px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top Row */}
        <div
          className="footer-animate"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '32px',
          }}
        >
          {/* Left - Contact Info */}
          <div style={{ flex: '1 1 440px', maxWidth: '620px' }}>
            <h2
              className="font-display"
              style={{
                fontWeight: 600,
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                color: '#FFFFFF',
              }}
            >
              Get in Touch
            </h2>
            <p
              className="font-body"
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.7)',
                marginTop: '12px',
                maxWidth: '560px',
              }}
            >
              For academic collaboration, editorial work, research supervision, or speaking invitations, use the primary university email or connect through LinkedIn.
            </p>

            <div
              style={{
                marginTop: '24px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              {contactActions.map((action) => {
                const Icon = action.icon
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={action.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    download={action.label === 'Download CV' ? true : undefined}
                    className="font-display"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      minHeight: '44px',
                      padding: '11px 18px',
                      borderRadius: '12px',
                      border: action.primary
                        ? '1px solid transparent'
                        : '1px solid rgba(255,255,255,0.18)',
                      background: action.primary
                        ? 'var(--gold-gradient)'
                        : 'rgba(255,255,255,0.08)',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.background = action.primary
                        ? 'var(--gold-gradient)'
                        : 'rgba(255,255,255,0.13)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.background = action.primary
                        ? 'var(--gold-gradient)'
                        : 'rgba(255,255,255,0.08)'
                    }}
                  >
                    <Icon size={18} aria-hidden="true" />
                    {action.label}
                  </a>
                )
              })}
            </div>

            <div
              style={{
                marginTop: '28px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '12px',
              }}
            >
              <a
                href={`mailto:${primaryEmail}`}
                className="font-body"
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                <Mail size={18} aria-hidden="true" style={{ marginTop: '2px', color: 'var(--warm-gold)' }} />
                <span>
                  <span
                    style={{
                      display: 'block',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    Email
                  </span>
                  <span style={{ display: 'block', fontSize: '0.9375rem', marginTop: '2px' }}>
                    {primaryEmail}
                  </span>
                </span>
              </a>

              <div
                className="font-body"
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#FFFFFF',
                }}
              >
                <MapPin size={18} aria-hidden="true" style={{ marginTop: '2px', color: 'var(--warm-gold)' }} />
                <span>
                  <span
                    style={{
                      display: 'block',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    Office
                  </span>
                  <span style={{ display: 'block', fontSize: '0.9375rem', marginTop: '2px' }}>
                    324, Main Building · Tishk International University, Erbil
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Right - Quick Links */}
          <div
            style={{
              flex: '1 1 260px',
              maxWidth: '360px',
              display: 'grid',
              gap: '12px',
              alignContent: 'start',
            }}
          >
            <p
              className="font-body"
              style={{
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              Academic Profiles
            </p>
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  fontSize: '0.9375rem',
                  color: 'rgba(255,255,255,0.78)',
                  textDecoration: 'none',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  transition: 'color 0.25s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                }}
              >
                <span>{link.label}</span>
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="footer-animate"
          style={{
            opacity: 0,
            height: '1px',
            background: 'rgba(255,255,255,0.1)',
            margin: '40px 0',
          }}
        />

        {/* Bottom Row */}
        <div
          className="footer-animate"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <p
            className="font-body"
            style={{
              fontWeight: 500,
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            &copy; 2026 Prof. Dr. Ayad M. Fadhil Al-Quraishi
          </p>
          <p
            className="font-body"
            style={{
              fontWeight: 500,
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            Department of Petroleum & Mining Engineering · Tishk International University
          </p>
        </div>

        {/* Hobbies */}
        <p
          className="footer-animate font-body"
          style={{
            opacity: 0,
            fontWeight: 500,
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.4)',
            textAlign: 'center',
            marginTop: '24px',
          }}
        >
          Reading · Traveling · Fishing
        </p>
      </div>
    </footer>
  )
}
