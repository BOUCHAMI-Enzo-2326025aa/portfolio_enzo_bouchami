# 📝 Guide de Personnalisation du Portfolio

Bienvenue ! Ce guide vous explique comment personnaliser facilement votre portfolio.

## 🎯 Fichier Principal de Configuration

**Tous les contenus sont centralisés dans un seul fichier :**

📁 `/src/app/data/portfolio-data.ts`

C'est le **SEUL FICHIER** que vous devez modifier pour personnaliser votre portfolio !

---

## ✏️ Comment Personnaliser Chaque Section

### 1️⃣ **Informations Personnelles**

Dans le fichier `portfolio-data.ts`, trouvez la section `personalInfo` :

```typescript
export const personalInfo = {
  firstName: 'Jean',                    // Votre prénom
  lastName: 'Dupont',                   // Votre nom
  title: 'Étudiant en Informatique',   // Votre titre/statut
  bio: 'Votre bio ici...',              // Description courte
  availability: 'Votre disponibilité', // Date de disponibilité
  
  // Contact
  email: 'jean.dupont@exemple.com',
  phone: '+33 6 12 34 56 78',
  location: 'Paris, France',
  linkedin: 'https://linkedin.com/in/votre-profil',
  github: 'https://github.com/votre-profil',
  
  // Image de profil
  profileImage: 'URL de votre image',
};
```

---

### 2️⃣ **Section "À Propos"**

Modifiez les 3 cartes descriptives :

```typescript
export const aboutFeatures = [
  {
    title: 'Qui suis-je ?',
    description: 'Votre présentation...',
  },
  {
    title: 'Mes objectifs',
    description: 'Vos objectifs...',
  },
  {
    title: 'Ma valeur ajoutée',
    description: 'Vos points forts...',
  },
];
```

Et les paragraphes détaillés :

```typescript
export const aboutParagraphs = [
  'Premier paragraphe...',
  'Deuxième paragraphe...',
  'Troisième paragraphe...',
];
```

---

### 3️⃣ **Compétences**

Ajoutez ou modifiez vos compétences par catégorie :

```typescript
export const skillCategories = [
  {
    title: 'Développement',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Python'],
  },
  {
    title: 'Design',
    skills: ['Figma', 'Photoshop', 'UI/UX'],
  },
  // Ajoutez plus de catégories si besoin
];
```

> **💡 Astuce :** Vous pouvez ajouter autant de catégories que vous voulez !

---

### 4️⃣ **Projets**

Ajoutez vos projets avec leurs détails :

```typescript
export const projects = [
  {
    title: 'Nom du Projet',
    description: 'Description du projet...',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'URL de l\'image du projet',
    demoLink: 'https://lien-demo.com',      // Lien vers la démo
    githubLink: 'https://github.com/...',    // Lien GitHub
  },
  // Ajoutez plus de projets ici
];
```

> **🖼️ Pour les images :** Utilisez des URLs d'images hébergées en ligne ou des images Unsplash

---

### 5️⃣ **Formation**

Détaillez votre parcours académique :

```typescript
export const education = [
  {
    year: '2024 - 2026',
    title: 'Master en Informatique',
    institution: 'Université Paris-Saclay',
    description: 'Spécialisation en Intelligence Artificielle',
  },
  // Ajoutez vos autres diplômes
];
```

---

### 6️⃣ **Expérience Professionnelle**

Listez vos expériences :

```typescript
export const experience = [
  {
    year: '2025',
    title: 'Stage Développeur Web',
    company: 'Entreprise XYZ',
    description: 'Développement d\'une application React...',
  },
  // Ajoutez vos autres expériences
];
```

---

## 🎨 Personnalisation Avancée

### Changer les Couleurs

Si vous voulez changer le bleu vif (#0066FF) par une autre couleur, modifiez :

📁 `/src/styles/theme.css`

```css
:root {
  --primary: #0066FF;  /* Changez cette couleur */
}
```

### Ajouter Plus de Projets

Dans `portfolio-data.ts`, copiez-collez simplement un objet projet existant et modifiez les valeurs.

### Supprimer une Section

Dans `/src/app/App.tsx`, commentez ou supprimez le composant que vous ne voulez pas afficher.

---

## 🚀 Conseils pour un Portfolio Impactant

1. **Photo professionnelle** : Utilisez une vraie photo de vous ou de votre workspace
2. **Projets concrets** : Mettez vos vrais projets avec des liens fonctionnels
3. **Soyez spécifique** : Remplacez tous les textes génériques par vos vraies informations
4. **Mettez à jour régulièrement** : Ajoutez vos nouveaux projets et compétences
5. **Vérifiez les liens** : Assurez-vous que tous vos liens fonctionnent

---

## ❓ Questions Fréquentes

**Q : Comment ajouter plus de 3 projets ?**
A : Copiez-collez simplement un objet projet dans le tableau `projects`

**Q : Puis-je changer l'ordre des sections ?**
A : Oui, dans `/src/app/App.tsx`, réorganisez l'ordre des composants

**Q : Comment obtenir une URL pour mes images ?**
A : Utilisez des services comme Imgur, Cloudinary, ou hébergez-les sur votre repo GitHub

**Q : Le formulaire de contact fonctionne-t-il ?**
A : C'est une démo pour l'instant. Pour un vrai formulaire, vous devrez intégrer un service comme EmailJS ou Formspree

---

## 📞 Besoin d'Aide ?

Si vous avez des questions, n'hésitez pas à :
- Consulter les commentaires dans le code
- Vérifier que vous avez bien modifié le fichier `portfolio-data.ts`
- Recharger la page après vos modifications

---

**Bon courage pour la personnalisation de votre portfolio ! 🎉**
