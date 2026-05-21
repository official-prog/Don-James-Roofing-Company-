import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import storm from "@/assets/storm.jpg";
import { Phone, Zap } from "lucide-react";

export function Storm() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

  return (
    <section ref={ref} className="relative h-[80vh] min-h-[600px] overflow-hidden flex items-center">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={storm} alt="Texas storm at night" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
            <Zap className="w-3 h-3" /> Emergency Storm Response
          </span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-6 text-balance">
            When the storm hits, <em className="copper-text not-italic">call once.</em>
          </h2>
          <p className="text-foreground/70 mt-6 leading-relaxed">
            Same-day tarping. Direct insurance liaison. Full restoration — handled by one team, from the first leak to the final shingle.
          </p>
          <a href="tel:+18001234567" className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium hover:shadow-[var(--shadow-glow)] transition-shadow">
            <Phone className="w-4 h-4" /> (800) 123-4567 — 24/7 Line
          </a>
        </motion.div>
      </div>
    </section>
  );
}
