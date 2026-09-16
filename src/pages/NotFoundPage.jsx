import { FiArrowLeft } from "react-icons/fi";
import { WORK_ROUTE } from "../config/routes";
import { usePageMetadata } from "../hooks/usePageMetadata";

export function NotFoundPage({ copy }) {
  usePageMetadata({ title: `404 — ${copy.projectNotFound}`, description: copy.projectNotFound });

  return (
    <main className="not-found-page">
      <span>404</span>
      <h1>{copy.projectNotFound}</h1>
      <a href={WORK_ROUTE}><FiArrowLeft />{copy.backToWork}</a>
    </main>
  );
}
