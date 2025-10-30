"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CertificationsSection() {
  const certifications = [
    {
      name: "Microsoft Certified: DevOps Engineer Expert",
      issuer: "Microsoft",
      year: "2023",
      category: "Professional",
      featured: true,
      link: "https://learn.microsoft.com/en-us/certifications/devops-engineer/",
    },
    {
      name: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      year: "2023",
      category: "Professional",
      featured: true,
      link: "https://learn.microsoft.com/en-us/certifications/azure-administrator/",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      year: "2022",
      category: "Foundational",
      link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
    },
    {
      name: "Docker Mastery: Kubernetes + Swarm",
      issuer: "Udemy",
      year: "2020",
      category: "Course",
    },
    {
      name: "AWS Concepts & DevOps Essentials",
      issuer: "Udemy",
      year: "2019",
      category: "Course",
    },
    {
      name: "Python Programming",
      issuer: "Stone Three",
      year: "2022",
      category: "Training",
    },
    {
      name: "Cisco CCNA Network Fundamentals",
      issuer: "Udemy",
      year: "2018",
      category: "Course",
    },
    {
      name: "Linux & Windows Server Administration",
      issuer: "Udemy",
      year: "2019",
      category: "Course",
    },
    {
      name: "CompTIA A+ & Network+",
      issuer: "Northlink College",
      year: "2011",
      category: "Professional",
    },
  ]

  const inProgress = [
    "Cisco CCNA",
    "Certified Kubernetes Application Developer (CKAD)",
    "AWS Solutions Architect",
    "Google Cloud Professional Cloud Architect",
  ]

  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Certifications & Training</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Continuous learning and professional development in DevOps, cloud, and infrastructure.<br />
          <span className="font-semibold text-primary">Azure DevOps Engineer Expert certification showcased below. More certifications coming soon!</span>
        </p>

        {/* Featured Certifications */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Featured Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications
              .filter((cert) => cert.featured)
              .map((cert, index) => (
                <Card key={index} className="border-primary/50 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start justify-between gap-2">
                      <span className="text-balance">{cert.name}</span>
                      {cert.name === "Microsoft Certified: DevOps Engineer Expert" && (
                        <Badge variant="secondary" className="ml-2">Azure DevOps</Badge>
                      )}
                      {cert.link && (
                        <Button asChild variant="ghost" size="icon" className="flex-shrink-0">
                          <a href={cert.link} target="_blank" rel="noopener noreferrer" aria-label="View certification">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{cert.year}</span>
                        </div>
                      </div>
                      <Badge>{cert.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Certifications */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">All Certifications & Training</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications
              .filter((cert) => !cert.featured)
              .map((cert, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-base text-balance">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{cert.year}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {cert.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* In Progress */}
        <Card className="bg-accent/50">
          <CardHeader>
            <CardTitle className="text-lg">Currently Pursuing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {inProgress.map((cert) => (
                <Badge key={cert} variant="secondary" className="text-sm">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
