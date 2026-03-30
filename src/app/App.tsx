import { useState } from "react";
import { ContactModal } from "./components/ContactModal";
import { ShowsGallery } from "./components/ShowsGallery";
import bgImage from "figma:asset/31ac1314ff774b9f7a8bb9fbd88b6f753cd9343c.png";
import logo from "figma:asset/fd0117dbc48c8cba9a47df45609d4232400d31ff.png";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  // Link para a página do Sympla do clube (substitua pela URL real)
  const symplaLink = "https://www.sympla.com.br/produtor/clubedominhoca";

  return (
    <div className="size-full relative overflow-auto">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-8 py-4 bg-white shadow-lg">
        <img 
          src={logo} 
          alt="Clube do Minhoca" 
          className="h-16 object-contain"
        />
        <nav className="flex gap-6">
          <a
            href={symplaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-yellow-600 font-semibold text-lg transition-colors"
          >
            SHOWS
          </a>
          <button
            onClick={() => setIsContactOpen(true)}
            className="text-black hover:text-yellow-600 font-semibold text-lg transition-colors"
          >
            CONTATO
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Shows Gallery Section */}
        <ShowsGallery />
        
        {/* Hero Text */}
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