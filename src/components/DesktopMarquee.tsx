import { useEffect, useState } from "react";

const MESSAGES = [
  "Zihe Wang — Designer from China, focused on branding, print, UI, game, and interactive design.",
  "This portfolio website is inspired by the look and feeling of early computer screens.",
  "You can explore my different projects by clicking the desktop icons.",
];

const DesktopMarquee = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  const len = MESSAGES.length;
  const items = [
    { text: MESSAGES[(index - 1 + len) % len], role: "top" as const },
    { text: MESSAGES[index], role: "center" as const },
    { text: MESSAGES[(index + 1) % len], role: "bottom" as const },
  ];

  return (
    <div
      className="absolute bottom-[72px] md:bottom-[68px] left-3 md:left-5 z-[5] pointer-events-none
                 w-[78vw] max-w-[460px] min-w-[240px] flex flex-col gap-2 md:gap-2.5"
    >
      {items.map((item, i) => {
        const isCenter = item.role === "center";
        return (
          <div
            key={`${i}-${item.text}`}
            className={`retro-outset bg-[hsl(var(--card))] px-3 py-1.5 md:py-2 overflow-hidden
                        transition-all duration-700 ease-out
                        ${isCenter ? "opacity-100" : "opacity-50"}`}
            style={{
              transform: isCenter ? "translateY(0) scale(1)" : "translateY(0) scale(0.97)",
            }}
          >
            <p
              className={`font-retro text-foreground whitespace-nowrap overflow-hidden text-ellipsis
                          ${isCenter
                            ? "text-[14px] md:text-[16px] font-semibold"
                            : "text-[12px] md:text-[13px]"}`}
            >
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default DesktopMarquee;
