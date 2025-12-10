// lib/hooks/useContact.ts
/**
 * React Hook untuk manage Contact Messages
 * Gunakan di komponen React Anda
 */

"use client";

import { useState, useCallback } from "react";
import { apiClient } from "@/lib/api/client";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export function useContact() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiClient.contact.getAll();
      setMessages(data);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error fetching messages";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sendMessage = useCallback(
    async (data: { name: string; email: string; message: string }) => {
      setLoading(true);
      setError(null);
      try {
        const response = await apiClient.contact.create(data);
        setMessages((prev) => [response.data, ...prev]);
        return response;
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Error sending message";
        setError(message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const deleteMessage = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await apiClient.contact.delete(id);
      setMessages((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error deleting message";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    messages,
    loading,
    error,
    fetchMessages,
    sendMessage,
    deleteMessage,
  };
}
