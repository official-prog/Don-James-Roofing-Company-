import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import crew from "@/assets/crew.jpg";
import roof from "@/assets/roof-detail.jpg";

const stats = [
  { v: "25+", l: "Years of craft" },
  { v: "1,800+", l: "Projects completed" },
  { v: "4,200+", l: "Roofs installed" },
  { v: "98%", l: "Client satisfaction" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <section ref={ref} id="about" className="relative py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">— About the Firm</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            A Texas family of <em className="copper-text not-italic">builders</em>, engineers, and craftsmen.
          </h2>
          <p className="text-foreground/70 leading-relaxed max-w-md">
            From the first inspection to the final walkthrough, M&amp;E Construction delivers roofing systems
            and custom builds engineered for Texas weather and finished to a luxury standard. Family-operated,
            insurance-fluent, and obsessed with the details no one else sees.
          </p>
          <div className="grid grid-cols-2 gap-px bg-border/40 rounded-2xl overflow-hidden">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="bg-card p-6"
              >
                <div className="font-display text-4xl md:text-5xl copper-text">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-foreground/60 mt-2">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 relative h-[600px] md:h-[700px]">
          <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[60%] h-[70%] rounded-3xl overflow-hidden shadow-[var(--shadow-elevate)]">
            <img src={crew} alt="Roofing crew at sunset" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[55%] h-[60%] rounded-3xl overflow-hidden shadow-[var(--shadow-elevate)]">
            <img src={roof} alt="Premium metal roof detail" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <div className="absolute -bottom-4 right-10 glass rounded-2xl p-5 max-w-[240px]">
            <div className="text-xs uppercase tracking-widest text-primary mb-1">Est. 1999</div>
            <div className="text-sm text-foreground/80">Licensed, bonded, and insured across the state of Texas.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
