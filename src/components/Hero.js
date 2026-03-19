import { motion } from "framer-motion";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.06,
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const text =
    "A Frontend Developer passionate about building intuitive, high-performance interfaces. I work with React and modern web tools to transform ideas into fast, accessible, and visually engaging digital experiences.";

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center px-6 text-center"
    >
      <div className="max-w-3xl">

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold"
        >
          Hi, I’m{" "}
          <span className="text-accent1 relative">
            Trisha Pathak
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-accent1 scale-x-0 animate-[underline_1s_ease-out_forwards]" />
          </span>
        </motion.h1>

        {/* DESCRIPTION – WORD BY WORD */}
        <motion.p
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="mt-6 text-#DFD0B8-400 leading-relaxed"
        >
          {text.split(" ").map((wordText, index) => (
            <motion.span
              key={index}
              variants={word}
              className="inline-block mr-1"
            >
              {wordText}
            </motion.span>
          ))}
        </motion.p>

        {/* CTA LINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-6 text-accent1 font-medium"
        >
          Let’s create something amazing ✨
        </motion.p>
      </div>
    </section>
  );
}