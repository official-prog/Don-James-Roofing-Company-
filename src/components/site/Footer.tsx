export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm shrink-0">RM</span>
          <div>
            <div className="font-display text-lg leading-tight">RM Roofing</div>
            <div className="text-xs text-foreground/50">Shingles · Flat · Green · Tile · Metal · Ottawa, ON</div>
          </div>
        </div>
        <div className="text-xs text-foreground/50">© {new Date().getFullYear()} RM Roofing. Licensed &amp; insured in Ontario.</div>
        <div className="flex gap-4 text-xs text-foreground/60">
          <a href="https://www.facebook.com/p/RM-Roofing-100027965843837/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Facebook</a>
          <a href="#" className="hover:text-primary">Warranty</a>
        </div>
      </div>
    </footer>
  );
}
