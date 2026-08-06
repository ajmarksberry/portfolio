export type Finding = {
  text: string;
  /** Renders a muted dash instead of a checkmark — for outcomes still to come. */
  pending?: boolean;
};

/** Checklist of validated outcomes at the end of a case study. */
export default function Findings({ items, label }: { items: Finding[]; label: string }) {
  return (
    <ul className="findings" aria-label={label}>
      {items.map((item) => (
        <li className="finding" key={item.text}>
          <span
            className={`finding-mark ${item.pending ? "pending" : "ok"}`}
            aria-hidden="true"
          >
            {item.pending ? "–" : "✓"}
          </span>
          {item.text}
        </li>
      ))}
    </ul>
  );
}
