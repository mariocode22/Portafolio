import { FileDown, ExternalLink, Award, Calendar, Building } from "lucide-react";
import { certs } from "../data/certifications-Data";

export function Certifications() {
  return (
    <section
      id="certificaciones"
      className="py-20 px-8 bg-gradient-to-br from-[#0a0a0f] via-[#111] to-[#0a0a0f] relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              CERTIFICACIONES
            </h2>
            <Award className="w-8 h-8 text-purple-500" />
          </div>
          <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-cyan-500/50" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Mis credenciales profesionales y logros académicos que respaldan mi experiencia técnica
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {certs.map((cert, index) => (
            <div key={index} className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-[#1a1a2e]/90 to-[#16213e]/90 backdrop-blur-xl border border-purple-700/50 rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/30 group-hover:shadow-cyan-500/30 transition-all duration-500 group-hover:-translate-y-3">
                
                {/* Action Buttons */}
                <div className="absolute top-4 left-4 flex gap-2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={cert.pdf}
                    download
                    className="p-3 bg-black/70 backdrop-blur-md hover:bg-black/90 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-600/50 hover:border-cyan-400/50"
                    title="Descargar certificado"
                  >
                    <FileDown className="w-5 h-5" />
                  </a>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black/70 backdrop-blur-md hover:bg-black/90 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-600/50 hover:border-purple-400/50"
                    title="Ver certificado online"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 via-transparent to-transparent" />
                  
                  {/* Floating Award Icon */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-bold text-xl text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 leading-tight">
                    {cert.name}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-purple-400">
                      <Building className="w-4 h-4 flex-shrink-0" />
                      <span className="font-medium text-sm">{cert.org}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{cert.year}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-gray-700/50">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-medium">Verificado</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-br from-[#1a1a2e]/60 to-[#16213e]/60 backdrop-blur-md border border-purple-700/30 rounded-2xl p-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">{certs.length}+</div>
            <div className="text-gray-300">Certificaciones</div>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a2e]/60 to-[#16213e]/60 backdrop-blur-md border border-purple-700/30 rounded-2xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-gray-300">Verificadas</div>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a2e]/60 to-[#16213e]/60 backdrop-blur-md border border-purple-700/30 rounded-2xl p-6">
            <div className="text-3xl font-bold text-pink-400 mb-2">2025</div>
            <div className="text-gray-300">Última certificación</div>
          </div>
        </div>

      
      </div>
    </section>
  );
}
