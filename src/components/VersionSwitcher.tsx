import { Link, useLocation } from "react-router-dom";

interface VersionSwitcherProps {
  currentVersion: "new" | "old";
}

const VersionSwitcher = ({ currentVersion }: VersionSwitcherProps) => {
  const location = useLocation();
  const isOldVersion = currentVersion === "old";

  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-navy/95 backdrop-blur-sm border-b border-gold/30">
      <div className="section-container">
        <div className="flex items-center justify-center gap-4 py-2">
          <span className="text-xs text-primary-foreground/60">
            Viewing: <span className="font-medium text-primary-foreground">{isOldVersion ? "Previous Version" : "Current Version"}</span>
          </span>
          <div className="h-4 w-px bg-primary-foreground/20" />
          <Link
            to={isOldVersion ? "/" : "/old-version"}
            className="text-xs text-gold hover:text-gold/80 underline underline-offset-2 transition-colors"
          >
            Switch to {isOldVersion ? "Current Version" : "Previous Version"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VersionSwitcher;
