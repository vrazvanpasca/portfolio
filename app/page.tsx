import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
