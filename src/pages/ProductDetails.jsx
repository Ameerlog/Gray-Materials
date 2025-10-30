import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../db/product";
import {
  Download,
  FileText,
  ChevronRight,
  Home,
  Package,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Mail,
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const navigate = useNavigate();

  const googleDriveLink =
    "https://drive.google.com/file/d/your-file-id/view?usp=sharing";

  const localFileLink = "/brochures/sample-brochure.pdf";

  // PRODUCT NOT FOUND STATE
  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 dark:bg-zinc-900 px-4">
        <div className="text-center bg-white dark:bg-zinc-800 p-6 sm:p-12 rounded-2xl shadow-lg max-w-md w-full">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <AlertCircle className="w-10 h-10 text-gray-400" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Product Not Found
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
            Sorry, the product you're looking for doesn't exist.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <nav className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 overflow-x-auto">
            <Link
              to="/"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <Link
              to="/products"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap flex items-center gap-1"
            >
              <Package className="w-4 h-4" />
              Products
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-gray-900 dark:text-white font-medium truncate">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Product Detail Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-4 sm:space-y-6 order-2 lg:order-1">
            {/* Product List */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 overflow-hidden">
              <div className="px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  Our Products
                </h3>
              </div>
              <div className="p-2 max-h-[300px] sm:max-h-none overflow-y-auto">
                {products.map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className={`flex items-center gap-3 p-2 sm:p-3 rounded-md transition-all ${
                      p.id === product.id
                        ? "bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600"
                        : "hover:bg-gray-50 dark:hover:bg-zinc-800 border-l-4 border-transparent"
                    }`}
                  >
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-xs sm:text-sm font-medium truncate ${
                          p.id === product.id
                            ? "text-blue-700 dark:text-blue-400"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {p.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {p.category}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Brochure Download */}
            <div className="bg-blue-600 dark:bg-blue-700 rounded-lg p-4 sm:p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Product Brochure</h3>
                  <p className="text-xs text-blue-100">
                    Technical Documentation
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-blue-50 mb-4">
                Download detailed specifications and product information.
              </p>

              <div className="flex flex-col gap-2">
                <a
                  href={googleDriveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-white text-blue-600 font-medium py-2 sm:py-2.5 rounded-md hover:bg-blue-50 transition-colors text-xs sm:text-sm"
                >
                  <Download className="w-4 h-4" />
                  Google Drive PDF
                </a>

                <a
                  href={localFileLink}
                  download
                  className="w-full flex items-center justify-center gap-2 bg-white text-blue-600 font-medium py-2 sm:py-2.5 rounded-md hover:bg-blue-50 transition-colors text-xs sm:text-sm"
                >
                  <Download className="w-4 h-4" />
                  Local Brochure
                </a>
              </div>
            </div>

            {/* Contact Help */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 p-4 sm:p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                Need Help?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
                Get in touch for product inquiries and support.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="w-full flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium py-2 sm:py-2.5 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-xs sm:text-sm"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 order-1 lg:order-2">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full mb-3">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mb-8">
              <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-[250px] sm:h-[350px] lg:h-[450px] object-cover"
                />
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Features
              </h2>
              <div className="space-y-3">
                {product.keyFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 py-3 border-b border-gray-200 dark:border-zinc-800 last:border-0"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1" />
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specs */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Specifications
              </h2>
              <div className="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 overflow-hidden">
                <div className="block sm:hidden divide-y divide-gray-200 dark:divide-zinc-800">
                  {product.technicalSpecs.map((spec, i) => (
                    <div key={i} className="px-4 py-3">
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {spec.label}
                      </p>
                      <p className="text-sm text-gray-900 dark:text-white font-medium">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>

                <table className="hidden sm:table w-full">
                  <tbody className="divide-y divide-gray-200 dark:divide-zinc-800">
                    {product.technicalSpecs.map((spec, i) => (
                      <tr
                        key={i}
                        className="hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300 text-right">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Request a Quote</h3>
              <p className="text-blue-50 mb-6 max-w-2xl mx-auto">
                Contact our team for pricing, availability, and bulk order
                inquiries.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-blue-50 transition-colors"
              >
                Get in Touch
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
