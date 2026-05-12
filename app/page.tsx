import ClinicSection from "@/components/clinic-section";
import FaqSection from "@/components/FaqSection";
import MobileActionBar from "@/components/fat-mobile-action-bar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ConsultationStages from "@/components/stage";
import TestimonialsSection from "@/components/TestimonialsSection";
import TreatmentShowcase from "@/components/TreatmentShowcase";
import WhyChooseTreatments from "@/components/WhyChooseTreatments";

export default function Home() {
  return(
    <>
    <MobileActionBar />
    <Navbar />
    <HeroSection />
    <ConsultationStages />
    <ClinicSection />
    <TreatmentShowcase />
    <WhyChooseTreatments />
    <TestimonialsSection />
    <FaqSection />

    <Footer />


    </>
  );
}
