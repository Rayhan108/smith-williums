
import DesertSafariActivities from "@/Component/Landing/Activities";
import AwardsSection from "@/Component/Landing/Award";
import Banner from "@/Component/Landing/Banner";
import ExclusiveArrangements from "@/Component/Landing/Events";
import ExperiencesSection from "@/Component/Landing/ExpirencesSection";
import FAQSection from "@/Component/Landing/FAQ";
import WhyChoose from "@/Component/Landing/WhyChoose";

import React from "react";

const HomePage =async () => {
  let packages = [];
  let events = [];
  let faq = [];

// packages
  try {
    const res = await fetch(`${process.env.SERVER_URL}/package/allPackage`, {
      next: { revalidate: 3600 }, 
    });

    // Check if the fetch was successful
    if (!res.ok) {
      throw new Error("Failed to fetch experiences");
    }

    // Parse the response data
    const data = await res.json();
    console.log("data------>", data?.data);
    packages = data?.data?.result || []; 
  } catch (error) {
 
    console.error("Error fetching data:", error);

    packages = []; 
  }

  // events
  try {
    const res = await fetch(`${process.env.SERVER_URL}/event/allEvents`, {
      next: { revalidate: 3600 }, 
    });

    // Check if the fetch was successful
    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }

    // Parse the response data
    const data = await res.json();
    // console.log("data------>", data?.data);
    events = data?.data?.result || [];
  } catch (error) {
    // Log the error if the fetch fails
    console.error("Error fetching data:", error);

    events = []; 
  }
  // faq
  try {
    const res = await fetch(`${process.env.SERVER_URL}/faq/allFaq`, {
      next: { revalidate: 3600 }, 
    });

    // Check if the fetch was successful
    if (!res.ok) {
      throw new Error("Failed to fetch FAQ");
    }

    // Parse the response data
    const data = await res.json();
    // console.log("data------>", data?.data);
    faq = data?.data?.result || [];
  } catch (error) {
    // Log the error if the fetch fails
    console.error("Error fetching data:", error);

    faq = []; 
  }

  return (
    <div>
      <Banner/>
      <AwardsSection/>
      <ExperiencesSection packages={packages}/>
      <DesertSafariActivities/>
      <ExclusiveArrangements events={events}/>
      <WhyChoose/>
      <FAQSection faq={faq}/>
    </div>
  );
};

export default HomePage;
