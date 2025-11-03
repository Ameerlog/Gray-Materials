import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { blogs } from "../db/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 dark:bg-zinc-900">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white font-sans">
            Blog Not Found
          </h2>
          <Link to="/blogs" className="text-blue-600 hover:underline">
            Back to Blog List
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const relatedBlogs = blogs.filter(
    (b) => b.category === blog.category && b.id !== blog.id
  );

  return (
    <div className="px-6 md:px-16 py-16 bg-white dark:bg-zinc-900 font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link to="/" className="hover:text-gray-800 dark:hover:text-white">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/blogs" className="hover:text-gray-800 dark:hover:text-white">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 dark:text-white font-medium">
          {blog.title}
        </span>
      </nav>

      {/* Blog Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900 dark:text-white font-serif">
          {blog.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mb-8 italic">
          {formattedDate} • {blog.author}
        </p>

        {/* Blog Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
          <div>
            <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 prose dark:prose-invert max-w-none">
              <ReactMarkdown>{blog.summary}</ReactMarkdown>
            </div>
          </div>

          <div>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-80 md:h-[420px] object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none leading-relaxed">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1
                  className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white"
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p
                  className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed"
                  {...props}
                />
              ),
              li: ({ node, ...props }) => (
                <li
                  className="mb-2 list-disc ml-6 text-gray-700 dark:text-gray-300"
                  {...props}
                />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal ml-6 mb-5 space-y-2" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc ml-6 mb-5 space-y-2" {...props} />
              ),
              strong: ({ node, ...props }) => (
                <strong
                  className="font-semibold text-gray-900 dark:text-white"
                  {...props}
                />
              ),
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <div className="max-w-6xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-serif">
              Related Blogs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((rb) => (
                <Link
                  key={rb.id}
                  to={`/blogs/${rb.id}`}
                  className="group block overflow-hidden rounded-2xl hover:shadow-lg bg-transparent transition-all duration-300"
                >
                  <div className="overflow-hidden h-48 md:h-56 rounded-xl">
                    <img
                      src={rb.image}
                      alt={rb.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                      {rb.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                      {new Date(rb.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      • {rb.author}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
                      {rb.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <Link
            to="/blogs"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            ← Back to Blog List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
