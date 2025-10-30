import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, GraduationCap } from "lucide-react"

const certifications = [
  { year: "2023", title: "MS Certified: DevOps Engineer Expert", provider: "Microsoft" },
  { year: "2023", title: "MS Certified: Azure Administrator Associate", provider: "Microsoft" },
  { year: "2022", title: "MS Certified: Azure Fundamentals", provider: "Microsoft" },
  { year: "2022", title: "Introduction to Programming Using Python", provider: "Stone Three" },
  { year: "2020", title: "Docker Mastery: with Kubernetes + Swarm", provider: "Udemy" },
  { year: "2019", title: "AWS Concepts & DevOps Essentials", provider: "Udemy" },
  { year: "2011", title: "CompTIA A+ and Network+", provider: "Northlink College" },
]

const education = [
  { year: "2011", title: "CompTIA A+ and Network+ Certification", institution: "Northlink College" },
  { year: "2009", title: "Matric Certificate", institution: "Sarepta Secondary" },
]

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Education & Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 space-y-6">
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className={`space-y-1 pb-4 border-b last:border-0 last:pb-0 ${cert.title.includes("DevOps Engineer Expert") ? "bg-primary/10 border-primary" : ""}`}>
                  <Badge variant="secondary" className="mb-2">
                    {cert.year}
                  </Badge>
                  <p className="font-semibold leading-relaxed">{cert.title}</p>
                  <p className="text-sm text-muted-foreground">{cert.provider}</p>
                  {cert.title.includes("DevOps Engineer Expert") && (
                    <span className="text-xs text-primary font-bold">Azure DevOps Certification</span>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <span className="text-xs text-muted-foreground">More certifications coming soon...</span>
              </div>
            </div>
          </Card>

          <div className="space-y-8">
            <Card className="p-6 space-y-6">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-1 pb-4 border-b last:border-0 last:pb-0">
                    <Badge variant="secondary" className="mb-2">
                      {edu.year}
                    </Badge>
                    <p className="font-semibold leading-relaxed">{edu.title}</p>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 space-y-4 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-bold">Further Education Goals</h3>
              <p className="text-sm leading-relaxed text-pretty">
                Actively broadening technical repertoire to include Full Stack development and AI/Machine Learning.
                Immediate focus on acquiring AWS and Google Cloud certifications, preparing for future leadership in
                Site Reliability Engineering or comprehensive Full Stack roles.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
