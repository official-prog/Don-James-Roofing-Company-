import { motion } from "framer-motion";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import hero from "@/assets/hero-home.jpg";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { img: p2, title: "Copper Ridge Residence", loc: "Hill Country, TX", tag: "Standing Seam Metal", span: "md:col-span-2 md:row-span-2" },
  { img: p1, title: "Stoneview Estate", loc: "Westlake, TX", tag: "Custom Build", span: "md:col-span-1" },
  { img: p3, title: "Ember Pavilion", loc: "Dallas, TX", tag: "Outdoor Living", span: "md:col-span-1" },
  { img: hero, title: "Twilight Manor", loc: "Fort Worth, TX", tag: "Roof + Renovation", span: "md:col-span-2" },
];

export function Showcase() {
  return (
    <section id="showcase" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">— Selected Work</span>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance">
              The portfolio is the <em className="copper-text not-italic">proof.</em>
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition group">
            View Full Archive
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 md:h-[800px]">
          {projects.map((p, i) => (
            <motion.figure
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl bg-card ${p.span} min-h-[300px]`}
            >
              <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <figcaption className="absolute bottom-0 inset-x-0 p-6 md:p-8">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">{p.tag}</div>
                <div className="font-display text-2xl md:text-3xl">{p.title}</div>
                <div className="text-sm text-foreground/60 mt-1">{p.loc}</div>
              </figcaption>
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
