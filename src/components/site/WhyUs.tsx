import { motion } from "framer-motion";
import { ShieldCheck, Award, MessageSquare, Heart, DollarSign, FileCheck, Sparkles, Users } from "lucide-react";
import blueprint from "@/assets/blueprint.jpg";

const items = [
  { i: ShieldCheck, t: "Licensed & Insured", d: "Fully credentialed and bonded across Texas." },
  { i: Award, t: "Premium Materials", d: "Only top-tier supplier networks — no shortcuts." },
  { i: FileCheck, t: "Warranty-Backed", d: "Multi-year workmanship and manufacturer coverage." },
  { i: MessageSquare, t: "Rapid Communication", d: "A senior project lead answers your call." },
  { i: Heart, t: "Family-Operated", d: "Three generations of Texas craftsmen." },
  { i: DollarSign, t: "Transparent Pricing", d: "Fixed-price proposals with line-item clarity." },
  { i: Users, t: "Insurance Assistance", d: "We speak adjuster — and we negotiate hard." },
  { i: Sparkles, t: "Elite Workmanship", d: "Finish details inspected to architectural standard." },
];

export function WhyUs() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <img src={blueprint} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">— Why Homeowners Choose Us</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance">
            Built like the people who <em className="copper-text not-italic">stand behind it.</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.7 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors group"
            >
              <it.i className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-display text-xl">{it.t}</div>
              <div className="text-sm text-foreground/60 mt-2">{it.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
