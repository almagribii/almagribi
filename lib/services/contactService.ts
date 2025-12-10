// lib/services/contactService.ts
import { prisma } from "@/lib/prisma";

export const contactService = {
  // Ambil semua pesan kontak
  async getAllMessages() {
    return await prisma.contactMessage.findMany({
      orderBy: {
        created_at: "desc",
      },
    });
  },

  // Ambil pesan berdasarkan ID
  async getMessageById(id: string) {
    return await prisma.contactMessage.findUnique({
      where: { id },
    });
  },

  // Buat pesan kontak baru
  async createMessage(data: { name: string; email: string; message: string }) {
    return await prisma.contactMessage.create({
      data,
    });
  },

  // Update pesan kontak
  async updateMessage(
    id: string,
    data: Partial<{ name: string; email: string; message: string }>
  ) {
    return await prisma.contactMessage.update({
      where: { id },
      data,
    });
  },

  // Hapus pesan kontak
  async deleteMessage(id: string) {
    return await prisma.contactMessage.delete({
      where: { id },
    });
  },
};
