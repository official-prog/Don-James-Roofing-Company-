import logo from "@/assets/logo1.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Florida State Certified Roofing" className="h-10 w-10 object-contain rounded-full" />
          <div>
            <div className="font-display text-lg leading-tight">Florida State Certified Roofing</div>
            <div className="text-xs text-foreground/50">Roof Repair &amp; Installation · Lakeland, FL</div>
          </div>
        </div>
        <div className="text-xs text-foreground/50">© {new Date().getFullYear()} Florida State Certified Roofing. Licensed &amp; insured in Florida.</div>
        <div className="flex gap-4 text-xs text-foreground/60">
          <a href="https://www.facebook.com/flstatecertifiedroofing/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Facebook</a>
          <a href="https://www.instagram.com/flstatecertifiedroofing/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>
          <a href="#" className="hover:text-primary">Warranty</a>
        </div>
      </div>
    </footer>
  );
}
