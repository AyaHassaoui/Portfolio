// src/pages/Home.tsx
import { profile } from "@/data/profile";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="grid items-center gap-8 md:grid-cols-[3fr,2fr]">
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Bienvenue sur mon portfolio
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {profile.name}
        </h1>
        <p className="text-xl text-muted-foreground">{profile.role}</p>
        <p className="muted max-w-xl">{profile.about}</p>

        <div className="flex flex-wrap gap-3">
          <Link to="/projects" className="btn-primary">
            Voir les projets
          </Link>
          <Link to="/contact" className="btn-ghost">
            Me contacter
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2" aria-label="Badges de parcours">
          <span className="pill">Master Ingénierie Informatique</span>
          <span className="pill">Développement Front-End moderne</span>
        </div>
      </div>

      <div className="card flex h-full items-center justify-center">
        <img
            src="/public/assets/img_3.png"
            alt="Technologies éducatives"
            className="rounded-xl object-cover w-[90%] h-[85%]"
          />
      </div>
    </section>
  );
}
