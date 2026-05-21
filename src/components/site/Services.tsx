import { motion } from "framer-motion";
import { Hammer, Home, CloudLightning, Shield, Wrench, Building2, TreePine, Paintbrush } from "lucide-react";

const services = [
  { icon: Home, title: "Luxury Roofing Systems", desc: "Tile, metal, Boral, DaVinci, and architectural asphalt — engineered for Texas storms.", tags: ["Tile", "Metal", "Boral", "DaVinci"] },
  { icon: CloudLightning, title: "Storm Restoration", desc: "Rapid response, leak repair, full insurance claim navigation, and like-new restoration.", tags: ["Insurance", "Leak Repair", "Emergency"] },
  { icon: Hammer, title: "Custom Home Construction", desc: "Ground-up luxury residential construction with elite finish carpentry and architectural detailing.", tags: ["Custom Homes", "Framing", "Concrete"] },
  { icon: Building2, title: "Additions & Remodels", desc: "Structural additions, kitchen and bath remodels, garage conversions, and full exterior renovations.", tags: ["Kitchens", "Baths", "Additions"] },
  { icon: TreePine, title: "Outdoor Living", desc: "Patios, pergolas, outdoor kitchens, and resort-grade backyards built for hill country living.", tags: ["Pergolas", "Patios", "Fencing"] },
  { icon: Shield, title: "Inspections & Warranty", desc: "Drone roof inspections, warranty-backed installs, and transparent multi-year coverage.", tags: ["Drone", "Warranty", "Audits"] },
  { icon: Wrench, title: "Gutters, Chimneys, Skylights", desc: "Architectural accents and water-management systems installed with the same precision as the roof.", tags: ["Gutters", "Chimneys", "Skylights"] },
  { icon: Paintbrush, title: "Exterior Renovations", desc: "Siding, painting, stonework, and luxury façade upgrades that transform the entire elevation.", tags: ["Siding", "Painting", "Stone"] },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-48 blueprint-grid">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">— Capabilities</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 text-balance">
            One firm. Every detail of the <em className="copper-text not-italic">envelope.</em>
          </h2>
          <p className="text-foreground/70 mt-6 max-w-xl">
            From shingle to structure, M&amp;E is your single point of accountability for the most ambitious roofing and construction projects in Texas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-3xl overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-card p-8 min-h-[300px] flex flex-col justify-between overflow-hidden hover:bg-card/60 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/10 transition-all duration-700" />
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-3xl transition-all duration-700" />

              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl leading-tight mb-3">{s.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
              </div>
              <div className="relative flex flex-wrap gap-1.5 mt-6">
                {s.tags.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-border/60 text-foreground/60">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
