const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
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
                    <span className="text-lg font-serif text-primary">B</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Barnard College</p>
                    <p className="text-sm text-muted-foreground">Art History</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center">
                    <span className="text-lg font-serif text-primary">Ph.D.</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Clinical Psychology</p>
                    <p className="text-sm text-muted-foreground">Dissertation on Resilient Teenage Mothers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="body-large text-foreground leading-relaxed">
                Dr. Herwitz graduated from Aspen High School and Barnard College, where she studied Art History. Her diverse background includes work in fashion, tabletop design, and years as a professional chef in Florence, NYC, and Napa Valley.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-6">
                While completing her dissertation on Resilient Teenage Mothers, she raised three children. Her unique path brings a rich perspective to her therapeutic practice, understanding the complexities of balancing career, creativity, and family.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-6">
                She is trained in{" "}
                <a 
                  href="https://rie.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-styled"
                >
                  RIE®
                </a>{" "}
                Parent-Infant Observation, bringing additional expertise in early childhood development and attachment theory to her work with parents and couples.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
