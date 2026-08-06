import { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Code, FolderOpen, Award, Mail, ChevronRight } from 'lucide-react';

export function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { name: "Sobre mí", id: "about", icon: User },
    { name: "Experiencia", id: "experiencia", icon: Briefcase },
    { name: "Habilidades", id: "habilidades", icon: Code },
    { name: "Proyectos", id: "proyectos", icon: FolderOpen },
    { name: "Certificaciones", id: "certificaciones", icon: Award },
    { name: "Contacto", id: "contacto", icon: Mail },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-20% 0px -20% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Botón hamburguesa móvil estilo cristal/flotante */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-5 left-5 z-[60] md:hidden w-11 h-11 bg-[#1E1E1E]/90 backdrop-blur-md border border-[#2C2C2C] rounded-xl flex items-center justify-center text-white shadow-lg active:scale-95 transition-all duration-200"
        aria-label="Abrir menú"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Menu className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Overlay móvil con desenfoque suave */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[55] md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Principal */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-80 md:w-72 bg-[#0F0F0F] border-r border-[#2C2C2C]/80 z-[56]
          transform transition-all duration-300 ease-out flex flex-col justify-between
          ${isMobileMenuOpen ? 'translate-x-0 shadow-2xl shadow-black' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        {/* Sección Superior: Perfil + Navegación */}
        <div className="p-6">
          {/* Tarjeta de Perfil enmarcada */}
          <div className="relative p-3.5 rounded-2xl bg-[#1E1E1E]/50 border border-[#2C2C2C]/60 backdrop-blur-sm mb-7 group transition-all duration-300 hover:border-orange-500/40">
            {/* Glow tenue de fondo cálido */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-500/10 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center gap-3.5">
              <div className="relative shrink-0">
                <img
                  src="/fotoPerfil.jpg"
                  alt="Mario F Delgado - Perfil"
                  className="w-13 h-13 rounded-xl border border-[#2C2C2C] object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                {/* Indicador de estado "Online" ámbar con animación de pulso */}
                <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500 border-2 border-[#0F0F0F]"></span>
                </span>
              </div>

              <div className="overflow-hidden">
                <h1 className="text-sm font-semibold text-white tracking-tight truncate group-hover:text-orange-400 transition-colors">
                  Mario F Delgado
                </h1>
                <p className="text-[#B8B8B8] text-xs truncate mb-1">
                  Ing. de Sistemas
                </p>
                <span className="inline-block px-2 py-0.5 bg-[#0F0F0F] border border-[#2C2C2C] rounded text-[10px] font-medium text-[#B8B8B8]">
                  Frontend Specialist
                </span>
              </div>
            </div>
          </div>

          {/* Menú de Navegación */}
          <nav className="space-y-1.5">
            <div className="flex items-center justify-between px-2 mb-3">
              <span className="text-[11px] font-semibold text-[#B8B8B8]/60 uppercase tracking-widest">
                Navegación
              </span>
              <div className="h-px flex-1 bg-[#2C2C2C]/60 ml-3" />
            </div>

            {sections.map((section) => {
              const IconComponent = section.icon;
              const isActive = activeSection === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => handleScroll(section.id)}
                  className={`
                    relative w-full text-left px-3.5 py-2.5 rounded-xl transition-all duration-200 group
                    flex items-center justify-between text-sm font-medium
                    ${isActive
                      ? 'bg-[#1E1E1E] text-white border border-orange-500/30 shadow-sm'
                      : 'hover:bg-[#1E1E1E]/40 text-[#B8B8B8] hover:text-white hover:translate-x-1'
                    }
                  `}
                >
                  {/* Línea indicadora brillante cálida (naranja/ámbar) en el costado del item activo */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gradient-to-b from-orange-500 to-amber-400 rounded-r-full shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                  )}

                  <div className="flex items-center gap-3">
                    <div
                      className={`p-1.5 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-orange-500/10 text-orange-400'
                          : 'bg-[#1E1E1E]/60 text-[#B8B8B8] group-hover:text-orange-400 group-hover:bg-[#1E1E1E]'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{section.name}</span>
                  </div>

                  {/* Flecha sutil que aparece al hacer hover en items no activos */}
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-all duration-200 ${
                      isActive
                        ? 'text-orange-400 translate-x-0 opacity-100'
                        : 'text-[#B8B8B8]/40 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sección Inferior / Footer de Sidebar */}
        <div className="p-5 border-t border-[#2C2C2C]/60 bg-[#0F0F0F]">
          <div className="flex items-center gap-2.5 px-1 mb-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-xs text-[#B8B8B8] font-medium">
              Disponible para proyectos
            </span>
          </div>
          <p className="text-[11px] text-[#B8B8B8]/50 px-1">
            © 2026 Mario F Delgado
          </p>
        </div>
      </aside>
    </>
  );
}