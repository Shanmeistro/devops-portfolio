import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">About Me</h2>

        <Card className="p-8 space-y-6">
          <p className="text-lg leading-relaxed text-pretty">
            Hi there! My name is Shannon. I'm a DevOps Engineer within the Commissioning & ITOps & IT landscape,
            leveraging Python and scripting to solve complex challenges across Linux, Cloud, and automation. Actively
            developing expertise in Full Stack and AI/ML to architect and implement next-generation solutions.
          </p>

          <p className="text-lg leading-relaxed text-pretty">
            I love unravelling the wonders of the universe through technology. From Windows to Linux/Unix, AWS to Azure,
            I thrive in the age of discovery. Not afraid of the unknown, I enjoy diving into new tech realms. Fostering
            relations with diverse minds is my jam.
          </p>

          <div className="pt-4 space-y-2 text-muted-foreground">
            <p className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Location:</span> Somerset West, Western Cape, South Africa
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Current Role:</span> Application Support Engineer at Stone
              Three
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
