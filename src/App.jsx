import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import AboutUs from "./components/AboutUs";
import AboutSection from "./pages/AboutDetails";

import Brands from "./components/Brands";
import FAQ from "./components/Faq";
import { Phone } from "lucide-react";
import Loader from "./components/ui/Loaders";
import AllProducts from "./components/AllProducts";
import BlogList from "./components/Blogs";
import AllBlogs from "./components/AllBlogs";
import BlogDetail from "./pages/BlogDetail";


// Lazy load sections
const Products = lazy(() => import("./components/Products"));
const Technology = lazy(() => import("./components/Technology"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ProductDetail = lazy(() => import("./pages/ProductDetails"));

const App = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 dark:bg-black">
      <Router>
        <Navbar
          toggleTheme={() => setDarkMode(!darkMode)}
          darkMode={darkMode}
        />

        {/* <Suspense fallback={<div className="text-center py-10"> */}
        <Suspense
          fallback={
            <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
              <Loader />
            </div>
          }
        >
          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <AboutUs />

                    <Products />
                    <Technology />

                    <Brands />
                    <BlogList/>
                    <FAQ />
                    <Contact />
                  </>
                }
              />

              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<AllProducts />} />
              <Route path="/product/:id" element={<ProductDetail />} />
             <Route path="/blogs" element={<AllBlogs />} />
             <Route path="/blogs/:id" element={<BlogDetail />} />
              <Route path="/aboutUs" element={<AboutSection />} />
            </Routes>
          </main>
          <a
            href="https://wa.me/+91-8085758575"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-0 right-6 bg-gradient-to-l from-green-600 to-green-900 hover:bg-green-600 text-white transition-all duration-300 z-50 mb-10 p-2 rounded-full animate-bounce"
          >
            <svg className="w-6 h-6" aria-hidden="true">
              <Phone />
            </svg>
            <span className="sr-only">Chat on WhatsApp</span>
          </a>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
