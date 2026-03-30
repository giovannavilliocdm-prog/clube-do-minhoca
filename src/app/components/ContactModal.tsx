import { X } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Envia para o Netlify Forms
    const form = e.target as HTMLFormElement;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form) as any).toString(),
    })
      .then(() => {
        console.log("Mensagem enviada com sucesso!");
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
          onClose();
        }, 2000);
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error);
        alert("Erro ao enviar mensagem. Tente novamente.");
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg p-8 max-w-md w-full mx-4 border border-gray-200 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-black mb-6">Contato</h2>

        {submitted ? (
          <div className="text-center py-8">
            <p className="text-xl text-black mb-2">✓ Mensagem enviada!</p>
            <p className="text-gray-600">Responderemos em breve.</p>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit} 
            className="space-y-4"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* Campo oculto para o Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />
            
            {/* Honeypot para prevenir spam */}
            <div className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                placeholder="Sua mensagem..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        )}
      </div>
    </div>
  );
}