
import type { Project } from "../types/Data-Types";


export const projects: Project[] = [
  {
    id: 1,
    title: "Space Nasa Apod",
    desc: " Aplicación desarrollada en React + TypeScript que consume la API NASA APOD para mostrar imágenes astronómicas diarias con descripciones. Implementa hooks como useState y useEffect para manejo de estado y efectos. UI moderna, animada y responsiva con TailwindCSS.",
    image: "/nasa.png",
    tech: ["React", "Tailwind", "API", "TypeScript"],
    github: "https://github.com/mariocode22/Nasa-apod",
    website: "https://space-apod-api.netlify.app",
    category: "FrondEnd",
  },
  {
    id: 2,
    title: "GuitarLA",
    desc: "Página de prueba para la venta de guitarras, desarrollada con React, TypeScript y Tailwind CSS. Incluye un carrito de compras persistente, selección dinámica de productos y una experiencia de usuario moderna y fluida.",
    image: "/guitar.png",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://guitarlamariofdev.netlify.app",
    website: "https://guitarlamariofdev.netlify.app",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Sky Green Mirador",
    desc: "Sky Green Booking es una aplicación web desarrollada en React + TypeScript que brinda a los usuarios una experiencia completa al reservar cabañas. Además del sistema de reservas con calendario interactivo y precios claros, la plataforma incluye un menú digital de comidas y una página de inicio donde se presentan las diferentes actividades disponibles en el alojamiento. Todo diseñado con una interfaz moderna, intuitiva y responsive para garantizar una navegación fluida y atractiva.",
    image: "/sky-green.png",
    tech: ["React", "TypeScript", "Tailwind", "supabase", "booking-page"],
    github: "https://github.com/mariocode22/Sky-Green-Admin",
    website: "https://sky-green.netlify.app",
    category: "Frontend/backend",
  },
  {
    id: 4,
    title: "Sky Green - Admin",
    desc: "Página moderna para startup de inteligencia artificial con animaciones fluidas, diseño responsivo y optimización SEO.",
    image: "/sky-green-admin.png",
    tech: ["React", "Tailwind CSS", "supabase", "typescript"],
    github: "https://github.com/mariocode22/Sky-Green-Admin",
    website: "https://sky-green-admin.netlify.app",
    category: "Landing",
  },
  {
    id: 5,
    title: "Acid Black",
    desc: "Sitio web desarrollado para la marca de ropa Acid Black, con un catálogo interactivo creado en Angular utilizando Signals para la gestión reactiva del estado. Conectado a una API personalizada en Supabase para mostrar productos en tiempo real, almacenamiento de imágenes en Cloudinary y flujo de pedidos automatizado mediante integración con WhatsApp, permitiendo que el usuario solicite directamente el producto deseado.",
    image: "acid-black.png",
    tech: ["Angular", "TypeScript", "Tailwind CSS", "Supabase", "Cloudinary", "API REST"],
    github: "https://github.com/mariocode22/ACID-BLACK-BD",
    website: "https://acidblack.netlify.app/",
    category: "FrontEnd",
  }

];