import { Code, Monitor, Server, Database, Layers3, Wrench, Users } from 'lucide-react';
import { skillCategories as skillCategoriesData } from '../data/portfolio-data';

export function Skills() {
  const skillCategories = skillCategoriesData.map((category) => {
    const title = category.title.toLowerCase();
    const has = (needle: string) => title.indexOf(needle) !== -1;

    const icon = (() => {
      // mapping “par intention” (plus robuste que l’index)
      if (has('frontend') || has('front')) return Monitor;
      if (has('backend') || has('back')) return Server;
      if (has('framework')) return Layers3;
      if (has('base') || has('donné') || has('data')) return Database;
      if (has('outil')) return Wrench;
      if (has('soft')) return Users;
      return Code;
    })();

    return { ...category, icon };
  });

  return (
    <section id="competences" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">
            Mes <span className="text-primary">compétences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un ensemble de compétences techniques et humaines développées au fil de mes expériences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}