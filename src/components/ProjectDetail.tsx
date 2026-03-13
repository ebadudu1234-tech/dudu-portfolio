import { type ProjectItem } from "@/data/portfolioData";
import emptyStatePlaceholder from "@/assets/empty-state-placeholder.png";

interface ProjectDetailProps {
  project: ProjectItem | null;
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

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  if (!project) return <ProjectNotFound />;

  const hasThumb = !!project.thumbnail;
  const hasImages = project.images && project.images.length > 0;

  return (
    <div className="p-4 font-retro">
      {/* Thumbnail — only if exists */}
      {hasThumb && (
        <div className="retro-inset mb-4 overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-[180px] object-cover block"
          />
        </div>
      )}

      {/* Extra images — only if exist */}
      {hasImages && (
        <div className="grid grid-cols-2 gap-2 mb-4">
          {project.images!.map((img, i) => (
            <div key={i} className="retro-inset overflow-hidden">
              <img src={img} alt="" className="w-full h-[100px] object-cover block" />
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      <div className="mb-3">
        <h2 className="text-[16px] font-bold text-foreground mb-1">
          {project.title}
        </h2>
        <div className="flex gap-3 text-[10px] text-muted-foreground">
          {project.year && <span>{project.year}</span>}
          <span>{project.category}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[12px] text-foreground leading-relaxed whitespace-pre-line mb-4">
        {project.description}
      </p>

      {/* Link button */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block retro-outset bg-primary px-4 py-1 text-[11px] font-retro text-foreground hover:brightness-95 active:retro-inset"
        >
          View Project →
        </a>
      )}
    </div>
  );
};

export default ProjectDetail;
