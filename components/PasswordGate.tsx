"use client";

import { useState, useEffect, useRef } from "react";

const SESSION_KEY = "portfolio_unlocked";
// Change this password as needed
const PASSWORD = "taap25";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      setUnlocked(true);
    }
    setChecked(true);
  }, []);

  useEffect(() => {
    if (checked && !unlocked) {
      inputRef.current?.focus();
    }
  }, [checked, unlocked]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
      inputRef.current?.focus();
    }
  };

  if (!checked) return null;
  if (unlocked) return <>{children}</>;

  return (
    <div
      style={{ maxWidth: 480, margin: "0 auto", padding: "96px 24px" }}
      role="main"
      aria-label="Password protected content"
    >
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--faint)", marginBottom: 24 }}>
        Protected Case Study
      </p>
      <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 700, color: "var(--ink)", marginBottom: 16 }}>
        Password required
      </h1>
      <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: "1.6", marginBottom: 40 }}>
        This case study is available upon request. Enter the password to view it, or{" "}
        <a href="mailto:ajmarksberry@gmail.com" style={{ color: "var(--ink)", fontWeight: 500 }}>
          contact me
        </a>{" "}
        for access.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <label
          htmlFor="password-input"
          style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--ink)", marginBottom: 8 }}
        >
          Password
        </label>
        <div style={{ display: "flex", gap: 12 }}>
          <input
            ref={inputRef}
            id="password-input"
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            autoComplete="current-password"
            aria-describedby={error ? "password-error" : undefined}
            aria-invalid={error}
            style={{
              flex: 1,
              fontSize: 15,
              padding: "10px 14px",
              border: `1px solid ${error ? "#cc0000" : "var(--rule)"}`,
              borderRadius: 4,
              outline: "none",
              background: "#fff",
              color: "var(--ink)",
              fontFamily: "inherit",
            }}
          />
          <button
            type="submit"
            style={{
              fontSize: 14,
              fontWeight: 600,
              padding: "10px 20px",
              background: "var(--ink)",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
              fontFamily: "inherit",
              whiteSpace: "nowrap",
            }}
          >
            Unlock
          </button>
        </div>
        {error && (
          <p
            id="password-error"
            role="alert"
            style={{ marginTop: 10, fontSize: 13, color: "#cc0000" }}
          >
            Incorrect password. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
