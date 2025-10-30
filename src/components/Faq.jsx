import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../db/faq";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white dark:bg-black py-20 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-0 border-t border-gray-200 dark:border-zinc-800">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onHoverStart={() => setOpenIndex(index)}
              onHoverEnd={() => setOpenIndex(null)}
              className="border-b border-gray-200 dark:border-zinc-800 relative"
            >
             
              <motion.div
                className="absolute inset-0 bg-gray-50 dark:bg-zinc-900/30 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
              <div className="w-full flex items-start justify-between gap-6 py-6 relative z-10">
                <motion.span
                  className="text-lg md:text-xl font-medium text-gray-900 dark:text-white"
                  animate={{ x: openIndex === index ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {faq.question}
                </motion.span>

                <motion.div
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
                  animate={{ 
                    scale: openIndex === index ? 1.2 : 1,
                    rotate: openIndex === index ? 180 : 0 
                  }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-900 dark:text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-900 dark:text-white" />
                  )}
                </motion.div>
              </div>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden relative z-10"
                  >
                    <motion.p
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="text-base text-gray-600 dark:text-gray-400 leading-relaxed pr-12 pb-6"
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
