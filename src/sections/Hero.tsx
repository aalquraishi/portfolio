import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { FileText, Linkedin } from 'lucide-react'
import { cvPdfUrl, linkedinUrl } from '../assets'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
        .to(headingRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.3')
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          padding: '0 24px',
          paddingBottom: '15vh',
        }}
      >
        <p
          ref={labelRef}
          className="font-body"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            fontWeight: 500,
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            marginBottom: '16px',
          }}
        >
          PROFESSOR OF APPLIED REMOTE SENSING & GIS
        </p>

        <h1
          ref={headingRef}
          className="font-display"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            fontWeight: 600,
            fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            maxWidth: '600px',
          }}
        >
          Mapping Earth's Systems
        </h1>

        <p
          ref={subtitleRef}
          className="font-body"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            fontWeight: 400,
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            maxWidth: '520px',
            marginTop: '20px',
          }}
        >
          Four decades of research in remote sensing, GIS, and environmental monitoring across the Middle East, Asia, Africa, and beyond.
        </p>

        <div
          ref={ctaRef}
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            marginTop: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <a
            href={cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="font-display"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--gold-gradient)',
              color: 'var(--surface-white)',
              fontWeight: 600,
              fontSize: '1rem',
              padding: '14px 28px',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(200, 150, 62, 0.3)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 6px 24px rgba(200, 150, 62, 0.4)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = '0 4px 16px rgba(200, 150, 62, 0.3)'
            }}
          >
            <FileText size={18} aria-hidden="true" />
            Download CV
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'transparent',
              color: 'var(--teal-dark)',
              fontWeight: 500,
              fontSize: '1rem',
              padding: '14px 24px',
              borderRadius: '12px',
              textDecoration: 'none',
              border: '1px solid var(--border-strong)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--button-hover-bg)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
            }}
          >
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>

          <a
            href="#publications"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#publications')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="font-display"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              color: 'var(--teal-dark)',
              fontWeight: 500,
              fontSize: '1rem',
              padding: '14px 24px',
              borderRadius: '12px',
              textDecoration: 'none',
              border: '1px solid var(--border-subtle)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--button-hover-bg)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
            }}
          >
            View Publications
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '25vh',
          background: 'var(--hero-fade)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />
    </section>
  )
}
