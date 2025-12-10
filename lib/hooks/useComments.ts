// lib/hooks/useComments.ts
/**
 * React Hook untuk manage Comments
 * Gunakan di komponen React Anda
 */

"use client";

import { useState, useCallback } from "react";
import { apiClient } from "@/lib/api/client";

export interface Comment {
  id: string;
  name: string;
  message: string;
  profile_emoji: string;
  created_at: string;
}

export function useComments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiClient.comments.getAll();
      setComments(data);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error fetching comments";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addComment = useCallback(
    async (data: { name: string; message: string; profile_emoji: string }) => {
      setLoading(true);
      setError(null);
      try {
        const newComment = await apiClient.comments.create(data);
        setComments((prev) => [newComment, ...prev]);
        return newComment;
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Error adding comment";
        setError(message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const deleteComment = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await apiClient.comments.delete(id);
      setComments((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error deleting comment";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    comments,
    loading,
    error,
    fetchComments,
    addComment,
    deleteComment,
  };
}
