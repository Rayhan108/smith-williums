
import DesertSafariActivities from "@/Component/Landing/Activities";
import AwardsSection from "@/Component/Landing/Award";
import Banner from "@/Component/Landing/Banner";
import ExclusiveArrangements from "@/Component/Landing/Events";
import ExperiencesSection from "@/Component/Landing/ExpirencesSection";
import FAQSection from "@/Component/Landing/FAQ";
import WhyChoose from "@/Component/Landing/WhyChoose";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <AwardsSection/>
      <ExperiencesSection/>
      <DesertSafariActivities/>
      <ExclusiveArrangements/>
      <WhyChoose/>
      <FAQSection/>
    </div>
  );
};

export default HomePage;
