"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ShoppingCart, Search, Mail, Menu, X } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";


const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/all-products" },
    { name: "Dashboard", path: "/dashboard/add-product" },
    { name: "Collection", path: "/collection" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white shadow-md static top-0 left-0 w-full z-50">
      <div className="max-w-9/11 mx-auto px-4 ">
        <div className="flex justify-between h-16 items-center">
          {/* Website Name */}
          <div className="text-2xl font-bold text-[var(--highlight-color)]">AURA</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-16">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-lg font-medium transition-colors ${isActive(link.path)
                  ? "text-[var(--highlight-color)] border-b-2 border-[var(--highlight-color)]"
                  : "text-gray-700 hover:text-[var(--highlight-color)]"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex space-x-6 items-center">
            <Search className="w-5 h-5 cursor-pointer hover:text-[var(--highlight-color)]" />
            <Mail className="w-5 h-5 cursor-pointer hover:text-[var(--highlight-color)]" />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-[var(--highlight-color)]" />

            <SignedOut>
              <SignInButton>
                <button className="border-1 border-[var(--highlight-color)] hover:bg-[var(--highlight-color)] text-[var(text-color)] hover:text-white font-medium text-sm sm:text-base h-5 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-[var(--highlight-color)] text-white font-medium text-sm sm:text-base h-5 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6 cursor-pointer" /> : <Menu className="w-6 h-6 cursor-pointer" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-lg font-medium ${isActive(link.path) ? "text-indigo-600" : "text-gray-700"
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="space-x-6 mt-4">
              <div>
                <Search className="w-5 h-5 cursor-pointer hover:text-[var(--highlight-color)]" />
                <Mail className="w-5 h-5 cursor-pointer hover:text-[var(--highlight-color)]" />
                <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-[var(--highlight-color)]" />

              </div>
              <div className="flex">
                <SignedOut>
                  <SignInButton>
                    <button className="border-1 border-[var(--highlight-color)] hover:bg-[var(--highlight-color)] text-[var(text-color)] hover:text-white font-medium text-sm sm:text-base h-5 sm:h-12 px-4 sm:px-5 cursor-pointer">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="bg-[var(--highlight-color)] text-white font-medium text-sm sm:text-base h-5 sm:h-12 px-4 sm:px-5 cursor-pointer">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
