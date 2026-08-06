/** Author byline. `meta` carries the role · client · year · read-time line. */
export default function Byline({ meta }: { meta: string }) {
  return (
    <div className="byline">
      <div className="byline-avatar" aria-hidden="true">AJ</div>
      <div>
        <p className="byline-name">AJ Marksberry</p>
        <p className="byline-meta">{meta}</p>
      </div>
    </div>
  );
}
