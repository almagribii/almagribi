// app/(component)/ExampleCommentForm.tsx
/**
 * Contoh komponen untuk mengirim komentar
 * Gunakan sebagai referensi untuk komponen Anda
 */

"use client";

import { useState } from "react";
import { useComments } from "@/lib/hooks/useComments";

export default function ExampleCommentForm() {
  const { addComment, loading, error } = useComments();
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    profile_emoji: "😊",
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
      await addComment(formData);
      // Reset form
      setFormData({ name: "", message: "", profile_emoji: "😊" });
      alert("Komentar berhasil dikirim!");
    } catch (err) {
      console.error("Error:", err);
      alert("Gagal mengirim komentar");
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
          minLength={5}
          maxLength={1000}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="emoji" className="block text-sm font-medium">
          Emoji Profil
        </label>
        <input
          type="text"
          id="emoji"
          name="profile_emoji"
          value={formData.profile_emoji}
          onChange={handleChange}
          placeholder="Pilih emoji"
          maxLength={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? "Mengirim..." : "Kirim Komentar"}
      </button>
    </form>
  );
}
