import type { Certification } from "@/data/certifications";
import clsx from "clsx";

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired =
    c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <article
      className={clsx("card flex gap-4", isExpired && "opacity-80")}
      aria-label={`Certification ${c.title}`}
    >
      {c.image && (
        <img
          src={c.image}
          alt={c.imageAlt ?? c.title}
          width={200}
          height={120}
          loading="lazy"
          className="h-20 w-40 rounded-xl object-cover"
        />
      )}

      <div className="flex flex-1 flex-col justify-between gap-1">
        <div>
          <h3 className="font-semibold leading-snug">{c.title}</h3>
          <p className="muted">
            {c.issuer} • {mmYYYY(c.issueDate)}
          </p>
          {c.skills?.length ? (
            <p className="muted mt-1">
              Compétences : {c.skills.join(", ")}
            </p>
          ) : null}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
          {c.credentialUrl && (
            <a
              href={c.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="primary-link"
            >
              Voir le certificat
            </a>
          )}
          {isExpired && <span className="text-amber-500">Expirée</span>}
          {c.status === "revoked" && (
            <span className="text-red-500">Révoquée</span>
          )}
        </div>
      </div>
    </article>
  );
}
