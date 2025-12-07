import { ThemeToggle } from "@/components/theme-toogle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-background text-foreground transition-colors duration-300">
      <h1 className="text-4xl font-bold">Semantic Colors</h1>

      <div className="p-6 rounded-xl border border-border bg-card text-card-foreground shadow-sm max-w-md">
        <h2 className="text-2xl font-semibold mb-2">Ini Kartu Otomatis</h2>
        <p className="mb-6 opacity-90">
          Saya tidak menggunakan prefix "dark:" di HTML saya. Warna saya berubah
          karena variabel CSS berubah nilainya.
        </p>

        <button className="px-4 py-2 rounded bg-primary text-primary-foreground font-medium hover:opacity-90">
          Tombol Primary
        </button>
      </div>

      <ThemeToggle />
    </div>
  );
}
