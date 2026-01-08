import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DiscernmentCounseling = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Discernment Counseling | Dr. Herwitz | NYC Clinical Psychologist</title>
        <meta 
          name="description" 
          content="Discernment Counseling is a structured 1-5 session protocol for couples considering divorce to gain clarity about the future of their marriage." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="section-container">
            {/* Back link */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to Home
            </Link>

            <article className="max-w-3xl mx-auto">
              <h1 className="heading-display text-foreground mb-8">
                Discernment Counseling
              </h1>

              <div className="prose prose-lg max-w-none space-y-6 text-foreground">
                <p className="body-large leading-relaxed">
                  Discernment Counseling is a brief therapy (1-5 sessions) designed for couples where one partner is "leaning out" of the relationship—considering separation or divorce—while the other is "leaning in"—wanting to preserve the marriage and work on it.
                </p>

                <h2 className="heading-card text-foreground mt-12 mb-4">
                  What is Discernment Counseling?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Unlike traditional couples therapy, Discernment Counseling is not about solving marital problems or improving the relationship. Instead, it's about gaining clarity and confidence about a direction for the marriage, based on a deeper understanding of what has happened to it and each partner's contributions to its problems.
                </p>

                <h2 className="heading-card text-foreground mt-12 mb-4">
                  The Three Paths
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At the end of Discernment Counseling, couples typically choose one of three paths:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Path 1:</strong> Maintain the status quo for now</li>
                  <li><strong>Path 2:</strong> Separate or divorce</li>
                  <li><strong>Path 3:</strong> Commit to six months of couples therapy, with divorce off the table during that time, after which they will reassess</li>
                </ul>

                <h2 className="heading-card text-foreground mt-12 mb-4">
                  Who is it For?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Discernment Counseling is appropriate for couples who:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Have one partner who is considering divorce while the other wants to work on the marriage</li>
                  <li>Are not ready for traditional couples therapy</li>
                  <li>Want to make a thoughtful decision about their marriage's future</li>
                  <li>Are willing to look at their own contributions to the problems</li>
                </ul>

                <h2 className="heading-card text-foreground mt-12 mb-4">
                  The Process
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Each session is approximately 1.5-2 hours and includes time together as a couple and individual conversations with each partner. The focus is on each person's contribution to the problems and what it would take to have a successful reconciliation process.
                </p>

                <div className="mt-12 pt-8 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    If you're at a crossroads in your marriage and want to make a clear-headed decision about your future, Discernment Counseling may be right for you.
                  </p>
                  <Button asChild>
                    <a href="mailto:contact@drherwitz.com">Schedule a Consultation</a>
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DiscernmentCounseling;
