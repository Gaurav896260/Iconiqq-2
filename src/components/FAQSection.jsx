import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const FAQSection = () => {
  // State to track which FAQ item is open
  const [openItem, setOpenItem] = useState(null);

  // Function to toggle the dropdown for the clicked FAQ item
  const toggleDropdown = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="flex flex-col bg-[#f0f0ea]">
      <section className="w-full mx-auto pt-[120px] mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-16 justify-between">
          {/* FAQ Items */}
          <div className="space-y-6 w-full max-w-md">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="p-6 bg-white rounded-xl flex flex-col justify-between items-center"
              >
                <div className="flex justify-between items-center w-full">
                  <p className="text-base font-vietnam">
                    Sunt in culpa qui officia Sunt in culpa qui officia
                  </p>
                  {/* Icon inside a black rounded background */}
                  <div
                    className="flex justify-center items-center rounded-full bg-white cursor-pointer"
                    onClick={() => toggleDropdown(item)}
                  >
                    {openItem === item ? (
                      <AiFillMinusCircle className="w-6 h-6 text-black" />
                    ) : (
                      <AiFillPlusCircle className="w-6 h-6 text-black" />
                    )}
                  </div>
                </div>

                {/* Dropdown Content */}
                {openItem === item && (
                  <div className="mt-4 p-4 bg-gray-100 rounded-xl">
                    <p>
                      Here is some extra content or detailed explanation for
                      this FAQ item. You can add more information about the
                      topic here.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* "Questions?" Section with Circular Blur Effect */}
          <div className="flex flex-col justify-center items-center text-center h-full relative w-full max-w-md">
            {/* Circular Blur Effect */}
            <div className="absolute w-48 h-48 bg-yellow-800 rounded-full blur-xl opacity-50 -z-10" />

            <h2 className="text-3xl font-light font-vietnam italic">Have</h2>
            <div className="inline-block px-4 py-2">
              <span className="text-5xl font-vilaka">Questions?</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
