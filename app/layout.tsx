import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shannon Thomas | DevOps Engineer & Full Stack Innovator",
  description:
    "DevOps Engineer with 10+ years of experience through sysadmin into automation, CI/CD, cloud infrastructure, and full-stack development. Specializing in Azure, Kubernetes, Ansible, and Python.",
  keywords: ["DevOps", "Azure", "Kubernetes", "CI/CD", "Ansible", "Python", "Full Stack", "Cloud Infrastructure"],
  authors: [{ name: "Shannon Thomas" }],
  openGraph: {
    title: "Shannon Thomas | DevOps Engineer",
    description: "DevOps Engineer specializing in automation, CI/CD, and cloud infrastructure",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
