import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { label: "Work", href: "#showcase" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <div className="glass rounded-full flex items-center justify-between pl-3 pr-2 py-2">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="M&E Construction" className="h-9 w-9 object-contain" />
            <span className="font-display text-lg hidden sm:inline">M&amp;E Construction</span>
          </a>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="px-4 py-2 rounded-full hover:bg-white/5 transition text-foreground/80 hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:shadow-[var(--shadow-glow)] transition-shadow">
            Free Estimate
          </a>
        </div>
      </div>
    </motion.header>
  );
}
