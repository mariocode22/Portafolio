import { useEffect, useState } from "react";


export function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Activa animación después de montar el componente
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-8 relative overflow-hidden"
    >
      {/* Fondo con cuadrícula y partículas */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

      <div className="relative z-10">
        {/* Hola soy */}
        <p
          className={`text-cyan-400 text-lg mb-2 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          Hola, soy
        </p>

        {/* Nombre */}
        <h1
          className={`text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text py-2 transition-all duration-700 delay-200 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          Mario F Delgado
        </h1>

        {/* Profesión */}
        <h2
          className={`text-xl md:text-2xl mt-2 text-gray-200 transition-all duration-700 delay-400 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          Ingeniero de Sistemas y Telecomunicaciones
        </h2>

        {/* Especialidad */}
        <p
          className={`text-purple-400 font-medium mt-1 transition-all duration-700 delay-600 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          Especialista en Desarrollo Frontend
        </p>

        {/* Descripción */}
        <p
          className={`max-w-xl mt-6 text-gray-300 mx-auto transition-all duration-700 delay-800 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          Apasionado por crear experiencias digitales innovadoras con React, TypeScript y
          tecnologías modernas.
        </p>

        {/* Botón */}

      </div>
    </section>
  );
}
