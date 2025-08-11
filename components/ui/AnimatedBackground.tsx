'use client'

export function AnimatedBackground() {
  // Fixed particle positions for SSG compatibility
  const particles = [
    { left: '10%', top: '20%', delay: '0s', duration: '20s' },
    { left: '20%', top: '80%', delay: '2s', duration: '25s' },
    { left: '80%', top: '10%', delay: '4s', duration: '22s' },
    { left: '90%', top: '50%', delay: '1s', duration: '28s' },
    { left: '30%', top: '60%', delay: '3s', duration: '24s' },
    { left: '50%', top: '30%', delay: '5s', duration: '26s' },
    { left: '60%', top: '70%', delay: '2.5s', duration: '23s' },
    { left: '15%', top: '50%', delay: '1.5s', duration: '27s' },
    { left: '75%', top: '25%', delay: '3.5s', duration: '21s' },
    { left: '40%', top: '90%', delay: '4.5s', duration: '29s' },
    { left: '25%', top: '15%', delay: '0.5s', duration: '24s' },
    { left: '85%', top: '75%', delay: '2.2s', duration: '26s' },
    { left: '5%', top: '40%', delay: '3.8s', duration: '22s' },
    { left: '95%', top: '20%', delay: '1.2s', duration: '28s' },
    { left: '35%', top: '85%', delay: '4.2s', duration: '25s' },
    { left: '55%', top: '5%', delay: '0.8s', duration: '23s' },
    { left: '70%', top: '45%', delay: '2.8s', duration: '27s' },
    { left: '45%', top: '55%', delay: '3.2s', duration: '24s' },
    { left: '12%', top: '35%', delay: '1.8s', duration: '26s' },
    { left: '65%', top: '95%', delay: '4.8s', duration: '21s' },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full filter blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[128px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full filter blur-[128px] animate-float-slow" />
      </div>
      
      {/* Moving particles with fixed positions */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>
      
      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] animate-grid"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Additional glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-t from-secondary/5 to-transparent blur-3xl" />
    </div>
  )
}