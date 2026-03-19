import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import designSystem from "../assets/designSystem.png";
import designSystem2 from "../assets/designSystem2.png";
import designSystem3 from "../assets/designSystem3.png";

import listing from "../assets/listing.png";
import listing2 from "../assets/listing2.png";
import listing3 from "../assets/listing3.png";
import listing4 from "../assets/listing4.png";

import mart from "../assets/mart.png";
import mart2 from "../assets/mart2.png";
import mart3 from "../assets/mart3.png";
import mart4 from "../assets/mart4.png";

import api from "../assets/api.png";
import api2 from "../assets/api2.png";

import reel from "../assets/reel.png";
import reel2 from "../assets/reel2.png";
import reel3 from "../assets/reel3.png";

import post from "../assets/post.png";
import post2 from "../assets/post2.png";
import post3 from "../assets/post3.png";

import ad from "../assets/ad.png";
import ad2 from "../assets/ad2.png";
import ad3 from "../assets/ad3.png";

import ui from "../assets/ui.png";
import ui2 from "../assets/ui2.png";
import ui3 from "../assets/ui3.png";

import mobile from "../assets/mobile.png";
import mobile2 from "../assets/mobile2.png";
import mobile3 from "../assets/mobile3.png";
import mobile4 from "../assets/mobile4.png";

const projects = [
  {
    title: "UI Design System",
    description:
      "Built reusable UI components, layout patterns, and responsive grids used across the entire platform.",
    tags: ["React", "Reusable Components", "Responsive UI"],
    images: [
      designSystem,
      designSystem2,
      designSystem3,
    ],
  },
  {
    title: "Listings & Discovery",
    description:
      "Justdial-style category listings with search, filters, dynamic cards, and detailed pages.",
    tags: ["Listings", "Search UX", "API-driven UI"],
    images: [
      listing,
      listing2,
      listing3,
      listing4
    ],
  },
  {
    title: "Mart – E-commerce Module",
    description:
      "E-commerce UI like Flipkart: product listing, pricing, cart, stock info, and checkout-ready flows.",
    tags: ["E-commerce UI", "Cart", "Product Pages"],
    images: [
      mart,
      mart2,
      mart3,
      mart4
    ]
  },
  {
    title: "API Integrations",
    description:
      "Integrated multiple backend APIs for listings, mart products, media posts, user actions, and handled loading/error states.",
    tags: ["REST APIs", "Pagination", "State Management"],
    images: [
      api,
      api2
    ]
  },
  {
    title: "Reels / Short Video Feed",
    description:
      "Instagram-style reels: auto-play videos, vertical swipe, one video plays at a time, pause/play on scroll.",
    tags: ["Video Player", "Reels UI", "Infinite Scroll"],
    images: [
      reel,
      reel2,
      reel3
    ]
  },
  {
    title: "Photo & Video Posting",
    description:
      "Facebook-style media posting with captions, likes, comments, and gallery preview before posting.",
    tags: ["Photo Upload", "Video Upload", "Interactive Feed"],
    images: [
      post,
      post2,
      post3
    ]
  },
  {
    title: "Advertisements & Revenue",
    description:
      "Implemented ads posting, in-feed advertisements, and revenue generation system for users viewing ads or listings.",
    tags: ["Ads UI", "Revenue Model", "Analytics"],
    images: [
      ad,
      ad2,
      ad3
    ]
  },
  {
    title: "Animations & Micro-Interactions",
    description:
      "Hover effects, transitions, skeleton loaders, sliders, and micro-interactions to improve UX.",
    tags: ["Animations", "Skeleton UI", "UX Polish"],
    images: [
      ui,
      ui2,
      ui3
    ]
  },
  {
    title: "Mobile-First & Performance",
    description:
      "Optimized UI for mobile devices, lazy-loaded images/videos, improved scroll performance, and reduced re-renders.",
    tags: ["Mobile UX", "Performance", "Optimization"],
    images: [
      mobile,
      mobile2,
      mobile3,
      mobile4
    ]
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-center text-3xl font-semibold mb-4">
        Featured <span className="text-accent1">Projects</span>
      </h2>

      <p className="text-center text-#DFD0B8-400 max-w-3xl mx-auto mb-12">
        Aajubaaju is a local discovery, social media, e-commerce, and revenue-generating platform.
        Below are the major frontend systems I independently built and maintained over the last 5 years.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="group rounded-xl overflow-hidden bg-secondary/40 border border-white/10 hover:border-accent1/50 hover:-translate-y-2 transition-all cursor-pointer"
          >
            {/* Swiper Carousel for each project */}

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              className="h-48 project-swiper"
            >
              {(project.images || []).map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Screenshot ${idx + 1}`}
                    className="h-48 w-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Card content */}
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-#DFD0B8-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-#DFD0B8-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}