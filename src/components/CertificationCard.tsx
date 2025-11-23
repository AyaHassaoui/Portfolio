import type { Certification } from "@/data/certifications";
import { useState } from "react";

export default function CertificationCard({ c }: { c: Certification }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="border rounded-xl p-4 hover:shadow transition bg-card">
      {/* Image miniature (cliquable) */}
      {c.image && (
        <img
          src={c.image}
          alt={c.imageAlt}
          className="w-28 h-28 object-cover rounded cursor-pointer"
          onClick={() => setOpen(true)}
        />
      )}

      <h3 className="font-semibold mt-2">{c.title}</h3>
      <p className="text-sm text-muted-foreground">
        {c.issuer} • {c.issueDate}
      </p>

      {/* Popup image agrandie */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <img
            src={c.image}
            alt={c.imageAlt}
            className="max-w-3xl max-h-[90vh] w-auto rounded-lg shadow-2xl border bg-white"
          />
        </div>
      )}
    </article>
  );
}
