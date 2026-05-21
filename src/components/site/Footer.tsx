import logo from "@/assets/logo-jnj.avif";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="JNJ Premium Roofing" className="h-10 w-auto object-contain" />
          <div>
            <div className="font-display text-lg leading-tight">JNJ Premium Roofing Inc.</div>
            <div className="text-xs text-foreground/50">Quality · Integrity · Reliability · Conception Bay South, NL</div>
          </div>
        </div>
        <div className="text-xs text-foreground/50">© {new Date().getFullYear()} JNJ Premium Roofing Inc. Licensed &amp; insured in Newfoundland.</div>
        <div className="flex gap-4 text-xs text-foreground/60">
          <a href="https://www.facebook.com/JNJpremiumroofing/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Facebook</a>
          <a href="https://www.instagram.com/jnjpri/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>
          <a href="https://jnjpremiumroofing.ca" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Website</a>
        </div>
      </div>
    </footer>
  );
}
