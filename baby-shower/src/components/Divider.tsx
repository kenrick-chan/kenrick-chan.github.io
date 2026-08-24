interface DividerProps {
  color?: string;
  flip?: boolean;
}

// A repeating scalloped edge, like the ric-rac ribbon trim on baby
// clothes. This is the page's signature recurring motif — it separates
// every section instead of a plain horizontal rule.
export default function Divider({ color = "#A9BBA0", flip = false }: DividerProps) {
  return (
    <div className={flip ? "rotate-180" : undefined} aria-hidden="true">
      <svg
        viewBox="0 0 240 16"
        preserveAspectRatio="none"
        className="w-full h-4"
      >
        <path
          d="M0,16 Q10,0 20,16 Q30,0 40,16 Q50,0 60,16 Q70,0 80,16 Q90,0 100,16 Q110,0 120,16 Q130,0 140,16 Q150,0 160,16 Q170,0 180,16 Q190,0 200,16 Q210,0 220,16 Q230,0 240,16 L240,16 L0,16 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
