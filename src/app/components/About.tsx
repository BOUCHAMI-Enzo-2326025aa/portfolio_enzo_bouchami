import { User, Target, Lightbulb } from 'lucide-react';
import { aboutFeatures, aboutParagraphs } from '../data/portfolio-data';

export function About() {
  const iconMap = [User, Target, Lightbulb];
  
  const features = aboutFeatures.map((feature, index) => ({
    ...feature,
    icon: iconMap[index] || User,
  }));

  return (
    <section id="apropos" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">
            À propos de <span className="text-primary">moi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez mon parcours, mes motivations et ce qui me passionne
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl">
          <h3 className="mb-6">Mon parcours</h3>
          <div className="space-y-4 text-muted-foreground">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}