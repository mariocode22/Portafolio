import { motion } from "framer-motion";
import { FileDown, ExternalLink, Calendar, Building, Sparkles, Database, Code } from "lucide-react";
import { certs } from "../data/certifications-Data";

export function Certifications() {
  // Separamos las certificaciones usando una propiedad 'category' (o filtrando por nombre/org si prefieres)
  const sapCerts = certs.filter(
    (cert) => cert.category === "sap" || cert.org.toLowerCase().includes("sap")
  );
  const softwareCerts = certs.filter(
    (cert) => cert.category !== "sap" && !cert.org.toLowerCase().includes("sap")
  );

  const renderCertCard = (cert: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#1E1E1E]/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col group"
    >
      <div className="relative h-44 bg-[#0F0F0F] border-b border-white/10 overflow-hidden">
        <img
          src={cert.image}
          alt={cert.name}
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent opacity-40" />
        
        <div className="absolute top-3 right-3 flex gap-2">
          <a
            href={cert.pdf}
            download
            className="w-9 h-9 bg-[#0F0F0F]/80 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-center text-[#B8B8B8] hover:text-white hover:border-white/30 transition-all shadow-lg"
            title="Descargar"
          >
            <FileDown className="w-4 h-4" />
          </a>
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-[#0F0F0F]/80 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-center text-[#B8B8B8] hover:text-white hover:border-white/30 transition-all shadow-lg"
            title="Ver online"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <h3 className="font-bold text-base text-white mb-4 line-clamp-2 leading-snug group-hover:text-orange-400 transition-colors">
          {cert.name}
        </h3>
        
        <div className="space-y-3 pt-4 border-t border-white/5 mt-auto">
          <div className="flex items-center gap-2.5 text-[#B8B8B8]">
            <Building className="w-4 h-4 flex-shrink-0 text-orange-400" />
            <span className="text-sm">{cert.org}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-[#B8B8B8]">
              <Calendar className="w-4 h-4 flex-shrink-0 text-amber-400" />
              <span className="text-sm">{cert.year}</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 rounded-lg border border-amber-500/20">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-400 text-[10px] font-semibold uppercase tracking-wider">Verificado</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="certificaciones" className="py-28 px-6 md:px-12 bg-[#0F0F0F] relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
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
              Logros Académicos
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Certificaciones
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 via-red-600 to-amber-400 rounded-full mb-4" />
          <p className="text-[#B8B8B8] text-base md:text-lg max-w-2xl">
            Credenciales profesionales que respaldan mi conocimiento técnico en desarrollo de software y ecosistemas empresariales SAP.
          </p>
        </motion.div>

        {/* --- SECCIÓN SAP --- */}
        {sapCerts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  Ecosistema SAP
                </h3>
                <p className="text-xs text-[#B8B8B8] mt-0.5">
                  Integraciones, tecnologías y soluciones empresariales
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sapCerts.map((cert, index) => renderCertCard(cert, index))}
            </div>
          </div>
        )}

        {/* --- SECCIÓN DESARROLLO DE SOFTWARE --- */}
        {softwareCerts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  Desarrollo de Software & Tecnologías
                </h3>
                <p className="text-xs text-[#B8B8B8] mt-0.5">
                  Arquitectura, lenguajes, frameworks y bases de datos
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareCerts.map((cert, index) => renderCertCard(cert, index))}
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
        >
          <div className="bg-[#1E1E1E]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="text-3xl font-extrabold text-white mb-1">{certs.length}</div>
            <div className="text-xs text-[#B8B8B8] uppercase tracking-wider font-semibold">Certificaciones Totales</div>
          </div>
          <div className="bg-[#1E1E1E]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="text-3xl font-extrabold text-amber-400 mb-1">100%</div>
            <div className="text-xs text-[#B8B8B8] uppercase tracking-wider font-semibold">Verificadas</div>
          </div>
          <div className="bg-[#1E1E1E]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="text-3xl font-extrabold text-orange-400 mb-1">2025</div>
            <div className="text-xs text-[#B8B8B8] uppercase tracking-wider font-semibold">Última emisión</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}