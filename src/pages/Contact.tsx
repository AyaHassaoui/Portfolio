import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="text-muted-foreground">
        N’hésite pas à me contacter pour un stage, un projet ou une simple question.
      </p>

      <div className="space-y-2 text-lg">
        <p>
          <strong>📩 E-mail :</strong>
          <a href={`mailto:${profile.email}`} className="text-emerald-600 hover:underline ml-1">
            {profile.email}
          </a>
        </p>

        <p>
          <strong>📞 Téléphone :</strong>
          <a href={`tel:${profile.phone}`} className="text-emerald-600 hover:underline ml-1">
            {profile.phone}
          </a>
        </p>

        <p>
          <strong>🔗 LinkedIn :</strong>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:underline ml-1"
          >
            Profil LinkedIn
          </a>
        </p>

        <p>
          <strong>💻 GitHub :</strong>
          <a
            href="https://github.com/AyaHassaoui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:underline ml-1"
          >
            AyaHassaoui
          </a>
        </p>
      </div>



    </div>
  );
}
