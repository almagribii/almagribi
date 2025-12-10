# Tips & Tricks - Next.js 16 & Prisma API

## 🎯 Best Practices

### 1. Selalu Gunakan Services Layer

```typescript
// ❌ JANGAN - Direct Prisma di route
export async function POST(request: Request) {
  const data = await prisma.comment.create({ data: body });
}

// ✅ BAIK - Gunakan service
import { commentService } from "@/lib/services/commentService";
export async function POST(request: Request) {
  const data = await commentService.createComment(body);
}
```

### 2. Consistent Error Handling

```typescript
// Selalu return structured error response
return NextResponse.json(
  { success: false, error: "message" },
  { status: statusCode }
);
```

### 3. Input Validation

```typescript
// Validasi di API route sebelum masuk service
if (!email || !emailRegex.test(email)) {
  return NextResponse.json({ error: "Invalid email" }, { status: 400 });
}
```

### 4. Environment Variables

```bash
# SELALU gunakan .env.local untuk sensitive data
DATABASE_URL="..."
API_SECRET="..."
```

---

## 🚀 Performance Tips

### 1. Optimize Queries

```typescript
// ✅ BAIK - Hanya ambil field yang dibutuhkan
await prisma.comment.findMany({
  select: { id: true, name: true, message: true },
});

// ❌ KURANG EFISIEN - Ambil semua field
await prisma.comment.findMany();
```

### 2. Pagination untuk Large Datasets

```typescript
// Untuk banyak data, gunakan pagination
await prisma.comment.findMany({
  skip: (page - 1) * limit,
  take: limit,
  orderBy: { created_at: "desc" },
});
```

### 3. Index Database

```prisma
// Di schema.prisma, tambahkan index untuk field sering di-query
model Comment {
  id String @id @default(dbgenerated("uuid_generate_v4()"))
  email String @unique  // Auto-indexed jika @unique
  created_at DateTime @default(now())

  @@index([created_at])  // Manual index
}
```

---

## 🔒 Security Tips

### 1. Validate & Sanitize Input

```typescript
// Trim whitespace
const name = body.name.trim();

// Check length
if (message.length > 2000) {
  return NextResponse.json({ error: "Too long" }, { status: 400 });
}

// Escape special chars jika perlu
```

### 2. Use CORS Headers (jika API untuk external)

```typescript
const headers = new Headers({
  "Access-Control-Allow-Origin": "https://yourdomain.com",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Content-Type": "application/json",
});

return NextResponse.json(data, { headers });
```

### 3. Rate Limiting (Install library)

```bash
npm install next-rate-limit
```

### 4. Never Log Sensitive Data

```typescript
// ❌ JANGAN
console.log("Password:", user.password);

// ✅ BAIK
console.log("User created:", user.id);
```

---

## 📦 Adding New Models

### Step 1: Update Prisma Schema

```prisma
// prisma/schema.prisma
model Article {
  id        String    @id @default(dbgenerated("uuid_generate_v4()"))
  title     String
  content   String
  author    String
  created_at DateTime @default(now())
}
```

### Step 2: Create Migration

```bash
npx prisma migrate dev --name add_article_model
```

### Step 3: Create Service

```typescript
// lib/services/articleService.ts
import { prisma } from "@/lib/prisma";

export const articleService = {
  async getAllArticles() {
    return await prisma.article.findMany({
      orderBy: { created_at: "desc" },
    });
  },
  // ... other methods
};
```

### Step 4: Create API Routes

```typescript
// app/api/articles/route.ts
import { articleService } from "@/lib/services/articleService";

export async function GET() {
  try {
    const articles = await articleService.getAllArticles();
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json({ error: "..." }, { status: 500 });
  }
}
```

---

## 🧪 Testing Tips

### 1. Unit Test dengan Vitest

```bash
npm install -D vitest
```

```typescript
import { describe, it, expect } from "vitest";
import { commentService } from "@/lib/services/commentService";

describe("commentService", () => {
  it("should create comment", async () => {
    const comment = await commentService.createComment({
      name: "Test",
      message: "Test message",
      profile_emoji: "😊",
    });
    expect(comment).toBeDefined();
    expect(comment.name).toBe("Test");
  });
});
```

### 2. Integration Test dengan Postman

- Import endpoints ke Postman
- Create test scripts
- Automate testing

### 3. Test di Local

```bash
# Clear database
npx prisma migrate reset

# Run tests
npm run test

# Check coverage
npm run test:coverage
```

---

## 🔄 Updating Existing Data

### Safe Update Pattern

```typescript
export async function updateComment(id: string, data: any) {
  // 1. Validate input
  if (!id || !data) throw new Error("Invalid input");

  // 2. Check existence
  const existing = await prisma.comment.findUnique({ where: { id } });
  if (!existing) throw new Error("Not found");

  // 3. Update dengan hanya field yang diizinkan
  return await prisma.comment.update({
    where: { id },
    data: {
      name: data.name ?? existing.name,
      message: data.message ?? existing.message,
      // Don't allow updating created_at
    },
  });
}
```

---

## 📊 Monitoring & Logging

### 1. Enable Prisma Logging

```typescript
// lib/prisma.ts
new PrismaClient({
  log: [
    { emit: "stdout", level: "info" },
    { emit: "stdout", level: "error" },
    { emit: "stdout", level: "warn" },
  ],
});
```

### 2. Log API Requests

```typescript
// Middleware untuk log requests
export async function middleware(request: Request) {
  console.log(`${request.method} ${new URL(request.url).pathname}`);
  return NextResponse.next();
}
```

### 3. Error Tracking

```bash
npm install sentry-sdk  # atau error tracking service lain
```

---

## 🚀 Deployment Tips

### Vercel Deployment

```bash
# Push ke GitHub dulu
git push origin main

# Deploy di Vercel
# - Connect GitHub repo
# - Set environment variables di Vercel dashboard
# - Deploy!
```

### Environment Variables di Production

```env
DATABASE_URL="..."
NODE_ENV="production"
NEXT_PUBLIC_API_URL="https://yourdomain.com"
```

### Database Backup

```bash
# Backup PostgreSQL
pg_dump dbname > backup.sql

# Restore
psql dbname < backup.sql
```

---

## 📈 Scaling Tips

### 1. Caching

```typescript
// Implementasi caching
import { cache } from "react";

const getCachedComments = cache(async () => {
  return await prisma.comment.findMany();
});
```

### 2. Database Connection Pooling

```env
DATABASE_URL="postgresql://...?schema=public&connection_limit=5"
```

### 3. API Rate Limiting

```typescript
// Implementasi rate limit
const rateLimit = (maxRequests: number, windowMs: number) => {
  // Implementation
};
```

---

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs/)
- [PostgreSQL Tutorial](https://www.postgresql.org/docs/tutorial/)
- [REST API Best Practices](https://restfulapi.net/)

---

## ❓ FAQ

### Q: Bagaimana reset password user?

A: Implement endpoint terpisah dengan proper validation:

```typescript
export async function POST(request: Request) {
  const { email, newPassword } = await request.json();
  // Hash password
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  // Update user
  await prisma.user.update({
    where: { email },
    data: { password: hashedPassword },
  });
}
```

### Q: Bagaimana handle file uploads?

A: Gunakan FormData dan library seperti `multer`:

```typescript
// Perlu setup khusus untuk file uploads
// Recommend: AWS S3 atau Cloudinary
```

### Q: Bagaimana setup authentication?

A: Gunakan `next-auth`:

```bash
npm install next-auth
```

---

Stay awesome! 🎉
