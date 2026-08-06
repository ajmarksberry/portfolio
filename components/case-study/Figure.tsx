import Image from "next/image";

type FigureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /** Break out of the 680px reading column for wide screenshots. */
  breakout?: boolean;
  /** Constrain to a narrow centred column — for tall device mockups. */
  device?: boolean;
};

/** Screenshot with optional caption. */
export default function Figure({ src, alt, width, height, caption, breakout, device }: FigureProps) {
  const className = breakout ? "img-breakout" : device ? "img-wrap img-device" : "img-wrap";
  return (
    <figure
      className={className}
      /* Never render a breakout wider than the source, or it upscales and goes soft.
         Effective width becomes min(1120px, 92vw, natural width). */
      style={breakout ? { maxWidth: `${width}px` } : undefined}
    >
      <Image src={src} alt={alt} width={width} height={height} />
      {caption && <figcaption className="img-caption">{caption}</figcaption>}
    </figure>
  );
}

/** Dashed placeholder standing in for artwork that hasn't been supplied yet. */
export function PlaceholderFigure({
  label,
  description,
  caption,
}: {
  label: string;
  /** Describes what the finished image will show, for assistive tech. */
  description: string;
  caption?: string;
}) {
  return (
    <figure className="img-wrap">
      <div className="img-ph" role="img" aria-label={description}>
        {label}
      </div>
      {caption && <figcaption className="img-caption">{caption}</figcaption>}
    </figure>
  );
}
