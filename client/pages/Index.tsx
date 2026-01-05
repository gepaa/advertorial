import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ReasonsSection from "@/components/ReasonsSection";
import ComparisonSection from "@/components/ComparisonSection";
import PersonalTrialSection from "@/components/PersonalTrialSection";
import SocialProofSection from "@/components/SocialProofSection";
import OfferSection from "@/components/OfferSection";
import SpecsSection from "@/components/SpecsSection";
import Footer from "@/components/Footer";
import StickyMobileButton from "@/components/StickyMobileButton";
import SectionImageDivider from "@/components/SectionImageDivider";

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-foreground pb-20 md:pb-0">
      <Header />
      <HeroSection />
      <SectionImageDivider
        title="Sealed-Gasket Filtration Technology"
        description="Advanced engineering for cleaner air"
        imageUrl="https://media.giphy.com/media/CJUjcQPi1d8u68KF3J/giphy.gif"
      />
      <ReasonsSection />
      <SectionImageDivider
        title="How It Compares"
        description="Professional-grade performance in a compact design"
        imageUrl="https://media.giphy.com/media/OdJH9vifQ3zPKq5x6w/giphy.gif"
      />
      <ComparisonSection />
      <SectionImageDivider
        title="Real-World Results"
        description="See the transformation for yourself"
        imageUrl="https://media.giphy.com/media/TidaGZH63kPzmH3jWj/giphy.gif"
      />
      <PersonalTrialSection />
      <SectionImageDivider
        title="Customer Proof"
        description="Thousands of families breathing cleaner air"
        imageUrl="https://media.giphy.com/media/3zAiuhsCHc5uEVzkTx/giphy.gif"
      />
      <SocialProofSection />
      <SectionImageDivider
        title="Ready to Upgrade?"
        description="Everything you need is included"
        imageUrl="https://cdn.builder.io/api/v1/image/assets%2F428d6e0e6eb243e08537dc233df4ba86%2Fefb06c20c30f4c0bbb5c0ecca6684584?format=webp&width=800"
        imageAspectRatio="auto"
      />
      <OfferSection />
      <SpecsSection />
      <Footer />
      <StickyMobileButton />
    </div>
  );
}
