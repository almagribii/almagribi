// app/api/contact/[id]/route.ts
import { NextResponse } from "next/server";
import { contactService } from "@/lib/services/contactService";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const message = await contactService.getMessageById(id);

    if (!message) {
      return NextResponse.json(
        { error: "Pesan tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(message);
  } catch (error) {
    console.error("Error fetching message:", error);
    return NextResponse.json(
      { error: "Gagal mengambil pesan" },
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
    const { name, email, message } = body;

    // Validasi minimal
    if (!name && !email && !message) {
      return NextResponse.json(
        { error: "Minimal satu field harus diupdate" },
        { status: 400 }
      );
    }

    // Validasi email jika diupdate
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: "Format email tidak valid" },
          { status: 400 }
        );
      }
    }

    const updatedMessage = await contactService.updateMessage(id, {
      ...(name && { name: name.trim() }),
      ...(email && { email: email.trim().toLowerCase() }),
      ...(message && { message: message.trim() }),
    });

    return NextResponse.json(updatedMessage);
  } catch (error) {
    console.error("Error updating message:", error);
    return NextResponse.json(
      { error: "Gagal mengupdate pesan" },
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
    await contactService.deleteMessage(id);

    return NextResponse.json(
      { message: "Pesan berhasil dihapus" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json(
      { error: "Gagal menghapus pesan" },
      { status: 500 }
    );
  }
}
