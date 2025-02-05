import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import image1 from "../assets/service/image1.png";
import image2 from "../assets/service/image2.png";
import image3 from "../assets/service/image3.png";

const ServiceItem = ({ title, description, imageUrl, items }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        w-full h-[250px] relative group flex items-center md:p-6 rounded-xl 
        transition-all duration-700 ease-in-out cursor-pointer overflow-hidden
        ${
          items.some((item) => item.isHovered) && !isHovered
            ? "opacity-50"
            : "opacity-100"
        }
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full w-full flex items-center relative">
        {/* Image Container with Advanced Transition */}
        <div
          className={`
          absolute top-0 left-0 w-[300px] h-full 
          transition-all duration-700 ease-out
          ${
            isHovered
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 translate-x-[-100%] translate-y-[20%]"
          }
        `}
        >
          <img
            src={imageUrl}
            alt={title}
            className={`
              w-full h-full object-cover rounded-4xl shadow-lg 
              transition-all duration-500 ease-in-out
              ${isHovered ? "scale-105" : "scale-100"}
            `}
          />
        </div>
        {/* Content Container with Synchronized Movement */}
        <div
          className={`
          flex flex-col justify-center relative z-10 pl-12 pr-12 w-[calc(100%-300px)]
          transition-all duration-700 ease-out 
          ${isHovered ? "translate-x-64" : "translate-x-0"}
        `}
        >
          <h3
            className={`
            text-black py-4 text-2xl md:text-4xl 
            font-light font-vietnam italic mb-2 
            transition-all duration-600 ease-out
            truncate
            ${
              isHovered
                ? "text-black translate-x-16 translate-y-[-20px]"
                : "text-gray-600 translate-x-0"
            }
          `}
          >
            {title}
          </h3>

          {/* Description with Enhanced Reveal */}
          <p
            className={`
            text-gray-600 text-xl italic transition-all duration-900 ease-out
            line-clamp-4
            ${
              isHovered
                ? "opacity-100 translate-x-16 max-h-40"
                : "opacity-0 max-h-0"
            }
          `}
          >
            {description}
          </p>
        </div>
        {/* Arrow Icon with Refined Transition */}
        <div
          className={`
          absolute right-6 top-[50%] -translate-y-1/2
          transition-all duration-700 ease-out 
          ${isHovered ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}
        `}
        >
          <ArrowUpRight className="w-24 h-10 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [services, setServices] = useState([
    {
      title: "Social Media & Content",
      description:
        "Social Media Banners, Ad Designs, Branded Content, Carousels, Reels, Photo and Video shoots",
      imageUrl: image1,
    },
    {
      title: "Web Design and Graphics",
      description:
        "Website Design, Web Graphics, Website Development, SEO Creation, Custom websites (Shopify), Portal Creation",
      imageUrl: image2,
    },
    {
      title: "Packaging Design",
      description:
        "Packaging, Print Design, Merchandise Design, Stationery Design, Label/Tag",
      imageUrl: image3,
    },
  ]);

  return (
    <section className="w-full px-4 md:py-8">
      <div className="max-w-7xl mx-auto pt-12 pb-16">
        <div className="flex flex-col md:gap-6">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} items={services} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
