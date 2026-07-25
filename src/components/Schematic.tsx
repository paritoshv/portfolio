export type SchematicKind = "pipeline" | "fanout" | "rag";

const stroke = "var(--color-faint)";
const strokeSoft = "var(--color-border)";
const accent = "var(--color-accent)";
const label = {
  fontFamily: "var(--font-mono)",
  fontSize: 8.5,
  letterSpacing: "0.08em",
  fill: "var(--color-faint)",
} as const;

function Node({
  x,
  y,
  w = 62,
  h = 26,
  text,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  text: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={6}
        fill="var(--color-surface-2)"
        stroke={stroke}
        strokeWidth={1}
      />
      <text x={x + w / 2} y={y + h / 2 + 3} textAnchor="middle" style={label}>
        {text}
      </text>
    </g>
  );
}

function Pipeline() {
  return (
    <>
      <Node x={14} y={62} text="generate" />
      {/* validation gate */}
      <polygon
        points="150,50 174,75 150,100 126,75"
        fill="var(--color-surface-2)"
        stroke={stroke}
        strokeWidth={1}
      />
      <text x={150} y={78} textAnchor="middle" style={label}>
        gate
      </text>
      <Node x={224} y={62} text="persist" />
      <path d="M 76 75 H 122" stroke={stroke} strokeWidth={1} />
      <path d="M 178 75 H 220" stroke={stroke} strokeWidth={1} />
      <path d="M 118 71.5 122 75 118 78.5" fill="none" stroke={stroke} strokeWidth={1} />
      <path d="M 216 71.5 220 75 216 78.5" fill="none" stroke={stroke} strokeWidth={1} />
      {/* retry loop back to generate */}
      <path
        d="M 150 46 C 150 16, 55 14, 46 56"
        fill="none"
        stroke={accent}
        strokeWidth={1}
        strokeDasharray="3 4"
        opacity={0.8}
      />
      <path d="M 43 49 46 57 53 52" fill="none" stroke={accent} strokeWidth={1} opacity={0.8} />
      <text x={106} y={22} textAnchor="middle" style={{ ...label, fill: accent }}>
        retry
      </text>
      <circle cx={150} cy={75} r={3} fill={accent} className="animate-pulse motion-reduce:animate-none" />
    </>
  );
}

const MODELS = ["chatgpt", "claude", "gemini", "grok"];

function Fanout() {
  return (
    <>
      <Node x={14} y={62} w={58} text="prompt" />
      {MODELS.map((m, i) => {
        const y = 12 + i * 34;
        const isAccent = m === "claude";
        return (
          <g key={m}>
            <path
              d={`M 72 75 C 130 75, 150 ${y + 11}, 212 ${y + 11}`}
              fill="none"
              stroke={isAccent ? accent : strokeSoft}
              strokeWidth={1}
              opacity={isAccent ? 0.85 : 1}
            />
            <rect
              x={212}
              y={y}
              width={74}
              height={22}
              rx={6}
              fill="var(--color-surface-2)"
              stroke={isAccent ? accent : stroke}
              strokeWidth={1}
              opacity={isAccent ? 0.9 : 1}
            />
            <text x={249} y={y + 14} textAnchor="middle" style={label}>
              {m}
            </text>
          </g>
        );
      })}
      <circle cx={72} cy={75} r={3} fill={accent} className="animate-pulse motion-reduce:animate-none" />
    </>
  );
}

function Rag() {
  return (
    <>
      <Node x={14} y={62} w={54} text="query" />
      {[30, 66, 102].map((y, i) => (
        <g key={y}>
          <path
            d={`M 68 75 C 96 75, 100 ${y + 9}, 122 ${y + 9}`}
            fill="none"
            stroke={strokeSoft}
            strokeWidth={1}
          />
          <rect
            x={122}
            y={y}
            width={48}
            height={18}
            rx={4}
            fill="var(--color-surface-2)"
            stroke={stroke}
            strokeWidth={1}
          />
          <line x1={130} y1={y + 6.5} x2={162} y2={y + 6.5} stroke={strokeSoft} strokeWidth={1} />
          <line x1={130} y1={y + 11.5} x2={152} y2={y + 11.5} stroke={strokeSoft} strokeWidth={1} />
          <path
            d={`M 170 ${y + 9} C 196 ${y + 9}, 200 75, 224 75`}
            fill="none"
            stroke={i === 1 ? accent : strokeSoft}
            strokeWidth={1}
            opacity={i === 1 ? 0.85 : 1}
          />
        </g>
      ))}
      <Node x={224} y={55} w={62} h={40} text="answer" />
      <text x={272} y={68} style={{ ...label, fill: accent }}>
        ¹²
      </text>
      <circle cx={224} cy={75} r={3} fill={accent} className="animate-pulse motion-reduce:animate-none" />
    </>
  );
}

export default function Schematic({ kind }: { kind: SchematicKind }) {
  return (
    <svg viewBox="0 0 300 150" aria-hidden className="block w-full">
      {kind === "pipeline" && <Pipeline />}
      {kind === "fanout" && <Fanout />}
      {kind === "rag" && <Rag />}
    </svg>
  );
}
