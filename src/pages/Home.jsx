import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import PricingInfo from "../components/PricingInfo";
import Banner from "../components/Banner";
import Team from "../components/Team";
import NewsLetter from "../components/NewsLetter";
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <PricingInfo />
      <Banner />
      <Team />
      <NewsLetter />
    </div>
  );
};
export default Home;
