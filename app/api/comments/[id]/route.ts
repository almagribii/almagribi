// app/api/comments/[id]/route.ts
import { NextResponse } from "next/server";
import { commentService } from "@/lib/services/commentService";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const comment = await commentService.getCommentById(id);

    if (!comment) {
      return NextResponse.json(
        { error: "Komentar tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(comment);
  } catch (error) {
    console.error("Error fetching comment:", error);
    return NextResponse.json(
      { error: "Gagal mengambil komentar" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { name, message, profile_emoji } = body;

    // Validasi minimal
    if (!name && !message && !profile_emoji) {
      return NextResponse.json(
        { error: "Minimal satu field harus diupdate" },
        { status: 400 }
      );
    }

    const updatedComment = await commentService.updateComment(id, {
      ...(name && { name: name.trim() }),
      ...(message && { message: message.trim() }),
      ...(profile_emoji && { profile_emoji }),
    });

    return NextResponse.json(updatedComment);
  } catch (error) {
    console.error("Error updating comment:", error);
    return NextResponse.json(
      { error: "Gagal mengupdate komentar" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await commentService.deleteComment(id);

    return NextResponse.json(
      { message: "Komentar berhasil dihapus" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting comment:", error);
    return NextResponse.json(
      { error: "Gagal menghapus komentar" },
      { status: 500 }
    );
  }
}
