"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

export function AboutSection() {
  const handleDownloadCV = (format: "pdf" | "docx") => {
    const fileMap = {
      pdf: "/docs/Shannon Thomas DevOps CV Modern.pdf",
      docx: "/docs/Shannon Thomas DevOps CV Modern.docx",
    }
    const link = document.createElement("a")
    link.href = fileMap[format]
    link.download = format === "pdf" ? "Shannon_Thomas_CV.pdf" : "Shannon_Thomas_CV.docx"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const skills = {
    "DevOps & Automation": [
      "CI/CD",
      "GitLab",
      "Azure DevOps",
      "GitHub Actions",
      "Ansible",
      "Terraform",
      "Docker",
      "Kubernetes",
    ],
    "Cloud Platforms": ["Azure", "AWS", "GCP", "Vercel"],
    Programming: ["Python", "Bash", "PowerShell", "JavaScript", "TypeScript", "React", "Next.js"],
    Databases: ["PostgreSQL", "MongoDB", "SQLite3"],
    Systems: ["Linux (Ubuntu)", "Windows Server", "WSL2"],
  }

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Passionate tech explorer bridging infrastructure and software development
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 10 years in the IT and software engineering landscape, I blend hands-on experience in DevOps
                automation, CI/CD pipelines, and cloud infrastructure with an ever-evolving passion for full-stack
                development and AI/ML-assisted innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a DevOps Engineer within commissioning and IT operations, I leverage Python, Linux, and automation
                tooling to solve complex deployment challenges, streamline delivery, and enhance developer productivity.
                My work bridges infrastructure and software development — from Kubernetes and Ansible automation to
                GitLab and Azure DevOps pipelines — creating reliable, scalable environments that drive business
                outcomes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Curiosity and collaboration define my approach. I thrive at the intersection of systems, code, and
                creativity, constantly learning new technologies to architect next-generation solutions and share
                knowledge with those around me.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Accelerated deployment efficiency by ~85% at Stone Three, reducing multi-server provisioning from
                    two weeks to under two days using Ansible automation
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Optimized 70% of infrastructure deployment workflows with automated network/firewall testing and
                    pre-provisioning installs
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Promoted to first team lead at Wonderlabz for initiative and mentorship; trained two engineers, one
                    progressing to team lead within months
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Spearheaded CI/CD improvements using GitLab and Azure DevOps, ensuring stable release cycles across
                    distributed systems
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-6">Core Competencies</h3>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Download My Full CV</h3>
                  <p className="text-sm text-muted-foreground">
                    Get the complete details of my experience, education, and certifications.<br />
                    References available upon request. For reference requests, please contact me via the contact form.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => handleDownloadCV("pdf")} className="gap-2 flex-shrink-0">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
                <Button onClick={() => handleDownloadCV("docx")} className="gap-2 flex-shrink-0">
                  <Download className="h-4 w-4" />
                  Download DOCX
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
