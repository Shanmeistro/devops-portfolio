import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      name: "DevOps GitOps Infra",
      description: "Production-ready Kubernetes manifests and ArgoCD configurations for deploying a Flask web application using GitOps principles.",
      technologies: ["ArgoCD", "Kind", "GitHub Actions", "Grafana", "Docker", "Kubernetes"],
      github: "https://github.com/Shanmeistro/devops-gitops-infra",
    },
    {
      name: "DevOps GitOps Pipeline",
      description: "Application source code and CI/CD pipeline for a comprehensive GitOps deployment demonstration using GitHub Actions, ArgoCD, and Kubernetes.",
      technologies: ["ArgoCD", "GitHub Actions", "Kubernetes", "Python", "CI/CD", "Flask"],
      github: "https://github.com/Shanmeistro/devops-gitops-pipeline",
    },
    {
      name: "Infra Provisioning Demo",
      description: "Automated infrastructure provisioning and configuration across AWS, Azure, and GCP using Terraform and Ansible.",
      technologies: ["IaC", "Terraform", "Ansible", "AWS", "Azure", "GCP", "Azure DevOps", "Gitlab CI/CD"],
      github: "https://github.com/Shanmeistro/infra-provisioning-demo",
    },
    {
      name: "Simple Shell",
      description: "A fully automated and customizable way to create a consistent, efficient, and personalized development environment on your local machine.",
      technologies: ["Shell Scripting", "Automation", "Linux", "Bash", "Zsh", "DevOps"],
      github: "https://github.com/Shanmeistro/simple-shell",
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
