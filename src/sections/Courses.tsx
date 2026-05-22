import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Course {
  name: string
  department?: string
}

interface YearData {
  year: string
  courses: Course[]
}

const coursesData: YearData[] = [
  {
    year: '2025–2026',
    courses: [
      { name: 'Research Methodology', department: 'Petroleum & Mining Engineering' },
      { name: 'Geoinformatics for Mineral Exploration' },
      { name: 'Research Methodology', department: 'Aviation Engineering' },
      { name: 'Academic Writing' },
      { name: 'Artificial Intelligence (AI)' },
      { name: 'Geology' },
    ],
  },
  {
    year: '2024–2025',
    courses: [
      { name: 'Geoinformatics for Mineral Exploration' },
      { name: 'Research Methodology' },
      { name: 'Remote Sensing I' },
      { name: 'Remote Sensing II' },
      { name: 'Academic Writing' },
      { name: 'Geology' },
    ],
  },
  {
    year: '2023–2024',
    courses: [
      { name: 'Remote Sensing I' },
      { name: 'GIS' },
      { name: 'Geoinformatics for Mineral Exploration' },
      { name: 'Research Methodology' },
      { name: 'Academic Writing' },
      { name: 'Remote Sensing II' },
      { name: 'Digital Image Processing' },
    ],
  },
  {
    year: '2022–2023',
    courses: [
      { name: 'Remote Sensing & GIS', department: 'Petroleum & Mining Engineering' },
      { name: 'Research Methods', department: 'Petroleum & Mining Engineering' },
      { name: 'Academic Writing', department: 'Petroleum & Mining Engineering' },
      { name: 'Remote Sensing & GIS', department: 'Civil Engineering' },
    ],
  },
  {
    year: '2021–2022',
    courses: [
      { name: 'Remote Sensing I' },
      { name: 'Remote Sensing II' },
      { name: 'GIS' },
      { name: 'Digital Image Processing' },
      { name: 'Research Methods' },
      { name: 'Research Project' },
    ],
  },
  {
    year: '2020–2021',
    courses: [
      { name: 'Remote Sensing I' },
      { name: 'GIS' },
      { name: 'Remote Sensing II' },
      { name: 'Digital Image Processing' },
    ],
  },
]

export default function Courses() {
  const [activeYear, setActiveYear] = useState('2025–2026')
  const [isAnimating, setIsAnimating] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const activeCourses = coursesData.find((d) => d.year === activeYear)?.courses || []

  const handleYearChange = (year: string) => {
    if (year === activeYear || isAnimating) return
    setIsAnimating(true)

    // Fade out
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        duration: 0.15,
        onComplete: () => {
          setActiveYear(year)
          // Fade in after state update
          requestAnimationFrame(() => {
            if (contentRef.current) {
              gsap.to(contentRef.current, {
                opacity: 1,
                duration: 0.3,
                onComplete: () => setIsAnimating(false),
              })
            }
          })
        },
      })
    } else {
      setActiveYear(year)
      setIsAnimating(false)
    }
  }

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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="courses"
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
          paddingLeft: 'clamp(0px, 5vw, 60px)',
        }}
      >
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
            marginBottom: '16px',
          }}
        >
          TEACHING
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
          Courses Taught
        </h2>

        <p
          className="header-animate font-body"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            fontSize: '1rem',
            lineHeight: 1.65,
            color: 'var(--text-secondary)',
            marginTop: '12px',
            maxWidth: '640px',
          }}
        >
          Teaching across Remote Sensing, GIS, Research Methodology, Academic Writing, and Artificial Intelligence for undergraduate and postgraduate students.
        </p>

        {/* Year Tabs */}
        <div
          role="tablist"
          className="hide-scrollbar"
          style={{
            marginTop: '40px',
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '8px',
          }}
        >
          {coursesData.map((data) => (
            <button
              key={data.year}
              role="tab"
              aria-selected={activeYear === data.year}
              onClick={() => handleYearChange(data.year)}
              className="font-display"
              style={{
                fontWeight: 500,
                fontSize: '0.875rem',
                padding: '10px 20px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.25s ease',
                background: activeYear === data.year ? 'var(--teal-dark)' : 'transparent',
                color: activeYear === data.year ? 'var(--surface-white)' : 'var(--text-secondary)',
                boxShadow:
                  activeYear === data.year ? '0 2px 8px rgba(27, 77, 72, 0.25)' : 'none',
                outline: 'none',
              }}
              onMouseEnter={(e) => {
                if (activeYear !== data.year) {
                  e.currentTarget.style.background = 'var(--pill-bg)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeYear !== data.year) {
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >
              {data.year}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div
          ref={contentRef}
          role="tabpanel"
          style={{
            marginTop: '32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px',
          }}
        >
          {activeCourses.map((course, idx) => (
            <div
              key={`${activeYear}-${idx}`}
              style={{
                background: 'var(--surface-card)',
                borderRadius: '12px',
                padding: '20px',
                borderLeft: '3px solid var(--warm-gold)',
                boxShadow: 'var(--shadow-item)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftWidth = '4px'
                e.currentTarget.style.boxShadow = 'var(--shadow-item-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftWidth = '3px'
                e.currentTarget.style.boxShadow = 'var(--shadow-item)'
              }}
            >
              <span
                className="font-mono-data"
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--warm-gold)',
                }}
              >
                {String(idx + 1).padStart(2, '0')}
              </span>
              <p
                className="font-body"
                style={{
                  fontWeight: 500,
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  marginTop: '6px',
                }}
              >
                {course.name}
              </p>
              {course.department && (
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
                  {course.department}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
