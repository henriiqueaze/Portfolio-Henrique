import { FiArrowLeft } from "react-icons/fi";
import { ProjectArchive } from "../components/Projects/ProjectArchive";
import { WORK_ROUTE } from "../config/routes";
import { usePageMetadata } from "../hooks/usePageMetadata";

export function WorkArchivePage({ copy, language }) {
  usePageMetadata({
    title: `${copy.allTitle.replace(".", "")} — Henrique Azevedo`,
    description: language === "pt"
      ? "Arquivo de projetos e produtos digitais desenvolvidos por Henrique Azevedo."
      : "An archive of digital projects and products developed by Henrique Azevedo.",
    path: WORK_ROUTE,
    image: "/og.png",
  });

  return (
    <main className="work-route">
      <a className="archive-back" href="/"><FiArrowLeft />{copy.archiveBack}</a>
      <ProjectArchive language={language} />
    </main>
  );
}
