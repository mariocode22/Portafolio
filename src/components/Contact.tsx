import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";

export const Contact = () => {
  const contactItems = [
    {
      icon: Mail,
      title: "Correo",
      value: "mariocode616@gmail.com",
      href: "mailto:mariocode616@gmail.com",
      type: "email"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+57 (301) 363-3351",
      href: "tel:+57 3013633351",
      type: "phone"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Mario F Delgado",
      href: "https://www.linkedin.com/in/mario-fernando-delgado-delgado-968748347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      type: "link"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@mariofdelgado",
      href: "https://github.com/mariocode22",
      type: "link"
    }
  ];

  return (
    <section
      id="contacto"
      className="py-20 px-8 bg-gradient-to-br from-[#0a0a0f] to-[#111] relative overflow-hidden"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-purple-900/10 pointer-events-none" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
            CONTACTO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ¿Interesado en colaborar o tienes alguna pregunta? No dudes en contactarme. Siempre estoy abierto a nuevas oportunidades y conversaciones.
          </p>
        </div>

        {/* Tarjetas de contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {contactItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-md border border-purple-700/50 rounded-2xl p-6 flex flex-col items-center text-center shadow-xl shadow-purple-900/20 hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Icono */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                {/* Contenido */}
                <div className="flex-1 flex flex-col justify-between w-full">
                  <div className="mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm break-words leading-relaxed">
                      {item.value}
                    </p>
                  </div>

                  {/* Botón de acción */}
                  <a
                    href={item.href}
                    target={item.type === 'link' ? '_blank' : undefined}
                    rel={item.type === 'link' ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-sm"
                  >
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">
                      {item.type === 'email' ? 'Enviar Email' :
                        item.type === 'phone' ? 'Llamar' : 'Visitar Perfil'}
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>



        {/* Información adicional */}
        <div className="mt-12 ">
          <div className="bg-gradient-to-br from-[#1a1a2e]/60 to-[#16213e]/60 backdrop-blur-md border border-purple-700/30 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-3">Ubicación</h3>
            <p className="text-gray-300">Pereira, Risaralda</p>
            <p className="text-gray-300">Colombia</p>
          </div>

        </div>
      </div>
    </section>
  );
};