import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
export default function Home() {
  return (
  <div>
      <Banner/>
      <Navbar/>
      <Hero/>
      <LogoTicker/>
      <Features/>
      <ProductShowcase/>
      <FAQ/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}
 