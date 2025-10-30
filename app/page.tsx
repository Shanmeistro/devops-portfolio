"use client"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.body.scrollHeight
      setShowBackToTop(scrollY + windowHeight >= docHeight - 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
      {showBackToTop && (
        <Button
          onClick={handleBackToTop}
          variant="secondary"
          size="lg"
          className="fixed bottom-8 right-8 z-50 shadow-lg"
        >
          Back to Top
        </Button>
      )}
    </main>
  )
}
