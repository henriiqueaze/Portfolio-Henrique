import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";

export function SiteFooter({ copy, homeHref }) {
  return (
    <footer>
      <div><span>© 2026</span><p>{copy.footer}</p></div>
      <div>
        <a href="https://github.com/henriiqueaze" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
        <a href="https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
      </div>
      <a href={homeHref}>{copy.back}<FiArrowUpRight /></a>
    </footer>
  );
}
