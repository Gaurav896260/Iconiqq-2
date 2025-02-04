import React, { useEffect } from "react";
import HeroAffiliate from "../components/HeroAffiliate.jsx";
import AffiliateForm from "../components/AffiliateForm";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar.jsx";
import ContactFooter from "../components/Footer";

const Affiliate = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0ea]">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-[140px]">
        {/* <HeroAffiliate className="mt-5" /> */}
        <section className="text-center mb-16 mt-16">
          <h1 className="text-5xl font-vietnam italic mb-20">
            Our Affiliate Program
          </h1>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-16 justtify-between">
          <div className="space-y-4 w-full max-w-md">
            <h2 className="text-base font-semibold font-vietnam leading-7">
              Transform Opportunities into Iconic Rewards!
            </h2>
            <p className="text-base font-vietnam">
              We're inviting you to be a part of our transformative journey. If
              you know someone who could elevate their brand with our
              services—or if you'd like to build a passive income stream by
              promoting our exceptional solutions—our affiliate program is
              tailored just for you!
            </p>
            <p className="text-base font-vietnam py-6">
              To refer clients, you can:
              <br />
              <span className="pl-4 block">1. Connect to us via</span>
              OR
              <br />
              <span className="pl-4 block">
                2. You can simply introduce them to us by emailing at xyz@gmail
              </span>
            </p>
          </div>
          <AffiliateForm />
        </div>
        <FAQSection />
      </div>
      <ContactFooter />
    </div>
  );
};

export default Affiliate;
