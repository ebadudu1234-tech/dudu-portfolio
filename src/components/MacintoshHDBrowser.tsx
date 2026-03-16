import { useState } from "react";
import { motion } from "framer-motion";
import { folders } from "@/data/portfolioData";
import folderIcon from "@/assets/folder-icon.png";

interface MacintoshHDBrowserProps {
  onOpenFolder: (folderId: string, folderLabel: string) => void;
}

const MacintoshHDBrowser = ({ onOpenFolder }: MacintoshHDBrowserProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="p-4">
      <div className="mb-3 pb-2 border-b border-border text-[12px] md:text-[11px] font-retro text-muted-foreground">
        {folders.length} items — Macintosh HD
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
        {folders.map((folder, i) => {
          const isSelected = selectedId === folder.id;
          return (
            <motion.div
              key={folder.id}
              className={`flex flex-col items-center gap-1.5 p-3 cursor-pointer select-none rounded-sm ${
                isSelected ? "retro-selected" : "hover:bg-accent/50"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.25 }}
              onClick={() => setSelectedId(folder.id)}
              onDoubleClick={() => onOpenFolder(folder.id, folder.label)}
            >
              <img
                src={folderIcon}
                alt={folder.label}
                className={`w-[56px] h-[56px] md:w-[52px] md:h-[52px] object-contain ${isSelected ? "brightness-75" : ""}`}
                draggable={false}
              />
              <span
                className={`text-[13px] md:text-[12px] font-retro text-center leading-tight ${
                  isSelected ? "text-highlight-foreground" : "text-foreground"
                }`}
              >
                {folder.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MacintoshHDBrowser;
