import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const philosophyPoints = [
  'The students are of different levels, tendencies, and abilities, so the teacher must consider this and try to attract them to the lesson in an interactive way.',
  'To ensure a successful teaching and learning process, it is essential to make the student love the subject he is studying and work to attract him to it.',
  'The theoretical and practical education methods are diverse, and we invest the progress made in educational technology for that.',
  'Including various media during the presentation has an influential role in attracting the student\'s attention.',
  'Quizzes are one of the effective means that alert the student to the need to follow the lecture and interact with it.',
  'Homework is necessary to ensure that the student follows the course and develops his knowledge and skills.',
]

export default function Philosophy() {
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

      const quoteEl = sectionRef.current?.querySelector('.quote-animate')
      if (quoteEl) {
        gsap.to(quoteEl, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: quoteEl,
            start: 'top 85%',
          },
        })
      }

      const points = sectionRef.current?.querySelectorAll('.point-item')
      if (points) {
        gsap.to(points, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: points[0],
            start: 'top 85%',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      style={{
        background: 'var(--section-gradient)',
        padding: 'clamp(80px, 12vh, 140px) 24px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
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
          PHILOSOPHY
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
          Teaching Philosophy
        </h2>

        {/* Quote */}
        <div
          className="quote-animate"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            marginTop: '32px',
            position: 'relative',
            padding: '24px 32px',
          }}
        >
          {/* Opening quote */}
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '3rem',
              color: 'var(--teal-primary)',
              opacity: 0.3,
              lineHeight: 1,
            }}
          >
            &ldquo;
          </span>

          <p
            className="font-body"
            style={{
              fontStyle: 'italic',
              fontSize: '1.25rem',
              lineHeight: 1.6,
              color: 'var(--text-primary)',
              textAlign: 'center',
            }}
          >
            I believe that the educational process is interactive between the teacher and the student; however, the process becomes tedious and useless without that interaction.
          </p>

          {/* Closing quote */}
          <span
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '3rem',
              color: 'var(--teal-primary)',
              opacity: 0.3,
              lineHeight: 1,
            }}
          >
            &rdquo;
          </span>
        </div>

        {/* Philosophy Points */}
        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {philosophyPoints.map((point, idx) => (
            <div
              key={idx}
              className="point-item"
              style={{
                opacity: 0,
                transform: 'translateY(15px)',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  background: 'var(--teal-primary)',
                  borderRadius: '50%',
                  marginTop: '8px',
                  flexShrink: 0,
                }}
              />
              <p
                className="font-body"
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.65,
                  color: 'var(--text-secondary)',
                }}
              >
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
