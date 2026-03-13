import MenuBar from "@/components/MenuBar";
import Dock from "@/components/Dock";
import DesktopIcon from "@/components/DesktopIcon";
import macintoshHd from "@/assets/macintosh-hd.png";

const Index = () => {
  return (
    <div className="retro-desktop-bg h-screen w-screen overflow-hidden relative">
      {/* Menu Bar */}
      <MenuBar />

      {/* Desktop Area */}
      <div className="absolute inset-0 pt-[25px] pb-[58px]">
        <DesktopIcon
          label="Macintosh HD"
          icon={macintoshHd}
          position={{ top: "16px", right: "24px" }}
        />
      </div>

      {/* Dock */}
      <Dock />
    </div>
  );
};

export default Index;
