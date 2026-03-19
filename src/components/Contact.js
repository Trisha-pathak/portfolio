import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 max-w-7xl mx-auto relative"
    >
      <h2 className="text-center text-2xl font-semibold mb-16">
        Contact <span className="text-accent1">me</span>.
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-#DFD0B8-300 text-lg leading-relaxed">
            Have a project in mind, a role to discuss, or just want to say hi?
          </p>

          <p className="text-#DFD0B8-400">
            I’m currently open to full-time, contract, or part-time opportunities.
            I enjoy building clean, thoughtful interfaces with strong UX focus.
          </p>

          <div className="inline-flex items-center gap-2 text-sm text-accent1">
            <span className="h-2 w-2 rounded-full bg-accent1 animate-pulse" />
            Available for new opportunities
          </div>
        </motion.div>

        {/* FORM CARD */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-secondary/40 p-8 rounded-2xl border border-white/5 shadow-lg"
        >
          {/* subtle glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent1/10 to-transparent opacity-0 hover:opacity-100 transition pointer-events-none" />

          <div className="space-y-5 relative">
            <input
              name="name"
              required
              className="w-full p-3 rounded-lg bg-bg border border-white/10 focus:border-accent1 outline-none transition"
              placeholder="Your name"
            />

            <input
              name="email"
              type="email"
              required
              className="w-full p-3 rounded-lg bg-bg border border-white/10 focus:border-accent1 outline-none transition"
              placeholder="Your email"
            />

            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-3 rounded-lg bg-bg border border-white/10 focus:border-accent1 outline-none transition resize-none"
              placeholder="Tell me about your project"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-lg bg-bg text-accent1 font-medium
                     hover:scale-[1.02] hover:shadow-lg hover:shadow-accent1/20
                     transition active:scale-100 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>

            {/* STATUS MESSAGES */}
            {status === "success" && (
              <p className="text-green-400 text-sm">
                Message sent successfully ✅
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}