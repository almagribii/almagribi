# Setup Guide API dengan Next.js 16 & Prisma 7.1.0

## ✅ Checklist Setup

### 1. Prerequisites

- Node.js >= 18
- PostgreSQL database
- Git (optional)

### 2. Installation & Initial Setup

```bash
# Install dependencies
npm install

# Atau gunakan yarn/pnpm
yarn install
# atau
pnpm install
```

### 3. Database Configuration

**File: `.env.local`** (edit yang sudah ada)

```env
# Database URL - Ganti dengan PostgreSQL Anda
DATABASE_URL="postgresql://username:password@localhost:5432/almagribi"

# Environment
NODE_ENV="development"
```

### 4. Run Prisma Migration

```bash
# Jalankan migration pertama kali
npx prisma migrate dev --name init

# Atau jika ada perubahan di schema.prisma
npx prisma migrate dev --name your_migration_name
```

### 5. Generate Prisma Client

```bash
# Generate Prisma client (biasanya otomatis)
npx prisma generate
```

### 6. Start Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:3000`

---

## 📁 Project Structure

```
almagribi/
├── app/
│   ├── api/
│   │   ├── comments/
│   │   │   ├── route.ts          # GET & POST comments
│   │   │   └── [id]/
│   │   │       └── route.ts      # GET, PUT, DELETE specific comment
│   │   └── contact/
│   │       ├── route.ts          # POST contact & GET all
│   │       └── [id]/
│   │           └── route.ts      # GET, PUT, DELETE specific message
│   ├── (component)/
│   │   ├── ExampleCommentForm.tsx  # Contoh form komentar
│   │   └── ExampleContactForm.tsx  # Contoh form kontak
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── lib/
│   ├── prisma.ts                   # Prisma client singleton
│   ├── services/
│   │   ├── commentService.ts      # Business logic untuk comments
│   │   └── contactService.ts      # Business logic untuk contact
│   ├── api/
│   │   ├── client.ts              # API client untuk frontend
│   │   ├── errors.ts              # Custom error classes
│   │   └── response.ts            # Response utilities
│   ├── hooks/
│   │   ├── useComments.ts         # React hook untuk comments
│   │   └── useContact.ts          # React hook untuk contact
│   └── utils.ts
├── prisma/
│   └── schema.prisma              # Database schema
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 🚀 Quick Start: Using API

### 1. Setup Hooks di Komponen

**Contoh dengan Comments:**

```tsx
"use client";

import { useEffect } from "react";
import { useComments } from "@/lib/hooks/useComments";

export default function CommentsPage() {
  const { comments, loading, error, fetchComments, addComment } = useComments();

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>
            {comment.profile_emoji} {comment.name}
          </p>
          <p>{comment.message}</p>
        </div>
      ))}
    </div>
  );
}
```

### 2. Menggunakan API Client Langsung

```tsx
import { apiClient } from "@/lib/api/client";

// Get all comments
const comments = await apiClient.comments.getAll();

// Create comment
const newComment = await apiClient.comments.create({
  name: "John",
  message: "Great!",
  profile_emoji: "😊",
});

// Delete comment
await apiClient.comments.delete(commentId);
```

---

## 📡 API Endpoints Reference

### Comments API

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| GET    | `/api/comments`      | Ambil semua komentar    |
| POST   | `/api/comments`      | Buat komentar baru      |
| GET    | `/api/comments/[id]` | Ambil komentar spesifik |
| PUT    | `/api/comments/[id]` | Update komentar         |
| DELETE | `/api/comments/[id]` | Hapus komentar          |

### Contact API

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| GET    | `/api/contact`      | Ambil semua pesan       |
| POST   | `/api/contact`      | Kirim pesan kontak baru |
| GET    | `/api/contact/[id]` | Ambil pesan spesifik    |
| PUT    | `/api/contact/[id]` | Update pesan            |
| DELETE | `/api/contact/[id]` | Hapus pesan             |

---

## 🧪 Testing dengan cURL

```bash
# Get all comments
curl http://localhost:3000/api/comments

# Create comment
curl -X POST http://localhost:3000/api/comments \
  -H "Content-Type: application/json" \
  -d '{
    "name":"John Doe",
    "message":"Great website!",
    "profile_emoji":"😊"
  }'

# Get comment by ID
curl http://localhost:3000/api/comments/UUID_HERE

# Update comment
curl -X PUT http://localhost:3000/api/comments/UUID_HERE \
  -H "Content-Type: application/json" \
  -d '{"message":"Updated message"}'

# Delete comment
curl -X DELETE http://localhost:3000/api/comments/UUID_HERE

# Create contact message
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name":"John Doe",
    "email":"john@example.com",
    "message":"I have a question about your services"
  }'
```

---

## 🔧 Common Prisma Commands

```bash
# Lihat status migration
npx prisma migrate status

# Create new migration tanpa apply
npx prisma migrate dev --name your_migration_name --create-only

# Reset database (hapus semua data!)
npx prisma migrate reset

# Open Prisma Studio (GUI untuk manage data)
npx prisma studio

# Format schema.prisma
npx prisma format

# Generate Prisma Client
npx prisma generate
```

---

## 🔐 Environment Variables

Buat file `.env.local` di root dengan:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/almagribi"

# Environment
NODE_ENV="development"

# Optional: Logging
DEBUG="prisma:*"
```

---

## 📝 Database Schema

### Comment Table

```prisma
model Comment {
  id            String    @id @default(dbgenerated("uuid_generate_v4()"))
  name          String
  message       String
  profile_emoji String
  created_at    DateTime  @default(now())
}
```

### ContactMessage Table

```prisma
model ContactMessage {
  id        String    @id @default(dbgenerated("uuid_generate_v4()"))
  name      String
  email     String
  message   String
  created_at DateTime @default(now())
}
```

---

## ⚙️ Validasi Input

### Comments

- `name`: 2-100 karakter
- `message`: 5-1000 karakter
- `profile_emoji`: emoji valid

### Contact

- `name`: 2-100 karakter
- `email`: format email valid
- `message`: 10-2000 karakter

---

## 🐛 Troubleshooting

### 1. Migration Error

```bash
# Reset dan coba ulang
npx prisma migrate reset --force
npx prisma migrate dev --name init
```

### 2. Database Connection Error

- Pastikan PostgreSQL running
- Check DATABASE_URL di `.env.local`
- Pastikan database name sesuai

### 3. Prisma Client Error

```bash
# Regenerate client
npx prisma generate

# Clear cache
rm -rf node_modules/.prisma
npm install
```

### 4. Port 3000 Already in Use

```bash
# Gunakan port berbeda
npm run dev -- -p 3001
```

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

## ✨ Features

✅ RESTful API dengan Next.js 16
✅ Database dengan Prisma ORM
✅ PostgreSQL Integration
✅ Input Validation
✅ Error Handling
✅ React Hooks untuk frontend
✅ TypeScript Support
✅ CRUD Operations
✅ Responsive struktur

---

## 📞 Support

Untuk pertanyaan atau issues, silakan check:

- `API_DOCS.md` - Dokumentasi lengkap API
- `SETUP.md` - File ini untuk setup guide
- Example komponen di `app/(component)/Example*.tsx`

Happy coding! 🚀
