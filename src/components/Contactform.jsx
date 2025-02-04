import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import "./Navbar.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    services: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          source: "",
          services: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
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
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="px-4 py-2 font-vietnam rounded-md border border-[#cdd1dc] focus:outline-none focus:ring-2"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#1e202c] font-vietnam">
            How did you hear about Iconiqq?
          </label>
          <select
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="px-4 py-2 font-vietnam rounded-md border border-[#cdd1dc] focus:outline-none focus:ring-2 bg-white"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="Google">Google</option>
            <option value="Social Media">Social Media</option>
            <option value="Friend/Referral">Friend/Referral</option>
            <option value="Advertisement">Advertisement</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#1e202c] font-vietnam">
            What services are you looking for?
          </label>
          <textarea
            name="services"
            value={formData.services}
            onChange={handleChange}
            placeholder="Write Something.."
            className="px-4 py-2 font-vietnam rounded-md border border-[#cdd1dc] focus:outline-none focus:ring-2 h-[75px]"
          />
        </div>

        {status === "success" && (
          <p className="text-green-600 font-vietnam">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-vietnam">
            Failed to send message. Please try again.
          </p>
        )}

        <p className="text-[#8b8b8b] font-light font-vietnam">
          Please fill the above form and we will connect to you right away!
        </p>

        <button
          type="submit"
          className="md:flex w-1/2 schedule-button font-vietnam"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Submit Form"}
          <BsArrowUpRight />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
