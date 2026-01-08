import { Link } from "react-router-dom";
// Josef Albers artwork for service backgrounds
import josef1 from "@/assets/Josef 1.png";
import josef2 from "@/assets/Josef 2.png";
import josef3 from "@/assets/Josef 3.png";
// PDF for couples therapy
import couplesTherapyPdf from "@/assets/CI_Stepping_Stones_012825.pdf";

const serviceImages = {
  individual: josef1,
  couples: josef2,
  discernment: josef3,
};

interface ServiceCardProps {
  title: string;
  description: React.ReactNode;
  image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div className="group relative aspect-square rounded-xl overflow-hidden shadow-lg w-full sm:w-full lg:w-[350px] lg:h-[350px] lg:max-w-[350px]">
      {/* Background Image - covers entire card */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay - more transparent to show artwork */}
      <div className="absolute inset-0 bg-navy/40" />
      
      {/* Content Container - centered vertically and horizontally within square with consistent padding */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 lg:inset-8 flex flex-col items-center justify-center text-center">
        {/* Title */}
        <h3 className="font-serif text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium text-white mb-3 sm:mb-4 lg:mb-4">
          {title}
        </h3>
        
        {/* Description */}
        <div className="text-white/90 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.15]">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          <ServiceCard
            title="Individual Therapy"
            image={serviceImages.individual}
            description={
              <p>
                Integrating modalities including psychodynamic therapy,{" "}
                <a 
                  href="https://www.thetoolsbook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4 decoration-white/50 hover:decoration-white transition-colors"
                >
                  The Tools
                </a>
                , CBT and IFS for treatment of anxiety and mood disorders, sexual concerns, and relationship difficulties.
              </p>
            }
          />

          <ServiceCard
            title="Couples Therapy"
            image={serviceImages.couples}
            description={
              <p>
                Identifying and improving negative interaction patterns, managing differences, balancing autonomy and connection and deepening intimacy using Bader and Pearson's{" "}
                <a 
                  href={couplesTherapyPdf}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4 decoration-white/50 hover:decoration-white transition-colors"
                >
                  Developmental Model
                </a>
                .
              </p>
            }
          />

          <ServiceCard
            title="Considering Divorce?"
            image={serviceImages.discernment}
            description={
              <p>
                Using a structured, 1-5 session protocol called{" "}
                <Link 
                  to="/discernment-counseling"
                  className="text-white underline underline-offset-4 decoration-white/50 hover:decoration-white transition-colors"
                >
                  Discernment Counseling
                </Link>
                , married couples gain clarity and confidence in deciding whether to stay together, divorce, or work on their relationship in couples therapy for a discreet period of time, after which they will reconsider a future direction for their marriage.
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
