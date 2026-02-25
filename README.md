## Portfolio d'Enzo Bouchami

Portfolio React + Vite conçu pour présenter un profil à des écoles supérieures et des entreprises.

Maquette source Figma :
https://www.figma.com/design/vL9aUB5bt11qnGv5OuqPtb/Portfolio-d-Enzo-Bouchami

## Démarrage rapide

### 1) Installer les dépendances

```bash
npm install
```

### 2) Lancer en développement

```bash
npm run dev
```

### 3) Générer la version de production

```bash
npm run build
```

### 4) Prévisualiser le build localement

```bash
npm run preview
```

## Formulaire de contact (envoi d'email)

Le formulaire "Me contacter" envoie un email via **EmailJS** (fonctionne sur un hébergement statique).

1) Crée un compte et configure EmailJS : https://www.emailjs.com/
   - Ajoute un **Email Service**
   - Crée un **Email Template**
2) Crée un fichier `.env` à la racine (copie de `.env.example`) et renseigne :
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3) Dans ton template EmailJS, utilise ces variables (ou adapte le code) :
   - `from_name`
   - `reply_to`
   - `subject`
   - `message`

> Note : `.env` est ignoré par git (sécurité). Ne le commit pas.

## Personnalisation

Le contenu principal est centralisé dans :

`src/app/data/portfolio-data.ts`

Guide détaillé :

`GUIDE_PERSONNALISATION.md`
