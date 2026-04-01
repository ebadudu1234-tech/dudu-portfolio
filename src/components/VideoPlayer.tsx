import { useRef, useState, useCallback } from "react";

// ============================================================
// PLAYLIST — Add, remove, or replace videos here:
const PLAYLIST = [
  { title: "Demo Reel", src: "/videos/demo.mp4" },
  { title: "Project Walkthrough", src: "/videos/project-walkthrough.mp4" },
  { title: "Behind the Scenes", src: "/videos/behind-the-scenes.mp4" },
];
// ============================================================

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const activeVideo = PLAYLIST[activeIndex];

  const play = useCallback(() => {
    videoRef.current?.play();
    setIsPlaying(true);
  }, []);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setIsPlaying(true); }
    else { v.pause(); setIsPlaying(false); }
  }, []);

  const handleStop = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause(); v.currentTime = 0;
    setIsPlaying(false); setCurrentTime(0);
  }, []);

  const selectTrack = useCallback((index: number) => {
    setActiveIndex(index);
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
    // Auto-play after source switch
    setTimeout(() => {
      const v = videoRef.current;
      if (v) { v.load(); v.play().then(() => setIsPlaying(true)).catch(() => {}); }
    }, 50);
  }, []);

  const handleNext = useCallback(() => {
    selectTrack((activeIndex + 1) % PLAYLIST.length);
  }, [activeIndex, selectTrack]);

  const handlePrev = useCallback(() => {
    selectTrack((activeIndex - 1 + PLAYLIST.length) % PLAYLIST.length);
  }, [activeIndex, selectTrack]);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const t = Number(e.target.value);
    v.currentTime = t; setCurrentTime(t);
  }, []);

  const formatTime = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex h-full select-none">
      {/* Main area: video + controls */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Video */}
        <div className="flex-1 bg-black flex items-center justify-center min-h-0">
          <video
            ref={videoRef}
            src={activeVideo.src}
            className="max-w-full max-h-full object-contain"
            onTimeUpdate={() => { if (videoRef.current) setCurrentTime(videoRef.current.currentTime); }}
            onLoadedMetadata={() => { if (videoRef.current) setDuration(videoRef.current.duration); }}
            onEnded={handleNext}
            playsInline
          />
        </div>

        {/* Controls */}
        <div className="shrink-0 flex flex-col gap-1.5 px-3 py-2" style={{ background: "hsl(var(--primary))" }}>
          <input
            type="range" min={0} max={duration || 0} step={0.1} value={currentTime}
            onChange={handleSeek}
            className="w-full h-[6px] appearance-none bg-border rounded-none cursor-pointer accent-foreground"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <button onClick={handlePrev} className="retro-outset px-2 py-1 text-[13px] font-retro text-foreground hover:brightness-95 active:retro-inset">⏮</button>
              <button onClick={togglePlay} className="retro-outset px-3 py-1 text-[13px] font-retro text-foreground hover:brightness-95 active:retro-inset">{isPlaying ? "❚❚" : "▶"}</button>
              <button onClick={handleStop} className="retro-outset px-3 py-1 text-[13px] font-retro text-foreground hover:brightness-95 active:retro-inset">■</button>
              <button onClick={handleNext} className="retro-outset px-2 py-1 text-[13px] font-retro text-foreground hover:brightness-95 active:retro-inset">⏭</button>
            </div>
            <span className="text-[12px] font-retro text-muted-foreground">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>

      {/* Playlist sidebar */}
      <div
        className="w-[180px] shrink-0 flex flex-col border-l border-border overflow-hidden"
        style={{ background: "hsl(var(--primary))" }}
      >
        <div className="px-2 py-1.5 text-[12px] font-retro text-foreground font-bold border-b border-border text-center">
          Playlist
        </div>
        <div className="flex-1 overflow-y-auto">
          {PLAYLIST.map((item, i) => (
            <button
              key={i}
              onClick={() => selectTrack(i)}
              className={`w-full text-left px-2.5 py-2 text-[12px] font-retro border-b border-border truncate transition-colors ${
                i === activeIndex
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {i + 1}. {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
