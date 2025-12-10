// app/(component)/ExampleCommentForm.tsx
/**
 * Contoh komponen untuk mengirim komentar
 * Gunakan sebagai referensi untuk komponen Anda
 */

"use client";

import { useState, useEffect, useCallback } from "react";
// PASTIKAN PATH KE HOOK ANDA SUDAH BENAR:
import { useComments, Comment } from "@/lib/hooks/useComments";

// --- DAFTAR EMOJI YANG BANYAK ---
const EMOJI_OPTIONS = [
  "😊",
  "😀",
  "😎",
  "🤩",
  "🥳",
  "🎉",
  "🔥",
  "🚀",
  "💡",
  "🧠",
  "✨",
  "🌟",
  "💻",
  "✍️",
  "☕",
  "📚",
  "🎨",
  "🎵",
  "💬",
  "💖",
  "❤️",
  "👍",
  "🙏",
  "👑",
  "🐻",
  "🦊",
  "🐯",
  "🦁",
  "🐧",
  "🦄",
  "👾",
  "🤖",
  "👻",
  "👽",
  "🍔",
  "🍕",
];

export default function ExampleCommentForm() {
  const { comments, fetchComments, addComment, loading, error } = useComments();
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    profile_emoji: EMOJI_OPTIONS[0],
  });
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      setFormData({ name: "", message: "", profile_emoji: EMOJI_OPTIONS[0] });
      setSuccess("Komentar berhasil dikirim!");
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div className="space-y-6">
      {/* Form Komentar */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nama Input dan Emoji Select */}
        <div className="flex items-center gap-3">
          {/* Select Emoji */}
          <div className="relative w-20">
            <label htmlFor="profile_emoji" className="sr-only">
              Pilih Emoji Profil
            </label>
            <select
              id="profile_emoji"
              name="profile_emoji"
              value={formData.profile_emoji}
              onChange={handleChange}
              aria-label="Pilih Emoji Profil"
              className="appearance-none w-full text-2xl text-center px-2 py-3 bg-input border border-border rounded-(--radius) focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200 cursor-pointer"
            >
              {EMOJI_OPTIONS.map((emoji) => (
                <option
                  key={emoji}
                  value={emoji}
                  className="bg-card text-foreground text-xl"
                >
                  {emoji}
                </option>
              ))}
            </select>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none text-sm">
              ▼
            </span>
          </div>

          {/* Nama Input */}
          <div className="flex-1">
            <label htmlFor="name" className="sr-only">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              minLength={2}
              maxLength={100}
              className="w-full px-4 py-3 bg-input border border-border rounded-(--radius) placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200"
            />
          </div>
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="sr-only">
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
            minLength={5}
            maxLength={1000}
            rows={5}
            className="w-full px-4 py-3 bg-input border border-border rounded-(--radius) placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200 resize-y"
          />
        </div>

        {/* Info Max File Size (dibiarkan kosong karena diganti emoji) */}
        <div className="text-xs text-muted-foreground text-center">
          *Pilih emoji profil di samping nama.
        </div>

        {/* Submit Button & Messages */}
        <div className="flex flex-col items-center justify-center gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-(--radius) font-semibold hover:bg-ring disabled:bg-muted disabled:text-muted-foreground transition-colors duration-200"
          >
            <span className="text-lg">📩</span>
            {loading ? "Posting..." : "Post Comment"}
          </button>
          <div className="text-sm font-medium">
            {error && <span className="text-destructive">{error}</span>}
            {success && <span className="text-primary">{success}</span>}
          </div>
        </div>
      </form>

      {/* Daftar Komentar */}
      <div className="space-y-4 pt-4 border-t border-border">
        {/* Pinned Comment (Simulasi) */}
        <article className="p-4 bg-secondary rounded-(--radius) border-2 border-primary/50 shadow-md">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📌</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-primary">
                  Brucad{" "}
                  <span className="text-xs ml-2 py-0.5 px-2 bg-primary/20 text-primary rounded-full">
                    Admin
                  </span>
                </h4>
                <time className="text-xs text-muted-foreground">
                  Des 11, 2025
                </time>
              </div>
              <p className="mt-1 text-sm text-foreground">
                Thanks for visiting! Contact me if you need anything
              </p>
            </div>
          </div>
        </article>

        {/* === START: WADAH SCROLL INTERNAL === */}
        <div className="h-96 overflow-y-auto pr-2 space-y-4">
          {loading && comments.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center">
              Memuat komentar...
            </p>
          ) : comments.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center">
              Belum ada komentar. Jadilah yang pertama!
            </p>
          ) : (
            comments.map((c: Comment) => (
              <article
                key={c.id}
                className="p-4 bg-secondary rounded-(--radius) border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{c.profile_emoji || "🙂"}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground">
                        {c.name}
                      </h4>
                      <time className="text-xs text-muted-foreground">
                        {new Date(c.created_at).toLocaleDateString("id-ID", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <p className="mt-1 text-sm text-foreground whitespace-pre-wrap">
                      {c.message}
                    </p>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
