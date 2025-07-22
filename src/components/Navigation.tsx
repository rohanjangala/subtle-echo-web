import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center space-x-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "relative px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300",
                "hover:text-primary",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              )
            }
          >
            {({ isActive }) => (
              <>
                Activity
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </>
            )}
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              cn(
                "relative px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300",
                "hover:text-primary",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              )
            }
          >
            {({ isActive }) => (
              <>
                Experience
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;