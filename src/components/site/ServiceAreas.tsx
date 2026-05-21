import { motion } from "framer-motion";

const regions = ["Boulder City", "Henderson", "Las Vegas", "North Las Vegas", "Summerlin", "Enterprise", "Spring Valley", "Laughlin", "Searchlight", "Mesquite"];

export function ServiceAreas() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Service Areas</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance">
            Nevada-wide, <em className="copper-text not-italic">locally led.</em>
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

        {/* Stylized Nevada SVG */}
        <div className="relative aspect-square max-w-lg mx-auto">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient id="nv" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.55 0.12 20)" />
                <stop offset="100%" stopColor="oklch(0.42 0.14 20)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>
            {/* Simplified Nevada state shape */}
            <path
              d="M130,50 L270,50 L290,75 L295,140 L305,210 L295,280 L265,345 L235,375 L205,365 L175,320 L150,270 L120,200 L100,140 L110,80 Z"
              fill="none"
              stroke="url(#nv)"
              strokeWidth="2"
              filter="url(#glow)"
            />
            <path
              d="M130,50 L270,50 L290,75 L295,140 L305,210 L295,280 L265,345 L235,375 L205,365 L175,320 L150,270 L120,200 L100,140 L110,80 Z"
              fill="oklch(0.42 0.14 20 / 0.06)"
              stroke="oklch(0.42 0.14 20 / 0.6)"
              strokeWidth="1"
            />
            {[
              { x: 225, y: 345, label: "Las Vegas" },
              { x: 248, y: 330, label: "Henderson" },
              { x: 215, y: 360, label: "Boulder City" },
              { x: 170, y: 130, label: "Reno" },
            ].map((p, i) => (
              <g key={p.label}>
                <motion.circle
                  cx={p.x} cy={p.y} r={6}
                  fill="oklch(0.55 0.12 20)"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                />
                <motion.circle
                  cx={p.x} cy={p.y} r={6}
                  fill="oklch(0.55 0.12 20)"
                  animate={{ r: [6, 18, 6], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                />
                <text x={p.x + 12} y={p.y + 4} fill="oklch(0.96 0.003 15)" fontSize="11" fontFamily="Inter">{p.label}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
