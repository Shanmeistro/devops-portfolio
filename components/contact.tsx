import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Let's connect and explore the endless possibilities together!
          </p>
        </div>

        <Card className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:mailshannonthomas@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mailshannonthomas@gmail.com
                  </a>
                  <br />
                  <a
                    href="mailto:Shannon.Thomas@stonethree.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Shannon.Thomas@stonethree.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+27814811400" className="text-muted-foreground hover:text-primary transition-colors">
                    +27 81 481 1400
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-muted-foreground">Somerset West, Western Cape, South Africa</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Connect Online</h3>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start gap-3 bg-transparent">
                  <a
                    href="https://www.linkedin.com/in/shannon-thomas-28ba5415a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn Profile
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start gap-3 bg-transparent">
                  <a href="https://github.com/shannonthomas" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub Profile
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <footer className="text-center text-sm text-muted-foreground pt-8 border-t">
          <p>© 2025 Shannon Thomas. Built with Next.js and deployed on Vercel.</p>
        </footer>
      </div>
    </section>
  )
}
