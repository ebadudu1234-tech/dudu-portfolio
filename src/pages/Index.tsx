import { useState, useCallback } from "react";
import MenuBar from "@/components/MenuBar";
import Dock from "@/components/Dock";
import DesktopIcon from "@/components/DesktopIcon";
import RetroWindow from "@/components/RetroWindow";
import MacintoshHDBrowser from "@/components/MacintoshHDBrowser";
import FolderBrowser from "@/components/FolderBrowser";
import ProjectDetail from "@/components/ProjectDetail";
import FullProjectView from "@/components/FullProjectView";
import BootScreen from "@/components/BootScreen";
import { useWindowManager } from "@/hooks/useWindowManager";
import { getFolderById, getProjectById, type ProjectItem } from "@/data/portfolioData";
import macintoshHd from "@/assets/macintosh-hd.png";
import desktopWallpaper from "@/assets/desktop-wallpaper.jpg";

const Index = () => {
  const [booted, setBooted] = useState(false);
  const [fullViewProject, setFullViewProject] = useState<ProjectItem | null>(null);
  const {
    windows,
    activeWindowId,
    openWindow,
    closeWindow,
    bringToFront,
    updatePosition,
    minimizeWindow,
    resizeWindow,
  } = useWindowManager();

  const handleOpenMacintoshHD = useCallback(() => {
    openWindow({
      id: "macintosh-hd",
      title: "Macintosh HD",
      contentType: "macintosh-hd",
      contentId: "macintosh-hd",
      width: 520,
      height: 420,
    });
  }, [openWindow]);

  const handleOpenFolder = useCallback(
    (folderId: string, folderLabel: string) => {
      openWindow({
        id: `folder-${folderId}`,
        title: folderLabel,
        contentType: "folder-browser",
        contentId: folderId,
        width: 560,
        height: 420,
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
        width: 460,
        height: 420,
      });
    },
    [openWindow]
  );

  const handleViewFullProject = useCallback((project: ProjectItem) => {
    setFullViewProject(project);
  }, []);

  const handleCloseFullView = useCallback(() => {
    setFullViewProject(null);
  }, []);

  const handleDesktopClick = () => {};

  const renderWindowContent = (win: (typeof windows)[0]) => {
    switch (win.contentType) {
      case "macintosh-hd":
        return <MacintoshHDBrowser onOpenFolder={handleOpenFolder} />;
      case "folder-browser": {
        const folder = getFolderById(win.contentId);
        if (!folder) return <div className="p-3 text-[13px] font-retro">Folder not found.</div>;
        return <FolderBrowser items={folder.items} onOpenProject={handleOpenProject} />;
      }
      case "project-detail": {
        const foundProject = getProjectById(win.contentId) || null;
        return <ProjectDetail project={foundProject} onViewFullProject={handleViewFullProject} />;
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
        <MenuBar />

        <div className="absolute inset-0 pt-[30px] md:pt-[28px] pb-[60px] md:pb-[56px]">
          <DesktopIcon
            label="Macintosh HD"
            icon={macintoshHd}
            position={{ top: "16px", right: "24px" }}
            onDoubleClick={handleOpenMacintoshHD}
          />

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
              onResize={resizeWindow}
            >
              {renderWindowContent(win)}
            </RetroWindow>
          ))}
        </div>

        <Dock onFinderClick={handleOpenMacintoshHD} />
      </div>

      {fullViewProject && (
        <FullProjectView project={fullViewProject} onClose={handleCloseFullView} />
      )}
    </>
  );
};

export default Index;
