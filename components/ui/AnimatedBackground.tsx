'use client'

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-primary/30 rounded-full filter blur-[100px] animate-float" />
        <div className="absolute top-2/3 right-1/3 w-96 h-96 bg-secondary/20 rounded-full filter blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-80 h-80 bg-accent/25 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: '6s' }} />
      </div>
      
      {/* Moving particles effect with CSS */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  )
}