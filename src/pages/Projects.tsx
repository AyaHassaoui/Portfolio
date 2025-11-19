import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="page-title">Projets</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <h3 className="font-semibold">{p.title}</h3>
            {p.period && (
              <p className="text-xs text-muted-foreground">{p.period}</p>
            )}
            <p className="muted mt-2">{p.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {p.tags.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-link"
                >
                  Demo
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-link"
                >
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
