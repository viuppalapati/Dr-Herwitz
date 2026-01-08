import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import FiveWindowsSection from "@/components/FiveWindowsSection";
import AboutSection from "@/components/AboutSection";
import LogosSection from "@/components/LogosSection";
import Footer from "@/components/Footer";
import VersionSwitcher from "@/components/VersionSwitcher";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dr. Herwitz | Clinical Psychologist NYC | Individual & Couples Therapy</title>
        <meta 
          name="description" 
          content="Dr. Herwitz is a licensed Clinical Psychologist in NYC specializing in adult development, couples therapy, and discernment counseling. In-person and virtual therapy available." 
        />
        <meta name="keywords" content="clinical psychologist NYC, couples therapy New York, discernment counseling, adult development therapy, Upper East Side therapist" />
        <link rel="canonical" href="https://drherwitz.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Dr. Herwitz | Clinical Psychologist NYC" />
        <meta property="og:description" content="Specializing in adult development, couples therapy, and discernment counseling in New York City." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drherwitz.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Psychologist",
            "name": "Dr. Herwitz",
            "description": "Clinical Psychologist specializing in adult development and couples therapy",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "addressCountry": "US"
            },
            "areaServed": ["New York", "California", "Connecticut", "Washington D.C.", "Florida"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <VersionSwitcher currentVersion="new" />
        <Header />
        <main className="pt-24 md:pt-28">
          <HeroSection />
          <IntroSection />
          <ServicesSection />
          <FiveWindowsSection />
          <AboutSection />
          <LogosSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
