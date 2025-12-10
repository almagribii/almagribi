// app/contact/page.tsx (Contoh komponen induk)

import ExampleContactForm from "@/app/(component)/ExampleContactForm";
import ExampleCommentForm from "@/app/(component)/ExampleCommentForm";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center mb-12 md:mb-16" data-aos="fade-down">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-3">
          Contact & Comment
        </h2>
        <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
          Whether you have a project idea, a question, or just want to leave a
          quick greeting, feel free to reach out or drop a comment below.{" "}
        </p>
      </div>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
        {/* Kolom Kiri: Contact Form & Connect Links */}
        <div className="space-y-6">
          <div className="p-6 bg-card rounded-(--radius) shadow-xl border border-border">
            <h2 className="text-2xl font-bold mb-4 text-primary">Hubungi 💬</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Ada yang ingin didiskusikan? Kirim saya pesan dan mari kita
              bicara.
            </p>
            <ExampleContactForm />
          </div>

          <div className="p-6 bg-card rounded-(--radius) shadow-xl border border-border">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Connect With Me 🔗
            </h3>
            <div className="space-y-3">
              {/* Ini adalah contoh tautan, sesuaikan dengan kebutuhan Anda */}
              <LinkItem
                icon="🤝"
                name="Let's Connect"
                platform="on LinkedIn"
                href="#"
              />
              <LinkItem
                icon="📸"
                name="Instagram"
                platform="@ekzxr_"
                href="#"
              />
              <LinkItem
                icon="▶️"
                name="Youtube"
                platform="@eki_zulfar"
                href="#"
              />
              <LinkItem icon="🐙" name="Github" platform="@ekizxr" href="#" />
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Comment Section */}
        <div className="p-6 bg-card rounded-(--radius) shadow-xl border border-border">
          <h2 className="text-2xl font-bold mb-4 text-primary">Komentar 📝</h2>
          <ExampleCommentForm />
        </div>
      </div>
    </div>
  );
}

// Komponen bantu untuk tautan media sosial
function LinkItem({
  icon,
  name,
  platform,
  href,
}: {
  icon: string;
  name: string;
  platform: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-3 bg-secondary rounded-md hover:bg-accent transition-colors group"
    >
      <span className="text-xl mr-3">{icon}</span>
      <div className="flex-1">
        <p className="font-medium text-foreground group-hover:text-primary transition-colors hoverText">
          {name}
        </p>
        <p className="text-xs text-muted-foreground">{platform}</p>
      </div>
    </a>
  );
}
