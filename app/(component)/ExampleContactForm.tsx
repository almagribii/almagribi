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
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      alert("Pesan berhasil dikirim!");
    } catch (err) {
      console.error("Error:", err);
      alert("Gagal mengirim pesan");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Nama
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Masukkan nama Anda"
          required
          minLength={2}
          maxLength={100}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="contoh@example.com"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tulis pesan Anda di sini"
          required
          minLength={10}
          maxLength={2000}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? "Mengirim..." : "Kirim Pesan"}
      </button>
    </form>
  );
}
