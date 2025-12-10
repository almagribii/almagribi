// app/api/comments/route.ts
import { NextResponse } from "next/server";
import { commentService } from "@/lib/services/commentService";

// GET: Ambil semua komentar
export async function GET() {
  try {
    const comments = await commentService.getAllComments();
    return NextResponse.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: "Gagal mengambil komentar" },
      { status: 500 }
    );
  }
}

// POST: Tambah komentar baru
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, message, profile_emoji } = body;

    // Validasi input
    if (!name || !message || !profile_emoji) {
      return NextResponse.json(
        {
          error: "Data tidak lengkap (name, message, profile_emoji diperlukan)",
        },
        { status: 400 }
      );
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: "Nama harus antara 2-100 karakter" },
        { status: 400 }
      );
    }

    if (message.length < 5 || message.length > 1000) {
      return NextResponse.json(
        { error: "Pesan harus antara 5-1000 karakter" },
        { status: 400 }
      );
    }

    const newComment = await commentService.createComment({
      name: name.trim(),
      message: message.trim(),
      profile_emoji,
    });

    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Gagal mengirim komentar" },
      { status: 500 }
    );
  }
}
