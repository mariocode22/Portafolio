import { useEffect, useState, useMemo } from "react";

export function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Generación de estrellas memoizada para evitar re-cálculos en renders
  const starLayers = useMemo(() => {
    const layersConfig = [
      { density: 40, size: "w-0.5 h-0.5", color: "bg-[#2C2C2C]", baseOpacity: "opacity-40", animClass: "star-float-slow" },
      { density: 30, size: "w-1 h-1", color: "bg-[#B8B8B8]", baseOpacity: "opacity-60", animClass: "star-float-medium" },
      { density: 20, size: "w-1.5 h-1.5", color: "bg-[#FFFFFF]", baseOpacity: "opacity-80", animClass: "star-float-fast" },
    ];

    return layersConfig.map((layer) => ({
      ...layer,
      stars: Array.from({ length: layer.density }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${3 + Math.random() * 4}s`,
        delay: `${Math.random() * 5}s`,
      })),
    }));
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-8 relative bg-[#0F0F0F] overflow-hidden"
    >
      {/* Estilos de animación keyframes fluidos e independientes */}
      <style>{`
        @keyframes driftSlow {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        @keyframes driftMedium {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-45px) translateX(-15px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        @keyframes driftFast {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-65px) translateX(20px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        .star-float-slow { animation: driftSlow 22s ease-in-out infinite; }
        .star-float-medium { animation: driftMedium 16s ease-in-out infinite; }
        .star-float-fast { animation: driftFast 10s ease-in-out infinite; }
        .star-twinkle { animation: twinkle var(--twinkle-duration) ease-in-out var(--twinkle-delay) infinite; }
      `}</style>

      {/* --- FONDO ESTRELLADO ANIMADO AUTÓNOMO --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {starLayers.map((layer, layerIndex) => (
          <div
            key={layerIndex}
            className={`absolute inset-0 ${layer.baseOpacity} ${layer.animClass}`}
          >
            {layer.stars.map((star, starIndex) => (
              <div
                key={starIndex}
                className={`absolute rounded-full star-twinkle ${layer.size} ${layer.color}`}
                style={
                  {
                    top: star.top,
                    left: star.left,
                    "--twinkle-duration": star.duration,
                    "--twinkle-delay": star.delay,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        ))}
      </div>
      {/* --- FIN FONDO ESTRELLADO --- */}

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Hola soy */}
        <p
          className={`text-[#B8B8B8] text-sm md:text-base font-medium tracking-widest uppercase mb-4 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Hola, soy
        </p>

        {/* Nombre */}
        <h1
          className={`text-5xl md:text-7xl font-semibold text-white tracking-tight py-2 transition-all duration-700 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Mario F Delgado
        </h1>

        {/* Profesión */}
        <h2
          className={`text-xl md:text-2xl mt-4 text-[#FFFFFF] font-medium transition-all duration-700 delay-400 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Ingeniero de Sistemas y Telecomunicaciones
        </h2>

        {/* Especialidad */}
        <p
          className={`text-[#B8B8B8] font-medium mt-2 transition-all duration-700 delay-600 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Desarrollador Full Stack & Backend
        </p>

        {/* Descripción */}
        <p
          className={`max-w-xl mt-8 text-[#B8B8B8] mx-auto text-lg leading-relaxed transition-all duration-700 delay-800 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Apasionado por transformar ideas en soluciones tecnológicas completas, conectando interfaces intuitivas con arquitecturas de backend robustas y escalables.
        </p>
      </div>
    </section>
  );
}