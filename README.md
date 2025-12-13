🚀 Gemini 2.0 Flash – Next.js API Integration Demo

This project demonstrates a clean and minimal integration of Google Gemini 2.0 Flash API using Next.js server-side API routes.
It was built as part of an interview assignment to showcase UI design, API integration, and server-side handling in Next.js.

Project Overview

The application allows users to:

  Enter a question or prompt
  Click “Ask Gemini”
  View AI-generated responses from Gemini 2.0 Flash
  Experience a clean, colorful, and interactive UI with loading states

All API calls are handled server-side using Next.js, keeping the frontend simple and responsive.

Features

Simple and intuitive UI
Colorful, modern card-based design
Loading state while waiting for API response
Neatly formatted AI responses
Server-side API call using Next.js App Router



Tech Stack

Next.js (App Router)
React
TypeScript
CSS (custom styling)
Google Gemini 2.0 Flash API



📁 Project Structure
gemini-task/
├── app/
│   ├── api/
│   │   └── ask/
│   │       └── route.ts
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── .env.local
├── package.json
├── next.config.js
└── tsconfig.json

Clone the Repository
git clone <YOUR_GITHUB_REPO_URL>


Navigate into the project:
cd gemini-task


Install Dependencies
npm install

Environment Setup
Create a .env.local file in the root directory:

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

API keys should never be exposed in client-side code.
In this project, the key is accessed only in the server-side API route.

Run the Project Locally
npm run dev
