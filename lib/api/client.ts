// lib/api/client.ts
/**
 * API Client untuk frontend
 * Gunakan hooks ini di komponen React Anda
 */

export const apiClient = {
  // Comments API
  comments: {
    getAll: async () => {
      const res = await fetch("/api/comments");
      if (!res.ok) throw new Error("Failed to fetch comments");
      return res.json();
    },

    getById: async (id: string) => {
      const res = await fetch(`/api/comments/${id}`);
      if (!res.ok) throw new Error("Failed to fetch comment");
      return res.json();
    },

    create: async (data: {
      name: string;
      message: string;
      profile_emoji: string;
    }) => {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to create comment");
      }
      return res.json();
    },

    update: async (
      id: string,
      data: Partial<{
        name: string;
        message: string;
        profile_emoji: string;
      }>
    ) => {
      const res = await fetch(`/api/comments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update comment");
      return res.json();
    },

    delete: async (id: string) => {
      const res = await fetch(`/api/comments/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete comment");
      return res.json();
    },
  },

  // Contact API
  contact: {
    getAll: async () => {
      const res = await fetch("/api/contact");
      if (!res.ok) throw new Error("Failed to fetch messages");
      return res.json();
    },

    getById: async (id: string) => {
      const res = await fetch(`/api/contact/${id}`);
      if (!res.ok) throw new Error("Failed to fetch message");
      return res.json();
    },

    create: async (data: { name: string; email: string; message: string }) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to send message");
      }
      return res.json();
    },

    update: async (
      id: string,
      data: Partial<{ name: string; email: string; message: string }>
    ) => {
      const res = await fetch(`/api/contact/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update message");
      return res.json();
    },

    delete: async (id: string) => {
      const res = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete message");
      return res.json();
    },
  },
};
