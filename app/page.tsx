import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import SolarArrayShowcase from "@/components/SolarArrayShowcase";
import HowItWorks from "@/components/HowItWorks";
import BusinessSolutions from "@/components/BusinessSolutions";
import HomeSolutions from "@/components/HomeSolutions";
import TaxIncentives from "@/components/TaxIncentives";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Benefits />
      <SolarArrayShowcase />
      <HowItWorks />
      <BusinessSolutions />
      <HomeSolutions />
      <TaxIncentives />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
