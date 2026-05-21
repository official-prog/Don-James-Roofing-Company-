import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">— Start the Conversation</span>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.95] mt-4 text-balance">
            Let's build something <em className="copper-text not-italic">unforgettable.</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-3 glass rounded-3xl p-8 md:p-10 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" placeholder="Jane Doe" />
              <Field label="Phone" placeholder="(214) 555-0199" />
            </div>
            <Field label="Email" placeholder="jane@email.com" type="email" />
            <Field label="Project Address" placeholder="Dallas, TX" />
            <div>
              <label className="text-xs uppercase tracking-widest text-foreground/60">Project Details</label>
              <textarea rows={4} placeholder="Tell us about the project — roofing, custom build, storm damage…" className="mt-2 w-full bg-transparent border border-border/60 rounded-xl px-4 py-3 focus:border-primary focus:outline-none transition resize-none" />
            </div>
            <button className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium hover:shadow-[var(--shadow-glow)] transition-shadow">
              Request Estimate
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
            <ContactCard icon={Phone} label="24/7 Emergency" value="(800) 123-4567" href="tel:+18001234567" />
            <ContactCard icon={Mail} label="Send a brief" value="hello@meconstruction.tx" href="mailto:hello@meconstruction.tx" />
            <ContactCard icon={MapPin} label="Headquarters" value="Dallas–Fort Worth Metroplex, Texas" />
            <div className="glass rounded-2xl overflow-hidden h-64">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Dallas,TX&output=embed"
                className="w-full h-full grayscale contrast-125 opacity-80"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...p }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-foreground/60">{label}</label>
      <input {...p} className="mt-2 w-full bg-transparent border border-border/60 rounded-xl px-4 py-3 focus:border-primary focus:outline-none transition" />
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const Tag: any = href ? "a" : "div";
  return (
    <Tag href={href} className="glass rounded-2xl p-5 flex items-center gap-4 group hover:bg-white/10 transition">
      <span className="p-3 rounded-xl bg-primary/15 text-primary"><Icon className="w-5 h-5" /></span>
      <div>
        <div className="text-xs uppercase tracking-widest text-foreground/60">{label}</div>
        <div className="font-medium group-hover:text-primary transition">{value}</div>
      </div>
    </Tag>
  );
}
