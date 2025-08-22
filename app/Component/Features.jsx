import React from "react";

const Features = () => {
  const features = [
    {
      title: "Premium Quality",
      desc: "Crafted with top-grade fabrics that last longer and feel better.",
    },
    {
      title: "Trendy Designs",
      desc: "Stay ahead with fresh, stylish looks made for every vibe.",
    },
    {
      title: "Affordable Pricing",
      desc: "High-quality fashion that doesn’t break the bank.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
          Why Choose <span className="text-[var(--highlight-color)]">Us?</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We blend comfort, style, and affordability to create the perfect T-shirts for you.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <div key={i} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-[var(--button-color)]">{item.title}</h3>
              <p className="mt-3 text-gray-600 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
