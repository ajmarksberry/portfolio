export default function HeaderGraphic() {
  return (
    <svg
      viewBox="0 0 520 300"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 520, display: "block" }}
      aria-label="AJ Marksberry — UX Designer"
    >
      <defs>
        {/* Paper grain filter */}
        <filter id="grain" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended" />
          <feComponentTransfer in="blended">
            <feFuncA type="linear" slope="1" />
          </feComponentTransfer>
        </filter>

        {/* Aged ink texture */}
        <filter id="roughen">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      {/* Outer oval border — double line */}
      <ellipse cx="260" cy="150" rx="248" ry="138" fill="none" stroke="#8c2e1a" strokeWidth="2.5" filter="url(#roughen)" />
      <ellipse cx="260" cy="150" rx="238" ry="128" fill="none" stroke="#8c2e1a" strokeWidth="1" filter="url(#roughen)" />

      {/* Corner diamond ornaments at N/S/E/W */}
      {[
        [260, 13], [260, 287], [13, 150], [507, 150],
      ].map(([x, y], i) => (
        <polygon
          key={i}
          points={`${x},${y - 6} ${x + 5},${y} ${x},${y + 6} ${x - 5},${y}`}
          fill="#8c2e1a"
        />
      ))}

      {/* Top arc text — ESTABLISHED */}
      <path id="topArc" d="M 80,150 A 180,130 0 0,1 440,150" fill="none" />
      <text fontSize="9" fontFamily="'Inter', sans-serif" fontWeight="700" letterSpacing="6" fill="#8c2e1a" textAnchor="middle">
        <textPath href="#topArc" startOffset="50%">
          ✦  ESTABLISHED  ✦
        </textPath>
      </text>

      {/* Bottom arc text — UX DESIGNER */}
      <path id="bottomArc" d="M 85,155 A 175,125 0 0,0 435,155" fill="none" />
      <text fontSize="9" fontFamily="'Inter', sans-serif" fontWeight="700" letterSpacing="6" fill="#8c2e1a" textAnchor="middle">
        <textPath href="#bottomArc" startOffset="50%">
          ✦  UX DESIGNER  ✦
        </textPath>
      </text>

      {/* Decorative horizontal rules */}
      <line x1="120" y1="95" x2="400" y2="95" stroke="#c4aa82" strokeWidth="0.75" />
      <line x1="120" y1="205" x2="400" y2="205" stroke="#c4aa82" strokeWidth="0.75" />

      {/* "AJ" large initial */}
      <text
        x="260" y="148"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="900"
        fontSize="72"
        fill="#1c110a"
        filter="url(#roughen)"
        letterSpacing="-2"
      >
        AJ
      </text>

      {/* MARKSBERRY below */}
      <text
        x="260" y="175"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="#1e3a28"
        letterSpacing="8"
      >
        MARKSBERRY
      </text>

      {/* Small fish lure/hook ornament */}
      {/* Hook curve */}
      <path
        d="M 232,188 Q 232,198 240,198 Q 248,198 248,190"
        fill="none" stroke="#b87c2a" strokeWidth="1.5" strokeLinecap="round"
      />
      {/* Lure body */}
      <ellipse cx="232" cy="184" rx="5" ry="3" fill="#b87c2a" opacity="0.8" />
      {/* Line */}
      <line x1="232" y1="180" x2="232" y2="172" stroke="#b87c2a" strokeWidth="1" />

      {/* Divider dots */}
      <circle cx="252" cy="188" r="1.5" fill="#c4aa82" />
      <circle cx="258" cy="188" r="1.5" fill="#c4aa82" />
      <circle cx="264" cy="188" r="1.5" fill="#c4aa82" />
      <circle cx="270" cy="188" r="1.5" fill="#c4aa82" />

      {/* Small fish silhouette */}
      <g transform="translate(278,183)" fill="#b87c2a" opacity="0.85">
        {/* Body */}
        <ellipse cx="8" cy="5" rx="10" ry="5" />
        {/* Tail */}
        <polygon points="-2,0 -8,-4 -8,10" />
        {/* Eye */}
        <circle cx="14" cy="4" r="1.5" fill="#1c110a" />
      </g>

      {/* Grain overlay rect */}
      <rect x="12" y="12" width="496" height="276" fill="none" filter="url(#grain)" opacity="0.15" />
    </svg>
  );
}
