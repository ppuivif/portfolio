export type Locale = 'en' | 'fr';

const messages = {
  en: {
    about: 'Home', experience: 'Experience', education: 'Education',
    projects: 'Explore my projects', projectsIntro: 'Browse projects by area of interest.',
    viewProjects: 'View projects →', downloadCv: 'Download CV',
    allThemes: '← All themes', emptyProjects: 'Projects in this area will be added soon.',
    recentPosts: 'Recent posts', previous: 'Previous', next: 'Next',
    pageNotFound: 'Page Not Found', language: 'Language',
    job: 'Junior Software Developer | Full-Stack & DevOps',
    experiences: [
      { title: 'Software Developer Intern', details: 'Developed, integrated and tested new features for existing business applications with Java and Angular technologies. Worked with Maven, Jenkins and Ansible within CI/CD workflows.' },
      { title: 'Property Diagnostics Company Manager', details: '' },
      { title: 'Branch Manager', details: 'Construction & Civil Engineering.' },
      { title: 'Project Manager / Site Manager', details: 'Water supply and wastewater infrastructure projects.' },
      { title: 'Engineering Technician', details: 'Aquaculture applications.' },
    ],
    education: [
      { title: 'Computer Science Architecture Program', details: '' },
      { title: 'Building Business Management', details: '' },
      { title: "Master's Degree in Aquatic Environment Engineering", details: '' },
      { title: 'University Diploma of Technology (DUT) in Environmental Engineering', details: '' },
    ],
    themes: {
      'system-programming': { name: 'Programmation système', description: 'Programmation bas niveau, outils Unix et logiciels système.' },
      fullstack: { name: 'Fullstack', description: 'Applications développées côté frontend et backend.' },
      devops: { name: 'DevOps', description: 'Infrastructure, automatisation et projets CI/CD.' },
    },
  },
  fr: {
    about: 'Home', experience: 'Expérience', education: 'Formation',
    projects: 'Mes projets', projectsIntro: 'Découvrez mes projets par domaine.',
    viewProjects: 'Voir les projets →', downloadCv: 'Télécharger le CV',
    allThemes: '← Tous les thèmes', emptyProjects: 'Des projets seront ajoutés prochainement.',
    recentPosts: 'Articles récents', previous: 'Précédent', next: 'Suivant',
    pageNotFound: 'Page introuvable', language: 'Langue',
    job: 'Développeur logiciel junior | Full-Stack & DevOps',
    experiences: [
      { title: 'Stagiaire développeur logiciel', details: 'Développement, intégration et test de nouvelles fonctionnalités pour des applications métier existantes avec Java et Angular. Utilisation de Maven, Jenkins et Ansible dans des workflows CI/CD.' },
      { title: 'Gérant de société de diagnostics immobiliers', details: '' },
      { title: 'Responsable d’agence', details: 'Construction et génie civil.' },
      { title: 'Chargé d’affaires / Conducteur de travaux', details: 'Projets d’alimentation en eau et d’assainissement.' },
      { title: 'Technicien ingénieur', details: 'Applications aquacoles.' },
    ],
    education: [
      { title: 'Formation en architecture informatique', details: '' },
      { title: 'Gestion d’entreprise du bâtiment', details: '' },
      { title: 'Master en ingénierie des milieux aquatiques', details: '' },
      { title: 'DUT Génie de l’environnement', details: '' },
    ],
    themes: {
      'system-programming': { name: 'Programmation système', description: 'Programmation bas niveau, outils Unix et logiciels système.' },
      fullstack: { name: 'Fullstack', description: 'Applications développées côté frontend et backend.' },
      devops: { name: 'DevOps', description: 'Infrastructure, automatisation et projets CI/CD.' },
    },
  },
} as const;

export function getLocaleMessages(locale: Locale) {
  return messages[locale];
}
