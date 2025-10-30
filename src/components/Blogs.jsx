import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../db/blogs";

const BlogList = () => {
  return (
    <div className="px-[8%] lg:px-[12%] py-16" id="blogs">
      <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white dark:bg-zinc-800 overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{blog.title}</h3>
              <p className="text-gray-600 dark:text-zinc-300 text-sm mb-4">{blog.date} by {blog.author}</p>
              <p className="text-gray-700 dark:text-zinc-400 mb-6 flex-1">{blog.summary}</p>
              <Link
                to={`/blogs/${blog.id}`}
                className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
