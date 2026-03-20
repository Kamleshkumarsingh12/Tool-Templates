
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/Infosections";
import ManualConversion from "../components/ManualConversion";
import ConversionChart from "../components/ConversionChart";
import BenefitsSection from "../components/BenefitsSection";
import CTASection from "../components/CTAsection";
import ConclusionSection from "../components/ConclusionSection";
import FAQSection from "../components/FAQsection";


export default function Page() {
  return (
    <>
      <HeroSection />
      <InfoSection/>
      <ManualConversion />
      <ConversionChart />
      <BenefitsSection />
      <CTASection />
      <ConclusionSection />
      <FAQSection />
    </>
  );
}