import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "@/components/CertificationCard";

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  );

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="page-title">Certifications</h2>
        <input
          placeholder="Filtrer (ex: React, Java)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="input max-w-xs"
          aria-label="Filtrer les certifications"
        />
      </div>

      <div className="grid gap-4">
        {list.map((c) => (
          <CertificationCard key={c.title + c.issueDate} c={c} />
        ))}
      </div>
    </section>
  );
}
