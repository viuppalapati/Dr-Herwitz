import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex flex-col items-center">
            <span className="font-serif text-xl md:text-2xl font-medium text-foreground tracking-tight">
              Johanna Herwitz
            </span>
            <span className="text-xs text-muted-foreground tracking-wide">
              Psychotherapy for Adults
            </span>
          </a>

          <Button variant="outline" size="sm" asChild>
            <a href="mailto:contact@drherwitz.com">Contact</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
