import { motion } from "framer-motion";
import { Zap, Target, UserCheck, Code2, Sparkles } from "lucide-react";

const stats = [
  { icon: Zap, value: "3+ Años", label: "de Experiencia" },
  { icon: Target, value: "4+", label: "Proyectos Clave" },
  { icon: UserCheck, value: "Backend & Full Stack", label: "Enfoque Técnico" },
];

export function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 bg-[#0F0F0F] relative overflow-hidden">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

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
              Perfil Profesional
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Sobre mí
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 via-red-600 to-amber-400 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7"
          >
            <p className="text-[#B8B8B8] leading-relaxed mb-6 text-base md:text-lg">
              Soy <span className="text-white font-medium">Desarrollador de Software</span> con experiencia en el desarrollo backend y soluciones empresariales. Actualmente me desempeño integrando sistemas complejos con <span className="text-white font-medium">Node.js, TypeScript y SAP</span>, enfocándome en la lógica de negocio, transformación de datos y rendimiento de bases de datos.
            </p>
            <p className="text-[#B8B8B8] leading-relaxed mb-8 text-base md:text-lg">
              He construido aplicaciones web de forma autónoma utilizando <span className="text-white font-medium">Angular, Spring Boot y PostgreSQL</span>, conectando interfaces funcionales con flujos robustos de backend. Me apasiona escribir código limpio, optimizar procesos y asegurar la estabilidad en producción.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl border border-white/10 bg-[#1E1E1E]/50 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-xl group"
                  >
                    <div className="p-2.5 w-fit rounded-xl bg-[#0F0F0F] border border-white/10 mb-3 text-amber-400 group-hover:border-orange-500/30 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-white font-bold text-xl tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs text-[#B8B8B8] mt-1 font-medium">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-5 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-sm group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-orange-600/20 via-red-800/20 to-amber-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1E1E1E]/80 backdrop-blur-xl shadow-2xl">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src="/fotoPerfil.jpg"
                    alt="Mario F Delgado"
                    className="w-full h-full object-cover object-top grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0F0F0F]/80 backdrop-blur-md border border-white/10 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white flex items-center gap-1">
                      Código Limpio <Sparkles className="w-3 h-3 text-amber-400 inline" />
                    </p>
                    <p className="text-[11px] text-[#B8B8B8]">
                      Backend & Integraciones
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}