import { motion } from "framer-motion";

const regions = ["Conception Bay South", "St. John's", "Mount Pearl", "Paradise", "Torbay", "Bay Roberts", "Carbonear", "Harbour Grace", "Holyrood", "Pouch Cove"];

export function ServiceAreas() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Service Areas</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance">
            Newfoundland-wide, <em className="copper-text not-italic">locally led.</em>
          </h2>
          <div className="flex flex-wrap gap-2 mt-10">
            {regions.map((r, i) => (
              <motion.span
                key={r}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="px-4 py-2 rounded-full border border-border/60 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition cursor-default"
              >
                {r}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Stylized Newfoundland SVG */}
        <div className="relative aspect-square max-w-lg mx-auto">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient id="nl" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.65 0.16 25)" />
                <stop offset="100%" stopColor="oklch(0.51 0.22 25)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>
            {/* Simplified Newfoundland island shape */}
            <path
              d="M100,80 L220,60 L300,75 L350,120 L365,185 L355,255 L325,310 L295,345 L260,365 L225,370 L190,355 L160,325 L130,285 L100,240 L75,195 L65,150 L75,110 Z"
              fill="none"
              stroke="url(#nl)"
              strokeWidth="2"
              filter="url(#glow)"
            />
            <path
              d="M100,80 L220,60 L300,75 L350,120 L365,185 L355,255 L325,310 L295,345 L260,365 L225,370 L190,355 L160,325 L130,285 L100,240 L75,195 L65,150 L75,110 Z"
              fill="oklch(0.51 0.22 25 / 0.05)"
              stroke="oklch(0.51 0.22 25 / 0.6)"
              strokeWidth="1"
            />
            {[
              { x: 300, y: 280, label: "St. John's" },
              { x: 272, y: 262, label: "CBS" },
              { x: 285, y: 295, label: "Mt. Pearl" },
              { x: 240, y: 245, label: "Bay Roberts" },
            ].map((p, i) => (
              <g key={p.label}>
                <motion.circle
                  cx={p.x} cy={p.y} r={6}
                  fill="oklch(0.65 0.16 25)"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                />
                <motion.circle
                  cx={p.x} cy={p.y} r={6}
                  fill="oklch(0.65 0.16 25)"
                  animate={{ r: [6, 18, 6], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                />
                <text x={p.x + 12} y={p.y + 4} fill="oklch(0.97 0.003 20)" fontSize="11" fontFamily="Inter">{p.label}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
