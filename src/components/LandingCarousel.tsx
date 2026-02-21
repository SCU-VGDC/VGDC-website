import React from 'react'
import '../styles/LandingCarousel.css'

export interface LandingCarouselProps {
  size?: number
  rotationSpeed?: number
  roadThickness?: number
  stripeWidth?: number
  dashLengthDeg?: number
  gapLengthDeg?: number
  arcHeight?: number
  arcOffset?: number
}

const LandingCarousel = ({
  rotationSpeed = 35,
  arcHeight = 305,
}: LandingCarouselProps): React.ReactElement => {
  return (
    <div
      className="landing-carousel-container"
      style={{ height: `${arcHeight}px`, position: 'relative' }}
    >
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 3,
          textAlign: 'center',
          color: 'var(--text-color, #FFF)',
          width: '100%',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 'bold',
            textShadow: '0 4px 15px rgba(0,0,0,0.4)',
            margin: 0,
          }}
        />
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            opacity: 0.9,
          }}
        />
      </div>

      <svg
        viewBox="0 6 100 30"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: '100%',
          height: '100%',
          transform: 'scale(2)',
          overflow: 'visible',
          transformOrigin: 'top',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#872534"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#fff"
          strokeDasharray="1 8"
          strokeWidth="8"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="360 50 50"
            to="0 50 50"
            dur={`${rotationSpeed}s`}
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  )
}

export default LandingCarousel
