# API Documentation

## Setup Awal

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Database

Ganti `DATABASE_URL` di file `.env.local` dengan connection string PostgreSQL Anda:

```
DATABASE_URL="postgresql://username:password@localhost:5432/almagribi"
```

### 3. Jalankan Prisma Migration

```bash
npx prisma migrate dev --name init
```

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Jalankan Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:3000`

---

## API Endpoints

### 1. Comments API

#### GET /api/comments

Mengambil semua komentar yang telah disimpan.

**Response:**

```json
[
  {
    "id": "uuid",
    "name": "John Doe",
    "message": "Great website!",
    "profile_emoji": "😊",
    "created_at": "2025-12-11T10:30:00Z"
  }
]
```

#### POST /api/comments

Menambahkan komentar baru.

**Request Body:**

```json
{
  "name": "John Doe",
  "message": "Great website!",
  "profile_emoji": "😊"
}
```

**Response:**

```json
{
  "id": "uuid",
  "name": "John Doe",
  "message": "Great website!",
  "profile_emoji": "😊",
  "created_at": "2025-12-11T10:30:00Z"
}
```

---

### 2. Contact API

#### POST /api/contact

Mengirim pesan kontak.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I have a question about your services"
}
```

**Response:**

```json
{
  "message": "Pesan berhasil dikirim",
  "data": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I have a question about your services",
    "created_at": "2025-12-11T10:30:00Z"
  }
}
```

---

## Testing dengan cURL

### Test Comments GET

```bash
curl http://localhost:3000/api/comments
```

### Test Comments POST

```bash
curl -X POST http://localhost:3000/api/comments \
  -H "Content-Type: application/json" \
  -d '{"name":"John","message":"Great!","profile_emoji":"😊"}'
```

### Test Contact POST

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","message":"Hello"}'
```

---

## Structure Database

### Comment Table

- `id` (UUID, Primary Key)
- `name` (String)
- `message` (String)
- `profile_emoji` (String)
- `created_at` (DateTime)

### ContactMessage Table

- `id` (UUID, Primary Key)
- `name` (String)
- `email` (String)
- `message` (String)
- `created_at` (DateTime)

---

## Useful Commands

```bash
# Jalankan Prisma Studio untuk manage data
npx prisma studio

# Jalankan migration
npx prisma migrate dev

# Reset database
npx prisma migrate reset

# Generate Prisma Client
npx prisma generate
```

## Environment Variables

Buat file `.env.local` di root project:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/almagribi"
NODE_ENV="development"
```

---

## Notes

- API menggunakan PostgreSQL sebagai database
- Semua ID menggunakan UUID v4
- Timestamp otomatis menggunakan `now()`
- Komentar diurutkan dari yang terbaru
