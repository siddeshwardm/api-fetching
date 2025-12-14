# Gemini 2.0 Flash – Next.js API Integration Demo

A clean and minimal web application demonstrating server-side integration of **Google Gemini 2.0 Flash API** using **Next.js App Router**.

This project was built as part of an interview assignment to showcase **UI design**, **API integration**, and **secure server-side handling** in Next.js.

---

## Overview

The Gemini 2.0 Flash Demo allows users to:
- Enter a question or prompt
- Click **“Ask Gemini”**
- Receive AI-generated responses from **Gemini 2.0 Flash**
- Experience a clean, colorful, and interactive UI with loading states

All AI requests are handled **server-side** via Next.js API routes, ensuring API keys remain secure and frontend performance stays optimal.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Frontend:** React + TypeScript
- **Styling:** Custom CSS
- **AI API:** Google Gemini 2.0 Flash
- **Server-side:** Next.js API Routes

---

## Features

### UI & UX
- Simple and intuitive prompt input
- Colorful, modern card-based design
- Responsive layout
- Loading indicator while waiting for AI response
- Neatly formatted AI-generated output

### API Integration
- Server-side API call using Next.js App Router
- Secure handling of Gemini API key
- Clean request/response flow
- Proper error handling and validation

---

## Project Structure

```text
gemini-task/
├── app/
│   ├── api/
│   │   └── ask/
│   │       └── route.ts        # Server-side Gemini API integration
│   ├── page.tsx               # Main UI page
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles
├── .env.local                 # Environment variables
├── package.json               # Project dependencies and scripts
├── next.config.js             # Next.js configuration
└── tsconfig.json              # TypeScript configuration










