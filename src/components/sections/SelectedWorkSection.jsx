import { FiArrowUpRight } from "react-icons/fi";
import { ProjectReel } from "../Projects/ProjectReel";
import { WORK_ROUTE } from "../../config/routes";

export function SelectedWorkSection({ copy, language, videoTimes, onVideoTimeChange, onProjectOpen }) {
  return (
    <section className="selected-work" id="work">
      <div className="selected-interface"><p>{copy.selected}</p><span>{copy.drag}</span></div>
      <ProjectReel
        language={language}
        videoTimes={videoTimes}
        onVideoTimeChange={onVideoTimeChange}
        onOpen={onProjectOpen}
      />
      <a className="all-work-cta" href={WORK_ROUTE}>{copy.viewAll}<FiArrowUpRight /></a>
      <div className="selected-bottom"><span>{copy.selected}</span></div>
    </section>
  );
}
