import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const positions = [
  {
    title: 'Visiting Professor',
    institution: 'University of Alabama, United States',
    period: '2022, 2025',
  },
  {
    title: 'Visiting Professor',
    institution: 'China University of Geosciences, Wuhan, China',
    period: '2024',
  },
  {
    title: 'Professor',
    institution: 'Knowledge University',
    period: '2018–2020',
  },
  {
    title: 'Professor',
    institution: 'University of Kufa',
    period: '2016–2018',
  },
  {
    title: 'Fulbright Visiting Scholar',
    institution: 'Michigan State University, United States',
    period: '2011',
  },
  {
    title: 'Professor',
    institution: 'Salahaddin University',
    period: '2007–2016',
  },
  {
    title: 'Assist. Lecturer, Lecturer, A. Professor',
    institution: 'Middle Technical University',
    period: '1980–2007',
  },
]

const awards = [
  {
    title: 'Fulbright Visiting Scholar',
    description: 'Michigan State University, United States',
    year: '2011',
  },
  {
    title: 'Best Publication Award',
    description: 'Tishk International University',
    year: '2024',
  },
]

const memberships = [
  'ASPRS (2018–present)',
  'IEEE / IEEE-GRSS (2012–present)',
  'AAG (2013–present)',
  'SPIE (2012–present)',
  'EGU (2012–present)',
  'JpGU (2018–present)',
  'Iraqi Soil Science Society (2010–present)',
]

export default function Positions() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerEls = sectionRef.current?.querySelectorAll('.header-animate')
      if (headerEls) {
        gsap.to(headerEls, {
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

      const timelineItems = sectionRef.current?.querySelectorAll('.timeline-item')
      if (timelineItems) {
        gsap.to(timelineItems, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineItems[0],
            start: 'top 85%',
          },
        })
      }

      const awardCards = sectionRef.current?.querySelectorAll('.award-card')
      if (awardCards) {
        gsap.to(awardCards, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: awardCards[0],
            start: 'top 85%',
          },
        })
      }

      const membershipPills = sectionRef.current?.querySelectorAll('.membership-pill')
      if (membershipPills) {
        gsap.to(membershipPills, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: membershipPills[0],
            start: 'top 90%',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="career"
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
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '48px',
        }}
      >
        {/* Left Column - Previous Positions */}
        <div>
          <p
            className="header-animate font-body"
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
            CAREER
          </p>

          <h2
            className="header-animate font-display"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              fontWeight: 600,
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)',
            }}
          >
            Previous Positions
          </h2>

          {/* Timeline */}
          <div
            style={{
              marginTop: '32px',
              borderLeft: '2px solid var(--border-subtle)',
              paddingLeft: '24px',
              position: 'relative',
            }}
          >
            {positions.map((pos, idx) => (
              <div
                key={idx}
                className="timeline-item"
                style={{
                  opacity: 0,
                  transform: 'translateX(-20px)',
                  position: 'relative',
                  paddingBottom: idx < positions.length - 1 ? '28px' : '0',
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-31px',
                    top: '4px',
                    width: '12px',
                    height: '12px',
                    background: 'var(--teal-primary)',
                    borderRadius: '50%',
                  }}
                />

                <h3
                  className="font-display"
                  style={{
                    fontWeight: 500,
                    fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)',
                    lineHeight: 1.25,
                    color: 'var(--text-primary)',
                  }}
                >
                  {pos.title}
                </h3>
                <p
                  className="font-body"
                  style={{
                    fontSize: '1rem',
                    color: 'var(--teal-primary)',
                    marginTop: '4px',
                  }}
                >
                  {pos.institution}
                </p>
                <p
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
                  {pos.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Awards & Memberships */}
        <div>
          <h2
            className="header-animate font-display"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              fontWeight: 600,
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)',
            }}
          >
            Awards & Memberships
          </h2>

          {/* Awards */}
          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="award-card"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  background: 'var(--gold-gradient)',
                  borderRadius: '12px',
                  padding: '20px',
                  color: '#FFFFFF',
                }}
              >
                {/* Trophy Icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 6h16v4c0 4.418-3.134 8-7 8s-7-3.582-7-8V6z"
                    fill="rgba(255,255,255,0.15)"
                    stroke="rgba(255,255,255,0.9)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 10h4M22 10h4M4 8v2c0 1.657 1.343 3 3 3M28 8v2c0 1.657-1.343 3-3 3"
                    stroke="rgba(255,255,255,0.9)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 26h4M16 18v8"
                    stroke="rgba(255,255,255,0.9)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p
                  className="font-display"
                  style={{
                    fontWeight: 500,
                    fontSize: '1.0625rem',
                    color: '#FFFFFF',
                    marginTop: '12px',
                  }}
                >
                  {award.title}
                </p>
                <p
                  className="font-body"
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.85)',
                    marginTop: '6px',
                  }}
                >
                  {award.description}
                </p>
                <p
                  className="font-body"
                  style={{
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    color: 'rgba(255,255,255,0.7)',
                    marginTop: '8px',
                  }}
                >
                  {award.year}
                </p>
              </div>
            ))}
          </div>

          {/* Memberships */}
          <div style={{ marginTop: '32px' }}>
            <h3
              className="font-display"
              style={{
                fontWeight: 600,
                fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)',
                lineHeight: 1.25,
                color: 'var(--text-primary)',
              }}
            >
              Professional Memberships
            </h3>

            <div
              style={{
                marginTop: '16px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              {memberships.map((membership, idx) => (
                <span
                  key={idx}
                  className="membership-pill font-body"
                  style={{
                    opacity: 0,
                    transform: 'translateY(10px)',
                    display: 'inline-block',
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    color: 'var(--teal-dark)',
                    background: 'var(--pill-bg)',
                    padding: '8px 14px',
                    borderRadius: '10px',
                  }}
                >
                  {membership}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
