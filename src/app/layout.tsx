import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI-Powered Fraud Detection | Auto Insurance Claims Management",
  description:
    "Advanced AI tool for detecting fraud in auto insurance claims using predictive modeling. Smarter claims management with real-time risk scoring.",
  keywords: "AI fraud detection, auto insurance, predictive modeling, claims management, machine learning",
  authors: [{ name: "AI Fraud Detection Team" }],
  openGraph: {
    title: "AI-Powered Fraud Detection for Auto Insurance",
    description: "Revolutionary AI tool for smarter claims management and fraud detection",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
