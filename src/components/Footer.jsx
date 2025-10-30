

import React from "react";
import Logo from "../assets/images/Logo.png";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <img src={Logo} alt="Logo" className="h-10 object-cover mb-2" />
          <p>Delivering top-quality construction materials for you.</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul>
            <li>
              <a href="/products" className="hover:underline">
           Products
              </a>
            </li>
            <li>
              <a href="/aboutUs"  className="hover:underline">
                AboutUs
              </a>
            </li>
            <li>
              <a href="/contact"  className="hover:underline">
               Contact
              </a>
            </li>
          </ul>
        </div>
        <div >
          <h3 className="font-bold mb-2">Contact</h3>
          <p>info@graymaterial.com</p>
          <p>080 - 8575 8575</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <p className="flex items-center gap-4">
            <span>
              <Linkedin className="hover:text-blue-500" />
            </span>
            <span>
              <Facebook  className="hover:text-blue-400"/>
            </span>
            <span>
              <Instagram  className="hover:text-pink-500"/>
            </span>
          </p>
        </div>
      </div>
      <p className="text-center mt-8 text-sm">
        &copy; Gray Materials®, 2025. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
