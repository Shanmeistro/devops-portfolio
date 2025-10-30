import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      company: "Stone Three",
      role: "Application Support / DevOps Engineer",
      period: "Mar 2021 – Present",
      location: "Somerset West, South Africa",
      description: [
        "Automated and deployed sensor and analytics solutions leveraging Azure IoT Edge, Ansible, and Python scripting",
        "Managed Linux and Windows infrastructure across multiple environments, ensuring reliability and scalability of deployments",
        "Led commissioning activities for on-prem and cloud hybrid systems, focusing on automation, deployment, and testing",
        "Improved team efficiency through internal tools, documentation, and automation scripts",
        "Contributed to the development and integration of CI/CD pipelines and cloud infrastructure under Azure DevOps and GitLab CI",
      ],
      techStack: ["Azure", "IoT Edge", "Ansible", "Docker", "Python", "GitLab", "PostgreSQL", "Bash", "Linux"],
    },
    {
      company: "Wonderlabz (Playsafe)",
      role: "NOC Engineer & Team Lead",
      period: "Apr 2020 – Feb 2021",
      location: "Cape Town, South Africa",
      description: [
        "Oversaw CI/CD processes using Ansible Tower and GoCD, maintaining uptime for production services",
        "Containerized applications using Docker, deployed on GCP and Kubernetes clusters",
        "Administered MongoDB environments and handled incident response through JIRA and PagerDuty",
        "Mentored team members and established monitoring metrics using GCP dashboards and Splunk",
      ],
      techStack: ["Ansible Tower", "Docker", "Kubernetes", "GCP", "Splunk", "MongoDB", "Git", "Bash"],
    },
    {
      company: "Northlink College",
      role: "Senior Enterprise Support Technician",
      period: "Mar 2012 – Apr 2020",
      location: "Cape Town, South Africa",
      description: [
        "Managed enterprise-scale Windows and Linux systems, virtualization, and network operations across multiple campuses",
        "Maintained Active Directory, Office 365, and VMware environments, ensuring consistent system performance",
        "Delivered end-user support and internal system automation; promoted from intern to senior technician within 8 years",
      ],
      techStack: ["Active Directory", "Office 365", "VMware", "Windows Server", "Linux"],
    },
    {
      company: "ZaPOP",
      role: "Junior IT Support Technician",
      period: "Oct 2011 – Mar 2012",
      location: "Bellville, South Africa",
      description: [
        "Provided technical support for Linux/Windows environments and assisted with virtualization and FTP/web server setup",
        "Supported hardware assembly, installation, and remote troubleshooting for client infrastructure",
      ],
      techStack: ["Linux", "Windows", "Virtualization", "FTP", "Web Servers"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Professional Experience</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Over a decade of hands-on experience in DevOps, automation, and infrastructure management
        </p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 md:items-end">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
