import { type ProjectItem } from "@/data/portfolioData";
import emptyStatePlaceholder from "@/assets/empty-state-placeholder.png";

interface FullProjectViewProps {
  project: ProjectItem;
  onClose: () => void;
}

const FullProjectView = ({ project, onClose }: FullProjectViewProps) => {
  const heroImage = project.heroImage || project.thumbnail || (project.images && project.images[0]);
  const gallery = project.detailImages || project.images || [];

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col" style={{ background: "hsl(var(--primary))" }}>
      {/* Title bar */}
      <div className="flex items-center h-[32px] md:h-[30px] px-3 gap-2 shrink-0 retro-window-titlebar-active">
        <button
          className="w-[18px] h-[18px] md:w-[16px] md:h-[16px] rounded-none retro-outset bg-primary flex items-center justify-center shrink-0 hover:brightness-90"
          onClick={onClose}
          title="Close"
        >
          <span className="text-[11px] md:text-[10px] leading-none font-bold text-foreground">✕</span>
        </button>
        <div className="flex-1 text-center text-[14px] md:text-[13px] font-retro text-foreground truncate leading-[32px] md:leading-[30px]">
          {project.title}
        </div>
        <div className="w-[18px] md:w-[16px]" />
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-auto retro-inset m-[2px] bg-card">
        <div className="max-w-[1000px] mx-auto p-6 md:p-8 font-retro">
          {heroImage && (
            <div className="retro-inset mb-6 overflow-hidden aspect-[4/3]">
              <img src={heroImage} alt={project.title} className="w-full h-full object-cover block" />
            </div>
          )}

          <div className="mb-4">
            <h1 className="text-[24px] md:text-[22px] font-bold text-foreground mb-1">{project.title}</h1>
            <div className="flex gap-3 text-[13px] md:text-[12px] text-muted-foreground">
              {project.year && <span>{project.year}</span>}
              <span>{project.category}</span>
            </div>
          </div>

          <p className="text-[15px] md:text-[14px] text-foreground leading-relaxed whitespace-pre-line mb-6">
            {project.fullDescription || project.description}
          </p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block retro-outset bg-primary px-5 py-2 text-[13px] md:text-[12px] font-retro text-foreground hover:brightness-95 active:retro-inset mb-6"
            >
              Visit Project →
            </a>
          )}

          {gallery.length > 0 && (
            <div className="flex flex-col gap-6 mb-6">
              <h3 className="text-[15px] md:text-[14px] font-bold text-foreground border-b border-border pb-1">
                Project Gallery
              </h3>
              {gallery.map((img, i) => (
                <div key={i} className="retro-inset overflow-hidden">
                  <img src={img} alt={`${project.title} detail ${i + 1}`} className="w-full h-auto block" />
                </div>
              ))}
            </div>
          )}

          <button
            onClick={onClose}
            className="retro-outset bg-primary px-5 py-2 text-[13px] md:text-[12px] font-retro text-foreground hover:brightness-95 active:retro-inset cursor-pointer mb-4"
          >
            ← Back to Desktop
          </button>
        </div>
      </div>

      <div className="h-[24px] md:h-[22px] shrink-0 flex items-center px-3 text-[12px] md:text-[11px] font-retro text-muted-foreground border-t border-border" style={{ background: "hsl(var(--primary))" }}>
        {project.title} — Full Project View
      </div>
    </div>
  );
};

export default FullProjectView;
