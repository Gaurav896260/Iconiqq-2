import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import "./Navbar.css";

const AffiliateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, source, message } = formData;
    const whatsappNumber = "+917851838615"; // Replace with your specific WhatsApp number

    // Construct the message
    const whatsappMessage = `Hello, I am ${name}.
    \nEmail: ${email}
    \nPhone: ${phone}
    \nSource: ${source || "Not specified"}
    \nMessage: ${message || "No additional message provided."}`;

    // WhatsApp URL
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full">
      <div className="mb-6">
        <label className="block mb-2">
          Your Name <span className="text-[#fa1f47] font-vietnam">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 font-vietnam rounded-md border border-[#cdd1dc]"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-vietnam">
          Email <span className="text-[#fa1f47] font-vietnam">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full font-vietnam px-4 py-2 rounded-md border border-[#cdd1dc]"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-vietnam">
          Phone Number <span className="text-[#fa1f47]">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 font-vietnam rounded-md border border-[#cdd1dc]"
          placeholder="Enter your phone number"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-vietnam">
          How did you hear about Iconiqq?
        </label>
        <select
          name="source"
          value={formData.source}
          onChange={handleChange}
          className="w-full px-4 py-2 font-vietnam rounded-md border border-[#cdd1dc]"
        >
          <option value="">Select an option</option>
          <option value="social">Social Media</option>
          <option value="referral">Referral</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-vietnam">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full font-vietnam px-4 py-2 rounded-md border border-[#cdd1dc] min-h-[75px]"
          placeholder="Write Something.."
        />
      </div>
      <p className="text-[#8b8b8b] mb-6 font-vietnam">
        Please fill the above form and we will connect to you right away!
      </p>
      <button
        type="submit"
        className="md:flex w-1/2 schedule-button font-normal"
      >
        Submit Form
        <BsArrowUpRight />
      </button>
    </form>
  );
};

export default AffiliateForm;
