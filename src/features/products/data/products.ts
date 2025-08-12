import { Product } from "@/features/products/types/product";
import watchImage from "@/assets/watch-1.jpg";
import headphonesImage from "@/assets/headphones-1.jpg";
import phoneImage from "@/assets/phone-1.jpg";
import bagImage from "@/assets/bag-1.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Luxury Watch",
    description: "A sophisticated timepiece with precision Swiss movement and premium materials. Perfect for the modern professional.",
    price: 599,
    originalPrice: 799,
    image: watchImage,
    category: "Accessories",
    rating: 4.8,
    reviews: 324,
    inStock: true,
    features: ["Swiss Movement", "Sapphire Crystal", "Water Resistant", "Leather Strap"]
  },
  {
    id: "2",
    name: "Wireless Pro Headphones",
    description: "High-fidelity wireless headphones with active noise cancellation and 30-hour battery life.",
    price: 299,
    image: headphonesImage,
    category: "Electronics",
    rating: 4.9,
    reviews: 891,
    inStock: true,
    features: ["Active Noise Cancellation", "30h Battery", "Wireless", "Premium Audio"]
  },
  {
    id: "3",
    name: "Flagship Smartphone",
    description: "Latest generation smartphone with advanced camera system and lightning-fast performance.",
    price: 999,
    originalPrice: 1199,
    image: phoneImage,
    category: "Electronics",
    rating: 4.7,
    reviews: 1456,
    inStock: true,
    features: ["5G Ready", "48MP Camera", "All-Day Battery", "Premium Display"]
  },
  {
    id: "4",
    name: "Premium Leather Bag",
    description: "Handcrafted leather laptop bag with premium materials and timeless design for professionals.",
    price: 249,
    image: bagImage,
    category: "Accessories",
    rating: 4.6,
    reviews: 203,
    inStock: true,
    features: ["Genuine Leather", "Laptop Compartment", "Handcrafted", "Lifetime Warranty"]
  }
];