import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-[60] bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        
        <div>
          <img src={Logo} alt="Logo" className="h-10 object-cover mb-2" />
          <p>Delivering top-quality construction materials for you.</p>
        </div>

      
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/aboutUs" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <p>info@graymaterial.com</p>
          <p>+91-8085758575</p>
        </div>

       
        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/gray-material/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 cursor-pointer"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.facebook.com/graymaterial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 cursor-pointer"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/gray_materials/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 cursor-pointer"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center mt-8 text-sm">
        &copy; Gray Materials®, 2025. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
