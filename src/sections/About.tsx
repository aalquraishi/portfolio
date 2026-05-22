import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cvPdfUrl, linkedinUrl, profilePhotoUrl } from '../assets'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: '200+', label: 'Publications' },
  { number: '4', label: 'Springer Books' },
  { number: '40+', label: 'Years Teaching' },
  { number: '12', label: 'Professional Societies' },
]

const quickLinks = [
  { label: 'CV', href: cvPdfUrl },
  { label: 'LinkedIn', href: linkedinUrl },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=VUyaDLgAAAAJ' },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Ayad-Al-Quraishi' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0001-7732-129X' },
  { label: 'Scopus', href: 'https://www2.scopus.com/authid/detail.uri?authorId=57343694600' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column animations
      const leftEls = leftRef.current?.querySelectorAll('.animate-in')
      if (leftEls) {
        gsap.to(leftEls, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        })
      }

      // Stats count-up
      const statEls = leftRef.current?.querySelectorAll('.stat-number')
      statEls?.forEach((el) => {
        gsap.from(el, {
          textContent: 0,
          duration: 1.5,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          onUpdate: function () {
            const val = Math.round(gsap.getProperty(el, 'textContent') as number)
            const suffix = el.getAttribute('data-suffix') || ''
            el.textContent = val + suffix
          },
        })
      })

      // Right column (profile card)
      if (rightRef.current) {
        gsap.to(rightRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        background: 'var(--base-light)',
        padding: 'clamp(80px, 12vh, 140px) 24px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px',
          alignItems: 'flex-start',
        }}
      >
        {/* Left Column */}
        <div
          ref={leftRef}
          style={{
            flex: '1 1 500px',
            maxWidth: '600px',
          }}
        >
          <p
            className="animate-in font-body"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              fontWeight: 500,
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--teal-primary)',
              marginBottom: '16px',
            }}
          >
            ABOUT
          </p>

          <h2
            className="animate-in font-display"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              fontWeight: 600,
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)',
              marginBottom: '24px',
            }}
          >
            Four Decades of Scholarship
          </h2>

          <p
            className="animate-in font-body"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: 'var(--text-primary)',
            }}
          >
            Prof. Dr. Ayad M. Fadhil Al-Quraishi is Professor of Applied Remote Sensing & GIS at Tishk International University, Erbil, Kurdistan Region, Iraq. A former Fulbright Visiting Scholar at Michigan State University and Visiting Professor at the University of Alabama and China University of Geosciences, his research spans remote sensing, GIS, environmental monitoring, urbanization mapping, and climate change.
          </p>

          <p
            className="animate-in font-body"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              fontSize: '1rem',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              marginTop: '16px',
            }}
          >
            He serves as Editor-in-Chief of the Journal of Geoinformatics and Environmental Research, Guest Editor for Remote Sensing (MDPI) and Journal of Applied Remote Sensing (SPIE), and as Ambassador in Iraq for the IEEE Geoscience and Remote Sensing Society.
          </p>

          {/* Stats Row */}
          <div
            className="animate-in"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              marginTop: '40px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '32px',
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="stat-number font-display"
                  data-value={stat.number.replace(/\D/g, '')}
                  data-suffix={stat.number.replace(/[0-9]/g, '')}
                  style={{
                    fontWeight: 600,
                    fontSize: '2rem',
                    color: 'var(--teal-primary)',
                    lineHeight: 1.2,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  className="font-body"
                  style={{
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    marginTop: '4px',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Profile Card */}
        <div
          ref={rightRef}
          style={{
            flex: '1 1 340px',
            maxWidth: '400px',
            opacity: 0,
            transform: 'translateY(30px)',
          }}
        >
          <div
            style={{
              background: 'var(--surface-card)',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: 'var(--shadow-soft)',
              transition: 'background 0.25s ease, box-shadow 0.25s ease',
            }}
          >
            {/* Photo */}
            <div
              style={{
                width: '100%',
                aspectRatio: '1/1',
                background: 'var(--section-gradient)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <img
                src={profilePhotoUrl}
                alt="Prof. Dr. Ayad M. Fadhil Al-Quraishi"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Info */}
            <div style={{ marginTop: '24px' }}>
              <h3
                className="font-display"
                style={{
                  fontWeight: 500,
                  fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)',
                  lineHeight: 1.25,
                  color: 'var(--text-primary)',
                }}
              >
                Prof. Dr. Ayad M. Fadhil Al-Quraishi
              </h3>
              <p
                className="font-body"
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  marginTop: '6px',
                }}
              >
                Professor of Applied Remote Sensing & GIS
              </p>
              <p
                className="font-body"
                style={{
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  color: 'var(--text-secondary)',
                  marginTop: '4px',
                }}
              >
                Tishk International University · Erbil, Iraq
              </p>
            </div>

            {/* Quick Links */}
            <div
              style={{
                marginTop: '20px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body"
                  style={{
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--teal-primary)',
                    background: 'var(--pill-bg)',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--pill-bg-hover)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--pill-bg)'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
