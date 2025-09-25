import { jobs } from "../data/Jobs-Data";

export function Experience() {
  return (
    <section id="experiencia" className="py-20 px-8 bg-gradient-to-br from-[#0a0a0f] to-[#111] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-cyan-900/10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
            EXPERIENCIA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Mi trayectoria profesional y logros destacados</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full"></div>

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <div key={i} className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-[#0a0a0f] shadow-lg shadow-cyan-500/50 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-md border border-purple-700/50 rounded-2xl p-6 shadow-xl shadow-purple-900/20 hover:shadow-cyan-500/20 transition-all duration-300 hover:transform hover:-translate-y-2">
                    {/* Job Header */}
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {job.role}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                        <span className="text-cyan-400 font-semibold">{job.company}</span>
                        <span className="hidden sm:block text-purple-400">•</span>
                        <span className="text-purple-400 font-medium">{job.year}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{job.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                      {job.desc}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-400/30 hover:border-cyan-400/60 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
         
        </div>
      </div>
    </section>
  );
}