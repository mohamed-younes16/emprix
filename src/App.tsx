import Header from "./components/header/header";
import HeroSec from "./components/heroSec/heroSec";
import Banner from "./components/banner/banner";
import FaqSection from "./components/faq/FaqSection";
import Testimonial from "./components/testimonial/testimonial";
import AboutUs from "./components/aboutUs/aboutUs";
import Contact from "./components/contactUs/contactUs";
import Footer from "./components/footer/footer";
import Lenis from "@studio-freight/lenis";
import "./App.css";
import "./Styles.css";
import { useEffect } from "react";
import { Toaster } from "sonner";

const faqItems = [
  {
    question:
      "What differentiates your Facebook marketing approach for businnes brands??",
    answer:
      "We mix creative stories, smart plans based on data, and a good understanding of online selling to make special Facebook ads for each brand.",
  },
  {
    question:
      "Can I see case studies or examples of past campaigns for businnes brands?",
    answer:
      "To access businnes brand case studies, please contact our sales or support team for relevant examples showcasing our past successes.",
  },
  {
    question: "How do you measure the success of a campaign?",
    answer:
      "Campaign success is measured by achieving objectives, ROI, conversion rates, and other KPIs specific to campaign goals, ensuring our strategies deliver value.",
  },
];

function App() {
  useEffect(() => {
    const lenis = new Lenis({duration:.6});

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <> 
    <Toaster richColors position="top-center"/>
      <div className="gradient"></div>
      <Header />
      <HeroSec />
      <AboutUs />
      <Banner />
      <Testimonial />
      <FaqSection faqItems={faqItems} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
