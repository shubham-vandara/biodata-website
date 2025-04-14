// src/components/Footer.jsx
import React from "react";
import { Instagram, Linkedin, Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-[#1f102d] via-[#2b183c] to-[#3b204f] mt-10 p-6 text-center text-sm text-purple-200 border-t border-purple-900">
      <div className="flex justify-center space-x-6 mb-3">
        <a
          href="https://instagram.com/shubham_vandara"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="w-5 h-5 hover:text-pink-400 transition-colors" />
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-vandara/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5 hover:text-blue-400 transition-colors" />
        </a>
        <a
          href="https://shubhamvandara.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe className="w-5 h-5 hover:text-purple-300 transition-colors" />
        </a>
        <a href="mailto:shubhvandara@gmail.com">
          <Mail className="w-5 h-5 hover:text-rose-400 transition-colors" />
        </a>
        <a href="tel:+918849241138">
          <Phone className="w-5 h-5 hover:text-emerald-400 transition-colors" />
        </a>
      </div>
      <p className="italic font-light">
        &copy; 2025 Shubham Vandara. <br /> Crafted with love, dedication, and
        care, just for you. 💖
      </p>
    </footer>
  );
}
