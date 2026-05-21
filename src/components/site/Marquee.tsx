const words = [
  "Asphalt Shingles", "Metal Roofing", "Roof Repair", "Storm Restoration", "New Construction",
  "Free Estimates", "Insurance Claims", "Flat Roofing", "15 Years Experience", "Licensed & Insured",
];

export function Marquee() {
  return (
    <div className="border-y border-border/40 py-6 overflow-hidden bg-card/30">
      <div className="flex marquee whitespace-nowrap">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="mx-10 font-display text-3xl md:text-4xl text-foreground/40">
            {w} <span className="text-primary mx-6">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
