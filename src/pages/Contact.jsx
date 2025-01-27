import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ContactFooter from '../components/Footer'
import ContactForm from '../components/Contactform'

const Contact = () => {
  useEffect(() => {
      // Scroll to the top when the component mounts
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-[#f0f0ea]">
      <Navbar />
      <div className="pt-[140px]">
        <main className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-light font-vietnam italic text-center mb-16 mt-20">Get in Touch</h1>

          <div className="flex flex-wrap justify-center gap-16">
            <div className="max-w-md">
              <div className="mb-8">
                <p className="text-base font-semibold font-vietnam mb-2">
                  Excited to work with you soon!
                </p>
                <p className="text-base mb-6 font-vietnam">
                  For general enquiries, please fill out the form to get in touch.
                  Alternatively, contact directly via email.
                </p>
                <h2 className="text-2xl font-semibold mb-2 font-vietnam">Contact</h2>
                <div className="flex items-center gap-2">
                  <span className="font-semibold font-vietnam">whateveremail@gmail</span>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </main>
      </div>
      <ContactFooter />
    </div>
  )
}

export default Contact