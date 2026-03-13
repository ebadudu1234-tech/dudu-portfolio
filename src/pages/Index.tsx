import { useState, useCallback } from "react";
import MenuBar from "@/components/MenuBar";
import Dock from "@/components/Dock";
import DesktopIcon from "@/components/DesktopIcon";
import RetroWindow from "@/components/RetroWindow";
import MacintoshHDBrowser from "@/components/MacintoshHDBrowser";
import FolderBrowser from "@/components/FolderBrowser";
import ProjectDetail from "@/components/ProjectDetail";
import BootScreen from "@/components/BootScreen";
import { useWindowManager } from "@/hooks/useWindowManager";
import { getFolderById, type ProjectItem } from "@/data/portfolioData";
import macintoshHd from "@/assets/macintosh-hd.png";
import desktopWallpaper from "@/assets/desktop-wallpaper.jpg";

const Index = () => {
  const [booted, setBooted] = useState(false);
  const {
    windows,
    activeWindowId,
    openWindow,
    closeWindow,
    bringToFront,
    updatePosition,
    minimizeWindow,
  } = useWindowManager();

  const handleOpenMacintoshHD = useCallback(() => {
    openWindow({
      id: "macintosh-hd",
      title: "Macintosh HD",
      contentType: "macintosh-hd",
      contentId: "macintosh-hd",
      width: 480,
      height: 380,
    });
  }, [openWindow]);

  const handleOpenFolder = useCallback(
    (folderId: string, folderLabel: string) => {
      openWindow({
        id: `folder-${folderId}`,
        title: folderLabel,
        contentType: "folder-browser",
        contentId: folderId,
        width: 520,
        height: 380,
      });
    },
    [openWindow]
  );

  const handleOpenProject = useCallback(
    (project: ProjectItem) => {
      openWindow({
        id: `project-${project.id}`,
        title: project.title,
        contentType: "project-detail",
        contentId: project.id,
        width: 480,
        height: 440,
      });
    },
    [openWindow]
  );

  const handleDesktopClick = () => {
    // Deselect desktop icons when clicking empty space
  };

  const renderWindowContent = (win: typeof windows[0]) => {
    switch (win.contentType) {
      case "macintosh-hd":
        return <MacintoshHDBrowser onOpenFolder={handleOpenFolder} />;
      case "folder-browser": {
        const folder = getFolderById(win.contentId);
        if (!folder) return <div className="p-3 text-[11px] font-retro">Folder not found.</div>;
        return (
          <FolderBrowser
            items={folder.items}
            onOpenProject={handleOpenProject}
          />
        );
      }
      case "project-detail": {
        // Find project across all folders
        const allFolders = ["product-design", "branding", "visual-design", "case-studies", "about-me", "contact"];
        for (const fId of allFolders) {
          const f = getFolderById(fId);
          const proj = f?.items.find((p) => p.id === win.contentId);
          if (proj) return <ProjectDetail project={proj} />;
        }
        return <div className="p-3 text-[11px] font-retro">Project not found.</div>;
      }
      default:
        return null;
    }
  };

  return (
    <>
      {!booted && <BootScreen onBootComplete={() => setBooted(true)} />}

      <div
        className="h-screen w-screen overflow-hidden relative"
        style={{
          backgroundImage: `url(${desktopWallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={handleDesktopClick}
      >
        {/* Menu Bar */}
        <MenuBar />

        {/* Desktop area */}
        <div className="absolute inset-0 pt-[25px] pb-[52px]">
          {/* Macintosh HD Icon */}
          <DesktopIcon
            label="Macintosh HD"
            icon={macintoshHd}
            position={{ top: "16px", right: "24px" }}
            onDoubleClick={handleOpenMacintoshHD}
          />

          {/* All windows */}
          {windows.map((win) => (
            <RetroWindow
              key={win.id}
              id={win.id}
              title={win.title}
              x={win.x}
              y={win.y}
              width={win.width}
              height={win.height}
              zIndex={win.zIndex}
              isActive={win.id === activeWindowId}
              isMinimized={win.isMinimized}
              onClose={closeWindow}
              onBringToFront={bringToFront}
              onUpdatePosition={updatePosition}
              onMinimize={minimizeWindow}
            >
              {renderWindowContent(win)}
            </RetroWindow>
          ))}
        </div>

        {/* Dock */}
        <Dock onFinderClick={handleOpenMacintoshHD} />
      </div>
    </>
  );
};

export default Index;
