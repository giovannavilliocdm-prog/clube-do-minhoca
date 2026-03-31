import { Calendar, MapPin, Ticket } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import mauMeirellesImage from "figma:asset/e3d440cda6a2889fb3f26b143ec23fe36b1f6127.png";
import cincaoImage from "figma:asset/ff70dbc0fbcb3b2c08bf56ff0d4d3662d5a3c4cf.png";
import danielDuncanImage from "figma:asset/f1c30daba96e58184f9912e756c8e435accc8143.png";
import patrickMaiaImage from "figma:asset/ca73885a3f6cc4c0bf98b81a8ea1aebc050fd42b.png";
import elencaoImage from "figma:asset/0f57547f554516f48770309729d3f659273e81ba.png";
import guiPretoImage from "figma:asset/3853e740c3035d21573687038d426fe9693113cc.png";
import italoSenaImage from "figma:asset/26cbf79cc60196a14ea8b87c353a2cdec2e8e4a0.png";
import carolZoccoliImage from "figma:asset/b7937785db4ad0fb3eb55272062ad07f5e6493b2.png";

interface Show {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  symplaUrl: string;
}

// Shows mockados - substitua pelos dados reais da API do Sympla quando integrar
const mockShows: Show[] = [
  {
    id: "1",
    title: "Mau Meirelles - show solo",
    date: "02 de Abril, 2026",
    time: "20h00",
    location: "Clube do Minhoca",
    image: mauMeirellesImage,
    symplaUrl: "https://www.sympla.com.br/evento/mau-meirelles-show-solo/3352882",
  },
  {
    id: "2",
    title: "Cincão do Minhoca",
    date: "03 de Abril, 2026",
    time: "22h00",
    location: "Clube do Minhoca",
    image: cincaoImage,
    symplaUrl: "https://www.sympla.com.br/evento/cincao-do-minhoca/3361246",
  },
  {
    id: "3",
    title: "Daniel Duncan ao vivo no Clube do Minhoca",
    date: "04 de Abril, 2026",
    time: "20h00",
    location: "Clube do Minhoca",
    image: danielDuncanImage,
    symplaUrl: "https://www.sympla.com.br/evento/daniel-duncan-ao-vivo-no-clube-do-minhoca/3332974",
  },
  {
    id: "4",
    title: "Patrick Maia em: o roteirista (show teste)",
    date: "09 de Abril, 2026",
    time: "20h00",
    location: "Clube do Minhoca",
    image: patrickMaiaImage,
    symplaUrl: "https://www.sympla.com.br/evento/patrick-maia-em-o-roteirista-show-teste/3352889",
  },
  {
    id: "5",
    title: "Elencão do Minhoca: Matheus Buente, Gabão Massud e Eve Mayer",
    date: "16 de Abril, 2026",
    time: "20h00",
    location: "Clube do Minhoca",
    image: elencaoImage,
    symplaUrl: "https://www.sympla.com.br/evento/elencao-do-minhoca-matheus-buente-gabao-massud-e-eve-mayer/3352896",
  },
  {
    id: "6",
    title: "Carol Zoccoli - show solo",
    date: "18 de Abril, 2026",
    time: "20h00",
    location: "Clube do Minhoca",
    image: carolZoccoliImage,
    symplaUrl: "https://www.sympla.com.br/evento/carol-zoccoli-show-solo/3352909",
  },
  {
    id: "7",
    title: "Gui Preto - Deixa Eu Ver Se Entendi Um Negócio",
    date: "18 de Abril, 2026",
    time: "22h00",
    location: "Clube do Minhoca",
    image: guiPretoImage,
    symplaUrl: "https://www.sympla.com.br/evento/gui-preto-deixa-eu-ver-se-entendi-um-negocio-no-clube-do-minhoca-copia/3363097",
  },
  {
    id: "8",
    title: "Italo Sena testando seu novo show!",
    date: "23 de Abril, 2026",
    time: "20h00",
    location: "Clube do Minhoca",
    image: italoSenaImage,
    symplaUrl: "https://www.sympla.com.br/evento/italo-sena-testando-seu-novo-show/3361247",
  },
];

export function ShowsGallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative z-10 py-12 px-4 md:px-8 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white font-bold text-3xl md:text-4xl text-center mb-8">
          Próximos Shows
        </h2>
        
        <Slider {...settings} className="shows-carousel">
          {mockShows.map((show) => (
            <div key={show.id} className="px-3">
              <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-44 overflow-hidden">
                  <ImageWithFallback
                    src={show.image}
                    alt={show.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 line-clamp-2">
                    {show.title}
                  </h3>
                  
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-yellow-600" />
                      <span>{show.date} às {show.time}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-yellow-600" />
                      <span>{show.location}</span>
                    </div>
                  </div>
                  
                  <a
                    href={show.symplaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200"
                  >
                    <Ticket className="w-4 h-4" />
                    Comprar Ingressos
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Custom styles for carousel dots */}
      <style>{`
        .shows-carousel .slick-dots {
          bottom: -40px;
        }
        
        .shows-carousel .slick-dots li button:before {
          color: white;
          font-size: 10px;
          opacity: 0.5;
        }
        
        .shows-carousel .slick-dots li.slick-active button:before {
          color: #ca8a04;
          opacity: 1;
        }
        
        .shows-carousel .slick-prev:before,
        .shows-carousel .slick-next:before {
          color: white;
          font-size: 30px;
        }
        
        .shows-carousel .slick-prev {
          left: -40px;
        }
        
        .shows-carousel .slick-next {
          right: -40px;
        }
        
        @media (max-width: 768px) {
          .shows-carousel .slick-prev {
            left: -25px;
          }
          
          .shows-carousel .slick-next {
            right: -25px;
          }
        }
      `}</style>
    </div>
  );
}