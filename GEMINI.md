# Hana David Website - Project Context

## Project Overview
This project is a **Next.js 16** application built for **Hana David**, an English teacher. It serves as a professional portfolio and service platform offering 1-on-1 virtual English lessons. The website is fully **bilingual (English & Hebrew)** and features a modern, responsive design.

### Tech Stack
*   **Framework:** Next.js 16 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4
*   **Internationalization:** `next-intl` (JSON-based content)
*   **Forms:** React Hook Form + Zod
*   **Email Service:** Resend
*   **Icons:** Lucide React
*   **Deployment:** Vercel (Target)

## Getting Started

### Prerequisites
*   Node.js (v20+ recommended)
*   npm

### Key Commands
*   **Development Server:** `npm run dev` (Runs on http://localhost:3000)
*   **Build for Production:** `npm run build`
*   **Start Production Server:** `npm run start`
*   **Linting:** `npm run lint`

## Architecture & Structure

### Directory Breakdown
*   `app/`: Contains the application source code (Next.js App Router).
    *   `[locale]/`: Root for localized routes. All pages (`page.tsx`, `about/`, etc.) reside here to support `en` and `he` locales.
    *   `api/`: Backend API routes (e.g., `send-email/`).
    *   `globals.css`: Global Tailwind styles.
*   `components/`: Reusable React components.
    *   `layout/`: Structural components like `Header`, `Footer`.
    *   `sections/`: Page-specific sections (e.g., `Hero`, `ContactForm`).
    *   `ui/`: Atomic UI elements (e.g., `Button`, `Card`, `Input`).
*   `content/`: JSON files storing text content for i18n (`en.json`, `he.json`).
*   `lib/`: Utility functions and configurations (e.g., `i18n.ts`, `resend.ts`).
*   `public/`: Static assets (images, SVGs).

### Internationalization (i18n)
*   **Routing:** The project uses dynamic routing `[locale]` to handle language selection.
*   **Content:** All text content should be extracted to `content/en.json` and `content/he.json`.
*   **Direction:** Hebrew layout is Right-to-Left (RTL). This is handled dynamically in `app/[locale]/layout.tsx` using `dir="rtl"`.
*   **Fonts:**
    *   English: **Inter**
    *   Hebrew: **Heebo**

### Design System
*   **Colors:** A "Soft Neutral Base" (Warm Cream, Pure White, Soft Black) with light accents (Pale Blue, Sage Green). defined in `tailwind.config.ts` (or implicit in utility usage).
*   **Responsive:** Mobile-first approach using Tailwind's breakpoints.

## Development Guidelines
1.  **Adding Content:** Update both `en.json` and `he.json` to ensure feature parity across languages.
2.  **Styling:** Use Tailwind utility classes. Avoid inline styles.
3.  **Components:** Favor small, reusable functional components.
4.  **Type Safety:** Strict TypeScript usage is encouraged. Define interfaces for component props.

## Important References
*   `WEBSITE_CONTENT.md`: Source of truth for all website text.
*   `WEBSITE_BUILD_PROMPT.md`: Detailed design specifications and requirements.
