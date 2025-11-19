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
    image: "/assets/img_2.png",
    imageAlt: "Badge Développement Front-End moderne avec React",
    status: "active",
  },
  {
    title: "Hibernate et JPA",
    issuer: "Midele.Toubkalit",
    issueDate: "2025-03",
    skills: ["ORM", "Base de données", "JPA", "Hibernate"],
    tags: ["Back-End", "Java", "JPA"],
    image: "/assets/img_1.png",
    imageAlt: "Badge Hibernate et JPA",
    status: "active",
  },
  {
    title: "Fondamentaux de la programmation Java",
    issuer: "Midele.Toubkalit",
    issueDate: "2025-01",
    skills: ["Java", "Algorithmes", "POO"],
    tags: ["Java", "Programmation"],
    image: "/assets/img.png",
    imageAlt: "Badge Fondamentaux Java",
    status: "active",
  },
];
