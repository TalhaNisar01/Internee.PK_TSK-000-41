import HeroSection from "../components/HeroSection";
import About from "../components/About";
import InternshipSection from "../components/InternshipSection";
import BlogSection from "../components/BlogSection";
import DynamicSections from "../components/DynamicSections";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialSection from "../components/TestimonialSection";

import {
  internshipCards,
  cardsHomePage,
  blogs,
  sectionsHomePage,
} from "../constants/index";
import InternshipCarousel from "../components/InternshipCarousel";

const HomePage = ({ screenWidth }) => {
  return (
    <>
      <HeroSection screenWidth={screenWidth} />
      <About />
      <InternshipCarousel internshipCards={internshipCards} />
      <InternshipSection cards={cardsHomePage} />
      <BlogSection blogs={blogs} />
      <DynamicSections sections={sectionsHomePage} screenWidth={screenWidth} />
      <FeaturesSection screenWidth={screenWidth} />
      <TestimonialSection />
    </>
  );
};

export default HomePage;
