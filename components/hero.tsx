import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-muted/20 relative">
      <div className="absolute top-4 right-4 md:top-8 md:right-8">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
            <Image src="/images/profile.png" alt="Shannon Thomas" fill className="object-cover" priority />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Shannon Thomas</h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">DevOps Engineer</p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          Passionate tech explorer with 10+ years in IT/Software space. Leveraging Python and scripting to solve complex
          challenges across Linux, Cloud, and automation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button asChild size="lg" className="gap-2">
            <a href="#contact">
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
            <a href="https://www.linkedin.com/in/shannon-thomas-28ba5415a/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
            <a href="https://github.com/Shanmeistro" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary">
            <span className="font-mono">Azure Certified</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary">
            <span className="font-mono">DevOps Expert</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary">
            <span className="font-mono">10+ Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}
