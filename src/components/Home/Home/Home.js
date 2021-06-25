import React from "react";
import ChooseUs from "../ChooseUs/ChooseUs";
import Contract from "../Contract/Contract";
import Header from "../Header/Header";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import Review from "../Review/Review";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <ChooseUs />
      <PrivacyPolicy />
      <Review />
      <Contract />
    </div>
  );
};

export default Home;
