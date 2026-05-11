import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import CTASection from "@/components/CTASection";
import FAQ from "./FAQ";
import Footer from "@/components/Footer";
import { SpendForm } from "@/components/forms/SpendForm";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />

      {/* Spend Audit Form Section */}
      <section id="audit-form" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Get Your Free AI Spend Audit
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Enter your current AI stack and discover where you can save.
            </p>
          </div>

          <SpendForm />
        </div>
      </section>

      <CTASection />
      <FAQ />
      <Footer />
    </div>
  );
}