import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", t: "Consultation", d: "On-site walkthrough with a senior project lead — no high-pressure sales." },
  { n: "02", t: "Inspection", d: "Drone and physical inspection with a written, photographed report." },
  { n: "03", t: "Planning", d: "Engineered scope, materials list, and a transparent fixed-price proposal." },
  { n: "04", t: "Material Selection", d: "Curated premium materials from our luxury supplier network." },
  { n: "05", t: "Construction", d: "Daily site supervision, dust control, and respect for your home." },
  { n: "06", t: "Quality Assurance", d: "Third-party QA inspection before any invoice is sent." },
  { n: "07", t: "Final Walkthrough", d: "Punch-list closure with the project lead and the owner." },
  { n: "08", t: "Warranty Support", d: "Multi-year coverage with a single phone number to call." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="relative py-32 md:py-48 bg-card/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">— The Process</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance">
            Eight steps. <em className="copper-text not-italic">Zero surprises.</em>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/60 -translate-x-1/2" />
          <motion.div style={{ height: lineH }} className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2 shadow-[0_0_20px_var(--copper)]" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                  <div className="font-display text-7xl md:text-8xl copper-text leading-none">{s.n}</div>
                  <h3 className="font-display text-3xl md:text-4xl mt-2">{s.t}</h3>
                  <p className="text-foreground/60 mt-3 max-w-sm md:inline-block">{s.d}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background shadow-[0_0_20px_var(--copper)]" />
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
