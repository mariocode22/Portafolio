import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects-Data";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Code,
  Palette,
  Database,
  Globe,
  Sparkles,
} from "lucide-react";

export const Projects = () => {
  const [itemsToShow, setItemsToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const updateItemsToShow = () => {
      const newItemsToShow = window.innerWidth < 768 ? 1 : 3;
      setItemsToShow(newItemsToShow);
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  useEffect(() => {
    setTransitionEnabled(false);
    setCurrentIndex(itemsToShow);
    const timer = setTimeout(() => {
      setTransitionEnabled(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [itemsToShow]);

  const extendedProjects = [...projects, ...projects, ...projects];

  const handleNext = () => {
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    const maxIndex = projects.length * 2;
    if (currentIndex >= maxIndex) {
      setTransitionEnabled(false);
      setCurrentIndex(projects.length);
    } else if (currentIndex < projects.length) {
      setTransitionEnabled(false);
      setCurrentIndex(projects.length + (currentIndex % projects.length));
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full Stack": return <Code className="w-3.5 h-3.5 text-orange-400" />;
      case "Frontend": return <Palette className="w-3.5 h-3.5 text-amber-400" />;
      case "Desktop": return <Database className="w-3.5 h-3.5 text-red-400" />;
      case "Landing": return <Globe className="w-3.5 h-3.5 text-rose-400" />;
      case "Dashboard": return <Database className="w-3.5 h-3.5 text-orange-300" />;
      default: return <Code className="w-3.5 h-3.5 text-orange-400" />;
    }
  };

  return (
    <section id="proyectos" className="py-28 px-6 md:px-12 bg-[#0F0F0F] relative overflow-hidden">
      {/* Glow ambiental cálido */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
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
              Portafolio Creativo
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Proyectos Destacados
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 via-red-600 to-amber-400 rounded-full mb-4" />
          <p className="text-[#B8B8B8] text-base md:text-lg max-w-xl">
            Soluciones digitales de alto impacto diseñadas con arquitectura limpia, rendimiento y excelente experiencia de usuario.
          </p>
        </motion.div>

        <div className="relative group">
          <button
            onClick={handlePrev}
            aria-label="Anterior proyecto"
            className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#1E1E1E]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white shadow-xl hover:bg-white/10 hover:border-orange-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Siguiente proyecto"
            className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#1E1E1E]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white shadow-xl hover:bg-white/10 hover:border-orange-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden mx-1 md:mx-4 py-4">
            <div
              className={`flex ${itemsToShow === 1 ? "" : "gap-6"} ${
                transitionEnabled ? "transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" : ""
              }`}
              style={{
                transform: `translateX(calc(-${
                  currentIndex * (100 / itemsToShow)
                }% - ${currentIndex * (itemsToShow > 1 ? 1.5 : 0)}rem))`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedProjects.map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="flex-shrink-0"
                  style={{ width: `calc(100% / ${itemsToShow})` }}
                >
                  <div className="bg-[#1E1E1E]/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/40 hover:shadow-[0_10px_30px_rgba(249,115,22,0.15)] hover:-translate-y-1.5 transition-all duration-500 h-full flex flex-col group/card">
                    
                    <div className="relative h-52 bg-[#0F0F0F] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent opacity-60" />
                      
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 bg-[#0F0F0F]/80 backdrop-blur-md border border-white/10 rounded-lg text-white text-xs font-medium shadow-lg">
                        {getCategoryIcon(project.category)}
                        <span>{project.category}</span>
                      </div>

                      <div className="absolute top-3 right-3 flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 bg-[#0F0F0F]/80 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-center text-[#B8B8B8] hover:text-white hover:border-white/30 hover:bg-white/10 transition-all shadow-lg"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {project.website && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 bg-[#0F0F0F]/80 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-center text-[#B8B8B8] hover:text-white hover:border-white/30 hover:bg-white/10 transition-all shadow-lg"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2.5 group-hover/card:text-orange-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[#B8B8B8] text-sm leading-relaxed mb-6 line-clamp-3">
                          {project.desc}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2.5 py-1 text-xs font-medium bg-[#0F0F0F]/60 text-[#B8B8B8] rounded-md border border-white/5 hover:border-white/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 gap-2.5">
          {projects.map((_, index) => {
            const isActive = Math.floor((currentIndex - itemsToShow) % projects.length) === index;
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index + itemsToShow)}
                aria-label={`Ir al proyecto ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-amber-400 w-8 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                    : "bg-white/10 w-2 hover:bg-white/30"
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};