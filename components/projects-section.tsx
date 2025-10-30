import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      name: "DevOps GitOps Infra",
      description: "Infrastructure as Code automation using Terraform and Ansible for streamlined deployment workflows",
      technologies: ["Terraform", "Ansible", "GitOps", "IaC"],
      github: "https://github.com/Shanmeistro",
    },
    {
      name: "GitOps Pipeline Demo",
      description: "CI/CD workflow example integrating GitHub Actions and Kubernetes for automated deployments",
      technologies: ["GitHub Actions", "Kubernetes", "CI/CD", "Docker"],
      github: "https://github.com/Shanmeistro",
    },
    {
      name: "Infra Provisioning Demo",
      description: "Python + Terraform hybrid provisioning script for automated infrastructure setup",
      technologies: ["Python", "Terraform", "Automation", "Cloud"],
      github: "https://github.com/Shanmeistro",
    },
    {
      name: "Simple Shell",
      description: "Bash utility collection for local automation and testing workflows",
      technologies: ["Bash", "Shell Scripting", "Automation", "Linux"],
      github: "https://github.com/Shanmeistro",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Personal Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Open-source DevOps projects showcasing automation, CI/CD, and infrastructure as code
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl flex items-start justify-between gap-2">
                  <span className="text-balance">{project.name}</span>
                  <Button asChild variant="ghost" size="icon" className="flex-shrink-0">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <Github className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">View All Repositories</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore my complete collection of DevOps projects, automation scripts, and infrastructure code on
                    GitHub
                  </p>
                </div>
              </div>
              <Button asChild className="gap-2 flex-shrink-0">
                <a href="https://github.com/Shanmeistro" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Visit GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
