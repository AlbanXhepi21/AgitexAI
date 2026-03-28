"use client";

import { useEffect, useRef, useState } from "react";

const LINES = [
  { html: '<span class="text-[var(--text-tertiary)]"># Deploy an AI agent in minutes</span>' },
  { html: "" },
  {
    html: '<span class="text-purple-300">from</span> pydantic_ai <span class="text-purple-300">import</span> Agent',
  },
  {
    html: '<span class="text-purple-300">from</span> agitex <span class="text-purple-300">import</span> RAGPipeline',
  },
  { html: "" },
  { html: "agent = Agent(" },
  { html: '  <span class="text-amber-200">"openai:gpt-4o"</span>,' },
  { html: "  tools=[rag.search, db.query]," },
  {
    html: '  system_prompt=<span class="text-amber-200">"You are a helpful support agent…"</span>',
  },
  { html: ")" },
  { html: "" },
  { html: '<span class="text-[var(--accent-bright)]">$ agitex deploy --prod</span>' },
  { html: '<span class="text-[var(--text-tertiary)]">✓ Agent deployed to production</span>' },
  { html: '<span class="text-[var(--text-tertiary)]">✓ Monitoring enabled</span>' },
];

export function HeroTerminal({ className = "" }: { className?: string }) {
  const [lineIndex, setLineIndex] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const t = window.setTimeout(() => {
      const tick = (i: number) => {
        if (i < LINES.length) {
          setLineIndex(i + 1);
          window.setTimeout(() => tick(i + 1), 140 + Math.random() * 100);
        }
      };
      tick(0);
    }, 1200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div
      className={`rounded-xl border border-[var(--border-hover)] bg-[var(--navy)] overflow-hidden shadow-accent-soft ${className}`}
    >
      <div className="flex gap-1.5 px-4 py-3 border-b border-[var(--border)] bg-[var(--navy-light)]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
      </div>
      <div
        className="p-4 font-mono text-xs leading-[1.8] text-[var(--text-secondary)] min-h-[220px]"
        aria-hidden
      >
        {LINES.slice(0, lineIndex).map((line, i) => (
          <div
            key={i}
            className="terminal-line opacity-0 animate-[fade-in_0.3s_ease_forwards]"
            dangerouslySetInnerHTML={{
              __html: line.html || "&nbsp;",
            }}
          />
        ))}
      </div>
    </div>
  );
}
