import { useRef, useState, useCallback } from "react";

// ============================================================
// Change this path to your own mp4 file when ready:
const VIDEO_SOURCE = "/videos/demo.mp4";
// ============================================================

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (v) setCurrentTime(v.currentTime);
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    const v = videoRef.current;
    if (v) setDuration(v.duration);
  }, []);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const t = Number(e.target.value);
    v.currentTime = t;
    setCurrentTime(t);
  }, []);

  const handleStop = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(0);
  }, []);

  const formatTime = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col h-full select-none">
      {/* Video area */}
      <div className="flex-1 bg-black flex items-center justify-center min-h-0">
        <video
          ref={videoRef}
          src={VIDEO_SOURCE}
          className="max-w-full max-h-full object-contain"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          playsInline
        />
      </div>

      {/* Retro controls */}
      <div
        className="shrink-0 flex flex-col gap-1.5 px-3 py-2"
        style={{ background: "hsl(var(--primary))" }}
      >
        {/* Progress bar */}
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-[6px] appearance-none bg-border rounded-none cursor-pointer accent-foreground"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="retro-outset px-3 py-1 text-[13px] font-retro text-foreground hover:brightness-95 active:retro-inset"
            >
              {isPlaying ? "❚❚" : "▶"}
            </button>
            <button
              onClick={handleStop}
              className="retro-outset px-3 py-1 text-[13px] font-retro text-foreground hover:brightness-95 active:retro-inset"
            >
              ■
            </button>
          </div>

          <span className="text-[12px] font-retro text-muted-foreground">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
