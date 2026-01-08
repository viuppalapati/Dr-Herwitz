/*
 * State flags from Wikimedia Commons (Public Domain)
 * 
 * Attributions:
 * - New York: By State of New York - xrmap flag collection 2.7, Public Domain
 *   https://commons.wikimedia.org/w/index.php?curid=527599
 * 
 * - California: By Donald Graeme Kelley, Vectorization: Devin Cook - Own work, Public Domain
 *   https://commons.wikimedia.org/w/index.php?curid=324334
 * 
 * - Connecticut: By Jean-Pierre Demailly, xrmap authors, Commons users (SVG), Public Domain
 *   https://commons.wikimedia.org/w/index.php?curid=525230
 * 
 * - Washington, D.C.: By cs:User:-xfi- - own code, Public Domain
 *   https://commons.wikimedia.org/w/index.php?curid=326649
 * 
 * - Florida: By Unknown author - SVG based, Public Domain
 *   https://commons.wikimedia.org/w/index.php?curid=326736
 */
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
    <div className="group flex flex-col items-center gap-3 p-4">
      <div className="w-24 h-16 md:w-32 md:h-20 rounded shadow-md overflow-hidden bg-white flex items-center justify-center">
        <img 
          src={flag} 
          alt={`${name} state flag`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
      <span className="text-sm md:text-base font-medium text-foreground text-center">
        {name}
      </span>
    </div>
  );
};

// NOTE: Content moved to HeroSection temporarily for testing. Can revert by uncommenting below.
const IntroSection = () => {
  return (
    <section className="hidden">
      {/* REVERT VERSION - Uncomment to revert changes:
      <section className="section-padding bg-warm-cream">
        <div className="section-container">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <p className="body-large text-foreground leading-relaxed max-w-3xl mx-auto">
              Dr. Herwitz holds a Ph.D. in Clinical Psychology and provides in person psychotherapy at her office on the Upper East Side of New York City. She is licensed to provide virtual therapy in the following states:
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:gap-4 pt-4">
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
      </section>
      */}
    </section>
  );
};

export default IntroSection;
