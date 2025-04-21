import HeroSection from "@/components/hero-section"
import WhoWeHelp from "@/components/who-we-help"
import Services from "@/components/services"
import Pricing from "@/components/pricing"
import Portfolio from "@/components/portfolio"
import AboutFounder from "@/components/about-founder"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import FAQ from "@/components/faq"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <WhoWeHelp />
      <Services />
      <Pricing />
      <Portfolio />
      <AboutFounder />
      <Testimonials />
      <Contact />
      <FAQ />
    </div>
  )
}
