// lib/services/commentService.ts
import { prisma } from "@/lib/prisma";

export const commentService = {
  // Ambil semua komentar
  async getAllComments() {
    return await prisma.comment.findMany({
      orderBy: {
        created_at: "desc",
      },
    });
  },

  // Ambil komentar berdasarkan ID
  async getCommentById(id: string) {
    return await prisma.comment.findUnique({
      where: { id },
    });
  },

  // Buat komentar baru
  async createComment(data: {
    name: string;
    message: string;
    profile_emoji: string;
  }) {
    return await prisma.comment.create({
      data,
    });
  },

  // Update komentar
  async updateComment(
    id: string,
    data: Partial<{ name: string; message: string; profile_emoji: string }>
  ) {
    return await prisma.comment.update({
      where: { id },
      data,
    });
  },

  // Hapus komentar
  async deleteComment(id: string) {
    return await prisma.comment.delete({
      where: { id },
    });
  },
};
