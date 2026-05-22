import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// Section targets: [longitude, latitude, opacity]
const sectionTargets = [
  [0, 0, 1.0],      // Hero
  [20, -10, 0.9],   // About
  [10, 15, 0.85],   // Research
  [-80, 25, 0.75],  // Publications
  [100, -15, 0.7],  // Books
  [0, 0, 0.8],      // Courses
  [45, 20, 0.75],   // Philosophy
  [0, 0, 0.6],      // Positions (slow spin handled separately)
  [0, 0, 0.15],     // Footer
]

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function GlobeMesh({ accentColor, opacityScale }: { accentColor: string; opacityScale: number }) {
  const sphereRef = useRef<THREE.LineSegments>(null)
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const ring3Ref = useRef<THREE.Mesh>(null)
  const matRef = useRef<THREE.LineBasicMaterial>(null)
  const ring1MatRef = useRef<THREE.MeshBasicMaterial>(null)
  const ring2MatRef = useRef<THREE.MeshBasicMaterial>(null)
  const ring3MatRef = useRef<THREE.MeshBasicMaterial>(null)

  const [scrollProgress, setScrollProgress] = useState(0)
  const { size } = useThree()

  // Listen to scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / totalHeight)))
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Responsive scale
  const isMobile = size.width < 768
  const baseScale = isMobile ? 0.65 : 1.0

  // Auto-rotation for rings
  const ringRotation = useRef(0)

  useFrame((_, delta) => {
    ringRotation.current += delta * 0.15

    // Calculate target based on scroll progress
    const totalSections = sectionTargets.length - 1
    const scaledProgress = scrollProgress * totalSections
    const sectionIdx = Math.min(Math.floor(scaledProgress), sectionTargets.length - 2)
    const localProgress = scaledProgress - sectionIdx

    const currentTarget = sectionTargets[sectionIdx]
    const nextTarget = sectionTargets[sectionIdx + 1]

    const targetLong = lerp(currentTarget[0], nextTarget[0], localProgress)
    const targetLat = lerp(currentTarget[1], nextTarget[1], localProgress)
    const targetOpacity = lerp(currentTarget[2], nextTarget[2], localProgress)

    // Apply to sphere rotation
    if (sphereRef.current) {
      const targetRotY = (targetLong * Math.PI) / 180
      const targetRotX = (targetLat * Math.PI) / 180

      sphereRef.current.rotation.y = lerp(sphereRef.current.rotation.y, targetRotY, 0.04)
      sphereRef.current.rotation.x = lerp(sphereRef.current.rotation.x, targetRotX, 0.04)

      // Scale
      const s = scrollProgress > 0.85 ? lerp(1, 0.9, (scrollProgress - 0.85) / 0.15) : 1
      sphereRef.current.scale.setScalar(baseScale * s)
    }

    // Apply to ring rotations
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = ringRotation.current * 0.5
      const s = scrollProgress > 0.85 ? lerp(1, 0.9, (scrollProgress - 0.85) / 0.15) : 1
      ring1Ref.current.scale.setScalar(baseScale * s)
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = Math.PI / 1.4 + ringRotation.current * 0.3
      const s = scrollProgress > 0.85 ? lerp(1, 0.9, (scrollProgress - 0.85) / 0.15) : 1
      ring2Ref.current.scale.setScalar(baseScale * s)
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = Math.PI / 2.0 + ringRotation.current * 0.2
      const s = scrollProgress > 0.85 ? lerp(1, 0.9, (scrollProgress - 0.85) / 0.15) : 1
      ring3Ref.current.scale.setScalar(baseScale * s)
    }

    // Apply opacity
    if (matRef.current) {
      matRef.current.opacity = lerp(matRef.current.opacity, targetOpacity * opacityScale, 0.03)
    }
    if (ring1MatRef.current) {
      ring1MatRef.current.opacity = lerp(ring1MatRef.current.opacity, targetOpacity * 0.6 * opacityScale, 0.03)
    }
    if (ring2MatRef.current) {
      ring2MatRef.current.opacity = lerp(ring2MatRef.current.opacity, targetOpacity * 0.6 * opacityScale, 0.03)
    }
    if (ring3MatRef.current) {
      ring3MatRef.current.opacity = lerp(ring3MatRef.current.opacity, targetOpacity * 0.3 * opacityScale, 0.03)
    }
  })

  const sphereGeo = new THREE.SphereGeometry(1.8, 64, 64)
  const wireGeo = new THREE.WireframeGeometry(sphereGeo)

  return (
    <>
      <lineSegments ref={sphereRef} geometry={wireGeo}>
        <lineBasicMaterial ref={matRef} color={accentColor} transparent opacity={opacityScale} />
      </lineSegments>

      <mesh ref={ring1Ref} rotation={[0, 0, 0]}>
        <torusGeometry args={[2.7, 0.007, 64, 200]} />
        <meshBasicMaterial ref={ring1MatRef} color={accentColor} transparent opacity={0.6 * opacityScale} side={THREE.DoubleSide} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 1.4, 0, Math.PI / 8]}>
        <torusGeometry args={[2.7, 0.007, 64, 200]} />
        <meshBasicMaterial ref={ring2MatRef} color={accentColor} transparent opacity={0.6 * opacityScale} side={THREE.DoubleSide} />
      </mesh>

      <mesh ref={ring3Ref} rotation={[Math.PI / 2.0, 0, Math.PI / 4.0]}>
        <torusGeometry args={[2.7, 0.007, 64, 200]} />
        <meshBasicMaterial ref={ring3MatRef} color={accentColor} transparent opacity={0.3 * opacityScale} side={THREE.DoubleSide} />
      </mesh>
    </>
  )
}

export default function GlobeBackground() {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : false
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    })

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <GlobeMesh
          accentColor={isDarkMode ? '#48b8ac' : '#256D66'}
          opacityScale={isDarkMode ? 0.54 : 1}
        />
      </Canvas>
    </div>
  )
}
