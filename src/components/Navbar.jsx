import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/images/Logo.png";
import { navigationData, megaMenuData } from "../db/navBar";

const Navbar = ({ toggleTheme, darkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const megaMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (link) => {
    if (link.type === "scroll") {
      scrollToSection(link.sectionId);
    } else if (link.type === "link") {
      navigate(link.path);
    }
  };

 
  const megaMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg shadow-lg"
            : "bg-white dark:bg-zinc-900 shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            
            <Link to="/" className="flex-shrink-0">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                src={Logo}
                alt="Gray Material Logo"
                className="h-8 sm:h-10 w-auto"
              />
            </Link>

     
            <div className="hidden lg:flex items-center space-x-1">
              {navigationData.mainLinks.map((link) => (
                <div
                  key={link.id}
                  className="relative"
                  ref={link.type === "mega" ? megaMenuRef : null}
                >
                  {link.type === "mega" ? (
                    <button
                      onMouseEnter={() => setMegaMenuOpen(true)}
                      onMouseLeave={() => setMegaMenuOpen(false)}
                      className="flex items-center space-x-1 px-3 xl:px-4 py-2 text-sm xl:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800"
                    >
                      <span>{link.label}</span>
                      <motion.div
                        animate={{ rotate: megaMenuOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link)}
                      className="px-3 xl:px-4 py-2 text-sm xl:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800"
                    >
                      {link.label}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 sm:p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors touch-manipulation"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 sm:w-5 sm:h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 sm:w-5 sm:h-5 text-gray-700" />
                )}
              </motion.button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 sm:p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors touch-manipulation"
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>


        <AnimatePresence>
          {megaMenuOpen && (
            <motion.div
              variants={megaMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
              className="absolute left-0 right-0 top-full bg-white dark:bg-zinc-900 shadow-2xl border-t border-gray-100 dark:border-gray-800 z-50"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {/* Featured Section */}
                  <div className="md:col-span-1 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-800 dark:to-zinc-800 rounded-xl p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">
                      {megaMenuData.featured.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                      {megaMenuData.featured.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        navigate(megaMenuData.featured.ctaPath);
                        setMegaMenuOpen(false);
                      }}
                      className="px-4 sm:px-6 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors shadow-md w-full sm:w-auto"
                    >
                      {megaMenuData.featured.ctaText}
                    </motion.button>
                  </div>

                  <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                    {megaMenuData.products.map((product) => (
                      <motion.button
                        key={product.id}
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(59, 130, 246, 0.05)",
                        }}
                        onClick={() => {
                          navigate(`/product/${product.id}`);
                          setMegaMenuOpen(false);
                        }}
                        className="flex flex-col items-center justify-center p-3 sm:p-4 lg:p-5 rounded-xl text-center transition-all hover:shadow-md border border-transparent hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50/30 dark:hover:bg-zinc-800/60"
                      >
                        {product.icon &&
                          React.createElement(product.icon, {
                            size: window.innerWidth < 640 ? 28 : 36,
                            className: "text-blue-600 dark:text-blue-400 mb-2 sm:mb-3",
                          })}
                        <h4 className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm text-center leading-tight">
                          {product.name}
                        </h4>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>


      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
            />

           
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-zinc-900 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              
                <div className="flex justify-between items-center pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    Menu
                  </h2>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors touch-manipulation"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                <nav className="space-y-1">
                  {navigationData.mainLinks.map((link) => (
                    <div key={link.id}>
                      {link.type === "mega" ? (
                        <div>
                          <button
                            onClick={() =>
                              setMobileProductsOpen(!mobileProductsOpen)
                            }
                            className="flex items-center justify-between w-full text-base sm:text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800 touch-manipulation"
                          >
                            <span>{link.label}</span>
                            <motion.div
                              animate={{ rotate: mobileProductsOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-5 h-5" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {mobileProductsOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden mt-1 space-y-1 pl-2"
                              >
                                {megaMenuData.products.map((product) => (
                                  <button
                                    key={product.id}
                                    onClick={() => {
                                      navigate(`/product/${product.id}`);
                                      setMobileMenuOpen(false);
                                      setMobileProductsOpen(false);
                                    }}
                                    className="flex items-center gap-3 w-full text-left text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-3 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800 touch-manipulation"
                                  >
                                    {product.icon &&
                                      React.createElement(product.icon, {
                                        size: 20,
                                        className: "flex-shrink-0",
                                      })}
                                    <span className="flex-1">{product.name}</span>
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            handleNavClick(link);
                            setMobileMenuOpen(false);
                          }}
                          className="text-base sm:text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block w-full text-left py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800 touch-manipulation"
                        >
                          {link.label}
                        </button>
                      )}
                    </div>
                  ))}
                </nav>

             
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => {
                      navigate("/contact");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors text-sm sm:text-base touch-manipulation"
                  >
             Reach Out To Us
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
