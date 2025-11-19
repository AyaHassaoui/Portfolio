import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

function navLinkClass({ isActive }: { isActive: boolean }) {
  return [
    "text-sm px-3 py-2 rounded-full text-left transition",
    isActive
      ? "bg-primary text-primary-foreground shadow-soft"
      : "text-muted-foreground hover:text-foreground",
  ].join(" ");
}

export default function RootLayout() {
  const firstName = profile.name.split(" ").slice(-1)[0] ?? profile.name;

  return (
    <div className="app-shell">
      <div className="app-layout">
        {/* Sidebar desktop */}
        <aside className="app-sidebar">
          <div className="app-sidebar-header">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Portfolio
            </span>

            <h1 className="mt-3 text-xl font-semibold tracking-tight">
              {profile.name}
            </h1>

            {/* 🖼️ Photo de profil */}
            {profile.profileImage && (
              <img
                src={profile.profileImage}
                alt={profile.profileImageAlt}
                className="mt-3 h-24 w-24 rounded-full object-cover border shadow-soft"
              />
            )}

            <p className="muted mt-3">{profile.role}</p>
            <p className="muted mt-1 text-xs">{profile.location}</p>

            {/* ⭐ BLOC CONTACT TRÈS VISIBLE */}
            <div className="mt-4 rounded-2xl border bg-card/80 p-3 text-sm">
              <p className="mb-1 font-semibold">Contact direct</p>
              <p>
                📩 <span className="font-mono">{profile.email}</span>
              </p>
              <p>
                📞 <span className="font-mono">{profile.phone}</span>
              </p>
            </div>
          </div>

          <nav className="app-sidebar-nav">
            <NavLink to="/" className={navLinkClass}>
              Accueil
            </NavLink>
            <NavLink to="/projects" className={navLinkClass}>
              Projets
            </NavLink>
            <NavLink to="/experience" className={navLinkClass}>
              Expériences
            </NavLink>
            <NavLink to="/education" className={navLinkClass}>
              Formations
            </NavLink>
            <NavLink to="/certifications" className={navLinkClass}>
              Certifications
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          <div className="mt-auto flex items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>Bonjour {firstName}</span>
            <ThemeToggle />
          </div>
        </aside>

        {/* Contenu principal */}
        <div className="app-content">
          {/* Header mobile uniquement */}
          <header className="mb-4 flex items-center justify-between lg:hidden">
            <div>
              <p className="text-xs text-muted-foreground">
                Portfolio • {profile.location}
              </p>
              <p className="text-sm font-medium">{profile.name}</p>
            </div>
            <ThemeToggle />
          </header>

          <main className="app-main">
            <Outlet />
          </main>

          <footer className="app-footer">
            © {new Date().getFullYear()} HASSAOUI Aya
          </footer>
        </div>
      </div>
    </div>
  );
}
