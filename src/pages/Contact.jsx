import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ContactFooter from "../components/Footer";
import ContactForm from "../components/Contactform";
import { EnvelopeOpenIcon } from "@heroicons/react/20/solid";

const Contact = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0ea]">
      {/* <Navbar /> */}
      <div className="max-w-6xl mx-auto pt-[140px]">
        <section className="text-center mb-16 mt-16">
          <h1 className="text-5xl font-vietnam italic mb-20">Get In Touch</h1>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-16 justtify-between">
          <div className="w-full max-w-md space-y-6">
            <div>
              <h2 className="text-base font-extrabold font-vietnam font-bold mb-2">
                Excited to work with you soon!
              </h2>
              <p className="text-base font-vietnam">
                For general enquiries, please fill out the form to get in touch.
                Alternatively, contact directly via email.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold font-vietnam mb-2">Contact</h2>
              <div className="flex items-center gap-2">
                <EnvelopeOpenIcon className="h-6 w-6 text-black" />
                <span className="font-semibold font-vietnam">
                  whateveremail@gmail.com
                </span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <ContactFooter />
    </div>
  );
};

export default Contact;
