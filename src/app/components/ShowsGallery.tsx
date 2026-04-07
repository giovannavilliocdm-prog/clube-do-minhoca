import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import mauMeirellesImage from "./04-02_MauMeirelles_Feed (1).png";
import cincaoImage from "./04-03_Cincao-DecoMachado_Feed.png";
import danielDuncanImage from "./04-04_DanielDuncan_Feed (1).png";
import patrickMaiaImage from "./04-09_PatrickMaia_Feed.png";
import elencaoImage from "./04-16_Elencao_Buente-Eve-Gabao_Feed.png";
import carolZoccoliImage from "./04-18_CarolZoccoli_Feed.png";
import guiPretoImage from "./04-18_GuiPreto_Feed.png";
import italoSenaImage from "./04-23_ItaloSena_Sympla.png";

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
  const [slidesToShow, setSlidesToShow] = useState(3);

React.useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSlidesToShow(1);
    } else if (window.innerWidth < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: slidesToShow,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  arrows: true,
};
<h2>Próximos Shows</h2>        
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
