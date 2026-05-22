import { motion } from "framer-motion";

const regions = ["Ottawa", "Gatineau", "Kanata", "Nepean", "Barrhaven", "Orleans", "Gloucester", "Stittsville", "Richmond", "Carleton Place"];

export function ServiceAreas() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Service Areas</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance">
            Ottawa &amp; Gatineau, <em className="copper-text not-italic">locally led.</em>
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

        {/* Stylized Ontario SVG */}
        <div className="relative aspect-square max-w-lg mx-auto">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient id="on" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.68 0.14 255)" />
                <stop offset="100%" stopColor="oklch(0.52 0.20 255)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>
            {/* Simplified Ontario shape */}
            <path
              d="M60,100 L180,60 L280,70 L350,110 L360,170 L340,230 L300,290 L260,330 L220,350 L180,340 L150,310 L130,270 L100,230 L70,185 L50,145 Z"
              fill="none"
              stroke="url(#on)"
              strokeWidth="2"
              filter="url(#glow)"
            />
            <path
              d="M60,100 L180,60 L280,70 L350,110 L360,170 L340,230 L300,290 L260,330 L220,350 L180,340 L150,310 L130,270 L100,230 L70,185 L50,145 Z"
              fill="oklch(0.52 0.20 255 / 0.06)"
              stroke="oklch(0.52 0.20 255 / 0.6)"
              strokeWidth="1"
            />
            {[
              { x: 230, y: 255, label: "Ottawa" },
              { x: 255, y: 242, label: "Gatineau" },
              { x: 210, y: 268, label: "Kanata" },
              { x: 190, y: 220, label: "Nepean" },
            ].map((p, i) => (
              <g key={p.label}>
                <motion.circle
                  cx={p.x} cy={p.y} r={6}
                  fill="oklch(0.68 0.14 255)"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                />
                <motion.circle
                  cx={p.x} cy={p.y} r={6}
                  fill="oklch(0.68 0.14 255)"
                  animate={{ r: [6, 18, 6], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                />
                <text x={p.x + 12} y={p.y + 4} fill="oklch(0.96 0.006 255)" fontSize="11" fontFamily="Inter">{p.label}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
