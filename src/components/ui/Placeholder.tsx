type PlaceholderProps = {
  className?: string;
  tag?: string;
  status?: "completed" | "concept";
  variant?: 1 | 2 | 3 | 4;
};

const statusStyles = {
  completed: "bg-charcoal text-ivory",
  concept: "bg-ivory text-wood-dark border border-wood-dark",
};

const statusLabel = {
  completed: "Completed",
  concept: "Design Concept",
};

function Motif({ variant = 1 }: { variant?: 1 | 2 | 3 | 4 }) {
  const stroke = "#7C5A3A";
  if (variant === 2) {
    return (
      <svg viewBox="0 0 300 400" className="absolute inset-0 h-full w-full opacity-55">
        <rect x="40" y="50" width="220" height="300" fill="none" stroke={stroke} />
        <circle cx="150" cy="150" r="50" fill="none" stroke={stroke} strokeWidth="0.5" />
      </svg>
    );
  }
  if (variant === 3) {
    return (
      <svg viewBox="0 0 300 400" className="absolute inset-0 h-full w-full opacity-55">
        <rect x="30" y="40" width="240" height="320" fill="none" stroke={stroke} />
        <line x1="30" y1="120" x2="270" y2="120" stroke={stroke} strokeWidth="0.5" />
        <line x1="30" y1="260" x2="270" y2="260" stroke={stroke} strokeWidth="0.5" />
      </svg>
    );
  }
  if (variant === 4) {
    return (
      <svg viewBox="0 0 300 400" className="absolute inset-0 h-full w-full opacity-55">
        <rect x="50" y="60" width="200" height="280" fill="none" stroke={stroke} />
        <line x1="150" y1="60" x2="150" y2="340" stroke={stroke} strokeWidth="0.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 300 400" className="absolute inset-0 h-full w-full opacity-55">
      <rect x="20" y="30" width="260" height="340" fill="none" stroke={stroke} />
      <line x1="20" y1="180" x2="280" y2="180" stroke={stroke} strokeWidth="0.5" />
    </svg>
  );
}

export default function Placeholder({ className = "", tag, status, variant = 1 }: PlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded bg-gradient-to-br from-beige to-champagne ${className}`}
    >
      <Motif variant={variant} />
      {status && (
        <span
          className={`absolute left-3.5 top-3.5 rounded px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${statusStyles[status]}`}
        >
          {statusLabel[status]}
        </span>
      )}
      {tag && (
        <span className="absolute bottom-3.5 left-3.5 rounded bg-ivory/85 px-2.5 py-1 text-[10px] uppercase tracking-wider text-wood-dark">
          {tag}
        </span>
      )}
    </div>
  );
}
