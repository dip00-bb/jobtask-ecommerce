import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-9/10 mx-auto text-center text-black">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          Ready to <span className="text-[var(--highlight-color)]">Upgrade</span> Your Wardrobe?
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700 font-medium">
          Shop our latest collection today and bring comfort & style into your everyday look.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href='/all-products' className="px-6 py-3 text-white bg-[var(--button-color)] font-semibold cursor-pointer transition shadow-md">
            Shop Now
          </Link>
          <Link href='/all-products' className="px-6 py-3 border border-[var(--button-color)] text-[var(--highlight-color)] font-semibold hover:text-white hover:bg-[var(--highlight-color)] cursor-pointer transition shadow-md">
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;

