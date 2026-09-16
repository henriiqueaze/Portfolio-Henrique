import { AboutStory } from "../components/About/AboutStory";
import { ExperienceSection } from "../components/Experience/ExperienceSection";
import { ContactSection } from "../components/sections/ContactSection";
import { HeroSection } from "../components/sections/HeroSection";
import { SelectedWorkSection } from "../components/sections/SelectedWorkSection";
import { usePageMetadata } from "../hooks/usePageMetadata";

export function HomePage({ copy, language, videoTimes, onVideoTimeChange, onProjectOpen }) {
  usePageMetadata({
    title: language === "pt"
      ? "Henrique Azevedo — Desenvolvedor Full-Stack"
      : "Henrique Azevedo — Full-Stack Developer",
    description: language === "pt"
      ? "Portfólio de Henrique Azevedo, desenvolvedor full-stack especializado em produtos digitais, sistemas e APIs."
      : "Henrique Azevedo's portfolio — a full-stack developer focused on digital products, systems and APIs.",
    image: "/og.png",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Henrique Azevedo",
      jobTitle: copy.role,
      sameAs: [
        "https://github.com/henriiqueaze",
        "https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/",
      ],
    },
  });

  return (
    <main>
      <HeroSection copy={copy} />
      <AboutStory language={language} />
      <SelectedWorkSection
        copy={copy}
        language={language}
        videoTimes={videoTimes}
        onVideoTimeChange={onVideoTimeChange}
        onProjectOpen={onProjectOpen}
      />
      <ExperienceSection language={language} />
      <ContactSection copy={copy} />
    </main>
  );
}
