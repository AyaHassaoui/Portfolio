import { certifications } from "@/data/certifications";
import CertificationCard from "@/components/CertificationCard";

export default function CertificationsPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Certifications</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <CertificationCard key={c.title} c={c} />
        ))}
      </div>
    </section>
  );
}
