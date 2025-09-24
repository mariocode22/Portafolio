import { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Code, FolderOpen, Award, Mail } from 'lucide-react';

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

  // Detectar sección activa basada en scroll
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

    // Observar todas las secciones
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
      setIsMobileMenuOpen(false); // Cerrar menú móvil después de navegar
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Botón hamburguesa para móvil */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-[60] md:hidden w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 hover:shadow-purple-500/50 transition-all duration-300"
        aria-label="Abrir menú"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Overlay para móvil */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-[#0a0a0f]/95 via-[#111]/95 to-[#0a0a0f]/95 
          backdrop-blur-xl border-r border-purple-700/50 shadow-2xl shadow-purple-900/30 z-[56]
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:w-72
        `}
      >
        <div className="flex flex-col h-full p-6">
          {/* Perfil */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <img
                src="/profile-new.png"
                alt="Mario F Delgado - Perfil"
                className="w-28 h-28 rounded-full border-4 border-gradient-to-r from-cyan-400 to-purple-500 shadow-xl shadow-cyan-500/30 object-cover mx-auto"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-[#0a0a0f] flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-2">
              Mario F Delgado
            </h1>
            
            <div className="space-y-1">
              <p className="text-gray-300 text-sm leading-relaxed">
                Ingeniero de Sistemas y Telecomunicaciones
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-400/30">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-cyan-300 text-xs font-semibold">
                  Frontend Specialist
                </span>
              </div>
            </div>
          </div>

          {/* Navegación */}
          <nav className="flex-1 space-y-2">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
              Navegación
            </div>
            
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              const isActive = activeSection === section.id;
              
              return (
                <button
                  key={section.id}
                  onClick={() => handleScroll(section.id)}
                  className={`
                    w-full text-left p-3 rounded-xl transition-all duration-300 group
                    flex items-center gap-3 relative overflow-hidden
                    ${isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 shadow-lg shadow-cyan-500/20'
                      : 'hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 text-gray-300 hover:text-white border border-transparent hover:border-purple-400/20'
                    }
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Indicador activo */}
                  {isActive && (
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-r-full" />
                  )}
                  
                  <IconComponent className={`w-5 h-5 transition-colors ${isActive ? 'text-cyan-400' : 'text-purple-400 group-hover:text-cyan-400'}`} />
                  
                  <span className="font-medium text-sm">
                    {section.name}
                  </span>
                  
                  {/* Efecto hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="border-t border-purple-700/30 pt-6 mt-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-3">
                <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                <span>Disponible para proyectos</span>
                <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
              </div>
              
              <div className="text-xs text-gray-500">
                © 2024 Mario F Delgado
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-4 w-16 h-16 bg-cyan-600/10 rounded-full blur-xl pointer-events-none" />
        <div className="absolute bottom-32 left-4 w-20 h-20 bg-purple-600/10 rounded-full blur-xl pointer-events-none" />
      </aside>
    </>
  );
}