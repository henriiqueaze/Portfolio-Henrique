import { technologies } from "../../data/portfolioTechnologies";

export function TechnologyLoop({ language }) {
  const repeated = [...technologies, ...technologies];
  const label =
    language === "pt" ? "Tecnologias que utilizo" : "Technologies I use";
  return (
    <div className="technology-loop" role="region" aria-label={label}>
      <div className="technology-loop-fade left" aria-hidden="true" />
      <div className="technology-loop-fade right" aria-hidden="true" />
      <div className="technology-loop-track">
        {repeated.map(([name, icon], index) => (
          <span
            className="technology-loop-item"
            key={`${name}-${index}`}
            aria-hidden={index >= technologies.length}
          >
            {icon}
            <b>{name}</b>
          </span>
        ))}
      </div>
    </div>
  );
}
