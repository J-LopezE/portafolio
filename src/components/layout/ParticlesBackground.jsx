import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useEffect, useState, useCallback } from 'react'
import { useThemeContext } from '../../store/ThemeContext'

const ParticlesBackground = () => {
  const { isDark } = useThemeContext()
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  const particleColor = isDark ? '#6C63FF' : '#5B52E8'
  const lineColor = isDark ? '#A78BFA' : '#7C6FD4'

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: { value: 70, density: { enable: true, area: 800 } },
          color: { value: particleColor },
          links: {
            enable: true,
            color: lineColor,
            distance: 130,
            opacity: 0.25,
            width: 0.8,
          },
          move: {
            enable: true,
            speed: 0.5,
            outModes: { default: 'bounce' },
          },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesBackground