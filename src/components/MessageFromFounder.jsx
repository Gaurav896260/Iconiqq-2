import React from "react";

const MessageFromFounder = () => {
  return (
    <div className="flex items-center justify-center bg-[#f0f0ea] px-4 mt-[150px] mb-[150px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl items-center">
        {/* Left Side: Message Content */}
        <div className="space-y-6 text-left">
          <p className="text-gray-600 italic text-lg">
            Lorem ipsum dolor sit amet consectetur. Quis mattis dui mi mattis
            ipsum. Faucibus in sit vulputate id nascetur adipiscing mauris.
          </p>
          <div className="flex items-center space-x-4">
            {/* Placeholder for Profile Image (Replace with actual image URL) */}
            <div className="w-10 h-10 bg-white rounded-full"></div>
            <p className="font-bold text-lg italic text-gray-800">Khushi Sikka</p>
          </div>
        </div>

        {/* Right Side: Title with Blur Effect */}
        <div className="relative text-right">
          {/* Yellow Blur Effect */}
          <div className="absolute bottom-0 right-6 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-60 -z-10"></div>
          <h2 className="text-4xl italic">Message from</h2>
          <h2 className="text-5xl font-vilaka">Founder</h2>
        </div>
      </div>
    </div>
  );
};

export default MessageFromFounder;
