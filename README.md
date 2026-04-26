# The Wild Oasis

A full-stack cabin booking platform where guests can browse, reserve, and manage stays at luxury cabins in the Italian Dolomites.

**Live Demo:** _coming soon_

---

## Screenshots

![Home](./screenshots/home.png)
![Cabins](./screenshots/cabins.png)
![Cabin Detail](./screenshots/cabin-detail.png)
![Reservations](./screenshots/reservations.png)

---

## Tech Stack

| Layer         | Technology                 |
| ------------- | -------------------------- |
| Framework     | Next.js 16 (App Router)    |
| Language      | TypeScript                 |
| Styling       | Tailwind CSS v4            |
| UI Components | shadcn/ui + Radix UI       |
| Database      | Supabase (PostgreSQL)      |
| Auth          | Better Auth (Google OAuth) |
| ORM           | Supabase JS + raw `pg`     |
| Forms         | React Hook Form + Zod      |
| Date Handling | date-fns, react-day-picker |

---

## Features

- Browse luxury cabins with filtering by guest capacity
- View cabin details, pricing, and availability calendar
- Google OAuth sign-in via Better Auth
- Guest profile auto-created on first sign-in
- Book cabins with date range selection
- Manage reservations — view, edit, and delete bookings
- Reservation reminder banner for selected dates
- Protected guest area with account dashboard

---

## Project Structure

```
app/
├── _components/        # Shared UI components
├── about/              # About page
├── account/            # Protected guest area (reservations, profile)
├── api/                # Route handlers
├── cabins/             # Cabin listing and detail pages
├── lib/                # App-level utilities
└── login/              # Login page
lib/                    # Data fetching, Supabase client, auth helpers
types/                  # Shared TypeScript types
components/             # shadcn/ui components
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Supabase project
- Google OAuth credentials

### Environment Variables

Create a `.env.local` file:

```env
DATABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
```

### Install & Run

```bash
npm install
npm run dev
```

For local-only network binding:

```bash
npm run temp_dev
```

### Build & Start

```bash
npm run prod
```

---

## Auth Flow

Authentication is handled by [Better Auth](https://better-auth.com) with Google OAuth. On first sign-in, a guest profile is automatically created in the `guests` table via a `databaseHooks` callback, linked to the Better Auth user by `userId`.

---

## Database

The app uses two database connections:

- **Supabase JS client** — for standard data operations (cabins, bookings, settings)
- **`pg` (raw PostgreSQL pool)** — used by Better Auth for session and user management
