// src/data/projects.ts

export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio React + TypeScript",
    period: "2025",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "Vercel"],
    summary:
      "Portfolio personnel avec thème clair/sombre, layout avec sidebar, pages dynamiques (Projets, Formations, Certifications, Contact) et déploiement sur Vercel."
    // repo: "https://github.com/...", // à ajouter si tu crées le repo
  },
  {
    title: "Système intelligent de suivi de santé et de bien-être",
    period: "2025",
    tags: ["Python", "Pandas", "Machine Learning", "NLP", "Education"],
    summary:
      "Projet de système éducatif intelligent combinant données physiologiques simulées et analyse de texte pour estimer le niveau de stress et proposer des recommandations de bien-être personnalisées."
  },

  {
    title: "Application Android – Calcul des impôts locaux",
    period: "2025",
    tags: ["Android", "Java", "UI XML", "Education financière"],
    summary:
      "Application Android pédagogique qui calcule le montant des impôts locaux en fonction de la surface de la maison, du nombre de pièces et de la présence d’une piscine, avec interface simple pour les apprenants."
  },

  {
    title: "Projet AR – Voiture en Réalité Augmentée",
    period: "2025",
    tags: ["Unity", "Vuforia", "C#", "Réalité augmentée", "Education"],
    summary:
      "Expérience en Réalité Augmentée affichant un modèle 3D de voiture (Porsche) au-dessus d’une image cible, avec son moteur et voix descriptive, utilisée comme mini-projet pour illustrer les technologies émergentes en éducation."
  },
  {
    title: "Simulation réseau pédagogique avec Cisco Packet Tracer",
    period: "2025",
    tags: ["Réseaux", "Cisco Packet Tracer", "Adressage IP", "RIP"],
    summary:
      "Topologie réseau avec plusieurs sous-réseaux, plan d’adressage VLSM, configuration des routeurs et tests de connectivité. Utilisé comme support de cours pour expliquer le routage et la segmentation réseau."
  },
  {
    title: "API REST Java / Spring Boot avec JPA",
    period: "2025",
    tags: ["Java", "Spring Boot", "REST", "JPA", "Hibernate"],
    summary:
      "Création d’une API REST pour la gestion d’entités (étudiants, salles, comptes bancaires, etc.) avec Spring Boot, Hibernate/JPA et base de données relationnelle, servant d’exemple d’architecture back-end pour des applications éducatives."
  },


];
