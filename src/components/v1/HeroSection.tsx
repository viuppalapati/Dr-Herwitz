import heroImage from "@/assets/Johanna.jpeg";
import shoreBackground from "@/assets/shore.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${shoreBackground})` }}
      />
      
      {/* Gradient Overlay - matches ServicesSection style */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/40" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up text-center lg:text-left">
            <h1 className="heading-display text-white text-balance leading-[1.1]">
              Clinical Psychologist in New York City Specializing in Adult Development and Couples Therapy
            </h1>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in-delay-2 py-8">
            <div className="relative max-w-xs mx-auto lg:max-w-sm rounded-lg overflow-hidden shadow-elevated">
              <img 
                src={heroImage} 
                alt="Dr. Johanna Herwitz - Clinical Psychologist" 
                className="w-full h-auto"
              />
              {/* Decorative frame */}
              <div className="absolute inset-3 border border-white/30 rounded pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
