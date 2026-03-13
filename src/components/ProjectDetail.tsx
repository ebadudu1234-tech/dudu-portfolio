import { type ProjectItem } from "@/data/portfolioData";

interface ProjectDetailProps {
  project: ProjectItem;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="p-4 font-retro">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-[16px] font-bold text-foreground mb-1">
          {project.title}
        </h2>
        <div className="flex gap-3 text-[10px] text-muted-foreground">
          {project.year && <span>{project.year}</span>}
          <span>{project.category}</span>
        </div>
      </div>

      {/* Image area placeholder */}
      <div className="retro-inset bg-secondary mb-4 flex items-center justify-center h-[180px] text-[11px] text-muted-foreground">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span>[ Project Image — Replace with your own ]</span>
        )}
      </div>

      {/* Description */}
      <p className="text-[12px] text-foreground leading-relaxed whitespace-pre-line mb-4">
        {project.description}
      </p>

      {/* Extra images placeholder */}
      {project.images && project.images.length > 0 && (
        <div className="grid grid-cols-2 gap-2 mb-4">
          {project.images.map((img, i) => (
            <div key={i} className="retro-inset bg-secondary h-[100px]">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}

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
