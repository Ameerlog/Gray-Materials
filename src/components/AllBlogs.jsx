import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogs } from "../db/blogs"; 

const AllBlogs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-zinc-950 dark:via-black dark:to-zinc-950">
  
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            All Blogs
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            Insights, innovations, and trends shaping the construction industry.
          </p>
        </motion.div>
      </section>

      <section className="px-8 md:px-12 lg:px-20 pb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link to={`/blogs/${blog.id}`} className="group block h-full">
                <div className="relative flex flex-col h-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-500 dark:hover:border-blue-600">
         
                  <div className="overflow-hidden aspect-[4/3] bg-gray-100 dark:bg-zinc-800">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

       
                  <div className="flex flex-col flex-grow p-5">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      {new Date(blog.date).toLocaleDateString()} • {blog.author}
                    </p>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 flex-grow">
                      {blog.summary}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

               
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-purple-500/10 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllBlogs;
