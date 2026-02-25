import { ExternalLink } from 'lucide-react';
import { passions } from '../data/portfolio-data';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Passions() {
  // Même logique de centrage que Projects (quand il n’y a que 1 ou 2 cartes)
  const count = passions.length;
  const getLgColClass = (index: number) => {
    if (count === 1) return 'lg:col-span-6 lg:col-start-4';
    if (count === 2) return index === 0 ? 'lg:col-span-4 lg:col-start-3' : 'lg:col-span-4';
    return 'lg:col-span-4';
  };

  return (
    <section id="passions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">
            Mes <span className="text-primary">centres d’intérêt</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quelques passions qui me motivent au quotidien et nourrissent ma curiosité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {passions.map((passion, index) => (
            <div
              key={index}
              className={
                'bg-secondary rounded-xl overflow-hidden hover:shadow-xl transition-shadow group ' +
                getLgColClass(index)
              }
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={passion.image}
                  alt={passion.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3">{passion.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{passion.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {passion.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {passion.link && (
                  <div className="flex gap-4">
                    <a
                      href={passion.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink size={16} />
                      En savoir plus
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

