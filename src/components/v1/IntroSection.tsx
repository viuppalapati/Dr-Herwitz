import newYorkImg from "@/assets/newyork.png";
import californiaImg from "@/assets/california.png";
import connecticutImg from "@/assets/connecticut.png";
import washingtonImg from "@/assets/washington d.c.png";
import floridaImg from "@/assets/florida.png";

const stateImages = [
  { name: "New York", image: newYorkImg },
  { name: "California", image: californiaImg },
  { name: "Connecticut", image: connecticutImg },
  { name: "Washington, D.C.", image: washingtonImg },
  { name: "Florida", image: floridaImg },
];

interface StateCardProps {
  name: string;
  image: string;
}

const StateCard = ({ name, image }: StateCardProps) => {
  return (
    <div className="group relative w-32 h-24 md:w-40 md:h-28 rounded-lg overflow-hidden shadow-md">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/20" />
      
      {/* State Name */}
      <div className="absolute inset-0 flex items-end justify-center p-3">
        <span className="text-white text-xs md:text-sm font-medium text-center">
          {name}
        </span>
      </div>
    </div>
  );
};

const IntroSection = () => {
  return (
    <section className="section-padding bg-cream-dark/30">
      <div className="section-container">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <p className="body-large text-foreground leading-relaxed max-w-3xl mx-auto">
            Dr. Herwitz holds a Ph.D. in Clinical Psychology and provides in-person psychotherapy at her Upper East Side office and is licensed to provide virtual therapy in the following states.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {stateImages.map((state) => (
              <StateCard 
                key={state.name}
                name={state.name}
                image={state.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
