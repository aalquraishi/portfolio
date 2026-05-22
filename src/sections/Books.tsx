import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const editedBooks = [
  {
    title: 'Climate Change and Environmental Degradation in the MENA Region',
    editors: 'Al-Quraishi, A. M. F., Negm, A. M., & Benzougagh, B. (Eds.)',
    year: '2024',
    series: 'The Handbook of Environmental Chemistry, Vol. 136',
    doi: '10.1007/978-3-031-74395-5',
    doiUrl: 'https://doi.org/10.1007/978-3-031-74395-5',
  },
  {
    title: 'Natural Resources Deterioration in MENA Region',
    editors: 'Al-Quraishi, A. M. F. & Mustafa, Y. T.',
    year: '2024',
    series: '',
    doi: '10.1007/978-3-031-58315-5',
    doiUrl: 'https://doi.org/10.1007/978-3-031-58315-5',
  },
  {
    title: 'Environmental Degradation in Asia: Land Degradation, Environmental Contamination, and Human Activities',
    editors: 'Al-Quraishi, A. M. F., Mustafa, Y. T., & Negm, A. M.',
    year: '2022',
    series: '',
    doi: '10.1007/978-3-031-12112-8',
    doiUrl: 'https://doi.org/10.1007/978-3-031-12112-8',
  },
]

const bookChapters = [
  {
    title: 'Google Earth Engine (GEE) to detect vegetation cover changes in Northwest Libya',
    authors: 'Alghariani, M. S., Sagar, E. M., Bedair, H., & Al-Quraishi, A. M. F.',
    book: 'Climate Change and Environmental Degradation in the MENA Region',
    doi: '10.1007/698_2024_1103',
    doiUrl: 'https://doi.org/10.1007/698_2024_1103',
  },
  {
    title: 'Assessing climate change impacts on rainfall-runoff in Northern Iraq: A case study of Kirkuk Governorate',
    authors: 'Al-Hasani, B., Abdellatif, M., Carnacina, I., Harris, C., Al-Quraishi, A. M. F., & Maaroof, B. F.',
    book: 'Climate Change and Environmental Degradation in the MENA Region',
    doi: '10.1007/698_2024_1154',
    doiUrl: 'https://doi.org/10.1007/698_2024_1154',
  },
  {
    title: 'Geoinformatics approaches to climate change-induced soil degradation in the MENA region: A review',
    authors: 'Al-Quraishi, A. M. F.',
    book: 'Climate Change and Environmental Degradation in the MENA Region',
    doi: '10.1007/698_2024_1167',
    doiUrl: 'https://doi.org/10.1007/698_2024_1167',
  },
  {
    title: 'Impact of climate change on Iraq: Severe water scarcity and desertification',
    authors: 'Eltaif, N. I., Gharaibeh, M. A., & Al-Quraishi, A. M. F.',
    book: 'Climate Change and Environmental Degradation in the MENA Region',
    doi: '10.1007/698_2024_1100',
    doiUrl: 'https://doi.org/10.1007/698_2024_1100',
  },
  {
    title: 'Desertification in Algeria and Turkey: Climate change leading to "natural selection" of restoration concepts',
    authors: 'Huebner, L., & Al-Quraishi, A. M. F.',
    book: 'Climate Change and Environmental Degradation in the MENA Region',
    doi: '10.1007/698_2024_1101',
    doiUrl: 'https://doi.org/10.1007/698_2024_1101',
  },
  {
    title: 'GIS-based erosion potential method (EPM) for soil degradation evaluation: A case study in northeast of Morocco',
    authors: 'El Brahimi, M., Benzougagh, B., Al-Quraishi, A. M. F., et al.',
    book: 'Natural Resources Deterioration in MENA Region',
    doi: '10.1007/978-3-031-58315-5_8',
    doiUrl: 'https://doi.org/10.1007/978-3-031-58315-5_8',
  },
]

export default function Books() {
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

      const bookCards = sectionRef.current?.querySelectorAll('.book-card')
      if (bookCards) {
        gsap.to(bookCards, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bookCards[0],
            start: 'top 85%',
          },
        })
      }

      const chapterItems = sectionRef.current?.querySelectorAll('.chapter-item')
      if (chapterItems) {
        gsap.to(chapterItems, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: chapterItems[0],
            start: 'top 85%',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="books"
      ref={sectionRef}
      style={{
        background: 'var(--section-warm-gradient)',
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
            marginBottom: '16px',
          }}
        >
          BOOKS
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
          Edited Books & Book Chapters
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
            maxWidth: '720px',
          }}
        >
          Editor of three Springer volumes and contributor of multiple book chapters on environmental remote sensing, climate change, and natural resource degradation.
        </p>

        {/* Books Grid */}
        <div
          style={{
            marginTop: '48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {editedBooks.map((book, idx) => (
            <div
              key={idx}
              className="book-card"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                background: 'var(--teal-gradient)',
                borderRadius: '16px',
                padding: '32px',
                color: '#FFFFFF',
                boxShadow: 'var(--shadow-soft)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-soft-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
              }}
            >
              {/* Springer Badge */}
              <span
                className="font-body"
                style={{
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  padding: '4px 10px',
                  borderRadius: '8px',
                }}
              >
                SPRINGER
              </span>

              <h3
                className="font-display"
                style={{
                  fontWeight: 500,
                  fontSize: '1.25rem',
                  lineHeight: 1.3,
                  color: '#FFFFFF',
                  marginTop: '16px',
                }}
              >
                {book.title}
              </h3>

              <p
                className="font-body"
                style={{
                  fontSize: '0.9375rem',
                  color: 'rgba(255,255,255,0.8)',
                  marginTop: '8px',
                }}
              >
                {book.editors}
              </p>

              <p
                className="font-body"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: '12px',
                }}
              >
                {book.year}
                {book.series && ` · ${book.series}`}
                {book.doi && (
                  <>
                    {' · '}
                    <a
                      href={book.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'rgba(255,255,255,0.8)',
                        textDecoration: 'underline',
                        textUnderlineOffset: '2px',
                      }}
                    >
                      DOI
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Book Chapters */}
        <div style={{ marginTop: '48px' }}>
          <h3
            className="header-animate font-display"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              fontWeight: 600,
              fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)',
              lineHeight: 1.25,
              color: 'var(--text-primary)',
            }}
          >
            Selected Book Chapters
          </h3>

          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {bookChapters.map((chapter, idx) => (
              <div
                key={idx}
                className="chapter-item"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  background: 'var(--surface-card)',
                  borderRadius: '12px',
                  padding: '20px',
                  borderLeft: '3px solid var(--teal-primary)',
                  boxShadow: 'var(--shadow-item)',
                }}
              >
                <p
                  className="font-body"
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.5,
                    color: 'var(--text-primary)',
                  }}
                >
                  {chapter.title}
                </p>
                <p
                  className="font-body"
                  style={{
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    marginTop: '6px',
                  }}
                >
                  {chapter.authors} · In: <em>{chapter.book}</em>
                </p>
                <p style={{ marginTop: '6px' }}>
                  <a
                    href={chapter.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-data"
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--teal-primary)',
                      textDecoration: 'none',
                    }}
                  >
                    {chapter.doi}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
