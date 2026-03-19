import { motion } from "framer-motion";

const skills = [
  {
    name: "React",
    years: "4+ yrs",
    level: "Core",
    desc: "Hooks, performance, scalable component architecture",
    strength: 100,
    active: true,
  },
  {
    name: "JavaScript",
    years: "5+ yrs",
    level: "Core",
    desc: "Async patterns, clean logic, ES6+",
    strength: 100,
    active: true,
  },
  {
    name: "Tailwind CSS",
    years: "3+ yrs",
    level: "Advanced",
    desc: "Design systems, responsive UI, animations",
    strength: 85,
    active: true,
  },
  {
    name: "HTML & CSS",
    years: "5+ yrs",
    level: "Advanced",
    desc: "Semantic HTML, accessibility, layouts",
    strength: 85,
    active: true,
  },
  {
    name: "Node.js",
    years: "2 yrs",
    level: "Working",
    desc: "REST APIs, backend logic",
    strength: 60,
    active: false,
  },
  {
    name: "Git",
    years: "5 yrs",
    level: "Advanced",
    desc: "Version control, collaboration workflows",
    strength: 80,
    active: true,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl font-semibold mb-14"
      >
        Experience-Driven <span className="text-accent1">Skills</span>
      </motion.h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
            className="rounded-xl border border-white/10 bg-secondary/40
                       backdrop-blur px-5 py-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-text">
                {skill.name}
              </h3>

              {skill.active && (
                <span className="text-[10px] px-2 py-0.5 rounded-full
                                 bg-accent1/15 text-accent1
                                 border border-accent1/30">
                  Active
                </span>
              )}
            </div>

            {/* Meta */}
            <div className="mt-2 flex items-center gap-2 text-xs text-#DFD0B8-400">
              <span>{skill.years}</span>
              <span>•</span>
              <span className="capitalize">{skill.level}</span>
            </div>

            {/* Strength Bar */}
            <div className="mt-4 h-[4px] w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.strength}%` }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full bg-accent1 rounded-full"
              />
            </div>

            {/* Description */}
            <p className="mt-4 text-xs text-#DFD0B8-400 leading-relaxed">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}