import { Zap, Target, UserCheck } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-8 bg-gradient-to-b from-black via-[#0a0a0f] to-black relative"
    >
      {/* Fondo glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-purple-900/10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(0,255,255,0.7)] tracking-wide uppercase">
            Sobre mí
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              Soy Ingeniero en Sistemas y Telecomunicaciones, con interés en el desarrollo frontend de aplicaciones web y móviles. Trabajo con tecnologías como React, TypeScript, JavaScript, Supabase y Node.js, enfocándome en crear interfaces responsivas y funcionales. Me gusta aprender constantemente y aportar soluciones prácticas que mejoren la experiencia de los usuarios y el trabajo en equipo.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="p-6 rounded-xl border border-purple-600/40 bg-[#111]/70 hover:shadow-cyan-500/30 transition-all duration-300 text-center">
                <Zap className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-white font-semibold">1+ Años</p>
                <p className="text-sm text-gray-400">de Experiencia</p>
              </div>

              <div className="p-6 rounded-xl border border-purple-600/40 bg-[#111]/70 hover:shadow-purple-500/30 transition-all duration-300 text-center">
                <Target className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">4+</p>
                <p className="text-sm text-gray-400">Proyectos Completados</p>
              </div>

              <div className="p-6 rounded-xl border border-purple-600/40 bg-[#111]/70 hover:shadow-pink-500/30 transition-all duration-300 text-center">
                <UserCheck className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                <p className="text-white font-semibold">5+</p>
                <p className="text-sm text-gray-400">Tecnologías Dominadas</p>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-center">
            <img
              src="/profile-new.png"
              alt="Sobre mí"
              className="w-85 h-100 rounded-full mx-auto mb-4 border-2 border-purple-600 shadow-lg shadow-cyan-500/50 object-cover"
            />




          </div>
        </div>
      </div>
    </section>
  );
}
