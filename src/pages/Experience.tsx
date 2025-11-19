export default function Experience() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Expériences</h1>

      <p className="text-muted-foreground">
        En tant qu’étudiante en Master Didactique des Sciences et Ingénierie Éducative,
        j’ai développé un ensemble de compétences techniques et pédagogiques à travers
        des projets académiques et personnels.
      </p>

      <div className="space-y-4">
        <div className="border rounded-xl p-5">
          <h2 className="text-lg font-semibold">Expérience Académique</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Participation à plusieurs projets éducatifs numériques intégrant
            des technologies émergentes, dont la réalité augmentée, le développement
            mobile et les systèmes d’apprentissage interactifs.
          </p>
        </div>

        <div className="border rounded-xl p-5">
          <h2 className="text-lg font-semibold">Projets Réalisés</h2>
          <ul className="list-disc ms-4 text-sm text-muted-foreground mt-2 space-y-1">
            <li>Mini-application Android éducative (Java)</li>
            <li>Projet de Réalité Augmentée avec Unity & Vuforia</li>
            <li>Portfolio Web React (ce site)</li>
            <li>Application de gestion d’un club sportif</li>
          </ul>
        </div>

        <div className="border rounded-xl p-5">
          <h2 className="text-lg font-semibold">Projets professionnels en perspective</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Ouverte aux opportunités de stage, d’enseignement assisté par le numérique
            ou de développement d’outils éducatifs.
          </p>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        💡 Une section professionnelle détaillée sera ajoutée lorsque les premières expériences en entreprise seront acquises.
      </p>
    </section>
  );
}
