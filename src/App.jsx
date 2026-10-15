import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { content } from "./content/portfolioContent";
import { ProjectDialog } from "./components/Projects/ProjectDialog";
import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { usePortfolioPreferences } from "./hooks/usePortfolioPreferences";
import { HomePage } from "./pages/HomePage";
import { WorkArchivePage } from "./pages/WorkArchivePage";
import { ProjectCaseStudyPage } from "./pages/ProjectCaseStudyPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { projects } from "./data/portfolioProjects";
import { HOME_ROUTE, resolveAppRoute } from "./config/routes";

export default function App() {
  const { language, theme, toggleLanguage, toggleTheme } = usePortfolioPreferences();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const videoTimes = useRef({});
  const copy = content[language];
  const currentRoute = resolveAppRoute(window.location.pathname);
  const currentProject = currentRoute.name === "project"
    ? projects.find((project) => project.slug === currentRoute.projectSlug)
    : null;
  const isHomePage = currentRoute.name === "home";
  const navigationHref = (sectionId) => (isHomePage ? `#${sectionId}` : `${HOME_ROUTE}#${sectionId}`);

  useEffect(() => {
    document.body.classList.toggle("locked", isMenuOpen || Boolean(selectedProject));
    return () => document.body.classList.remove("locked");
  }, [isMenuOpen, selectedProject]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    if (!window.location.hash) {
      window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0 }));
    }
  }, []);

  function updateVideoTime(projectTitle, time) {
    videoTimes.current[projectTitle] = time;
  }

  return (
    <div className="site">
      <SiteHeader
        copy={copy}
        language={language}
        theme={theme}
        isMenuOpen={isMenuOpen}
        navigationHref={navigationHref}
        onLanguageToggle={toggleLanguage}
        onThemeToggle={toggleTheme}
        onMenuOpen={() => setIsMenuOpen(true)}
        onMenuClose={() => setIsMenuOpen(false)}
      />

      {currentRoute.name === "work" ? (
        <WorkArchivePage copy={copy} language={language} />
      ) : currentRoute.name === "project" && currentProject ? (
        <ProjectCaseStudyPage copy={copy} language={language} project={currentProject} />
      ) : currentRoute.name === "project" ? (
        <NotFoundPage copy={copy} />
      ) : (
        <HomePage
          copy={copy}
          language={language}
          videoTimes={videoTimes.current}
          onVideoTimeChange={updateVideoTime}
          onProjectOpen={setSelectedProject}
        />
      )}

      <SiteFooter copy={copy} homeHref={navigationHref("home")} />

      <AnimatePresence>
        {selectedProject && (
          <ProjectDialog
            project={selectedProject}
            language={language}
            videoTime={videoTimes.current[selectedProject.title] || 0}
            onVideoTimeChange={(time) => updateVideoTime(selectedProject.title, time)}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
