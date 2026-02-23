import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { education, experience } from '../data/portfolio-data';

export function Timeline() {
  return (
    <section id="parcours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">
            Mon <span className="text-primary">parcours</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Formation académique et expériences professionnelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formation */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl">Formation</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l-2 border-primary/20 last:border-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="text-primary" size={16} />
                    <span className="text-sm text-primary">{item.year}</span>
                  </div>
                  <h4 className="mb-1">{item.title}</h4>
                  <p className="text-muted-foreground mb-2">
                    {item.institution}
                    {('location' in item && item.location) ? ` — ${item.location}` : ''}
                  </p>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expérience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-2xl">Expérience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l-2 border-primary/20 last:border-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="text-primary" size={16} />
                    <span className="text-sm text-primary">{item.year}</span>
                  </div>
                  <h4 className="mb-1">{item.title}</h4>
                  <p className="text-muted-foreground mb-2">
                    {item.company}
                    {('location' in item && item.location) ? ` — ${item.location}` : ''}
                  </p>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}