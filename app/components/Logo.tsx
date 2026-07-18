export function Logo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* C monogram — open ring with accent dot terminal */}
      <path
        d="M25.5 9.5A11 11 0 1 0 25.5 22.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="25.5" cy="16" r="3" fill="rgb(var(--accent))" />
    </svg>
  );
}
