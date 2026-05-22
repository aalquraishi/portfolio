import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const publications = [
  {
    year: '2026',
    title: 'Integrating geo-spatial analysis and gray relational approach for wildfire susceptibility mapping in Bale Mountain National Park, Ethiopia',
    authors: 'Bekalo, D. J., Bojer, A. K., Debelee, T. G., Negera, W. G., <strong>Al-Quraishi, A. M. F.</strong>, Gebissa, K. W., & Deche, A.',
    journal: 'Trees, Forests and People',
    doi: '10.1016/j.tfp.2026.101159',
    doiUrl: 'https://doi.org/10.1016/j.tfp.2026.101159',
  },
  {
    year: '2026',
    title: 'Utilization of MOLUSCE tool and GEE cloud to predict the variation of LST through LULC, NDBI and NDVI in Tollygunge-Panchannagram Basin of Kolkata',
    authors: 'Singha, C., Sahoo, S., Swain, K. C., Govind, A., <strong>Al-Quraishi, A. M. F.</strong>, & Singh, S. P.',
    journal: 'Discover Environment',
    doi: '',
    doiUrl: '',
  },
  {
    year: '2025',
    title: 'Predicting forest above-ground biomass using SAR imagery and GEDI data through machine learning in GEE cloud',
    authors: 'Singh, C., Swain, K. C., Sahoo, S., <strong>Al-Quraishi, A. M. F.</strong>, Alao, J. O., Almohamad, H., Ahmed, M. F. M., & Abdo, H. G.',
    journal: 'Forest Science and Technology',
    doi: '10.1080/21580103.2025',
    doiUrl: 'https://doi.org/10.1080/21580103.2025',
  },
  {
    year: '2025',
    title: 'Forecasting evaporation trends amid climate change for sustainable water management in semi-arid regions',
    authors: 'Al-Hasani, B., Abdellatif, M., Carnacina, I., Harris, C., <strong>Al-Quraishi, A. M. F.</strong>, & Al-Shammari, M. M. A.',
    journal: 'Water',
    doi: '10.3390/w17071039',
    doiUrl: 'https://doi.org/10.3390/w17071039',
  },
  {
    year: '2025',
    title: 'Assessing climate and land use impacts on surface water yield using remote sensing and machine learning',
    authors: 'Bojer, A. K., Abshare, M. W., Mesfin, F., & <strong>Al-Quraishi, A. M. F.</strong>',
    journal: 'Scientific Reports',
    doi: '10.1038/s41598-025-98477',
    doiUrl: 'https://doi.org/10.1038/s41598-025-98477',
  },
  {
    year: '2025',
    title: 'Estimation of LAI across phenological stages of wheat using Google Earth Engine',
    authors: 'Sur, K., Verma, V. K., Singh, M., <strong>Al-Quraishi, A. M. F.</strong>, Arora, P., & Pateriya, B.',
    journal: 'Applied Geomatics',
    doi: '10.1007/s12518-025-00613-x',
    doiUrl: 'https://doi.org/10.1007/s12518-025-00613-x',
  },
  {
    year: '2024',
    title: 'Rainwater harvesting site selection for drought-prone areas in Somali and Borena zones, Ethiopia: A geospatial and multi-criteria decision analysis',
    authors: 'Bojer, A. K., Bekalo, D. J., Debelee, T. G., Nadarajah, S., & <strong>Al-Quraishi, A. M. F.</strong>',
    journal: 'Water',
    doi: '10.3390/w16131789',
    doiUrl: 'https://doi.org/10.3390/w16131789',
  },
  {
    year: '2024',
    title: 'Machine learning and remote sensing-based time series analysis for drought risk prediction in Borena Zone, Southwest Ethiopia',
    authors: 'Bojer, A. K., Biru, B. H., <strong>Al-Quraishi, A. M. F.</strong>, Debelee, T. G., Negera, W. G., Woldesillasie, F. F., & Esubalew, S. Z.',
    journal: 'Journal of Arid Environments',
    doi: '10.1016/j.jaridenv.2024.105160',
    doiUrl: 'https://doi.org/10.1016/j.jaridenv.2024.105160',
  },
  {
    year: '2024',
    title: 'Groundwater delineation for sustainable improvement and development aided by GIS, AHP, and MIF techniques',
    authors: 'Ehsan, M., Shabbir, H., <strong>Al-Quraishi, A. M. F.</strong>, et al.',
    journal: 'Applied Water Science',
    doi: '10.1007/s13201-023-02065-3',
    doiUrl: 'https://doi.org/10.1007/s13201-023-02065-3',
  },
  {
    year: '2023',
    title: 'Integrated geospatial approach for adaptive rainwater harvesting site selection under the impact of climate change',
    authors: 'Al-Hasani, B., Abdellatif, M., Carnacina, I., & <strong>Al-Quraishi, A. M. F.</strong>',
    journal: 'Stochastic Environmental Research and Risk Assessment',
    doi: '10.1007/s00477-023-02611-0',
    doiUrl: 'https://doi.org/10.1007/s00477-023-02611-0',
  },
  {
    year: '2022',
    title: 'A geospatial approach for analysis of drought impacts on vegetation cover and land surface temperature in the Kurdistan Region of Iraq',
    authors: 'Gaznayee, H. A. A., <strong>Al-Quraishi, A. M. F.</strong>, Mahdi, K., & Ritsema, C.',
    journal: 'Water',
    doi: '10.3390/w14060927',
    doiUrl: 'https://doi.org/10.3390/w14060927',
  },
  {
    year: '2022',
    title: 'Modeling and mapping of susceptibility to soil erosion using machine learning in a tropical sub-humid environment',
    authors: 'Baga, R., Mondal, I., Dehbozorgi, M., Bank, S., Das, D., Bandyopadhyay, J., Pham, Q., <strong>Al-Quraishi, A. M. F.</strong>, & Cuong, N.',
    journal: 'Journal of Cleaner Production',
    doi: '10.1016/j.jclepro.2022.132428',
    doiUrl: 'https://doi.org/10.1016/j.jclepro.2022.132428',
  },
]

const pubStats = [
  { number: '80+', label: 'Journal Papers 2021–2026' },
  { number: '30+', label: 'International Collaborators' },
  { number: '15+', label: 'Countries Represented' },
]

export default function Publications() {
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

      const statEls = sectionRef.current?.querySelectorAll('.stat-item')
      if (statEls) {
        gsap.to(statEls, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statEls[0],
            start: 'top 85%',
          },
        })
      }

      const pubItems = sectionRef.current?.querySelectorAll('.pub-item')
      if (pubItems) {
        gsap.to(pubItems, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: pubItems[0],
            start: 'top 85%',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="publications"
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
          paddingLeft: 'clamp(0px, 10vw, 120px)',
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
          PUBLICATIONS
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
          Selected Publications
        </h2>

        <p
          className="header-animate font-body"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            marginTop: '8px',
          }}
        >
          Peer-reviewed journal papers spanning 2021–2026.
        </p>

        {/* Stats Bar */}
        <div
          style={{
            marginTop: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          {pubStats.map((stat) => (
            <div key={stat.label} className="stat-item" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <span
                className="font-display"
                style={{
                  fontWeight: 600,
                  fontSize: '1.5rem',
                  color: 'var(--teal-primary)',
                }}
              >
                {stat.number}
              </span>
              <span
                className="font-body"
                style={{
                  display: 'block',
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  marginTop: '4px',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Publication List */}
        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="pub-item"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                background: 'var(--surface-card)',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: 'var(--shadow-item)',
                transition: 'box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-item-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-item)'
              }}
            >
              {/* Year Badge */}
              <span
                className="font-body"
                style={{
                  display: 'inline-block',
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: 'var(--pill-bg)',
                  color: 'var(--teal-primary)',
                  padding: '4px 10px',
                  borderRadius: '8px',
                }}
              >
                {pub.year}
              </span>

              {/* Title */}
              <p
                className="font-body"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.5,
                  color: 'var(--text-primary)',
                  marginTop: '12px',
                }}
              >
                {pub.title}
              </p>

              {/* Authors */}
              <p
                className="font-body"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.8125rem',
                  lineHeight: 1.5,
                  color: 'var(--text-secondary)',
                  marginTop: '6px',
                }}
                dangerouslySetInnerHTML={{ __html: pub.authors }}
              />

              {/* Journal + DOI */}
              <p
                className="font-body"
                style={{
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  marginTop: '8px',
                }}
              >
                {pub.journal}
                {pub.doi && (
                  <>
                    {' · '}
                    <a
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--teal-primary)',
                        textDecoration: 'underline',
                        textUnderlineOffset: '2px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--teal-dark)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--teal-primary)'
                      }}
                    >
                      DOI: {pub.doi}
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div style={{ marginTop: '32px' }}>
          <a
            href="https://scholar.google.com/citations?user=VUyaDLgAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display"
            style={{
              fontWeight: 500,
              fontSize: '1rem',
              color: 'var(--teal-primary)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              const underline = e.currentTarget.querySelector('span') as HTMLElement
              if (underline) underline.style.width = '100%'
            }}
            onMouseLeave={(e) => {
              const underline = e.currentTarget.querySelector('span') as HTMLElement
              if (underline) underline.style.width = '0%'
            }}
          >
            View All Publications →
            <span
              style={{
                position: 'absolute',
                bottom: '-2px',
                left: 0,
                width: '0%',
                height: '1px',
                background: 'var(--teal-primary)',
                transition: 'width 0.25s ease',
              }}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
