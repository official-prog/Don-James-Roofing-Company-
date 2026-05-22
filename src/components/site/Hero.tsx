import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-home.jpg";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";

const sequence = ["For All Your Roofing Needs.", "Serving Carson City & Nevada.", "Free Estimates Available."];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden grain">
      {/* Parallax bg */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={heroImg} alt="Luxury Texas home at golden hour" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />
      </motion.div>

      {/* Floating particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="particle absolute rounded-full bg-primary/40 blur-[1px]"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
          }}
        />
      ))}

      {/* Content */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 mx-auto max-w-7xl px-6 pt-36 md:pt-48 pb-24">
        {/* intro sequence */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-[0.3em] uppercase text-foreground/60 mb-8">
          {sequence.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.25, duration: 0.8 }}
            >
              {s}
            </motion.span>
          ))}
        </div>

        <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.95] tracking-tight text-balance max-w-5xl">
          <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="block">
            Premium Roofing
          </motion.span>
          <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="block">
            &amp; Repair <em className="copper-text not-italic">done right.</em>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-8 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed"
        >
          Don James Roofing Company is your trusted roofing contractor in Carson City and the surrounding Nevada region. Quality workmanship, free estimates, fully licensed and insured.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:shadow-[var(--shadow-glow)] transition-all">
            Get Free Estimate
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </a>
          <a href="#showcase" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 font-medium hover:bg-white/10 transition">
            View Recent Projects
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-medium hover:border-primary transition">
            Book Inspection
          </a>
        </motion.div>

        {/* Floating contact card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-8 w-full sm:max-w-sm lg:absolute lg:right-6 lg:top-44 lg:w-[300px] lg:mt-0"
        >
          <div className="glass rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-foreground/60">24/7 Support</span>
              <span className="flex items-center gap-1.5 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live
              </span>
            </div>
            <a href="tel:+17758826141" className="flex items-center gap-3 group">
              <span className="p-2 rounded-lg bg-primary/15 text-primary"><Phone className="w-4 h-4" /></span>
              <div>
                <div className="text-xs text-foreground/60">Call for Free Estimate</div>
                <div className="font-medium group-hover:text-primary transition">(775) 882-6141</div>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-primary/15 text-primary"><MapPin className="w-4 h-4" /></span>
              <div>
                <div className="text-xs text-foreground/60">Service Regions</div>
                <div className="font-medium text-sm">Carson City · Reno · Sparks · Gardnerville</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
