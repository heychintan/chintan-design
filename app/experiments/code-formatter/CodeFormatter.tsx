"use client";

import { useState } from "react";

type Action = "format-json" | "minify-json" | "json-to-ts" | "format-html";

function jsonToTs(value: unknown, name = "Root"): string {
  const interfaces: string[] = [];
  const seen = new Map<string, string>();

  const typeOf = (v: unknown, hint: string): string => {
    if (v === null) return "null";
    if (Array.isArray(v)) {
      if (v.length === 0) return "unknown[]";
      const inner = typeOf(v[0], hint);
      return `${inner}[]`;
    }
    switch (typeof v) {
      case "string":
        return "string";
      case "number":
        return "number";
      case "boolean":
        return "boolean";
      case "object": {
        const iface = hint.charAt(0).toUpperCase() + hint.slice(1);
        const body = Object.entries(v as Record<string, unknown>)
          .map(([k, val]) => {
            const safeKey = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k)
              ? k
              : JSON.stringify(k);
            return `  ${safeKey}: ${typeOf(val, k.replace(/s$/, ""))};`;
          })
          .join("\n");
        const def = `interface ${iface} {\n${body}\n}`;
        if (!seen.has(iface)) {
          seen.set(iface, def);
          interfaces.push(def);
        }
        return iface;
      }
      default:
        return "unknown";
    }
  };

  const rootType = typeOf(value, name);
  if (rootType !== name && interfaces.length === 0) {
    return `type ${name} = ${rootType};`;
  }
  return interfaces.reverse().join("\n\n");
}

function formatHtml(html: string): string {
  const tokens = html
    .replace(/>\s+</g, "><")
    .replace(/</g, "\n<")
    .split("\n")
    .map((t) => t.trim())
    .filter(Boolean);
  const voidTags =
    /^<(area|base|br|col|embed|hr|img|input|link|meta|source|track|wbr)(\s|\/?>)/i;
  let depth = 0;
  const out: string[] = [];
  for (const token of tokens) {
    if (/^<\//.test(token)) depth = Math.max(0, depth - 1);
    out.push("  ".repeat(depth) + token);
    if (
      /^<[A-Za-z]/.test(token) &&
      !/\/>$/.test(token) &&
      !voidTags.test(token) &&
      !/<\/[A-Za-z][^>]*>$/.test(token) &&
      !/^<!/.test(token)
    ) {
      depth += 1;
    }
  }
  return out.join("\n");
}

export function CodeFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const run = (action: Action) => {
    setError(null);
    setCopied(false);
    try {
      switch (action) {
        case "format-json":
          setOutput(JSON.stringify(JSON.parse(input), null, 2));
          break;
        case "minify-json":
          setOutput(JSON.stringify(JSON.parse(input)));
          break;
        case "json-to-ts":
          setOutput(jsonToTs(JSON.parse(input)));
          break;
        case "format-html":
          setOutput(formatHtml(input));
          break;
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not parse input");
      setOutput("");
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // clipboard unavailable — output is selectable
    }
  };

  const actions: { id: Action; label: string }[] = [
    { id: "format-json", label: "Format JSON" },
    { id: "minify-json", label: "Minify JSON" },
    { id: "json-to-ts", label: "JSON → TS" },
    { id: "format-html", label: "Format HTML" },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-4">
      <div className="flex flex-wrap justify-center gap-2">
        {actions.map((a) => (
          <button
            key={a.id}
            onClick={() => run(a.id)}
            className="rounded-full border border-border-primary px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-indigo-500/50 hover:text-indigo-600"
          >
            {a.label}
          </button>
        ))}
      </div>

      {error && (
        <p className="text-center font-mono text-sm text-rose-600">{error}</p>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Paste JSON or HTML here… e.g. {"name":"Chintan","tools":["Next.js","Astro"]}'
          spellCheck={false}
          className="h-[420px] w-full resize-none rounded-2xl border border-border-primary bg-white p-4 font-mono text-xs leading-5 text-text-primary outline-none transition-colors focus:border-indigo-500/50"
        />
        <div className="relative">
          <textarea
            value={output}
            readOnly
            placeholder="Output appears here"
            spellCheck={false}
            className="h-[420px] w-full resize-none rounded-2xl border border-border-primary bg-bg-primary p-4 font-mono text-xs leading-5 text-text-primary outline-none"
          />
          {output && (
            <button
              onClick={copy}
              className="absolute right-3 top-3 rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
