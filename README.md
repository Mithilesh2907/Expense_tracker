# Expense Tracker

## Overview
Expense Tracker is a React-based personal finance dashboard that lets authenticated users record and review income/expense transactions. The app uses Supabase for authentication and data storage, and focuses on a clean, dark UI with fast navigation between Home (dashboard), Transactions (table view), and Reports (analytics).

## Technical Architecture
The project is currently a frontend-first application backed by Supabase. The UI is built with React + Vite and communicates directly with Supabase from the browser using the Supabase JavaScript client. Routing is handled with `react-router-dom`, and authentication state is stored in a React context to enable protected routes and a shared session across pages.

### Frontend Interface
- Framework: React (Vite)
- Styling: Tailwind CSS (dark theme)
- Navigation: React Router with protected routes and a shared layout (sidebar + main content)
- UI modules: reusable components for recent expenses, filters, transaction list/table, and reporting widgets
- Charts: Recharts (used for dashboard/report visualizations)

### Backend Infrastructure
- Platform: Supabase
- Auth: email/password signup and login, session management via Supabase auth events
- Database: `expenses` table accessed from the frontend using Supabase queries
- Environment configuration: Vite environment variables (for example `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`)

## Core Features
- Email/password authentication (signup, login, session persistence)
- Protected pages that redirect unauthenticated users to `/login`
- Create and fetch expenses tied to the authenticated user (`user_id`)
- Dashboard widgets: recent expenses and a monthly report view
- Transactions page: full list of records with basic filtering UI and an “Add Transaction” entry point
- Reports page: analytics UI with export actions stubbed (PDF/CSV)
- Docker-based dev startup for the frontend (optional)

## Local Development Setup

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd expense_tracker
```

### 2. Backend Initialization
1. Create a Supabase project.
2. Create a table named `expenses` with fields that match the app’s inserts/queries (for example: `user_id`, `amount`, `type`, `category`, `note`, `date`, plus timestamps like `created_at`).
3. Configure Row Level Security (RLS) so users can only access their own rows (recommended).
4. Copy your project URL and anon key.

### 3. Frontend Initialization
From the `frontend` directory, create a `.env` file with:
```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Run the app:
```bash
cd frontend
npm install
npm run dev
```

Optional Docker dev:
```bash
cd frontend
docker build -t expense-tracker-frontend .
docker run --rm -p 5173:5173 expense-tracker-frontend
```

## System Constraints & Future Scalability
Because the current architecture is client-to-Supabase, most security and scalability depends on correct Supabase policies, indexes, and query patterns. As the product grows, consider adding a dedicated backend layer (API/serverless functions) for advanced validations, exports, scheduled jobs, and integrations; expanding reporting to be fully data-driven (instead of sample datasets); and introducing stronger state/data patterns (for example Redux Toolkit usage) for caching, pagination, and offline-friendly UX.
