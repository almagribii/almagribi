"use client";

import { useState, useEffect } from "react";
import { useComments, Comment } from "@/lib/hooks/useComments";

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

export default function CommentForm() {
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
      setSuccess("Comment successfully posted!");
      setTimeout(() => setSuccess(null), 3000);
      fetchComments();
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        // initial="hidden"
        // animate="show"
        // variants={formContainerVariant}
      >
        <div
          className="flex items-center gap-3"
          // variants={formItemVariant}
        >
          <div className="relative w-20">
            <label htmlFor="profile_emoji" className="sr-only">
              Select Profile Emoji
            </label>
            <select
              id="profile_emoji"
              name="profile_emoji"
              value={formData.profile_emoji}
              onChange={handleChange}
              aria-label="Select Profile Emoji"
              className="appearance-none w-full text-2xl text-center px-2 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200 cursor-pointer"
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

          <div className="flex-1">
            <label htmlFor="name" className="sr-only">
              Name
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
              className="w-full px-4 py-3 bg-input border border-border rounded-xl placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200"
            />
          </div>
        </div>

        <div /* variants={formItemVariant} */>
          <label htmlFor="message" className="sr-only">
            Message
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
            className="w-full px-4 py-3 bg-input border border-border rounded-xl placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200 resize-y"
          />
        </div>

        <div
          className="text-xs text-muted-foreground text-center"
          // variants={formItemVariant}
        >
          *Select a profile emoji next to your name.
        </div>

        <div
          className="flex flex-col items-center justify-center gap-3 pt-2"
          // variants={formItemVariant}
        >
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-ring disabled:bg-muted disabled:text-muted-foreground transition-colors duration-200"
            // whileHover={{ scale: 1.02 }}
            // whileTap={{ scale: 0.98 }}
            // transition={{ type: "spring", stiffness: 400, damping: 17 }}
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

      <div className="space-y-4 pt-4 border-t border-border">
        <article className="p-4 bg-secondary rounded-xl border-2 border-primary/50 shadow-md">
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
                  Dec 11, 2025
                </time>
              </div>
              <p className="mt-1 text-sm text-foreground">
                Thanks for visiting! Contact me if you need anything
              </p>
            </div>
          </div>
        </article>

        <div
          className="h-96 overflow-y-auto pr-2 space-y-4"
          // initial="hidden"
          // whileInView="show"
          // viewport={{ once: true, amount: 0 }}
          // variants={commentListVariant}
        >
          {loading && comments.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center">
              Loading comments...
            </p>
          ) : comments.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center">
              No comments yet. Be the first!
            </p>
          ) : (
            comments.map((c: Comment) => (
              <article
                key={c.id}
                className="p-4 bg-secondary rounded-xl border border-border"
                // variants={commentItemVariant}
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{c.profile_emoji || "🙂"}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground">
                        {c.name}
                      </h4>
                      <time className="text-xs text-muted-foreground">
                        {new Date(c.created_at).toLocaleDateString("en-US", {
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
