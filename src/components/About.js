import { useEffect, useRef, useState } from "react";
import profile from "../assets/profile.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import Resume from "./Resume";
import html2pdf from "html2pdf.js";

export default function About() {

  const imageRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // reset first to replay animation
          setAnimate(false);
          requestAnimationFrame(() => {
            setAnimate(true);
          });
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.5 }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = {
    github: "https://github.com/Trisha-pathak",
    linkedin: "https://www.linkedin.com/in/trisha-pathak-b388641b2",
    twitter: "https://twitter.com/TrishaPathak15",
  };

  const text =
    "Hi, I’m Trisha Pathak, a Front-end Developer with 5 years of experience in building responsive, user-centric web interfaces. I specialize in turning ideas into elegant, functional designs using clean, maintainable code. I’m always exploring better ways to make the web feel faster and more engaging. I love crafting digital experiences that feel smooth, intuitive, and impactful.";


  const downloadResume = () => {
    const element = document.getElementById("resume-pdf");

    const options = {
      margin: [0.3, 0, 0.3, 0.1], // 🔥 top, right, bottom, left (in inches)
      filename: "Trisha_Pathak_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        scrollY: 0
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait"
      },
      pagebreak: {
        mode: ["avoid-all", "css"]
      }
    };
    html2pdf().set(options).from(element).save();
  };

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="relative flex justify-center items-center w-[340px] h-[340px] mx-auto">

          {/* OUTER RING */}
          <div className="absolute inset-0 rounded-full border-[3px] border-accent1" />

          {/* IMAGE */}
          <div
            ref={imageRef}
            className={`w-[280px] h-[280px] rounded-full overflow-hidden ${animate ? "animate-image" : "opacity-0"
              }`}
          >
            <img
              src={profile}
              alt="Trisha"
              className="w-full h-full object-cover"
            />
          </div>

          {/* GITHUB */}
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-14 left-1 flip-icon w-11 h-11"
          >
            <div className="flip-icon-inner relative w-full h-full rounded-full bg-secondary text-text shadow-lg">

              {/* FRONT FACE */}
              <div className="flip-front w-full h-full rounded-full flex items-center justify-center text-text">
                <FaGithub />
              </div>

              {/* BACK FACE */}
              <div className="flip-back w-full h-full rounded-full flex items-center justify-center text-accent1 bg-secondary">
                <FaGithub />
              </div>

            </div>
          </a>

          {/* LINKEDIN */}
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-14 right-1 flip-icon w-11 h-11"
          >
            <div className="flip-icon-inner relative w-full h-full rounded-full bg-secondary text-text shadow-lg">
              <div className="flip-front w-full h-full rounded-full flex items-center justify-center text-text">
                <FaLinkedinIn />
              </div>
              <div className="flip-back w-full h-full rounded-full flex items-center justify-center text-accent1 bg-secondary">
                <FaLinkedinIn />
              </div>
            </div>
          </a>

          {/* TWITTER */}
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 flip-icon w-11 h-11"
          >
            <div className="flip-icon-inner relative w-full h-full rounded-full bg-secondary text-text shadow-lg">
              <div className="flip-front w-full h-full rounded-full flex items-center justify-center text-text">
                <FaXTwitter />
              </div>
              <div className="flip-back w-full h-full rounded-full flex items-center justify-center text-accent1 bg-secondary">
                <FaXTwitter />
              </div>
            </div>
          </a>

        </div>

        {/* RIGHT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="text-accent1 relative">
              About Me
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-accent1 scale-x-0 animate-[underline_1s_ease-out_forwards]" />
            </span>
          </motion.h1>

          <motion.p
            variants={sentence}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
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
          <motion.button
            onClick={() => setShowResume(true)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-8 px-6 py-3 rounded-full border border-accent1 text-accent1
             hover:bg-accent1 hover:text-black transition-all duration-300"
          >
            View Resume
          </motion.button>
          {showResume && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex justify-center items-center">
              <div
                className="absolute inset-0"
                onClick={() => setShowResume(false)}
              />

              {/* Resume modal container */}
              <div className="relative w-[90%] md:w-[70%] h-[85%] bg-white rounded-xl overflow-y-auto z-10">
                <Resume />
                <button
                  onClick={downloadResume}
                  className="fixed bottom-6 right-6 px-5 py-3 border border-accent1 text-accent1
             hover:bg-accent1 rounded-full shadow-lg"
                >
                  Download Resume
                </button>

                {/* Close */}
                <button
                  onClick={() => setShowResume(false)}
                  className="absolute top-4 right-4 text-xl text-black"
                >
                  ✕
                </button>

              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}