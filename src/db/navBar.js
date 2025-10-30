import { products } from "../db/product";

export const navigationData = {
  mainLinks: [
    { id: 1, label: "Home", path: "/", type: "link" },
    {id:2,label:"About",sectionId:"about",type:"scroll"},
    // { id: 2, label: "Whom We Serve", sectionId: "technology", type: "scroll" },
    { id: 3, label: "Products", path: "/products", type: "mega" },
    // { id: 4, label: "Gallery", path: "/gallery", type: "link" },
    // { id: 5, label: "Blogs", sectionId: "blogs", type: "scroll" },
    { id: 4, label: "Why Choose Gray Material", sectionId: "technology",type:"scroll"},
    { id: 6, label: "Contact", sectionId: "contact", type: "scroll" }
  ]
};

export const megaMenuData = {
  featured: {
    title: "Featured Products",
    description: "Explore our premium selection of high-quality materials",
    ctaText: "View All Products",
    ctaPath: "/products"
  },
  products: products.map(product => ({
    id: product.id,
    name: product.name,
    description: product.description || "Premium quality product",
    icon: product.icon || "📦"
  }))
};
