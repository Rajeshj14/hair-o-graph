import FaqSection from "@/components/FaqSection";
import MobileActionBar from "@/components/fat-mobile-action-bar";
import Footer from "@/components/Footer";
import HairOGraftOverview from "@/components/HairOGraftOverview";
import HemashreeCertificate from "@/components/HemashreeCertificate";
import HeroSection from "@/components/HeroSection";
import MobilePhoneButton from "@/components/MobilePhoneButton";
import Navbar from "@/components/Navbar";
import ConsultationStages from "@/components/stage";
import TestimonialsSection from "@/components/TestimonialsSection";
import TreatmentShowcase from "@/components/TreatmentShowcase";
import WhyChooseTreatments from "@/components/WhyChooseTreatments";

export default function Home() {
  return(
    <>
    <MobileActionBar />
    <MobilePhoneButton />
    <Navbar />
    <HeroSection />
    <ConsultationStages />
    <HairOGraftOverview />
    <HemashreeCertificate />
    <TreatmentShowcase />
    <WhyChooseTreatments />
    <TestimonialsSection />
    <FaqSection />
    <Footer />


    </>
  );
}
