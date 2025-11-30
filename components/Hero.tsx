import React, { useEffect, useRef } from 'react';
import { COMPANY_INFO } from '../constants';
import { ChevronDown, MessageCircle } from 'lucide-react';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

const Hero: React.FC = () => {
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Check if script exists
    if (!document.querySelector('#youtube-api-script')) {
      const tag = document.createElement('script');
      tag.id = 'youtube-api-script';
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Function called by YT API
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-background', {
        videoId: COMPANY_INFO.videoBgId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          loop: 1,
          fs: 0,
          cc_load_policy: 0,
          iv_load_policy: 3,
          autohide: 1,
          mute: 1,
          playlist: COMPANY_INFO.videoBgId,
          playsinline: 1,
          rel: 0
        },
        events: {
          onReady: (event: any) => {
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              playerRef.current.playVideo();
            }
          }
        }
      });
    };

    // If API already loaded (navigating back to page)
    if (window.YT && window.YT.Player && !playerRef.current) {
        window.onYouTubeIframeAPIReady();
    }

    return () => {
        // Cleanup if necessary, though YT API is global
    }
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden">
      {/* Container with Fallback Image */}
      <div 
        className="hero-video-container bg-black bg-[url('https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"
      >
        <div id="youtube-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 drop-shadow-lg tracking-wide leading-tight animate-fade-in-up">
            Especialistas em Acrílicos <br/><span className="text-brand-orange">há 25 anos</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl drop-shadow-md opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Domos, Clarabóias, Corte a Laser, Displays e Peças Personalizadas em Curitiba.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle />
              Solicite um Orçamento
            </a>
            <button
              onClick={scrollToServices}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-darkBlue text-white font-bold py-3 px-8 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              Conheça Nossos Serviços
            </button>
          </div>

          <div className="absolute bottom-10 animate-bounce cursor-pointer" onClick={scrollToServices}>
             <ChevronDown size={40} className="text-white opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;