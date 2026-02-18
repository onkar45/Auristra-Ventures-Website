import Hero from '../components/Hero';
import Services from '../components/Services';
import HospitalSection from '../components/HospitalSection';
import StationerySection from '../components/StationerySection';
import FurnitureSection from '../components/FurnitureSection';
import CollegeSection from '../components/CollegeSection';
import WhyChooseUs from '../components/WhyChooseUs';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HospitalSection />
      <StationerySection />
      <FurnitureSection />
      <CollegeSection />
      <WhyChooseUs />
      <About />
      <Contact />
    </>
  );
}
