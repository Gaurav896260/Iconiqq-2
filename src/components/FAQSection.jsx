import React from 'react';

const FAQSection = () => {
  return (
    <section className="max-w-4xl mx-auto my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="p-6 bg-white rounded-xl flex justify-between items-start">
              <p className="text-base font-vietnam">Sunt in culpa qui officia Sunt in culpa qui officia</p>
              <div className="w-5 h-5 bg-black rounded-full" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-light font-vietnam italic">Have</h2>
          <div className="inline-block px-4 py-2 ">
            <span className="text-5xl font-vilaka">Questions?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;