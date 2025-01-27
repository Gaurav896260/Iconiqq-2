import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import "./Navbar.css";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="space-y-7">
        <div className="flex flex-col gap-2">
          <label className="flex gap-1">
            <span className="text-[#1e202c] font-vietnam">Your Name</span>
            <span className="text-[#fa1f47]">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="px-4 py-2 font-vietnam rounded-md border border-[#cdd1dc] focus:outline-none focus:ring-2"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex gap-1">
            <span className="text-[#1e202c] font-vietnam">Email</span>
            <span className="text-[#fa1f47]">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 font-vietnam rounded-md border border-[#cdd1dc] focus:outline-none focus:ring-2"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex gap-1">
            <span className="text-[#1e202c] font-vietnam">Phone Number</span>
            <span className="text-[#fa1f47]">*</span>
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="px-4 py-2 font-vietnam rounded-md border border-[#cdd1dc] focus:outline-none focus:ring-2"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#1e202c] font-vietnam">How did you hear about Iconiqq?</label>
          <input
            type="text"
            placeholder="Let us know"
            className="px-4 py-2 font-vietnam rounded-md border border-[#cdd1dc] focus:outline-none focus:ring-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#1e202c] font-vietnam">What services are you looking for?</label>
          <textarea
            placeholder="Write Something.."
            className="px-4 py-2 font-vietnam rounded-md border border-[#cdd1dc] focus:outline-none focus:ring-2 h-[75px]"
          />
        </div>

        <p className="text-[#8b8b8b] font-light font-vietnam">
          Please fill the above form and we will connect to you right away!
        </p>

        <button
          className="md:flex w-1/2 schedule-button font-normal"
          onClick={() => navigate('/schedule-meet')}
        >
          Book a Demo
          <BsArrowUpRight />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;