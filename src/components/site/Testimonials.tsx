import { motion } from "framer-motion";

const quotes = [
  { q: "They re-roofed our home after a hailstorm and made it look better than the day we moved in. The crew was meticulous.", n: "The Hartwell Family", l: "Westlake, TX" },
  { q: "M&E built our custom hill country home from the foundation up. Five years later, it still looks like the day they handed us the keys.", n: "Daniel & Rosa Vargas", l: "Dripping Springs, TX" },
  { q: "Best insurance claim experience I've ever had. They handled the adjuster, the paperwork, and the install — flawlessly.", n: "James O'Connor", l: "Fort Worth, TX" },
];

export function Testimonials() {
  return (
    <section className="relative py-32 md:py-48 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">— Owner Stories</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance max-w-3xl">
            The kind of trust you can only <em className="copper-text not-italic">earn.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((qu, i) => (
            <motion.figure
              key={qu.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-8 flex flex-col h-full"
            >
              <div className="font-display text-6xl copper-text leading-none mb-4">"</div>
              <blockquote className="text-lg leading-relaxed text-foreground/85 flex-1">{qu.q}</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/40">
                <div className="font-medium">{qu.n}</div>
                <div className="text-xs text-foreground/60 mt-1">{qu.l}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
