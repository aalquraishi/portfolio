import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Books', href: '#books' },
  { label: 'Courses', href: '#courses' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false
    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme) return savedTheme === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light'
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'var(--nav-background)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-subtle)',
          height: '64px',
          transition: 'background 0.25s ease, border-color 0.25s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="font-display"
            style={{
              fontWeight: 600,
              fontSize: '1rem',
              color: 'var(--teal-dark)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <span className="hidden md:inline">Prof. Dr. Ayad M. Fadhil Al-Quraishi</span>
            <span className="md:hidden">Prof. Al-Quraishi</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex" style={{ gap: '20px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="font-display"
                style={{
                  fontWeight: 500,
                  fontSize: '0.8125rem',
                  color:
                    activeSection === link.href.replace('#', '')
                      ? 'var(--teal-dark)'
                      : 'var(--text-secondary)',
                  textDecoration: 'none',
                  position: 'relative',
                  paddingBottom: '4px',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.target as HTMLElement).style.color = 'var(--teal-primary)'
                }}
                onMouseLeave={(e) => {
                  const isActive = activeSection === link.href.replace('#', '')
                  ;(e.target as HTMLElement).style.color = isActive
                    ? 'var(--teal-dark)'
                    : 'var(--text-secondary)'
                }}
              >
                {link.label}
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: activeSection === link.href.replace('#', '') ? '100%' : '0%',
                    height: '2px',
                    background: 'var(--teal-dark)',
                    transition: 'width 0.25s ease',
                  }}
                />
              </a>
            ))}
            <button
              type="button"
              onClick={() => setIsDarkMode((value) => !value)}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDarkMode ? 'Light mode' : 'Dark mode'}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '999px',
                border: '1px solid var(--border-subtle)',
                background: 'var(--pill-bg)',
                color: 'var(--teal-dark)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--pill-bg-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--pill-bg)'
              }}
            >
              {isDarkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div
            className="flex md:hidden"
            style={{
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <button
              type="button"
              onClick={() => setIsDarkMode((value) => !value)}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDarkMode ? 'Light mode' : 'Dark mode'}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '999px',
                border: '1px solid var(--border-subtle)',
                background: 'var(--pill-bg)',
                color: 'var(--teal-dark)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              {isDarkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              <span
                style={{
                  width: '24px',
                  height: '2px',
                  background: 'var(--teal-dark)',
                  transition: 'all 0.3s ease',
                  transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                }}
              />
              <span
                style={{
                  width: '24px',
                  height: '2px',
                  background: 'var(--teal-dark)',
                  transition: 'all 0.3s ease',
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  width: '24px',
                  height: '2px',
                  background: 'var(--teal-dark)',
                  transition: 'all 0.3s ease',
                  transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: 'var(--overlay-bg)',
          }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '280px',
          height: '100vh',
          background: 'var(--surface-card)',
          zIndex: 101,
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          padding: '80px 32px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="font-display"
            style={{
              fontWeight: 500,
              fontSize: '1.25rem',
              color:
                activeSection === link.href.replace('#', '')
                  ? 'var(--teal-primary)'
                  : 'var(--text-primary)',
              textDecoration: 'none',
              padding: '12px 0',
              transition: 'all 0.2s ease',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
