
import AwardsSection from "@/Component/Landing/Award";
import Banner from "@/Component/Landing/Banner";
import ExperiencesSection from "@/Component/Landing/ExpirencesSection";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <AwardsSection/>
      <ExperiencesSection/>
    </div>
  );
};

export default HomePage;
