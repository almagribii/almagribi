// app/(component)/ExampleContactForm.tsx
/**
 * Contoh komponen untuk mengirim pesan kontak
 * Gunakan sebagai referensi untuk komponen Anda
 */

"use client";

import { useState } from "react";
import { useContact } from "@/lib/hooks/useContact";

export default function ExampleContactForm() {
  const { sendMessage, loading, error } = useContact();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await sendMessage(formData);
      setFormData({ name: "", email: "", message: "" });
      alert("Pesan berhasil dikirim!");
    } catch (err) {
      console.error("Error:", err);
      alert("Gagal mengirim pesan");
    }
  };

  return (
    // Styling form disesuaikan ke Dark Mode dan layout modern
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="sr-only">
          Nama Anda
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nama Anda" // Sesuai dengan gambar
          required
          minLength={2}
          maxLength={100}
          // Gaya input baru: Penuh, border, bg input dark
          className="w-full px-4 py-3 bg-input border border-border rounded-(--radius) placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200"
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email Anda
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Anda" // Sesuai dengan gambar
          required
          // Gaya input baru
          className="w-full px-4 py-3 bg-input border border-border rounded-(--radius) placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200"
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Kirim saya pesan dan mari kita bicara..." // Sesuai dengan gambar
          required
          minLength={10}
          maxLength={2000}
          rows={7}
          // Gaya input baru
          className="w-full px-4 py-3 bg-input border border-border rounded-(--radius) placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200 resize-none"
        />
      </div>

      {error && <p className="text-destructive text-sm font-medium">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        // Tombol Primary (Gold) dengan teks kontras
        className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-(--radius) font-semibold hover:bg-ring disabled:bg-muted disabled:text-muted-foreground transition-colors duration-200"
      >
        <span className="text-lg">✉️</span>
        {loading ? "Mengirim..." : "Kirim Pesan"}
      </button>
    </form>
  );
}
