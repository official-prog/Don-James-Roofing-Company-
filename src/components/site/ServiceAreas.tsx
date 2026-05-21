import { motion } from "framer-motion";

const regions = ["Lakeland", "Tampa", "Orlando", "Winter Haven", "Plant City", "Brandon", "Clearwater", "St. Petersburg", "Polk City", "Haines City"];

export function ServiceAreas() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Service Areas</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance">
            Florida-wide, <em className="copper-text not-italic">locally led.</em>
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

        {/* Stylized Florida SVG */}
        <div className="relative aspect-square max-w-lg mx-auto">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient id="fl" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.76 0.04 225)" />
                <stop offset="100%" stopColor="oklch(0.62 0.13 228)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>
            {/* Simplified Florida shape (panhandle + peninsula) */}
            <path
              d="M60,90 L195,90 L210,108 L240,100 L270,100 L285,115 L278,135 L255,148 L238,155 L228,175 L235,210 L245,250 L252,290 L258,325 L248,358 L228,375 L208,368 L183,348 L160,315 L138,275 L118,235 L100,195 L83,155 L68,118 Z"
              fill="none"
              stroke="url(#fl)"
              strokeWidth="2"
              filter="url(#glow)"
            />
            <path
              d="M60,90 L195,90 L210,108 L240,100 L270,100 L285,115 L278,135 L255,148 L238,155 L228,175 L235,210 L245,250 L252,290 L258,325 L248,358 L228,375 L208,368 L183,348 L160,315 L138,275 L118,235 L100,195 L83,155 L68,118 Z"
              fill="oklch(0.62 0.13 228 / 0.05)"
              stroke="oklch(0.62 0.13 228 / 0.6)"
              strokeWidth="1"
            />
            {[
              { x: 175, y: 248, label: "Lakeland" },
              { x: 148, y: 265, label: "Tampa" },
              { x: 210, y: 222, label: "Orlando" },
              { x: 210, y: 355, label: "Miami" },
            ].map((p, i) => (
              <g key={p.label}>
                <motion.circle
                  cx={p.x} cy={p.y} r={6}
                  fill="oklch(0.76 0.04 225)"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                />
                <motion.circle
                  cx={p.x} cy={p.y} r={6}
                  fill="oklch(0.76 0.04 225)"
                  animate={{ r: [6, 18, 6], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                />
                <text x={p.x + 12} y={p.y + 4} fill="oklch(0.96 0.008 240)" fontSize="11" fontFamily="Inter">{p.label}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
