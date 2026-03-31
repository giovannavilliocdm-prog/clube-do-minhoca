import { useState } from "react";
import { ContactModal } from "./components/ContactModal";
import { ShowsGallery } from "./components/ShowsGallery";
import bgImage from "./backdropminhoca.png";
import logo from "./logominhoca.png";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const symplaLink = "https://www.sympla.com.br/produtor/clubedominhoca";

  return (
    <div className="size-full relative overflow-auto">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-8 py-4 bg-white shadow-lg">
        <img src={logo} alt="Clube do Minhoca" className="h-16 object-contain" />

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6">
          <a href={symplaLink} target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-600 font-semibold text-lg transition-colors">
            SHOWS
          </a>
          <button onClick={() => setIsContactOpen(true)} className="text-black hover:text-yellow-600 font-semibold text-lg transition-colors">
            CONTATO
          </button>
        </nav>

        {/* Botão hamburguer mobile */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </header>

      {/* Menu mobile aberto */}
      {isMenuOpen && (
        <div className="sticky top-16 z-20 bg-white shadow-lg flex flex-col px-8 py-4 gap-4 md:hidden">
          <a href={symplaLink} target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-600 font-semibold text-lg" onClick={() => setIsMenuOpen(false)}>
            SHOWS
          </a>
          <button onClick={() => { setIsContactOpen(true); setIsMenuOpen(false); }} className="text-left text-black hover:text-yellow-600 font-semibold text-lg">
            CONTATO
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10">
        <ShowsGallery />
        <div className="flex items-center justify-center py-20 px-4">
          <div className="text-center">
            <p className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              standup comedy, música e surtos controlados
            </p>
          </div>
        </div>
      </main>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
