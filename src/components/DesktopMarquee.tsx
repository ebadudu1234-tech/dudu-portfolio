const MESSAGES = [
  "Zihe Wang — Designer from China, focused on branding, print, UI, game, and interactive design.",
  "This portfolio website is inspired by the look and feeling of early computer screens.",
  "You can explore my different projects by clicking the desktop icons.",
];

const DesktopMarquee = () => {
  const text = MESSAGES.join("   ◆   ");
  return (
    <div
      className="absolute bottom-[70px] md:bottom-[64px] left-3 md:left-4 z-[5] pointer-events-none
                 w-[60vw] max-w-[520px] min-w-[220px]"
    >
      <div className="retro-outset bg-[hsl(var(--card))] px-2 py-1 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-[11px] md:text-[12px] font-retro text-foreground">
          <span className="mr-12">{text}</span>
          <span className="mr-12">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default DesktopMarquee;
