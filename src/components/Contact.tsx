import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ExternalLink, MapPin, Sparkles } from "lucide-react";

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
      href: "https://www.linkedin.com/in/mario-fernando-delgado-delgado",
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
    <section id="contacto" className="py-28 px-6 md:px-12 bg-[#0F0F0F] relative overflow-hidden">
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
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
              Conectemos
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Contacto
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 via-red-600 to-amber-400 rounded-full mb-4" />
          <p className="text-[#B8B8B8] text-base md:text-lg max-w-2xl">
            ¿Interesado en colaborar o tienes alguna propuesta? No dudes en escribirme.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1E1E1E]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-start transition-all duration-300 hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0F0F0F] border border-white/10 flex items-center justify-center mb-5 text-orange-400 group-hover:border-orange-500/30 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>

                <div className="mb-6 w-full">
                  <h3 className="text-xs font-semibold text-[#B8B8B8] uppercase tracking-wider mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white font-medium text-sm truncate w-full" title={item.value}>
                    {item.value}
                  </p>
                </div>

                <a
                  href={item.href}
                  target={item.type === 'link' ? '_blank' : undefined}
                  rel={item.type === 'link' ? 'noopener noreferrer' : undefined}
                  className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white text-black font-semibold hover:bg-orange-50 hover:shadow-lg transition-all text-xs"
                >
                  <span>
                    {item.type === 'email' ? 'Enviar Email' :
                      item.type === 'phone' ? 'Llamar' : 'Visitar Perfil'}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6"
        >
          <div className="bg-[#1E1E1E]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
               <div className="w-11 h-11 rounded-xl bg-[#0F0F0F] border border-white/10 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
              <div>
                <h3 className="text-xs font-semibold text-[#B8B8B8] uppercase tracking-wider">Ubicación</h3>
                <p className="text-white font-medium text-base">Pereira, Risaralda, Colombia</p>
              </div>
            </div>
            <div className="px-3.5 py-2 bg-[#0F0F0F]/80 rounded-xl border border-white/10 flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs text-[#B8B8B8] font-semibold uppercase tracking-wider">Disponible remoto</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};