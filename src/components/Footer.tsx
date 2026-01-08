const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-navy text-primary-foreground">
      <div className="section-container py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl">Dr. Herwitz</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Clinical Psychologist<br />
              Upper East Side, New York City
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-[0.15em] text-primary-foreground/80">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>
                <a href="mailto:contact@drherwitz.com" className="hover:text-primary-foreground transition-colors">
                  contact@drherwitz.com
                </a>
              </p>
              <p>By appointment only</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-[0.15em] text-primary-foreground/80">
              Connect
            </h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                aria-label="Psychology Today"
              >
                <span className="text-xs font-bold">PT</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {currentYear} Dr. Herwitz, Ph.D. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/40">
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
