import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="text-muted-foreground">
        N’hésite pas à me contacter pour un stage, un projet ou une simple question.
      </p>

      <div className="space-y-2 text-lg">
        <p><strong>📩 E-mail :</strong> <a href={`mailto:${profile.email}`} className="text-emerald-600 hover:underline">{profile.email}</a></p>
        <p><strong>📞 Téléphone :</strong> <a href={`tel:${profile.phone}`} className="text-emerald-600 hover:underline">{profile.phone}</a></p>
      </div>

      <div className="mt-8 text-sm text-muted-foreground">
        💡 Formulaire d’envoi désactivé (démo). Si tu veux, je peux activer l'envoi réel via EmailJS.
      </div>
    </div>
  );
}
