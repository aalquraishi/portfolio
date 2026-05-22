import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const researchAreas = [
  {
    title: 'Remote Sensing',
    description:
      'Satellite imagery analysis, spectral indices, vegetation monitoring, and land cover classification using Landsat, MODIS, Sentinel, and SAR data.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--teal-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6C12.268 6 6 12.268 6 20s6.268 14 14 14 14-6.268 14-14S27.732 6 20 6z" />
        <path d="M20 12v8l5.657 5.657" />
        <path d="M4 20h4M32 20h4M20 4v4M20 32v4" />
        <circle cx="20" cy="20" r="2" />
      </svg>
    ),
  },
  {
    title: 'GIS',
    description:
      'Spatial analysis, geospatial modeling, multi-criteria decision analysis, and cartographic visualization for environmental applications.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--teal-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="28" height="28" rx="2" />
        <path d="M6 14h28M6 22h28M6 30h28M14 6v28M22 6v28M30 6v28" />
      </svg>
    ),
  },
  {
    title: 'Environmental Monitoring',
    description:
      'Drought severity analysis, soil erosion assessment, land degradation detection, and water resource evaluation.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--teal-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 30L14 18L20 24L28 10L34 18" />
        <path d="M6 34h28" />
      </svg>
    ),
  },
  {
    title: 'Urbanization Mapping',
    description:
      'Urban sprawl monitoring, land use/land cover change detection, and predictive modeling using CA-Markov and machine learning.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--teal-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="18" width="10" height="16" />
        <rect x="18" y="10" width="8" height="24" />
        <rect x="28" y="14" width="8" height="20" />
        <rect x="9" y="22" width="4" height="4" />
        <rect x="21" y="14" width="2" height="3" />
      </svg>
    ),
  },
  {
    title: 'Climate Change',
    description:
      'Climate change impact assessment, rainfall-runoff modeling, evapotranspiration analysis, and CMIP6 scenario-based projections.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--teal-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6v28M20 6c-5.523 0-10 4.477-10 10s4.477 10 10 10" />
        <circle cx="20" cy="16" r="2" />
        <path d="M10 14a10 10 0 0110-8" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    title: 'Machine Learning & AI',
    description:
      'Application of neural networks, random forests, and deep learning in geospatial analysis and predictive environmental modeling.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--teal-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6c-3.314 0-6 2.686-6 6 0 1.657.672 3.157 1.757 4.243C10.672 17.843 8 21.314 8 25.333c0 3.314 2.686 6 6 6h12c3.314 0 6-2.686 6-6 0-4.019-2.672-7.49-6.757-9.09C26.328 15.157 27 13.657 27 12c0-3.314-2.686-6-6-6z" />
        <circle cx="16" cy="14" r="1.5" fill="var(--teal-primary)" />
        <circle cx="24" cy="14" r="1.5" fill="var(--teal-primary)" />
        <circle cx="20" cy="22" r="1.5" fill="var(--teal-primary)" />
        <circle cx="14" cy="26" r="1.5" fill="var(--teal-primary)" />
        <circle cx="26" cy="26" r="1.5" fill="var(--teal-primary)" />
        <path d="M16 14l4 8M24 14l-4 8M14 26h12" />
      </svg>
    ),
  },
]

export default function Research() {
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

      const cards = sectionRef.current?.querySelectorAll('.research-card')
      if (cards) {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cards[0],
            start: 'top 85%',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="research"
      ref={sectionRef}
      style={{
        background: 'var(--section-gradient)',
        padding: 'clamp(80px, 12vh, 140px) 24px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
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
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          RESEARCH
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
            textAlign: 'center',
          }}
        >
          Research Interests
        </h2>

        {/* Cards Grid */}
        <div
          style={{
            marginTop: '48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="research-card"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                background: 'var(--surface-card)',
                borderRadius: '16px',
                padding: '28px',
                boxShadow: 'var(--shadow-soft)',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = 'var(--shadow-soft-hover)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'var(--shadow-soft)'
              }}
            >
              {area.icon}
              <h3
                className="font-display"
                style={{
                  fontWeight: 500,
                  fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)',
                  lineHeight: 1.25,
                  color: 'var(--text-primary)',
                  marginTop: '16px',
                }}
              >
                {area.title}
              </h3>
              <p
                className="font-body"
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.65,
                  color: 'var(--text-secondary)',
                  marginTop: '8px',
                }}
              >
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
