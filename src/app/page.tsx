"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0"
          style={{
            background: "var(--gradient-bg)"
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
          <Card className="bg-gradient-primary dark:text-white text-black/80 shadow-token-xl border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <CardHeader className="relative z-10">
              <CardTitle style={{ fontSize: "var(--s2)" }}>
                Primary Theme
              </CardTitle>
              <CardDescription className="dark:text-white/90 text-black/90" style={{ fontSize: "var(--s0)" }}>
                Gradient backgrounds with token integration
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <Button 
                className="w-full bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
                variant="outline"
                style={{ 
                  borderRadius: "var(--radius)",
                  transitionDuration: "var(--dur-2)",
                  transitionTimingFunction: "var(--ease)"
                }}
              >
                Explore Primary
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
          <Card className="bg-gradient-accent dark:text-white text-black/80 shadow-token-xl border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10" />
            <CardHeader className="relative z-10">
              <CardTitle style={{ fontSize: "var(--s2)" }}>
                Accent Theme
              </CardTitle>
              <CardDescription className="dark:text-white/90 text-black/90" style={{ fontSize: "var(--s0)" }}>
                Cool blues with smooth animations
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-3">
              <div className="flex gap-2">
                {Array.from({ length: 3 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="w-6 h-6 bg-white/30 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
              <Button 
                className="w-full bg-white text-blue-600 hover:bg-white/90"
                style={{ 
                  borderRadius: "var(--radius)",
                  transitionDuration: "var(--dur-1)",
                  transitionTimingFunction: "var(--ease)"
                }}
              >
                Try Accent
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
          <Card className="bg-gradient-warm dark:text-white text-black/80 shadow-token-xl border-0 overflow-hidden relative">
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
              <CardDescription className="dark:text-white/90 text-black/90" style={{ fontSize: "var(--s0)" }}>
                Energetic colors with dynamic effects
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="mb-4">
                <motion.div 
                  className="h-2 dark:bg-white/30 bg-black/30 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                >
                  <motion.div 
                    className="h-full dark:bg-white bg-black rounded-full"
                    animate={{ x: [-20, 100, -20] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>
              <Button 
                className="w-full bg-white text-orange-600 hover:bg-white/90"
                style={{ 
                  borderRadius: "var(--radius)",
                  transitionDuration: "var(--dur-1)",
                  transitionTimingFunction: "var(--ease)"
                }}
              >
                Feel the Warmth
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
            <Card className="h-full shadow-token hover:shadow-token-xl transition-all backdrop-blur-sm bg-card/80 border-border/50 overflow-hidden relative group">
              <div className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
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
