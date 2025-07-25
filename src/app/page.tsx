import HeroSection from "@/components/hero"
import HowItWorks from "@/components/hiw"
import CoreFeatures from "@/components/cf"
import DashboardPreview from "@/components/dp"
import Testimonials from "@/components/t"
import FAQ from "@/components/faq"
import CallToAction from "@/components/cta"
import Footer from "@/components/foooter"

export default function Home() {
  return (
    <main className="min-h-screen bg-white w-screen">
      <HeroSection />
      <HowItWorks />
      <CoreFeatures />
      <DashboardPreview />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  )
}
