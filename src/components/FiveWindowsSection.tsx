import { Button } from "@/components/ui/button";
import josef1 from "@/assets/Josef 1.png";
import josef2 from "@/assets/Josef 2.png";
import josef3 from "@/assets/Josef 3.png";
import fiveWindowsLogo from "@/assets/Five Windows Logo.webp";

// Hand icon component pointing right for bullet points
const HandIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="flex-shrink-0"
    style={{ transform: 'rotate(90deg)' }}
  >
    <path d="M18 11v-1a2 2 0 0 0-2-2h-2" />
    <path d="M14 10V9a2 2 0 0 0-2-2h-2" />
    <path d="M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6" />
    <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
  </svg>
);

const FiveWindowsSection = () => {
  return (
    <section id="five-windows" className="relative section-padding overflow-hidden">
      {/* Premium background with Josef Albers inspired treatment */}
      <div className="absolute inset-0 bg-navy" />
      
      {/* Decorative Albers-style squares */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div 
          className="absolute top-10 left-10 w-64 h-64 bg-cover bg-center blur-sm"
          style={{ backgroundImage: `url(${josef1})` }}
        />
        <div 
          className="absolute bottom-10 right-10 w-48 h-48 bg-cover bg-center blur-sm"
          style={{ backgroundImage: `url(${josef2})` }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cover bg-center blur-sm"
          style={{ backgroundImage: `url(${josef3})` }}
        />
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-navy/60" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="bg-white/95 rounded-lg p-3 md:p-4 inline-block">
              <img 
                src={fiveWindowsLogo} 
                alt="Five Windows Logo" 
                className="h-12 md:h-16 lg:h-20 w-auto"
              />
            </div>
          </div>

          <h2 className="heading-section text-primary-foreground">
            The Five Windows Weekend
          </h2>

          <p className="font-serif text-xl md:text-2xl text-gold italic">
            An annual, invitation-only gathering
          </p>

          <div className="w-16 h-px bg-gold mx-auto my-6" />

          <div className="space-y-6 text-primary-foreground/80 max-w-2xl mx-auto text-left">
            <p className="body-large leading-relaxed flex items-start gap-3">
              <span className="text-gold mt-1">
                <HandIcon />
              </span>
              <span>
                for the rare couple who has built something strong after decades together building families and careers.
              </span>
            </p>
            
            <p className="body-large leading-relaxed flex items-start gap-3">
              <span className="text-gold mt-1">
                <HandIcon />
              </span>
              <span>
                who find themselves at a new stage in life where time is no longer the scarce resource it once was.
              </span>
            </p>
            
            <p className="body-large leading-relaxed flex items-start gap-3">
              <span className="text-gold mt-1">
                <HandIcon />
              </span>
              <span>
                who want to discover how to take even more pleasure in one another as they grow into a new chapter.
              </span>
            </p>
          </div>

          <div className="w-16 h-px bg-gold/50 mx-auto my-8" />

          <div className="space-y-6 text-primary-foreground/70 max-w-2xl mx-auto">
            <p className="leading-relaxed">
              Held in a place where the natural beauty reflects what you have created together and inspires you to access deeper longings that don't emerge during the day-to-day.
            </p>
            
            <p className="leading-relaxed">
              Guided by steady hands so you stay focused on the future without being distracted by the past.
            </p>
          </div>

          <div className="w-16 h-px bg-gold/50 mx-auto my-8" />

          <blockquote className="font-serif text-xl md:text-2xl text-primary-foreground/90 italic max-w-2xl mx-auto border-l-4 border-gold pl-6 md:pl-8">
            A break to ask and answer the questions essential to living and loving well.
          </blockquote>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 text-sm text-gold">
            <span>No therapy.</span>
            <span>No performing.</span>
            <span>No demands.</span>
            <span>No fixing.</span>
          </div>

          <div className="pt-8">
            <p className="text-primary-foreground/60 italic max-w-xl mx-auto">
              The weekend reflects a simple but enduring truth: a life together thrives when time is set aside.
            </p>
          </div>

          <Button 
            variant="outline" 
            size="lg"
            className="mt-8 border-gold/40 text-primary-foreground hover:bg-gold hover:text-navy hover:border-gold"
          >
            Inquire About Five Windows
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FiveWindowsSection;
