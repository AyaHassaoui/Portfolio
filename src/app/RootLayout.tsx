import { Outlet, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground flex flex-col">
      {/* 🔹 Header navigation */}
      <header className="sticky top-0 border-b backdrop-blur bg-background/70 z-50">
        <nav className="mx-auto max-w-7xl flex items-center justify-between p-4">
          <NavLink to="/" className="font-bold text-xl">
            Portfolio
          </NavLink>

          {/* 🔹 Menu horizontal */}
          <ul className="flex items-center gap-6 text-sm">
            <NavLink to="/" className="hover:underline">Accueil</NavLink>
            <NavLink to="/projects" className="hover:underline">Projets</NavLink>
            <NavLink to="/experience" className="hover:underline">Expérience</NavLink>
            <NavLink to="/education" className="hover:underline">Formations</NavLink>
            <NavLink to="/certifications" className="hover:underline">Certifications</NavLink>
            <NavLink to="/contact" className="hover:underline">Contact</NavLink>
          </ul>

          <ThemeToggle />
        </nav>
      </header>

      {/* 🔹 Contenu de la page */}
      <main className="mx-auto max-w-7xl p-6 w-full">
        <Outlet />
      </main>
    </div>
  );
}
