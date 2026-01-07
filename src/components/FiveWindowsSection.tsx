import { Button } from "@/components/ui/button";

const FiveWindowsSection = () => {
  return (
    <section id="five-windows" className="relative section-padding overflow-hidden">
      {/* Premium background treatment */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-slate-blue" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Elegant badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary-foreground/10 rounded-full border border-primary-foreground/20">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/80">
              Exclusive Program
            </span>
          </div>

          <h2 className="heading-section text-primary-foreground">
            Founder of Five Windows
          </h2>

          <p className="font-serif text-2xl md:text-3xl text-primary-foreground/90 italic">
            Elevating Lasting Love
          </p>

          <div className="w-16 h-px bg-gold mx-auto" />

          <p className="body-large text-primary-foreground/80 max-w-2xl mx-auto">
            Developed to support successful, long-term committed couples optimize the chapter of life following careers and family. A private, invitation-only weekend gathering held in vibrant settings selected for natural beauty and privacy.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Invitation Only
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Weekend Retreat
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Curated Locations
            </span>
          </div>

          <Button 
            variant="outline" 
            size="lg"
            className="mt-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Inquire About Five Windows
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FiveWindowsSection;
