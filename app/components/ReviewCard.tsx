import React from "react";

interface ReviewCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export function ReviewCard({ name, role, company, quote }: ReviewCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-border-primary bg-bg-primary p-6">
      <blockquote className="flex-1 text-text-secondary leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-3 border-t border-border-primary pt-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-semibold text-sm flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-text-primary">{name}</p>
          <p className="text-sm text-text-secondary">
            {role}{company ? `, ${company}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
