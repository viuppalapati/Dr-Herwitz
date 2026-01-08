import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Header from "@/components/v1/Header";
import HeroSection from "@/components/v1/HeroSection";
import IntroSection from "@/components/v1/IntroSection";
import ServicesSection from "@/components/v1/ServicesSection";
import FiveWindowsSection from "@/components/v1/FiveWindowsSection";
import AboutSection from "@/components/v1/AboutSection";
import Footer from "@/components/v1/Footer";
import VersionSwitcher from "@/components/VersionSwitcher";

const OldVersion = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Dr. Herwitz | Previous Version</title>
        <meta 
          name="description" 
          content="Previous version of Dr. Herwitz website for comparison" 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <VersionSwitcher currentVersion="old" />
        <Header />
        <main className="pt-24 md:pt-28">
          <HeroSection />
          <IntroSection />
          <ServicesSection />
          <FiveWindowsSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default OldVersion;
