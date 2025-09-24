import { Code2, Database, CreditCard, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "React Native",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "Redux",
    ],
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6 text-cyan-400" />,
    skills: ["Node.js", "Supabase", "MySQL", "SQL", "APIs REST", "Java", "Python"],
  },
  {
    title: "Pagos",
    icon: <CreditCard className="w-6 h-6 text-cyan-400" />,
    skills: [
      "Stripe API",
      "Wompi API",

    ],
  },
  {
    title: "Herramientas",
    icon: <Wrench className="w-6 h-6 text-cyan-400" />,
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
  {
    title: "Metodologías",
    icon: <Users className="w-6 h-6 text-cyan-400" />,
    skills: ["Agile", "Scrum"],
  },

];

export function Skills() {
  return (
    <section
      id="habilidades"
      className="py-20 px-8 bg-gradient-to-b from-black via-[#0a0a0f] to-black relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-cyan-900/10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(0,255,255,0.7)] tracking-wide">
            HABILIDADES TÉCNICAS
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="bg-[#111]/80 border border-purple-800/50 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#1a1a2e] rounded-lg">{category.icon}</div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs md:text-sm font-medium bg-gradient-to-r from-purple-900/40 to-cyan-900/40 text-purple-200 rounded-full border border-purple-700/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
