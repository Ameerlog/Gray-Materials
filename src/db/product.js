import MSand from "../assets/images/M sand.webp";
import PSand from "../assets/images/PSAND.webp";
import Aggregates from "../assets/images/Aggregates.webp";
import RMC from "../assets/images/Ready mix concrete.webp";
import Precast from "../assets/images/Precast products.webp";
import Pavers from "../assets/images/Paver blocks.webp";
import ConcreteBlocks from "../assets/images/Solid concrete blocks.webp";
import { Construction, Hammer, Boxes, Truck, Building2, Square, ToyBrick } from 'lucide-react';

export const products = [
  {
    id: "1",
    name: "M-Sand (Manufactured Sand)",
    category: "Construction Sand",
    img: [MSand],
    images: [MSand, MSand, MSand],
    description: "M-Sand is a high-quality crushed stone sand specially processed for use in concrete and structural construction. It offers excellent strength, uniform particle size, and is completely free from silt or impurities. It is the best replacement for river sand and is widely used for RCC slabs, beams, columns, and foundation work due to its superior bonding and durability.",
    icon: Construction,
    keyFeatures: [
      "High-quality crushed stone sand specially processed for concrete and structural construction",
      "Offers excellent strength with uniform particle size",
      "Completely free from silt or impurities",
      "Best replacement for river sand",
      "Widely used for RCC slabs, beams, columns, and foundation work",
      "Superior bonding and durability"
    ],
    details:"M-Sand is a high-quality crushed stone sand specially processed for use in concrete and structural construction. It offers excellent strength, uniform particle size, and is completely free from silt or impurities. It is the best replacement for river sand and is widely used for RCC slabs, beams, columns, and foundation work due to its superior bonding and durability.",
    technicalSpecs: [
      { label: "Particle Size", value: "0-4.75mm" },
      { label: "Moisture Content", value: "<2%" },
      { label: "Silt Content", value: "0%" },
      { label: "Usage", value: "Concrete & RCC Works" }
    ]
  },
  {
    id: "2",
    name: "P-Sand (Plastering Sand)",
    category: "Plastering Sand",
    img: [PSand],
    images: [PSand, PSand, PSand],
    description: "P-Sand is a finely graded plastering sand designed for smooth interior and exterior wall finishes. It is completely dust-free, stone-free, and provides a clean finish, making it ideal for plastering, putty application, and wall finishing works. Its fine texture ensures better coverage, strong adhesion, and premium surface finish for painting.",
    icon: Hammer,
    keyFeatures: [
      "Finely graded plastering sand designed for smooth interior and exterior wall finishes",
      "Completely dust-free and stone-free",
      "Provides a clean finish, ideal for plastering and putty application",
      "Fine texture ensures better coverage and strong adhesion",
      "Premium surface finish for painting",
      "Perfect for wall finishing works"
    ],
     details:"M-Sand is a high-quality crushed stone sand specially processed for use in concrete and structural construction. It offers excellent strength, uniform particle size, and is completely free from silt or impurities. It is the best replacement for river sand and is widely used for RCC slabs, beams, columns, and foundation work due to its superior bonding and durability.",
    technicalSpecs: [
      { label: "Particle Size", value: "0-2mm" },
      { label: "Moisture Content", value: "<1.5%" },
      { label: "Dust Content", value: "0%" },
      { label: "Usage", value: "Plastering & Wall Finishing" }
    ]
  },
  {
    id: "3",
    name: "Aggregates (6mm/12mm/20mm/40mm)",
    category: "Stone Aggregates",
    img: [Aggregates],
    images: [Aggregates, Aggregates, Aggregates],
    description: "We supply high-strength crushed stone aggregates available in multiple sizes like 6mm, 12mm, 20mm, 40mm, suitable for concrete production, road construction, drainage base, and foundation work. Our aggregates are durable, high in load-bearing capacity, and ensure long-lasting stability for both residential and large infrastructure projects.",
    icon: Boxes,
    keyFeatures: [
      "High-strength crushed stone aggregates available in multiple sizes (6mm, 12mm, 20mm, 40mm)",
      "Suitable for concrete production and road construction",
      "Perfect for drainage base and foundation work",
      "Durable with high load-bearing capacity",
      "Ensures long-lasting stability for both residential and large infrastructure projects",
      "Premium quality aggregates"
    ],
     details:"M-Sand is a high-quality crushed stone sand specially processed for use in concrete and structural construction. It offers excellent strength, uniform particle size, and is completely free from silt or impurities. It is the best replacement for river sand and is widely used for RCC slabs, beams, columns, and foundation work due to its superior bonding and durability.",
    technicalSpecs: [
      { label: "Available Sizes", value: "6mm, 12mm, 20mm, 40mm" },
      { label: "Crushing Value", value: "<30%" },
      { label: "Water Absorption", value: "<2%" },
      { label: "Usage", value: "Concrete, Roads, Drainage" }
    ]
  },
  {
    id: "4",
    name: "Ready-Mix Concrete (RMC)",
    category: "Concrete Solutions",
    img: [RMC],
    images: [RMC, RMC, RMC],
    description: "Ready-Mix Concrete (RMC) is a factory-designed concrete mixture delivered directly to your site using transit mixers. It ensures accurate strength, faster construction, and reduced labor dependency. Available in multiple grades such as M20, M25, M30, and more — RMC is ideal for commercial buildings, residential projects, industrial constructions, and infrastructure works.",
    icon: Truck,
    keyFeatures: [
      "Factory-designed concrete mixture delivered directly to your site using transit mixers",
      "Ensures accurate strength and faster construction",
      "Reduced labor dependency",
      "Available in multiple grades such as M20, M25, M30, and more",
      "Ideal for commercial buildings and residential projects",
      "Perfect for industrial constructions and infrastructure works"
    ],
     details:"M-Sand is a high-quality crushed stone sand specially processed for use in concrete and structural construction. It offers excellent strength, uniform particle size, and is completely free from silt or impurities. It is the best replacement for river sand and is widely used for RCC slabs, beams, columns, and foundation work due to its superior bonding and durability.",
    technicalSpecs: [
      { label: "Available Grades", value: "M15, M20, M25, M30, M35, M40" },
      { label: "Slump Value", value: "100-150mm" },
      { label: "Delivery", value: "Transit Mixer" },
      { label: "Setting Time", value: "30-45 minutes" }
    ]
  },
  {
    id: "5",
    name: "Precast Products",
    category: "Precast Solutions",
    img: [Precast],
    images: [Precast, Precast, Precast],
    description: "Our precast solutions include precast slabs, boundary walls, kerb stones, drains, and custom elements manufactured with high precision in a controlled environment. These products are ready-to-install, cost-effective, and ensure faster site execution. Widely used for infrastructure, industrial, and real estate development projects for long-term durability.",
    icon: Building2,
    keyFeatures: [
      "Precast slabs, boundary walls, kerb stones, drains, and custom elements available",
      "Manufactured with high precision in a controlled environment",
      "Ready-to-install and cost-effective",
      "Ensures faster site execution",
      "Widely used for infrastructure and industrial projects",
      "Long-term durability for real estate development projects"
    ],
     details:"M-Sand is a high-quality crushed stone sand specially processed for use in concrete and structural construction. It offers excellent strength, uniform particle size, and is completely free from silt or impurities. It is the best replacement for river sand and is widely used for RCC slabs, beams, columns, and foundation work due to its superior bonding and durability.",
    technicalSpecs: [
      { label: "Product Types", value: "Slabs, Walls, Kerbs, Drains" },
      { label: "Strength Grade", value: "M30-M40" },
      { label: "Curing Method", value: "Steam Curing" },
      { label: "Installation", value: "Ready-to-Install" }
    ]
  },
  {
    id: "6",
    name: "Paver Blocks",
    category: "Outdoor Flooring",
    img: [Pavers],
    images: [Pavers, Pavers, Pavers],
    description: "We provide heavy-duty interlocking paver blocks that are ideal for outdoor flooring in parking areas, driveways, footpaths, and commercial premises. These pavers are available in multiple designs and thickness options, offering excellent durability, load-bearing strength, and an attractive aesthetic finish to enhance the overall landscape.",
    icon: Square,
    keyFeatures: [
      "Heavy-duty interlocking paver blocks ideal for outdoor flooring",
      "Perfect for parking areas, driveways, footpaths, and commercial premises",
      "Available in multiple designs and thickness options",
      "Offers excellent durability with load-bearing strength",
      "Attractive aesthetic finish to enhance the overall landscape",
      "Superior quality for long-lasting outdoor use"
    ],
     details:"M-Sand is a high-quality crushed stone sand specially processed for use in concrete and structural construction. It offers excellent strength, uniform particle size, and is completely free from silt or impurities. It is the best replacement for river sand and is widely used for RCC slabs, beams, columns, and foundation work due to its superior bonding and durability.",
    technicalSpecs: [
      { label: "Size", value: "200 x 100 x 60/80mm" },
      { label: "Compressive Strength", value: "30-40 N/mm²" },
      { label: "Water Absorption", value: "<6%" },
      { label: "Finish Types", value: "Multiple Designs" }
    ]
  },
  {
    id: "7",
    name: "Solid Concrete Blocks",
    category: "Building Blocks",
    img: [ConcreteBlocks],
    images: [ConcreteBlocks, ConcreteBlocks, ConcreteBlocks],
    description: "Solid Concrete Blocks are high-density load-bearing blocks widely used for strong structural walls, compound walls, retaining structures, and industrial construction. These blocks offer excellent durability, sound insulation, and weather resistance, making them a superior alternative to traditional bricks for long-term structural stability.",
    icon: ToyBrick,
    keyFeatures: [
      "High-density load-bearing blocks widely used for strong structural walls",
      "Perfect for compound walls, retaining structures, and industrial construction",
      "Offer excellent durability with sound insulation",
      "Weather resistance for long-term performance",
      "Superior alternative to traditional bricks",
      "Long-term structural stability"
    ],
     details:"M-Sand is a high-quality crushed stone sand specially processed for use in concrete and structural construction. It offers excellent strength, uniform particle size, and is completely free from silt or impurities. It is the best replacement for river sand and is widely used for RCC slabs, beams, columns, and foundation work due to its superior bonding and durability.",
    technicalSpecs: [
      { label: "Size", value: "400 x 200 x 200 mm" },
      { label: "Density", value: "2000-2200 kg/m³" },
      { label: "Compressive Strength", value: "7-10 N/mm²" },
      { label: "Type", value: "Load-Bearing" }
    ]
  }
];
