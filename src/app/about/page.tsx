import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0"
          style={{
            background: "var(--gradient-warm)"
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen p-8 flex flex-col items-center justify-center gap-8">
        <div className="w-full max-w-2xl">
        <Card className="shadow-token-lg bg-background/90 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="text-gradient mb-4" style={{ fontSize: "var(--s4)" }}>
              About CloneMe
            </CardTitle>
            <CardDescription
              style={{ fontSize: "var(--s1)" }}
              className="text-muted-foreground"
            >
              Learn more about the CloneMe stack template
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p style={{ fontSize: "var(--s0)" }} className="text-foreground leading-relaxed">
                This is the <strong>CloneMe base template</strong> – a modern,
                production-ready foundation for building web applications with
                Next.js 15, Tailwind CSS v4, TypeScript, and a comprehensive
                design token system.
              </p>

              <p style={{ fontSize: "var(--s0)" }} className="text-foreground leading-relaxed">
                The template includes everything you need to get started
                quickly: theme switching, responsive design, beautiful
                components from shadcn/ui, smooth animations with Framer Motion,
                and a scalable token-based design system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <h3 style={{ fontSize: "var(--s2)" }} className="font-semibold text-foreground">
                  Stack
                </h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li style={{ fontSize: "var(--s-1)" }}>Next.js 15</li>
                  <li style={{ fontSize: "var(--s-1)" }}>Tailwind CSS v4</li>
                  <li style={{ fontSize: "var(--s-1)" }}>TypeScript</li>
                  <li style={{ fontSize: "var(--s-1)" }}>Framer Motion</li>
                  <li style={{ fontSize: "var(--s-1)" }}>shadcn/ui</li>
                  <li style={{ fontSize: "var(--s-1)" }}>Zod</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 style={{ fontSize: "var(--s2)" }} className="font-semibold text-foreground">
                  Features
                </h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li style={{ fontSize: "var(--s-1)" }}>Design Tokens</li>
                  <li style={{ fontSize: "var(--s-1)" }}>Theme Support</li>
                  <li style={{ fontSize: "var(--s-1)" }}>Responsive Design</li>
                  <li style={{ fontSize: "var(--s-1)" }}>Type Safety</li>
                  <li style={{ fontSize: "var(--s-1)" }}>Modern Tooling</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}
