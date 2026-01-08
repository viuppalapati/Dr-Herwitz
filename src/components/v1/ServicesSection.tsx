// Impressionist artwork for service backgrounds
import serviceIndividual from "@/assets/service-individual.png";
import serviceCouples from "@/assets/service-couples.png";
import serviceDiscernment from "@/assets/service-discernment.png";

const serviceImages = {
  individual: serviceIndividual,
  couples: serviceCouples,
  discernment: serviceDiscernment,
};

interface ServiceCardProps {
  title: string;
  description: React.ReactNode;
  image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div className="group relative h-[520px] rounded-xl overflow-hidden shadow-lg">
      {/* Background Image Container - overflow hidden keeps zoom contained */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      
      {/* Gradient Overlay - covers entire card */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/40" />
      
      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl lg:text-3xl font-medium text-white">
            {title}
          </h3>
          
          <div className="text-white/85 text-sm lg:text-base leading-relaxed">
            {description}
          </div>
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
          <h2 className="heading-section text-foreground">
            Services
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Evidence-based treatment modalities tailored to individual needs and relational dynamics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <ServiceCard
            title="Individual Therapy"
            image={serviceImages.individual}
            description={
              <p>
                For anxiety, mood disorders, trauma, and sexual concerns. Integrating evidence-based modalities including{" "}
                <a 
                  href="https://www.thetoolsbook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4 decoration-white/50 hover:decoration-white transition-colors"
                >
                  The Tools®
                </a>
                , psychodynamic therapy, CBT, and IFS.
              </p>
            }
          />

          <ServiceCard
            title="Couples Therapy"
            image={serviceImages.couples}
            description={
              <p>
                Using Bader and Pearson's{" "}
                <a 
                  href="https://www.couplesinstitute.com/couples-blog/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4 decoration-white/50 hover:decoration-white transition-colors"
                >
                  Developmental Model®
                </a>
                . Focused on differentiation, emotional regulation, and long-term relational growth.
              </p>
            }
          />

          <ServiceCard
            title="Discernment Counseling"
            image={serviceImages.discernment}
            description={
              <p>
                A structured 5-session protocol for couples on the brink of divorce. Helping partners clarify the future of the relationship with confidence.
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
