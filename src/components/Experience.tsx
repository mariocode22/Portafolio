import { motion } from "framer-motion";
import { jobs } from "../data/Jobs-Data";
import { Sparkles } from "lucide-react";

function ExperienceItem({ job, index }: { job: (typeof jobs)[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className={`relative flex items-start ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col md:gap-12`}
    >
      <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 mt-6 w-4 h-4 bg-[#0F0F0F] rounded-full border-2 border-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.6)] z-10"></div>

      <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
        <div className="bg-[#1E1E1E]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-xl group">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
              {job.role}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm mb-2">
              <span className="text-white font-medium">{job.company}</span>
              <span className="hidden sm:block text-white/20">•</span>
              <span className="text-[#B8B8B8]">{job.year}</span>
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
              {job.location}
            </span>
          </div>

          <p className="text-[#B8B8B8] leading-relaxed mb-6 text-sm">
            {job.desc}
          </p>

          <div className="flex flex-wrap gap-2">
            {job.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2.5 py-1 text-xs font-medium bg-[#0F0F0F]/60 text-[#B8B8B8] rounded-md border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2"></div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experiencia" className="py-28 px-6 md:px-12 bg-[#0F0F0F] relative overflow-hidden">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="p-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8B8B8]">
              Trayectoria
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Experiencia Profesional
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 via-red-600 to-amber-400 rounded-full mb-4" />
          <p className="text-[#B8B8B8] text-base md:text-lg">Mi camino y logros destacados en el desarrollo</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/60 via-red-700/60 to-transparent"></div>

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <ExperienceItem key={i} job={job} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}