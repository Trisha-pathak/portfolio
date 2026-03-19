import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    desc: [
      "Scalable frontend architectures",
      "High-performance React applications",
      "Clean, maintainable codebases",
    ],
    direction: "left",
  },
  {
    title: "UI Engineering",
    desc: [
      "Design-to-code precision",
      "Interaction & motion design",
      "Accessible, user-centric interfaces",
    ],
    direction: "right",
  },
];

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 max-w-7xl mx-auto">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl font-semibold mb-20"
      >
        What I <span className="text-accent1">Do</span>
      </motion.h2>

      {/* Circles */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        {services.map((service) => (
          <motion.div
            key={service.title}
            initial={{
              opacity: 0,
              x: service.direction === "left" ? -120 : 120,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative w-72 h-72"
          >
            {/* ROTATING ACCENT RING */}
            <div className="absolute inset-0 rounded-full border border-accent1/40 rotate-ring" />

            {/* MAIN CIRCLE */}
            <div
              className="relative z-10 w-full h-full rounded-full
                bg-secondary/40 backdrop-blur
                border border-white/10
                flex flex-col items-center justify-center text-center
                px-8
              "
            >
              <h3 className="text-lg font-semibold mb-4">
                {service.title}
              </h3>

              {/* Animated text lines */}
              <motion.div
                variants={textContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="space-y-2"
              >
                {service.desc.map((line, i) => (
                  <motion.p
                    key={i}
                    variants={textItem}
                    className="text-sm text-#DFD0B8-400"
                  >
                    {line}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}