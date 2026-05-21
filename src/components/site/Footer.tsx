import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="M&E" className="h-10 w-10 object-contain" />
          <div>
            <div className="font-display text-lg leading-tight">M&amp;E Construction</div>
            <div className="text-xs text-foreground/50">North Texas Roof &amp; Shingle</div>
          </div>
        </div>
        <div className="text-xs text-foreground/50">© {new Date().getFullYear()} M&amp;E Construction. Licensed &amp; insured in Texas.</div>
        <div className="flex gap-4 text-xs text-foreground/60">
          <a href="#" className="hover:text-primary">Privacy</a>
          <a href="#" className="hover:text-primary">Careers</a>
          <a href="#" className="hover:text-primary">Warranty</a>
        </div>
      </div>
    </footer>
  );
}
