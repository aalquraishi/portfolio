import { Suspense, lazy } from 'react'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import Research from './sections/Research'
import Publications from './sections/Publications'
import Books from './sections/Books'
import Courses from './sections/Courses'
import Philosophy from './sections/Philosophy'
import Positions from './sections/Positions'
import Footer from './sections/Footer'

// Lazy load the globe for performance
const GlobeBackground = lazy(() => import('./sections/GlobeBackground'))

function GlobeFallback() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        background: 'radial-gradient(ellipse at center, var(--pill-bg) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}
    />
  )
}

export default function App() {
  return (
    <>
      {/* Fixed 3D Globe Background */}
      <Suspense fallback={<GlobeFallback />}>
        <GlobeBackground />
      </Suspense>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Books />
        <Courses />
        <Philosophy />
        <Positions />
        <Footer />
      </main>
    </>
  )
}
