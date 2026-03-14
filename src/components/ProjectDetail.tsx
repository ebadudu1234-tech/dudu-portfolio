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
      className="w-[100px] h-[100px] object-contain opacity-70"
    />
    <p className="text-[12px] text-muted-foreground">
      Project not available yet.
    </p>
  </div>
);

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  if (!project) return <ProjectNotFound />;

  const hasThumb = !!project.thumbnail;
  const hasImages = !!project.images && project.images.length > 0;

  const paragraphs = project.description
    ? project.description.split("\n\n").filter(Boolean)
    : [];

  const allImages = [
    ...(hasThumb ? [project.thumbnail!] : []),
    ...(hasImages ? project.images! : []),
  ];

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

      {/* Alternating text and images */}
      <div className="space-y-4">
        {paragraphs.length > 0 ? (
          paragraphs.map((paragraph, index) => (
            <div key={index} className="space-y-3">
              <p className="text-[12px] text-foreground leading-relaxed whitespace-pre-line">
                {paragraph}
              </p>

              {allImages[index] && (
                <div className="retro-inset overflow-hidden">
                  <img
                    src={allImages[index]}
                    alt={`${project.title} image ${index + 1}`}
                    className="w-full h-[220px] object-cover block"
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          <>
            {allImages.map((img, index) => (
              <div key={index} className="retro-inset overflow-hidden mb-4">
                <img
                  src={img}
                  alt={`${project.title} image ${index + 1}`}
                  className="w-full h-[220px] object-cover block"
                />
              </div>
            ))}

            <p className="text-[12px] text-foreground leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </>
        )}
      </div>

      {/* Link button */}
      {project.link && (
        <div className="mt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block retro-outset bg-primary px-4 py-1 text-[11px] font-retro text-foreground hover:brightness-95 active:retro-inset"
          >
            View Project →
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
  );
};

export default ProjectDetail;
