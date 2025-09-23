"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useHeroTheme } from "@/contexts/hero-theme-context";

export default function Home() {
  const { activeTheme, setActiveTheme } = useHeroTheme();

  const handleThemeSwitch = (themeType: 'primary' | 'accent' | 'warm') => {
    setActiveTheme(themeType);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: activeTheme === 'primary' 
              ? "var(--gradient-primary)" 
              : activeTheme === 'accent' 
              ? "var(--gradient-accent)" 
              : activeTheme === 'warm' 
              ? "var(--gradient-warm)" 
              : "var(--gradient-bg)"
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-accent rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-secondary rounded-full opacity-10 blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>


      <div className="relative z-10 min-h-screen p-8 flex flex-col items-center justify-center gap-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.3, // var(--dur-2) = 300ms
          ease: [0.4, 0, 0.2, 1] // var(--ease)
        }}
        className="text-center space-y-4"
      >
        <h1 
          className="font-bold leading-tight text-gradient"
          style={{ fontSize: "var(--s5)" }} // 67.35px
        >
          CloneMe Stack Demo
        </h1>
        <p 
          className="text-foreground/70 max-w-2xl mx-auto"
          style={{ fontSize: "var(--s1)" }} // 21.33px
        >
          Next.js 15 + Tailwind + TypeScript + Framer Motion + Zod + shadcn/ui
          <br />
          Showcasing design tokens integration across the entire stack.
        </p>
      </motion.div>

      {/* Demo Cards - Multiple Variations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
          delay: 0.1 
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
      >
        {/* Primary Gradient Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.2 
          }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <Card className="bg-gradient-primary text-white shadow-token-xl border-0 overflow-hidden relative h-80 w-full flex flex-col">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            
            {/* Floating Particles Animation */}
            <div className="absolute inset-0">
              {Array.from({ length: 8 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-white/20 rounded-full"
                  style={{
                    left: `${20 + (i * 8)}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    x: [-5, 5, -5],
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + (i * 0.5),
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
              
              {/* Wave Lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-1">
                  {Array.from({ length: 46 }, (_, i) => (
                    <motion.div
                      key={`wave-${i}`}
                      className="bg-white/15 rounded-full"
                      style={{
                        width: '3px',
                        height: '20px',
                      }}
                      animate={{
                        scaleY: [1, 2 + Math.sin(i * 0.5), 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2 + (i % 3) * 0.2,
                        delay: i * 0.08,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <CardHeader className="relative z-10">
              <CardTitle style={{ fontSize: "var(--s2)" }}>
                Primary Theme
              </CardTitle>
              <CardDescription className="text-white/90" style={{ fontSize: "var(--s0)" }}>
                Gradient backgrounds with token integration
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-col justify-end flex-1">
              <Button 
                onClick={() => handleThemeSwitch('primary')}
                className={`w-full bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all ${
                  activeTheme === 'primary' ? 'ring-2 ring-white/50' : ''
                }`}
                variant="outline"
                style={{ 
                  borderRadius: "var(--radius)",
                  transitionDuration: "var(--dur-2)",
                  transitionTimingFunction: "var(--ease)"
                }}
              >
                {activeTheme === 'primary' ? '✓ Active' : 'Explore Primary'}
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Accent Gradient Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.3 
          }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <Card className="bg-gradient-accent text-white shadow-token-xl border-0 overflow-hidden relative h-80 w-full flex flex-col">
            <div className="absolute inset-0 bg-black/10" />
            
            {/* Enhanced Circle Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Main circles with varied scales */}
                {Array.from({ length: 7 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-white/30 rounded-full"
                    style={{
                      width: `${12 + (i % 3) * 8}px`,
                      height: `${12 + (i % 3) * 8}px`,
                      left: `${(i * 25) - 75}px`,
                      top: `${Math.sin(i) * 20}px`,
                    }}
                    animate={{
                      scale: [0.5, 1.8, 0.5],
                      opacity: [0.2, 0.9, 0.2],
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 2.5 + (i * 0.3),
                      delay: i * 0.15,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
                
                {/* Ripple effect circles */}
                {Array.from({ length: 4 }, (_, i) => (
                  <motion.div
                    key={`ripple-${i}`}
                    className="absolute border-2 border-white/20 rounded-full"
                    style={{
                      width: `${40 + i * 20}px`,
                      height: `${40 + i * 20}px`,
                      left: `-${20 + i * 10}px`,
                      top: `-${20 + i * 10}px`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.1, 0.4, 0.1],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>
            </div>
            
            <CardHeader className="relative z-10">
              <CardTitle style={{ fontSize: "var(--s2)" }}>
                Accent Theme
              </CardTitle>
              <CardDescription className="text-white/90" style={{ fontSize: "var(--s0)" }}>
                Cool blues with smooth animations
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-col justify-end flex-1">
              <Button 
                onClick={() => handleThemeSwitch('accent')}
                className={`w-full bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all ${
                  activeTheme === 'accent' ? 'ring-2 ring-white/50' : ''
                }`}
                variant="outline"
                style={{ 
                  borderRadius: "var(--radius)",
                  transitionDuration: "var(--dur-2)",
                  transitionTimingFunction: "var(--ease)"
                }}
              >
                {activeTheme === 'accent' ? '✓ Active' : 'Try Accent'}
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Warm Gradient Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.4 
          }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <Card className="bg-gradient-warm text-white shadow-token-xl border-0 overflow-hidden relative h-80 w-full flex flex-col">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <CardHeader className="relative z-10">
              <CardTitle style={{ fontSize: "var(--s2)" }}>
                Warm Theme
              </CardTitle>
              <CardDescription className="text-white/90" style={{ fontSize: "var(--s0)" }}>
                Energetic colors with dynamic effects
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4 flex flex-col justify-end flex-1">
              {/* Multiple Stacked Progress Bars with Different Easing */}
              <div className="space-y-2">
                <div className="text-xs text-white/70 mb-1">Animation Curves</div>
                
                {/* Linear */}
                <div className="relative">
                  <div className="text-xs text-white/60 mb-1">Linear</div>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-white rounded-full"
                      animate={{ 
                        width: ["0%", "100%", "0%"] 
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.2
                      }}
                    />
                  </div>
                </div>
                
                {/* Ease Out */}
                <div className="relative">
                  <div className="text-xs text-white/60 mb-1">Ease Out</div>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-white rounded-full"
                      animate={{ 
                        width: ["0%", "100%", "0%"] 
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.4
                      }}
                    />
                  </div>
                </div>
                
                {/* Spring */}
                <div className="relative">
                  <div className="text-xs text-white/60 mb-1">Spring</div>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-white rounded-full"
                      animate={{ 
                        width: ["0%", "100%", "0%"] 
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: [0.175, 0.885, 0.32, 1.275],
                        delay: 0.6
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => handleThemeSwitch('warm')}
                className={`w-full bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all ${
                  activeTheme === 'warm' ? 'ring-2 ring-white/50' : ''
                }`}
                variant="outline"
                style={{ 
                  borderRadius: "var(--radius)",
                  transitionDuration: "var(--dur-2)",
                  transitionTimingFunction: "var(--ease)"
                }}
              >
                {activeTheme === 'warm' ? '✓ Active' : 'Feel the Warmth'}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
          delay: 0.6 
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
      >
        {[
          {
            title: "Design Tokens",
            description: "Consistent colors, typography, spacing, and motion across all components",
            icon: "🎨",
            gradient: "bg-gradient-cool"
          },
          {
            title: "Tailwind Integration", 
            description: "Seamless integration with Tailwind CSS using CSS custom properties",
            icon: "💨",
            gradient: "bg-gradient-primary"
          },
          {
            title: "Motion System",
            description: "Framer Motion animations using standardized easing and duration tokens",
            icon: "✨",
            gradient: "bg-gradient-secondary"
          }
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.7 + index * 0.1 
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { duration: 0.2 }
            }}
          >
            <div className="relative h-full group">
              {/* Gradient border background */}
              <motion.div 
                className="absolute inset-0 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                animate={{
                  background: activeTheme === 'primary' 
                    ? "var(--gradient-primary)" 
                    : activeTheme === 'accent' 
                    ? "var(--gradient-accent)" 
                    : activeTheme === 'warm' 
                    ? "var(--gradient-warm)" 
                    : "var(--gradient-primary)"
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main card with inset positioning to create border effect */}
              <Card className="h-full shadow-token hover:shadow-token-xl transition-all backdrop-blur-sm bg-card/90 border-0 overflow-hidden relative m-0.5 rounded-[10px]">
                <div className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <CardHeader className="relative z-10">
                <motion.div 
                  className="text-4xl mb-2"
                  style={{ fontSize: "var(--s3)" }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.2 }
                  }}
                >
                  {feature.icon}
                </motion.div>
                <CardTitle 
                  className="group-hover:text-primary transition-colors"
                  style={{ fontSize: "var(--s2)" }}
                >
                  {feature.title}
                </CardTitle>
                <CardDescription 
                  className="group-hover:text-foreground/80 transition-colors"
                  style={{ fontSize: "var(--s0)" }}
                >
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
          delay: 1.0 
        }}
        className="mt-16 text-center"
      >
        <div className="backdrop-blur-sm bg-card/30 rounded-full px-6 py-3 border border-border/30">
          <p 
            className="text-muted-foreground"
            style={{ fontSize: "var(--s0)" }}
          >
            Built with the <span className="text-primary font-semibold">CloneMe</span> stack • Ready for your next project ✨
          </p>
        </div>
      </motion.footer>
      </div>
    </div>
  );
}
