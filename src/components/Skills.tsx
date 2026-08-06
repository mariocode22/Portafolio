import { motion } from "framer-motion";
import { Code2, Database, Wrench, Users, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Backend",
    icon: <Database className="w-5 h-5 text-amber-400" />,
    skills: ["Node.js", "TypeScript", "TypeORM", "Spring Boot", "SAP", "PostgreSQL", "MySQL", "Supabase", "SQL", "APIs REST", "Java"],
  },
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5 text-orange-400" />,
    skills: ["Angular", "React", "JavaScript (ES6+)", "TailwindCSS", "React Native", "HTML5", "CSS3"],
  },
  {
    title: "Herramientas",
    icon: <Wrench className="w-5 h-5 text-rose-400" />,
    skills: ["Git", "GitHub", "VS Code", "Figma", "DBeaver", "Veritran Studio"],
  },
  {
    title: "Metodologías y Calidad",
    icon: <Users className="w-5 h-5 text-yellow-500" />,
    skills: ["Agile", "Scrum", "Pruebas"],
  },
];

export function Skills() {
  return (
    <section id="habilidades" className="py-28 px-6 md:px-12 bg-[#0F0F0F] relative overflow-hidden">
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="p-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8B8B8]">
              Stack Tecnológico
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Habilidades Técnicas
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 via-red-600 to-amber-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1E1E1E]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2.5 bg-[#0F0F0F] border border-white/10 rounded-xl group-hover:border-orange-500/30 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 text-xs font-medium bg-[#0F0F0F]/60 text-[#B8B8B8] rounded-lg border border-white/5 hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}