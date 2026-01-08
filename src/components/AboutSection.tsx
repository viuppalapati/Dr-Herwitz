const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-warm-cream">
      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Decorative sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div className="sticky top-32">
              <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
                About
              </span>
              <h2 className="heading-section text-foreground mt-4">
                Background & Education
              </h2>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center">
                    <span className="text-lg font-serif text-primary">A</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Aspen High School</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center">
                    <span className="text-lg font-serif text-primary">B</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Barnard College, BA</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center">
                    <span className="text-lg font-serif text-primary">D</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Derner Institute of Advanced Psychological Studies, Ph.D.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="body-large text-foreground leading-relaxed">
                Before launching her private practice in 2001, Dr. Herwitz worked in fashion and tabletop design in New York City and as a professional chef in Florence, Italy, and the Napa Valley.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-6">
                In addition to writing her dissertation on Resilient Teenage Mothers, she completed training in{" "}
                <a 
                  href="https://rie.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-styled"
                >
                  RIE®
                </a>
                {" "}Parent Infant Observation and Discussion, bringing additional expertise in early childhood development, parenting and attachment theory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
