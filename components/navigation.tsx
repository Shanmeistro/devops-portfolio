"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-foreground">
            Shannon Thomas
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <Button onClick={() => handleDownloadCV("pdf")} size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Download CV (PDF)
            </Button>
            <Button onClick={() => handleDownloadCV("docx")} size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Download CV (DOCX)
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <Button onClick={() => handleDownloadCV("pdf")} size="sm" className="w-full gap-2">
              <Download className="h-4 w-4" />
              Download CV (PDF)
            </Button>
            <Button onClick={() => handleDownloadCV("docx")} size="sm" className="w-full gap-2">
              <Download className="h-4 w-4" />
              Download CV (DOCX)
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
