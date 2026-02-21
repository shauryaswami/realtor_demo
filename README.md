# Real Estate India - Production Setup

## Overview
A premium luxury real estate platform built with **Next.js 16**, **Prisma**, **Supabase (PostgreSQL)**, and **NextAuth.js**.

---

## 🚀 Quick Start (Local Development)

### 1. Clone the Repository
```bash
git clone https://github.com/shauryaswami/realtor_demo.git
cd realtor_demo
npm install
```

### 2. Set Up Supabase Database

1. Go to [supabase.com](https://supabase.com) and create a **free** project.
2. Once your project is ready, navigate to **Project Settings → Database → Connection String**.
3. Copy:
   - **Connection Pooling (Transaction mode)** → this is your `DATABASE_URL`
   - **Direct connection** → this is your `DIRECT_URL`
2. Next, navigate to **Project Settings → API**.
3. Copy:
   - **Project URL** → this is your `NEXT_PUBLIC_SUPABASE_URL`
   - **service_role (secret) key** → this is your `SUPABASE_SERVICE_ROLE_KEY`

### 3. Set Up Supabase Storage
1. In the Supabase sidebar, click on **Storage**.
2. Click **New bucket**.
3. Name it `properties`.
4. Set the toggle for **Public bucket** to ON.
5. Click **Create**.

### 3. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your Supabase URLs:
```bash
cp .env.example .env
```

Edit `.env`:
```env
DATABASE_URL="postgresql://postgres.[project-ref]:[password]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.[project-ref]:[password]@aws-0-ap-south-1.pooler.supabase.com:5432/postgres"
AUTH_SECRET="your-random-secret-at-least-32-chars"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
```

### 4. Initialize the Database
```bash
npx prisma db push
npx prisma db seed
```

### 5. Run Locally
```bash
npm run dev
```

---

## ☁️ Deploy to Vercel

### 1. Import Project on Vercel
Go to [vercel.com](https://vercel.com) → **New Project** → Import `realtor_demo`.

### 2. Add Environment Variables in Vercel Dashboard
Go to **Project Settings → Environment Variables** and add:

| Variable | Value |
|---|---|
| `DATABASE_URL` | Your Supabase pooled connection URL |
| `DIRECT_URL` | Your Supabase direct connection URL |
| `AUTH_SECRET` | A random 32+ character secret |
| `NEXTAUTH_URL` | Your Vercel deployment URL (e.g. `https://realtor-demo.vercel.app`) |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase Service Role Key |

### 3. Deploy
Vercel will automatically run `prisma generate && next build`.

### 4. Seed the Production Database (First Time Only)
After setting up, run once locally pointing to production DB:
```bash
DATABASE_URL="..." DIRECT_URL="..." npx prisma db push
DATABASE_URL="..." DIRECT_URL="..." npx prisma db seed
```

---

## 🔐 Admin Panel

Default credentials (set in `prisma/seed.ts`):
- **URL**: `/admin`
- **Email**: `admin@swamihealing.com`
- **Password**: `admin123`

> **Important**: Change the password after first login!

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: Supabase (PostgreSQL) via Prisma ORM
- **Authentication**: NextAuth.js v5
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Deployment**: Vercel
