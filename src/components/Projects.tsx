import { useState, useEffect } from "react";
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
} from "lucide-react";

export const Projects = () => {
  const [itemsToShow, setItemsToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(itemsToShow);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Responsive: 1 tarjeta en móvil, 3 en desktop
  useEffect(() => {
    const updateItemsToShow = () => {
      const newItemsToShow = window.innerWidth < 768 ? 1 : 3;
      setItemsToShow(newItemsToShow);
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  // Adjust currentIndex when itemsToShow changes
  useEffect(() => {
    setTransitionEnabled(false);
    setCurrentIndex(itemsToShow);
    setTimeout(() => {
      setTransitionEnabled(true);
    }, 50);
  }, [itemsToShow]);

  // Use a triple-duplication for a seamless loop
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
      case "Full Stack":
        return <Code className="w-4 h-4" />;
      case "Frontend":
        return <Palette className="w-4 h-4" />;
      case "Desktop":
        return <Database className="w-4 h-4" />;
      case "Landing":
        return <Globe className="w-4 h-4" />;
      case "Dashboard":
        return <Database className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="proyectos"
      className="py-20 px-8 bg-gradient-to-br from-[#0a0a0f] to-[#111] relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-purple-900/10 pointer-events-none" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
            PROYECTOS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">
            Mis trabajos más destacados y soluciones innovadoras
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Buttons */}
          <button
            onClick={handlePrev}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-500/50 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Siguiente"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-500/50 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="overflow-hidden mx-4 md:mx-16">
            <div
              className={`flex ${
                itemsToShow === 1 ? "" : "gap-6"
              } ${transitionEnabled ? "transition-transform duration-500" : ""}`}
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
                  <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-md border border-purple-700/50 rounded-2xl overflow-hidden shadow-xl shadow-purple-900/20 hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 group h-full">
                    <div className="relative h-48 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium">
                        {getCategoryIcon(project.category)}
                        <span>{project.category}</span>
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-black/50 backdrop-blur-md border border-gray-600 rounded-full flex items-center justify-center text-white animate-pulse hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_12px_#22d3ee] transition"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-black/50 backdrop-blur-md border border-gray-600 rounded-full flex items-center justify-center text-white animate-pulse hover:border-purple-400 hover:text-purple-400 hover:shadow-[0_0_12px_#a855f7] transition"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-cyan-300 rounded-md border border-cyan-400/30"
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

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index + itemsToShow)}
              aria-label={`Ir a proyecto ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor((currentIndex - itemsToShow) % projects.length) ===
                index
                  ? "bg-gradient-to-r from-cyan-400 to-purple-500 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};