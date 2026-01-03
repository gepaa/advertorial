import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ReasonsSection from "@/components/ReasonsSection";
import ComparisonSection from "@/components/ComparisonSection";
import SocialProofSection from "@/components/SocialProofSection";
import OfferSection from "@/components/OfferSection";
import SpecsSection from "@/components/SpecsSection";
import Footer from "@/components/Footer";
import StickyMobileButton from "@/components/StickyMobileButton";

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-foreground pb-20 md:pb-0">
      <Header />
      <HeroSection />
      <ReasonsSection />
      <ComparisonSection />
      <SocialProofSection />
      <OfferSection />
      <SpecsSection />
      <Footer />
      <StickyMobileButton />
    </div>
  );
}
