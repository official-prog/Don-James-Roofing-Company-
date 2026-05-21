import { motion } from "framer-motion";

const regions = ["Dallas", "Fort Worth", "Plano", "Frisco", "Austin", "San Antonio", "Houston", "Waco", "Tyler", "Hill Country"];

export function ServiceAreas() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">— Service Areas</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance">
            Texas-wide, <em className="copper-text not-italic">locally led.</em>
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

        {/* Stylized Texas SVG */}
        <div className="relative aspect-square max-w-lg mx-auto">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient id="tx" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.78 0.16 50)" />
                <stop offset="100%" stopColor="oklch(0.68 0.14 45)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>
            {/* Simplified Texas shape */}
            <path
              d="M80 80 L260 80 L260 130 L320 140 L340 200 L320 260 L280 320 L240 360 L200 340 L160 360 L130 320 L100 280 L70 240 L60 180 L80 130 Z"
              fill="none"
              stroke="url(#tx)"
              strokeWidth="2"
              filter="url(#glow)"
            />
            <path
              d="M80 80 L260 80 L260 130 L320 140 L340 200 L320 260 L280 320 L240 360 L200 340 L160 360 L130 320 L100 280 L70 240 L60 180 L80 130 Z"
              fill="oklch(0.68 0.14 45 / 0.05)"
              stroke="oklch(0.68 0.14 45 / 0.6)"
              strokeWidth="1"
            />
            {[
              { x: 220, y: 160, label: "DFW" },
              { x: 170, y: 270, label: "Austin" },
              { x: 200, y: 320, label: "S.A." },
              { x: 280, y: 250, label: "Houston" },
            ].map((p, i) => (
              <g key={p.label}>
                <motion.circle
                  cx={p.x} cy={p.y} r={6}
                  fill="oklch(0.78 0.16 50)"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                />
                <motion.circle
                  cx={p.x} cy={p.y} r={6}
                  fill="oklch(0.78 0.16 50)"
                  animate={{ r: [6, 18, 6], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                />
                <text x={p.x + 12} y={p.y + 4} fill="oklch(0.96 0.01 80)" fontSize="11" fontFamily="Inter">{p.label}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
