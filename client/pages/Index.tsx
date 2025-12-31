import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ReasonsSection from "@/components/ReasonsSection";
import ComparisonSection from "@/components/ComparisonSection";
import SocialProofSection from "@/components/SocialProofSection";
import OfferSection from "@/components/OfferSection";
import SpecsSection from "@/components/SpecsSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ReasonsSection />
      <ComparisonSection />
      <SocialProofSection />
      <OfferSection />
      <SpecsSection />
      <Footer />
    </div>
  );
}
