import Faq from "@/components/home/faq/Faq";
import Banner from "@/components/home/banner/Banner";
import Demo from "@/components/home/demo/Demo";
import Features from "@/components/home/features/Features";
import Pricing from "@/components/home/pricing/Pricing";
import Testimonials from "@/components/home/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <Demo />
      <Features />
      <Testimonials />
      <Pricing />
      <Faq />
    </>
  );
}
