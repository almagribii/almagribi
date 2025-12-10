// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { contactService } from "@/lib/services/contactService";

// POST: Kirim pesan kontak
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validasi
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Semua field wajib diisi (name, email, message)" },
        { status: 400 }
      );
    }

    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format email tidak valid" },
        { status: 400 }
      );
    }

    // Validasi panjang text
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: "Nama harus antara 2-100 karakter" },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        { error: "Pesan harus antara 10-2000 karakter" },
        { status: 400 }
      );
    }

    const newContact = await contactService.createMessage({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    return NextResponse.json(
      { message: "Pesan berhasil dikirim", data: newContact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating contact message:", error);
    return NextResponse.json(
      { error: "Gagal mengirim pesan" },
      { status: 500 }
    );
  }
}

// GET: Ambil semua pesan kontak (opsional, untuk admin)
export async function GET() {
  try {
    // Tambahkan authorization check di sini jika diperlukan
    const messages = await contactService.getAllMessages();
    return NextResponse.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { error: "Gagal mengambil pesan" },
      { status: 500 }
    );
  }
}
