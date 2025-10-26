import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "DevOps & CI/CD",
    skills: [
      "GitLab",
      "Azure DevOps",
      "GitHub Actions",
      "Ansible",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Azure IoT Edge",
    ],
  },
  {
    title: "Cloud Platforms",
    skills: ["Microsoft Azure", "Google Cloud Platform", "AWS", "Azure IoT Hub", "Cloud Computing"],
  },
  {
    title: "Operating Systems",
    skills: ["Linux (Ubuntu, CentOS)", "Windows Server 2012-2022", "MacOS", "WSL2"],
  },
  {
    title: "Programming & Scripting",
    skills: ["Python", "Bash", "PowerShell", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQLite3", "Django Admin"],
  },
  {
    title: "Networking & Security",
    skills: ["TCP/IP", "SSH", "Telnet", "RDP", "Nginx", "Fail2ban", "SSL/TLS", "Firewall", "VPN"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "VS Code", "Docker", "OPC DA/UA", "JIRA", "Splunk", "Azure Storage Explorer"],
  },
  {
    title: "Certifications",
    skills: [
      "MS Azure Fundamentals",
      "MS Azure Administrator Associate",
      "MS DevOps Engineer Expert",
      "CompTIA A+",
      "CompTIA Network+",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Core Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
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
