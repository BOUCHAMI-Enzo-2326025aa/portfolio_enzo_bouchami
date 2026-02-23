import { ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { personalInfo } from '../data/portfolio-data';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary tracking-wider">BIENVENUE SUR MON PORTFOLIO</p>
              <h1 className="text-5xl lg:text-6xl tracking-tight">
                {personalInfo.firstName}<br />
                <span className="text-primary">{personalInfo.lastName}</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-lg">
              {personalInfo.bio}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => scrollToSection('projets')}
                className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-all"
              >
                Voir mes projets
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-all"
              >
                Me contacter
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={personalInfo.profileImage}
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('apropos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-primary" size={32} />
      </button>
    </section>
  );
}