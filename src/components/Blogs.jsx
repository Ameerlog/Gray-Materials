import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import { blogs } from "../db/blogs";

const BlogsSection = () => {
  const featuredBlogs = blogs.slice(0, 3);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  return (
    <section  id="blogs" className="py-20 px-6 md:px-12 lg:px-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
     
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 rounded-full">
            <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
              Our Blog
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Insights & Updates
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Read our latest articles, stories, and construction industry insights
          </p>
        </motion.div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                to={`/blogs/${blog.id}`}
                aria-label={`Read blog post: ${blog.title}`}
                className="group block h-full"
              >
                <div className="relative h-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-500 dark:hover:border-blue-600">
                  
             
                  <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 dark:bg-zinc-800">
                    <img
                      src={blog.image || "/placeholder.png"}
                      alt={blog.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white dark:bg-zinc-900 rounded-full p-2 shadow-lg">
                        <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                  </div>

         
                  <div className="p-5 flex flex-col flex-1">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 rounded-full">
                      {blog.category || "Construction News"}
                    </span>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {blog.date} • {blog.author}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                      {blog.summary}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

             
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-purple-500/10 transition-opacity duration-500 pointer-events-none" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>View All Blogs</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsSection;
