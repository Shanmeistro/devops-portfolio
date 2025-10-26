import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Application Support Engineer",
    company: "Stone Three",
    period: "Mar 2021 - Present",
    duration: "4 years, 5 months",
    highlights: [
      "Sensor and Analytics solution deployment using Azure IoT edge Devices and IoT hubs",
      "Linux and Windows Systems Administration (Ubuntu LTS 18.04-22.04, Windows Server 2012-2022)",
      "CI/CD Deployments using GitLab and Azure DevOps",
      "Database Administration - PostgreSQL, SQLite3, Django",
      "Automation with Ansible and Python scripting",
      "Docker containerization with Azure IoT edge modules",
      "OPC DA and UA implementation for industrial systems",
    ],
    technologies: ["Azure", "Linux", "Docker", "Python", "GitLab", "PostgreSQL", "Ansible"],
  },
  {
    title: "Network Operations Center Engineer & Team Lead",
    company: "Wonderlabz (Previously Playsafe)",
    period: "Apr 2020 - Feb 2021",
    duration: "11 months",
    highlights: [
      "Cloud Computing with GCP and AWS",
      "CI/CD Deployments using Ansible Tower and GoCD",
      "Containerization with Docker, GCP, and Kubernetes",
      "MongoDB administration and optimization",
      "Dashboard SLA Monitoring with GCP and Splunk",
      "Customer Support and Team Leadership",
    ],
    technologies: ["GCP", "AWS", "Kubernetes", "Docker", "Ansible", "MongoDB", "Splunk"],
  },
  {
    title: "Senior Enterprise Support Technician",
    company: "Northlink College",
    period: "Mar 2012 - Apr 2020",
    duration: "8 years 2 months",
    highlights: [
      "Windows Administration and Active Directory Maintenance",
      "Virtualization and System Imaging",
      "Office 365 Support Engineer",
      "Junior Network Admin - Server and network equipment maintenance",
      "LAN troubleshooting and IoT device support",
      "Acquired skills in Cloud computing (AWS, Azure), Docker, and scripting",
    ],
    technologies: ["Windows Server", "Active Directory", "Office 365", "VMware", "Azure", "AWS"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 md:p-8 space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <p className="text-lg text-primary font-semibold">{exp.company}</p>
                <p className="text-sm text-muted-foreground">
                  {exp.period} • {exp.duration}
                </p>
              </div>

              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="font-mono">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
