import heroImage from "@/assets/Johanna.jpeg";
import iceBackground from "@/assets/Forzen ice channel streatching afar.png";
import newYorkFlag from "@/assets/960px-Flag_of_New_York.svg.png";
import californiaFlag from "@/assets/960px-Flag_of_California.svg.png";
import connecticutFlag from "@/assets/Flag_of_Connecticut.svg";
import washingtonDCFlag from "@/assets/960px-Flag_of_Washington,_D.C.svg.png";
import floridaFlag from "@/assets/Flag_of_Florida.svg";

const stateFlags = [
  { name: "New York", flag: newYorkFlag },
  { name: "California", flag: californiaFlag },
  { name: "Connecticut", flag: connecticutFlag },
  { name: "Washington, D.C.", flag: washingtonDCFlag },
  { name: "Florida", flag: floridaFlag },
];

interface StateFlagProps {
  name: string;
  flag: string;
}

const StateFlagCard = ({ name, flag }: StateFlagProps) => {
  return (
    <div className="group flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2">
      <div className="w-12 h-8 sm:w-16 sm:h-11 md:w-20 md:h-14 lg:w-24 lg:h-16 rounded shadow-md overflow-hidden bg-white flex items-center justify-center">
        <img 
          src={flag} 
          alt={`${name} state flag`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
      <span className="text-[10px] sm:text-xs md:text-sm font-medium text-white text-center leading-tight">
        {name}
      </span>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative h-screen max-h-screen flex flex-col pt-[30px] md:pt-[46px] overflow-hidden">
      {/* Ice Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${iceBackground})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-navy/50" />
      
      {/* Abstract overlay for dreamy effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/40 via-slate-blue/30 to-primary/30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

      <div className="section-container relative z-10 flex-1 flex flex-col justify-center py-0 md:py-2 lg:py-4 w-full overflow-hidden">
        {/* Mobile Layout - Below 800px */}
        <div className="xs:hidden flex flex-col gap-3 min-h-0">
          {/* Title and Specializing Text */}
          <div className="animate-fade-in-up text-center xs:text-left space-y-1">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight">
              Clinical<br />
              Psychologist<br />
              <span className="text-white/90">in New York City</span>
            </h1>
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-white/85 mt-2 leading-snug">
              Specializing in<br />
              Individual and Couples Therapy<br />
              and Discernment Counseling<br />
              for Adults
            </p>
          </div>

          {/* Dr's Image */}
          <div className="relative animate-fade-in-delay-2 flex items-center justify-center">
            <div className="relative w-[80%] xs:w-auto xs:max-w-[180px] sm:max-w-[220px] md:max-w-[260px] mx-auto">
              <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-xl" />
              <div className="relative rounded-xl overflow-hidden shadow-elevated">
                <img 
                  src={heroImage} 
                  alt="Dr. Johanna Herwitz - Clinical Psychologist" 
                  className="w-full h-auto mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* PhD Text and Flags - Below Image on Mobile */}
          <div className="animate-fade-in-up text-center xs:text-left space-y-2">
            <p className="text-sm sm:text-base md:text-lg text-white leading-snug">
              Dr. Herwitz holds a Ph.D. in Clinical Psychology and provides in person psychotherapy at her office on the Upper East Side of New York City. She is licensed to provide virtual therapy in the following states:
            </p>
            
            {/* Flags Section */}
            <div className="flex flex-wrap justify-center xs:justify-start gap-1.5 sm:gap-2 md:gap-3 mt-2">
              {stateFlags.map((state) => (
                <StateFlagCard 
                  key={state.name}
                  name={state.name}
                  flag={state.flag}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout - 800px and above */}
        <div className="hidden xs:grid xs:grid-cols-2 gap-12 items-center min-h-0">
          {/* Text Content */}
          <div className="animate-fade-in-up text-left space-y-2">
            <h1 className="font-serif text-5xl xl:text-6xl font-medium text-white leading-tight">
              Clinical<br />
              Psychologist<br />
              <span className="text-white/90">in New York City</span>
            </h1>
            <p className="font-serif text-2xl xl:text-3xl text-white/85 mt-4 leading-snug">
              Specializing in<br />
              Individual and Couples Therapy<br />
              and Discernment Counseling<br />
              for Adults
            </p>
            <p className="text-xl text-white leading-snug mt-4 max-w-2xl">
              Dr. Herwitz holds a Ph.D. in Clinical Psychology and provides in person psychotherapy at her office on the Upper East Side of New York City. She is licensed to provide virtual therapy in the following states:
            </p>
            
            {/* Flags Section */}
            <div className="flex flex-nowrap justify-start gap-4 mt-4">
              {stateFlags.map((state) => (
                <StateFlagCard 
                  key={state.name}
                  name={state.name}
                  flag={state.flag}
                />
              ))}
            </div>
          </div>

          {/* Visual Element - Johanna's photo superimposed */}
          <div className="relative animate-fade-in-delay-2 flex items-center justify-center">
            <div className="relative max-w-sm mx-auto">
              {/* Abstract frame effect */}
              <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-xl" />
              <div className="relative rounded-xl overflow-hidden shadow-elevated">
                <img 
                  src={heroImage} 
                  alt="Dr. Johanna Herwitz - Clinical Psychologist" 
                  className="w-full h-auto mix-blend-normal"
                />
                {/* Subtle overlay for abstract effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
