// src/data/certifications.ts
export type Certification = {
  title: string;
  issuer: string;
  issueDate: string; // "YYYY-MM"
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Développement Front-End moderne avec React",
    issuer: "Midele.Toubkalit",
    issueDate: "2025-04",
    skills: ["React", "JSX", "Components", "State management"],
    tags: ["Front-End", "React"],
    image: "/certs/react-frontend.webp", // si tu ajoutes l’image dans public/certs
    imageAlt: "Badge Développement Front-End moderne avec React",
    status: "active",
  },
  {
    title: "Hibernate et JPA",
    issuer: "Midele.Toubkalit",
    issueDate: "2025-03",
    skills: ["ORM", "Base de données", "JPA", "Hibernate"],
    tags: ["Back-End", "Java", "JPA"],
    image: "/certs/hibernate-jpa.webp",
    imageAlt: "Badge Hibernate et JPA",
    status: "active",
  },
  {
    title: "Fondamentaux de la programmation Java",
    issuer: "Midele.Toubkalit",
    issueDate: "2025-01",
    skills: ["Java", "Algorithmes", "POO"],
    tags: ["Java", "Programmation"],
    image: "/certs/java-fondamentaux.webp",
    imageAlt: "Badge Fondamentaux Java",
    status: "active",
  },
  {
    title: "Master Ingénierie Informatique",
    issuer: "Université Cadi Ayyad",
    issueDate: "2024-09",
    skills: ["Ingénierie logicielle", "Architecture logicielle"],
    tags: ["Diplôme universitaire"],
    image: "/certs/master-ii.webp",
    imageAlt: "Master Ingénierie Informatique",
    status: "active",
  },
  {
    title: "Licence Informatique",
    issuer: "Ibn zohr",
    issueDate: "2023-07",
    skills: ["Bases de l’informatique", "Programmation"],
    tags: ["Diplôme universitaire"],
    image: "/certs/licence-info.webp",
    imageAlt: "Licence Informatique",
    status: "active",
  },
];
