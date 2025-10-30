import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="space-y-6">
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
              <img
                src="/images/profile.png"
                alt="Shannon Thomas"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
            DevOps Engineer & Full Stack Innovator
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Bridging infrastructure and software development with 10+ years of experience in automation, CI/CD, and
            cloud solutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button asChild size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 pt-6">
            <Button asChild variant="ghost" size="icon">
              <a href="https://github.com/Shanmeistro" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a
                href="https://www.linkedin.com/in/shannon-thomas-28ba5415a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="mailto:mailshannonthomas@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
