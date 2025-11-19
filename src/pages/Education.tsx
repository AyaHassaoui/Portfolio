import { education } from "@/data/education";

function fmt(date?: string) {
  if (!date) return "Présent";
  const [y, m] = date.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Formations</h1>
      <p className="text-muted-foreground">
        Parcours académique dans les domaines de l’informatique et des technologies éducatives,
        avec un intérêt particulier pour l’innovation numérique dans l’apprentissage.
      </p>

      <ol className="relative border-s space-y-6">
        {education.map((e) => (
          <li key={e.school + e.start} className="ms-6 pb-4">
            <span className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full bg-primary"></span>

            <h2 className="font-semibold leading-tight">
              {e.degree} — {e.field}
              <span className="block text-sm text-muted-foreground">@ {e.school}</span>
            </h2>

            <p className="text-sm text-muted-foreground mt-1">
              {fmt(e.start)} — {fmt(e.end)} • {e.location}
            </p>

            {e.courses?.length > 0 && (
              <p className="mt-2 text-sm">
                Cours clés : {e.courses.slice(0, 4).join(", ")}
              </p>
            )}

            {e.highlights?.length > 0 && (
              <ul className="list-disc ms-5 mt-2 text-sm space-y-1">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
