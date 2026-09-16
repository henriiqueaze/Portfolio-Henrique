import { useMemo } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { OptimizedVideo } from "../components/media/OptimizedVideo";
import { createProjectRoute, WORK_ROUTE } from "../config/routes";
import { projects } from "../data/portfolioProjects";
import { usePageMetadata } from "../hooks/usePageMetadata";

export function ProjectCaseStudyPage({ copy, language, project }) {
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const caseStudy = project.caseStudy[language];
  const pageTitle = `${project.title} — ${copy.caseStudyLabel}`;
  const projectRoute = createProjectRoute(project.slug);
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      description: project.description[language],
      creator: { "@type": "Person", name: "Henrique Azevedo" },
      keywords: project.tech.join(", "),
      dateCreated: project.year,
    }),
    [language, project],
  );

  usePageMetadata({
    title: pageTitle,
    description: project.description[language],
    path: projectRoute,
    image: project.image,
    structuredData,
  });

  return (
    <main className="case-study">
      <header className="case-study-hero" style={{ "--project-accent": project.accent }}>
        <a className="case-study-back" href={WORK_ROUTE}><FiArrowLeft />{copy.backToWork}</a>
        <div className="case-study-meta">
          <span>{copy.caseStudyLabel}</span>
          <span>{project.category[language]}</span>
          <span>{project.year}</span>
        </div>
        <h1>{project.title}</h1>
        <p>{project.description[language]}</p>
      </header>

      <div className={`case-study-media ${project.fit}`}>
        {project.video ? (
          <OptimizedVideo
            source={project.video}
            poster={project.image}
            className={`project-video ${project.fit}`}
            label={`${copy.projectVideo}: ${project.title}`}
            eager
            controls
          />
        ) : (
          <img src={project.image} alt={`${project.title} — ${project.category[language]}`} className={project.fit} />
        )}
      </div>

      <section className="case-study-overview" aria-label={copy.caseStudyLabel}>
        <p className="case-study-introduction">{project.details[language]}</p>
        <div className="case-study-facts">
          <article><span>01</span><h2>{copy.challenge}</h2><p>{caseStudy.challenge}</p></article>
          <article><span>02</span><h2>{copy.solution}</h2><p>{caseStudy.solution}</p></article>
          <article><span>03</span><h2>{copy.contribution}</h2><p>{caseStudy.contribution}</p></article>
          <article><span>04</span><h2>{copy.outcome}</h2><p>{caseStudy.outcome}</p></article>
        </div>
      </section>

      <section className="case-study-stack" aria-label={copy.technologies}>
        <span>{copy.technologies}</span>
        <div>{project.tech.map((technology) => <i key={technology}>{technology}</i>)}</div>
        <a href={project.url} target="_blank" rel="noreferrer">
          {project.url.includes("github") ? copy.repository : copy.visit}<FiArrowUpRight />
        </a>
      </section>

      <nav className="case-study-navigation" aria-label={copy.projects}>
        <a href={createProjectRoute(previousProject.slug)}>
          <small>{copy.previousProject}</small><span><FiArrowLeft />{previousProject.title}</span>
        </a>
        <a href={createProjectRoute(nextProject.slug)}>
          <small>{copy.nextProject}</small><span>{nextProject.title}<FiArrowRight /></span>
        </a>
      </nav>
    </main>
  );
}
