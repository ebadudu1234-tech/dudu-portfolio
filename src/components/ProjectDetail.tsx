import { type ProjectItem } from "@/data/portfolioData";
import emptyStatePlaceholder from "@/assets/empty-state-placeholder.png";

interface ProjectDetailProps {
  project: ProjectItem | null;
  onViewFullProject?: (project: ProjectItem) => void;
}

const ProjectNotFound = () => (
  <div className="p-6 font-retro flex flex-col items-center justify-center text-center gap-3">
    <img
      src={emptyStatePlaceholder}
      alt="Project not available"
      className="w-[80px] h-[80px] object-contain opacity-70"
    />
    <p className="text-[12px] text-muted-foreground">
      Project not available yet.
    </p>
  </div>
);

const ProjectDetail = ({ project, onViewFullProject }: ProjectDetailProps) => {
  if (!project) return <ProjectNotFound />;

  const coverImage = project.thumbnail || project.heroImage || (project.images && project.images[0]);

  return (
    <div className="p-4 font-retro">
      {/* Cover image — large and prominent */}
      {coverImage && (
        <div className="retro-inset mb-4 overflow-hidden aspect-[4/3]">
          <img
            src={coverImage}
            alt={project.title}
            className="w-full h-full object-cover block"
          />
        </div>
      )}

      {/* Header */}
      <div className="mb-2">
        <h2 className="text-[16px] font-bold text-foreground mb-1">
          {project.title}
        </h2>
        <div className="flex gap-3 text-[10px] text-muted-foreground">
          {project.year && <span>{project.year}</span>}
          <span>{project.category}</span>
        </div>
      </div>

      {/* Short description */}
      <p className="text-[12px] text-foreground leading-relaxed mb-4">
        {project.shortDescription || project.description}
      </p>

      {/* View Full Project button */}
      {onViewFullProject && (
        <button
          onClick={() => onViewFullProject(project)}
          className="inline-block retro-outset bg-primary px-4 py-1.5 text-[11px] font-retro text-foreground hover:brightness-95 active:retro-inset cursor-pointer"
        >
          View Full Project →
        </button>
      )}
    </div>
  );
};

export default ProjectDetail;
