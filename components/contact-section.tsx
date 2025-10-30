import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, MapPin, FileText } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in collaboration or have a project in mind? Let's connect!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:mailshannonthomas@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      mailshannonthomas@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Somerset West, Western Cape, South Africa</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-4">Connect With Me</h3>
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
                  <a href="https://github.com/Shanmeistro" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub Profile
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-accent/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">References</h3>
                <p className="text-sm text-muted-foreground">
                  Professional references are available upon request. Please feel free to reach out via email to request reference information.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
