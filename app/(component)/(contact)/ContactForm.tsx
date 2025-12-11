"use client";

import { useState } from "react";
import { useContact } from "@/lib/hooks/useContact";

// Removed Framer Motion Variants

export default function ContactForm() {
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
      alert("Message sent successfully!");
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to send message");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      // initial="hidden"
      // whileInView="show"
      // viewport={{ once: true, amount: 0.2 }}
      // transition={{ staggerChildren: 0.15 }}
    >
      <div /* variants={contactItemVariant} */>
        <label htmlFor="name" className="sr-only">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          minLength={2}
          maxLength={100}
          className="w-full px-4 py-3 bg-input border border-border rounded-xl placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200"
        />
      </div>

      <div /* variants={contactItemVariant} */>
        <label htmlFor="email" className="sr-only">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 bg-input border border-border rounded-xl placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200"
        />
      </div>

      <div /* variants={contactItemVariant} */>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Send me a message and let's talk..."
          required
          minLength={10}
          maxLength={2000}
          rows={7}
          className="w-full px-4 py-3 bg-input border border-border rounded-xl placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200 resize-none"
        />
      </div>

      {error && <p className="text-destructive text-sm font-medium">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-ring disabled:bg-muted disabled:text-muted-foreground transition-colors duration-200"
        // variants={contactItemVariant}
        // whileHover={{ scale: 1.02 }}
        // whileTap={{ scale: 0.98 }}
        // transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <span className="text-lg">✉️</span>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
