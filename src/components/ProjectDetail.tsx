import { type ProjectItem } from "@/data/portfolioData";
import emptyStatePlaceholder from "@/assets/empty-state-placeholder.png";

interface ProjectDetailProps {
  project: ProjectItem | null;
  onViewFullProject?: (project: ProjectItem) => void;
}

const ProjectNotFound = () => (
  <div className="p-6 font-retro flex flex-col items-center justify-center text-center gap-3">
    <img src={emptyStatePlaceholder} alt="Project not available" className="w-[90px] h-[90px] object-contain opacity-70" />
    <p className="text-[14px] md:text-[13px] text-muted-foreground">Project not available yet.</p>
  </div>
);

const ProjectDetail = ({ project, onViewFullProject }: ProjectDetailProps) => {
  if (!project) return <ProjectNotFound />;

  const coverImage = project.thumbnail || project.heroImage || (project.images && project.images[0]);

  return (
    <div className="p-5 font-retro">
      {coverImage && (
        <div className="retro-inset mb-4 overflow-hidden aspect-[4/3]">
          <img src={coverImage} alt={project.title} className="w-full h-full object-cover block" />
        </div>
      )}

      <div className="mb-3">
        <h2 className="text-[18px] md:text-[17px] font-bold text-foreground mb-1">{project.title}</h2>
        <div className="flex gap-3 text-[12px] md:text-[11px] text-muted-foreground">
          {project.year && <span>{project.year}</span>}
          <span>{project.category}</span>
        </div>
      </div>

      <p className="text-[14px] md:text-[13px] text-foreground leading-relaxed mb-4">
        {project.shortDescription || project.description}
      </p>

      {onViewFullProject && (
        <button
          onClick={() => onViewFullProject(project)}
          className="inline-block retro-outset bg-primary px-5 py-2 text-[13px] md:text-[12px] font-retro text-foreground hover:brightness-95 active:retro-inset cursor-pointer"
        >
          View Full Project →
        </button>
      )}
    </div>
  );
};

export default ProjectDetail;
