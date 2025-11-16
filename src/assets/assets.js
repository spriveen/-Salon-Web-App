import logo from "./logo.png";
import logo_light from "./logo_light.png";
import hero_bg2 from "./hero_bg2.jpg";
import hero_bg from "./hero_bg.jpg";
import about1 from "./about1.jpg";
import about2 from "./about2.jpg";
import about from "./about.jpg";

import pricing_banner from "./pricing_banner.jpg";
import schedule_banner from "./schedule_banner.jpg";
import banner1 from "./banner1.jpg";
import w1 from "./w1.jpg";
import w2 from "./w2.jpg";
import w3 from "./w3.jpg";
import w4 from "./w4.jpg";
import w5 from "./w5.jpg";
import w6 from "./w6.jpg";

import team_banner from "./team_banner.png";
import t1 from "./t1.jpg";
import t2 from "./t2.jpg";
import t3 from "./t3.jpg";
import t4 from "./t4.jpg";

import service_banner from "./service_banner.jpg";
import service_bg from "./service_bg.jpg";
import service_img from "./service_img.jpg";

import product_1 from "./product_1.png";
import product_2 from "./product_2.png";
import product_3 from "./product_3.png";
import product_4 from "./product_4.png";
import product_5 from "./product_5.png";
import product_6 from "./product_6.png";
import product_7 from "./product_7.png";
import product_8 from "./product_8.png";
import product_9 from "./product_9.png";
import product_10 from "./product_10.png";

import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";
import logo4 from "./logo4.png";
import logo5 from "./logo5.png";
import logo6 from "./logo6.png";
import logo7 from "./logo7.png";
import logo8 from "./logo8.png";
import logo9 from "./logo9.png";
import spinner from "./spinner2.gif";

export const assets = {
  logo,
  logo_light,
  hero_bg,
  hero_bg2,
  spinner,
  service_banner,
  service_bg,
  service_img,
  team_banner,
  pricing_banner,
  schedule_banner,
  banner1,
  about,
  about1,
  about2,
};

export const haircutsData = [
  {
    name: "Haircuts",

    price: "125",
    desc: "Clean & simple 30-40 minutes",
  },
  {
    name: "Skin Fade",
    price: "145",
    desc: "Haircut blends to skin",
  },
  {
    name: "Buzz Cut",
    price: "75",
    desc: "Clippers only cut all over.",
  },
  {
    name: "Chap Haircut",
    price: "75",
    desc: "Junior under 14.",
  },
  {
    name: "Colouring",
    price: "325",
    desc: "Junior under 14.",
  },
];

// ourWorkData
export const ourWorkData = [
  {
    name: "Mustache Trimming",
    desc: "Give your mustache a clean and defined look with precision trimming. Our barbers craft sharp lines that enhance your style and personality.",

    image: w1,
  },
  {
    name: "Styling",
    desc: "From casual everyday looks to professional finishes, we style your hair to perfection using the latest trends and premium products.",
    image: w2,
  },
  {
    name: "Sleek and Shiny",
    desc: "Get a smooth, polished finish that adds shine and confidence to your look. Ideal for both modern and classic hair textures.",
    image: w3,
  },
  {
    name: "Shampo Set with Haircut",
    desc: "Enjoy a refreshing shampoo followed by a professional haircut. We cleanse, condition, and style your hair for a fresh, finished appearance.",
    image: w4,
  },
  {
    name: "Haircut & Blowdry",
    desc: "A complete grooming session with a stylish haircut and a voluminous blowdry finish. Perfect for events or a sleek daily look.",
    image: w5,
  },
  {
    name: "Coloring",
    desc: "Enhance or transform your hair color with expert coloring services. We use high-quality products for long-lasting, vibrant results.",
    image: w6,
  },
];

// teamData
export const teamData = [
  {
    name: "Mark Liuw",
    desc: "Expert barber with a passion for modern styles and precision cuts that enhance every face shape.",
    image: t1,
  },
  {
    name: "David Chen",
    desc: "Creative stylist known for blending classic barbering with the latest grooming trends.",
    image: t2,
  },
  {
    name: "Alex Johnson",
    desc: "Specializes in fades and detailed beard work, ensuring every client leaves looking sharp.",
    image: t3,
  },
  {
    name: "Michael Ross",
    desc: "Color and texture expert who transforms ordinary looks into confident, standout styles.",
    image: t4,
  },
];

export const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
];

// products
export const productsData = [
  {
    id: 1,
    name: "Absorptive Brush",
    rating: 4.8,
    shortDesc:
      "High-quality brush designed for smooth and even product application.",
    features: [
      "Soft bristles for gentle use",
      "Durable wooden handle",
      "Easy to clean and maintain",
      "Perfect for daily grooming",
    ],
    price: "45",
    longDesc:
      "Our Absorptive Brush is made with premium materials to ensure a flawless grooming experience. Ideal for professionals and individuals who value precision and comfort in every stroke.",
    category: "Grooming Tools",
    images: [product_1, product_2, product_3, product_4],
  },
  {
    id: 2,
    name: "Classic Razor",
    rating: 4.7,
    shortDesc: "Precision stainless-steel razor for a clean, close shave.",
    features: [
      "Ergonomic handle design",
      "Rust-resistant blades",
      "Smooth and safe glide",
      "Perfect for sensitive skin",
    ],
    price: "60",
    longDesc:
      "The Classic Razor delivers a timeless shaving experience with modern engineering. Its balanced handle and precision blades make it a favorite for everyday use.",
    category: "Shaving",
    images: [product_5, product_6, product_7, product_8],
  },
  {
    id: 3,
    name: "Premium Hair Dryer",
    rating: 4.9,
    shortDesc:
      "High-performance dryer with fast airflow and heat control technology.",
    features: [
      "Quick drying time",
      "Multiple heat settings",
      "Lightweight and ergonomic",
      "Suitable for all hair types",
    ],
    price: "175",
    longDesc:
      "Our Premium Hair Dryer provides professional-level results with advanced heat control and air precision. Designed for efficiency, comfort, and frizz-free styling.",
    category: "Hair Styling Tools",
    images: [product_3, product_4, product_9, product_10],
  },
  {
    id: 4,
    name: "Beard Trimmer Pro",
    rating: 4.6,
    shortDesc: "Rechargeable trimmer for precise beard shaping and styling.",
    features: [
      "Long-lasting battery life",
      "Precision stainless blades",
      "Multiple length settings",
      "Cordless convenience",
    ],
    price: "95",
    longDesc:
      "The Beard Trimmer Pro ensures a sharp, consistent trim with every use. Its durable design and adjustable settings make it ideal for both detail work and full grooming.",
    category: "Trimmers",
    images: [product_2, product_6, product_8, product_9],
  },
  {
    id: 5,
    name: "Hair Styling Cream",
    rating: 4.5,
    shortDesc: "Lightweight styling cream for natural shine and flexible hold.",
    features: [
      "Non-greasy formula",
      "Adds volume and texture",
      "Easy to rinse off",
      "Suitable for all hair types",
    ],
    price: "35",
    longDesc:
      "This Hair Styling Cream gives your hair natural shape, control, and smoothness. Ideal for achieving effortless daily styles without buildup or stiffness.",
    category: "Hair Care",
    images: [product_1, product_3, product_5, product_7],
  },
  {
    id: 5,
    name: "Luxury Comb Set",
    rating: 4.9,
    shortDesc: "A set of handcrafted combs for smooth, tangle-free styling.",
    features: [
      "Anti-static design",
      "Comfortable grip",
      "Ideal for all hair types",
      "Durable and portable",
    ],
    price: "55",
    longDesc:
      "Our Luxury Comb Set is made for professionals who value comfort and control. It glides smoothly through hair, minimizing breakage and adding shine.",
    category: "Accessories",
    images: [product_4, product_5, product_9, product_10],
  },
  {
    id: 6,
    name: "After Shave Lotion",
    rating: 4.4,
    shortDesc:
      "Soothing lotion that hydrates and refreshes your skin post-shave.",
    features: [
      "Alcohol-free formula",
      "Reduces redness and irritation",
      "Light masculine scent",
      "Quick absorption",
    ],
    price: "40",
    longDesc:
      "This After Shave Lotion provides instant comfort after shaving. Its calming ingredients help protect your skin from dryness while maintaining a fresh feel all day.",
    category: "Skin Care",
    images: [product_1, product_2, product_7, product_10],
  },
  {
    id: 7,
    name: "Professional Scissors",
    rating: 4.8,
    shortDesc: "Precision-engineered scissors for sharp, smooth cutting.",
    features: [
      "Japanese stainless steel blades",
      "Lightweight balance",
      "Ergonomic grip",
      "Perfect for professionals",
    ],
    price: "85",
    longDesc:
      "Crafted for precision and durability, these Professional Scissors are trusted by stylists worldwide. Perfect for creating clean cuts and refined finishes.",
    category: "Tools",
    images: [product_2, product_4, product_6, product_8],
  },
  {
    id: 7,
    name: "Hair Serum",
    rating: 4.7,
    shortDesc: "Smooth, silky finish that protects and nourishes your hair.",
    features: [
      "Light, non-sticky formula",
      "Heat protection",
      "Adds instant shine",
      "Reduces frizz",
    ],
    price: "50",
    longDesc:
      "Our Hair Serum restores natural shine while shielding your hair from heat and pollution. It leaves your hair looking glossy, soft, and manageable.",
    category: "Hair Care",
    images: [product_3, product_5, product_7, product_9],
  },
  {
    id: 8,
    name: "Men’s Grooming Kit",
    rating: 5.0,
    shortDesc: "All-in-one kit for complete grooming and styling needs.",
    features: [
      "Includes trimmer, combs, and brush",
      "Rechargeable design",
      "High-precision tools",
      "Portable case included",
    ],
    price: "195",
    longDesc:
      "This Men’s Grooming Kit combines style, performance, and practicality. Whether at home or traveling, it has everything you need for a polished look.",
    category: "Grooming Tools",
    images: [product_6, product_8, product_9, product_10],
  },
  {
    id: 9,
    name: "Shaving Foam",
    rating: 4.5,
    shortDesc: "Rich lather that softens hair and soothes your skin.",
    features: [
      "Prevents irritation",
      "Moisturizing ingredients",
      "Refreshing scent",
      "Smooth, close shave",
    ],
    price: "30",
    longDesc:
      "Our Shaving Foam is designed for a smoother, safer shave. It nourishes your skin while reducing friction, leaving you fresh and confident.",
    category: "Shaving",
    images: [product_1, product_3, product_4, product_7],
  },
  {
    id: 10,
    name: "Hair Wax",
    rating: 4.6,
    shortDesc: "Strong hold with a flexible, natural finish.",
    features: [
      "Long-lasting control",
      "Adds texture and volume",
      "Non-greasy formula",
      "Washes off easily",
    ],
    price: "40",
    longDesc:
      "Our Hair Wax gives your hairstyle definition and strength without stiffness. Perfect for creating both modern and classic looks that last all day.",
    category: "Hair Styling",
    images: [product_2, product_5, product_8, product_10],
  },
];
