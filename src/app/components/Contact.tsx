import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolio-data';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Champ anti-spam (doit rester vide). S'il est rempli, on ignore l'envoi.
  const [website, setWebsite] = useState('');

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<null | { type: 'success' | 'error'; message: string }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot
    if (website.trim().length > 0) {
      setStatus({
        type: 'success',
        message: 'Message envoyé.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setWebsite('');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message:
          "Le formulaire n'est pas configuré (variables EmailJS manquantes). Ajoute-les dans .env (voir .env.example).",
      });
      return;
    }

    setIsSending(true);
    setStatus(null);

    try {
      // Les noms de variables doivent correspondre à ton template EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          // optionnel : pour l'afficher dans le template
          to_email: personalInfo.email,
        },
        {
          publicKey,
        },
      );

      setStatus({ type: 'success', message: 'Merci ! Votre message a bien été envoyé.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setWebsite('');
    } catch (err) {
      setStatus({
        type: 'error',
        message: "Oups, l'envoi a échoué. Réessaie dans quelques minutes ou contacte-moi directement par email.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: personalInfo.location,
      link: null,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personalInfo.linkedin.replace('https://', ''),
      link: personalInfo.linkedin,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: personalInfo.github.replace('https://', ''),
      link: personalInfo.github,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">
            Me <span className="text-primary">contacter</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute opportunité ou renseignement complémentaire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="mb-6">Informations de contact</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground">{item.value}</p>
                    </div>
                  </div>
                );

                return item.link ? (
                  <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h4 className="mb-2">Disponibilité</h4>
              <p className="text-sm text-muted-foreground">{personalInfo.availability}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl">
            <h3 className="mb-6">Envoyez-moi un message</h3>

            {status && (
              <div
                className={`mb-4 rounded-lg border p-3 text-sm ${
                  status.type === 'success'
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                    : 'border-red-200 bg-red-50 text-red-800'
                }`}
                role="status"
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot (caché) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  maxLength={80}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  maxLength={120}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  maxLength={120}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                  maxLength={2000}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  isSending
                    ? 'bg-primary/60 text-white cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                <Send size={18} />
                {isSending ? 'Envoi…' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}