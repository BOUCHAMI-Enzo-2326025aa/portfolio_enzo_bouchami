import { Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            © {currentYear} Portfolio. Tous droits réservés.
          </p>
          <p className="text-sm flex items-center gap-2">
            Créé avec Figma par {personalInfo.firstName} {personalInfo.lastName}
          </p>
        </div>
      </div>
    </footer>
  );
}