import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from './components/Projects';
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";

export function App() {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-animated">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 ml-0 sm:ml-72 overflow-y-auto">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
