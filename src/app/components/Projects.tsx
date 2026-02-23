import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projects } from '../data/portfolio-data';

export function Projects() {
  const count = projects.length;

  // Sur lg: on veut 3 cartes par ligne (4 colonnes chacune sur une grille 12).
  // Cas particuliers:
  // - 1 projet: centré (col-span 6 + col-start 4)
  // - 2 projets: centrés (col-span 4, avec un "offset" d'1 colonne de chaque côté)
  const getLgColClass = (index: number) => {
    if (count === 1) return 'lg:col-span-6 lg:col-start-4';
    if (count === 2) return index === 0 ? 'lg:col-span-4 lg:col-start-3' : 'lg:col-span-4';
    return 'lg:col-span-4';
  };

  return (
    <section id="projets" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">
            Mes <span className="text-primary">projets</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une sélection de projets personnels et académiques qui illustrent mes compétences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={
                'bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow group ' +
                getLgColClass(index)
              }
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={16} />
                    Voir le projet
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Github size={16} />
                    Code source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}