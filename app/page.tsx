"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askGemini = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        setAnswer(JSON.stringify(data, null, 2));
        return;
      }

      setAnswer(data.text);
    } catch {
      setAnswer("Something went wrong while calling Gemini.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page">
      <div className="card">
        <div className="header">
          <h1>Ask Gemini</h1>
          <p>Powered by Gemini 2.0 Flash</p>
        </div>

        <textarea
          className="input"
          placeholder="Ask anything…"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          className={`button ${loading ? "loading" : ""}`}
          onClick={askGemini}
          disabled={loading}
        >
          {loading ? "Thinking…" : "Ask Gemini"}
        </button>

        {answer && (
          <div className="response">
            <h3>Response</h3>
            <div className="response-content">{answer}</div>
          </div>
        )}
      </div>
    </main>
  );
}
