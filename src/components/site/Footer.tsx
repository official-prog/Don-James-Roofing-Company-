import logo from "@/assets/logo-bcr.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Black Canyon Roofing" className="h-10 w-auto object-contain" />
          <div>
            <div className="font-display text-lg leading-tight">Black Canyon Roofing.net</div>
            <div className="text-xs text-foreground/50">Bonded &amp; Insured · Est. 1996 · Boulder City, NV</div>
          </div>
        </div>
        <div className="text-xs text-foreground/50">© {new Date().getFullYear()} Black Canyon Roofing.net. Licensed, bonded &amp; insured in Nevada.</div>
        <div className="flex gap-4 text-xs text-foreground/60">
          <a href="https://www.facebook.com/p/Black-Canyon-Roofingnet-100063719163628/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Facebook</a>
          <a href="https://www.instagram.com/explore/locations/461444063/black-canyon-roofingnet/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>
          <a href="https://blackcanyonroofing.net" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Website</a>
        </div>
      </div>
    </footer>
  );
}
