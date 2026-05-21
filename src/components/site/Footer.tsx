export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm shrink-0">RRC</span>
          <div>
            <div className="font-display text-lg leading-tight">Rivera's Roofing &amp; Construction LLC</div>
            <div className="text-xs text-foreground/50">15 Years of Experience · Moody, TX</div>
          </div>
        </div>
        <div className="text-xs text-foreground/50">© {new Date().getFullYear()} Rivera's Roofing &amp; Construction LLC. Licensed &amp; insured in Texas.</div>
        <div className="flex gap-4 text-xs text-foreground/60">
          <a href="https://www.facebook.com/profile.php?id=61574575426336" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Facebook</a>
          <a href="#" className="hover:text-primary">Warranty</a>
        </div>
      </div>
    </footer>
  );
}
