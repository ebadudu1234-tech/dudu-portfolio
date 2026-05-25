const MESSAGES = [
  "Zihe Wang — Designer from China.",
  "Inspired by early computer screens.",
  "Click the desktop icons to view my work.",
];

const ITEM_HEIGHT = 32; // px per line
const VISIBLE = 1;

const DesktopMarquee = () => {
  // Duplicate the list to create a seamless vertical loop
  const loop = [...MESSAGES, ...MESSAGES];
  const totalHeight = MESSAGES.length * ITEM_HEIGHT;
  const duration = MESSAGES.length * 3.2; // seconds

  return (
    <div className="absolute bottom-[72px] md:bottom-[68px] left-3 md:left-5 z-[5] pointer-events-none inline-flex">
      <div
        className="retro-outset bg-[hsl(var(--card))] px-4 py-2 overflow-hidden"
        style={{ height: `${VISIBLE * ITEM_HEIGHT}px` }}
      >
        <div
          className="flex flex-col"
          style={{
            animation: `marquee-vertical ${duration}s linear infinite`,
          }}
        >
          {loop.map((text, i) => (
            <div
              key={i}
              className="flex items-center"
              style={{ height: `${ITEM_HEIGHT}px` }}
            >
              <p className="font-retro text-foreground text-[14px] md:text-[15px] whitespace-nowrap leading-none">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-${totalHeight}px); }
        }
      `}</style>
    </div>
  );
};

export default DesktopMarquee;
