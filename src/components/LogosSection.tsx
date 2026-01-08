import logoApa from "@/assets/logo-apa.webp";
import logoCouplesInstitute from "@/assets/logo-couples-institute.webp";
import logoEducaring from "@/assets/logo-educaring.webp";
import logoNationalRegister from "@/assets/logo-national-register.webp";

const LogosSection = () => {
  const logos = [
    { src: logoApa, alt: "APA - American Psychological Association" },
    { src: logoCouplesInstitute, alt: "Couples Institute" },
    { src: logoEducaring, alt: "Educaring" },
    { src: logoNationalRegister, alt: "National Register" },
  ];

  return (
    <section className="py-2.5 bg-navy/10 border-t border-border/20">
      <div className="section-container px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 flex-nowrap">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
            >
              <img 
                src={logo.src} 
                alt={logo.alt}
                className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
