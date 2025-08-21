import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">AURA</h2>
          <p className="mt-4 text-gray-400 text-sm max-w-xs font-bold">
            Premium T-shirts designed for comfort and confidence.  
            Elevate your everyday style with AURA.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[var(--text-color)]">Home</Link></li>
            <li><Link href="/product" className="hover:text-[var(--text-color)]">Product</Link></li>
            <li><Link href="/feature" className="hover:text-[var(--text-color)]">Feature</Link></li>
            <li><Link href="/collection" className="hover:text-[var(--text-color)]">Collection</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link href="/contact" className="hover:text-[var(--text-color)]">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-[var(--text-color)]">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-[var(--text-color)]">Shipping & Delivery</Link></li>
            <li><Link href="/returns" className="hover:text-[var(--text-color)]">Returns & Refunds</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-5 h-5 hover:text-[var(--text-color)]" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-5 h-5 hover:text-[var(--text-color)]" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="w-5 h-5 hover:text-[var(--text-color)]" />
            </Link>
            <Link href="mailto:info@aura.com">
              <Mail className="w-5 h-5 hover:text-[var(--text-color)]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AURA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
