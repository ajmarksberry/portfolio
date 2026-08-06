/** Divider-separated Client / Role / Platform / Year row under the deck. */
export default function ArticleMeta({ items }: { items: [string, string][] }) {
  return (
    <div className="article-meta">
      {items.map(([label, value]) => (
        <div className="article-meta-item" key={label}>
          <span className="article-meta-label">{label}</span>
          {value}
        </div>
      ))}
    </div>
  );
}
