# ⚡ Quick Reference Card

## 🚀 Start Development

```bash
npm run dev
# Server running at http://localhost:3000
```

## 📡 API Endpoints Cheat Sheet

### Comments

```bash
# Get all
GET /api/comments

# Create
POST /api/comments
{ "name": "...", "message": "...", "profile_emoji": "..." }

# Get one
GET /api/comments/{id}

# Update
PUT /api/comments/{id}
{ "message": "..." }

# Delete
DELETE /api/comments/{id}
```

### Contact

```bash
# Get all
GET /api/contact

# Create
POST /api/contact
{ "name": "...", "email": "...", "message": "..." }

# Get one
GET /api/contact/{id}

# Update
PUT /api/contact/{id}

# Delete
DELETE /api/contact/{id}
```

---

## 🪝 React Hooks Usage

```tsx
import { useComments } from "@/lib/hooks/useComments";

const {
  comments, // Comment[]
  loading, // boolean
  error, // string | null
  fetchComments, // () => Promise
  addComment, // (data) => Promise
  deleteComment, // (id) => Promise
} = useComments();
```

```tsx
import { useContact } from "@/lib/hooks/useContact";

const {
  messages, // ContactMessage[]
  loading, // boolean
  error, // string | null
  fetchMessages, // () => Promise
  sendMessage, // (data) => Promise
  deleteMessage, // (id) => Promise
} = useContact();
```

---

## 🔧 Prisma Commands

```bash
# Migrate
npx prisma migrate dev --name description

# Status
npx prisma migrate status

# Reset (⚠️ drops data!)
npx prisma migrate reset

# Generate
npx prisma generate

# Studio (GUI)
npx prisma studio

# Format
npx prisma format
```

---

## 📂 File Structure Quick Guide

```
lib/
├── prisma.ts ..................... Prisma singleton
├── services/
│   ├── commentService.ts ......... Comments logic
│   └── contactService.ts ........ Contact logic
├── api/
│   ├── client.ts ................ API client
│   ├── errors.ts ................ Error classes
│   └── response.ts .............. Response helpers
└── hooks/
    ├── useComments.ts ........... Comments hook
    └── useContact.ts ............ Contact hook

app/api/
├── comments/
│   ├── route.ts ................. GET/POST all
│   └── [id]/route.ts ............ GET/PUT/DELETE one
└── contact/
    ├── route.ts ................. GET/POST all
    └── [id]/route.ts ............ GET/PUT/DELETE one
```

---

## 💾 Environment Variables

```env
# .env.local
DATABASE_URL="postgresql://user:password@localhost:5432/db"
NODE_ENV="development"
```

---

## 🧪 Test API

```bash
# Get comments
curl http://localhost:3000/api/comments

# Add comment
curl -X POST http://localhost:3000/api/comments \
  -H "Content-Type: application/json" \
  -d '{
    "name":"John",
    "message":"Great!",
    "profile_emoji":"😊"
  }'
```

---

## 🎯 Implementation Steps

### Add to Existing Component

```tsx
"use client";
import { useComments } from "@/lib/hooks/useComments";

export default function Comments() {
  const { comments, addComment } = useComments();

  // Use comments & addComment
  return (...)
}
```

### Create New Model

1. Update `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name model_name`
3. Create `lib/services/modelService.ts`
4. Create `app/api/model/route.ts`
5. Create hook in `lib/hooks/useModel.ts`

---

## 🐛 Common Issues

| Problem                | Solution                               |
| ---------------------- | -------------------------------------- |
| "DATABASE_URL not set" | Add to `.env.local`                    |
| Migration error        | Run `npx prisma migrate reset --force` |
| Port 3000 in use       | `npm run dev -- -p 3001`               |
| Prisma client error    | `npx prisma generate`                  |
| Data not persisting    | Check database connection              |

---

## 📖 Read More

- `SETUP.md` - Full setup guide
- `API_DOCS.md` - API reference
- `TIPS_TRICKS.md` - Advanced tips
- `ARCHITECTURE.md` - System overview

---

## ⌨️ Terminal Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run linter

# Database
npx prisma studio   # Open GUI
npx prisma migrate dev --name name

# Git
git add .
git commit -m "message"
git push origin main
```

---

## 🎨 Response Format

### Success

```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

### Error

```json
{
  "success": false,
  "error": "Error message"
}
```

---

## ✨ Pro Tips

- Use services layer for business logic
- Always validate input in routes
- Use hooks in components
- Enable Prisma logging in dev
- Check TIPS_TRICKS.md for best practices

---

**Happy Coding!** 🚀
