interface Spec {
  icon: string;
  label: string;
  value: string;
  description: string;
}

const specs: Spec[] = [
  {
    icon: "🔋",
    label: "USB-C Charging",
    value: "2.5 Hours",
    description: "Charges using the same cable as your phone or laptop"
  },
  {
    icon: "⚡",
    label: "Air Watts Power",
    value: "30 AW",
    description: "Verified cleaning power comparable to early Dyson cordless"
  },
  {
    icon: "🌊",
    label: "H11 Filtration",
    value: "99.5% Capture",
    description: "Sealed-gasket system with zero visible emissions"
  },
  {
    icon: "🛡️",
    label: "Impact Resistant",
    value: "4-foot Drop",
    description: "Polycarbonate body rated for concrete drops"
  }
];

const performanceSpecs = [
  { label: "Runtime", value: "15 minutes (high-torque mode)" },
  { label: "Weight", value: "0.8 pounds" },
  { label: "Length", value: "11 inches" },
  { label: "Noise Level", value: "Acoustically dampened" },
  { label: "Filter Type", value: "Washable (no subscription cost)" },
  { label: "Warranty", value: "Lifetime" },
];

export default function SpecsSection() {
  return (
    <section id="specs" className="section-padding bg-card/30">
      <div className="space-y-8 sm:space-y-12 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">The Details</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Technical Specifications</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineering excellence meets practical design—built for professionals and everyday users
          </p>
        </div>

        {/* Key Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3 hover:border-primary/50 transition-colors"
            >
              <div className="text-3xl sm:text-4xl">{spec.icon}</div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm mb-1">{spec.label}</h3>
                <div className="text-lg sm:text-xl font-bold text-primary mb-2">{spec.value}</div>
                <p className="text-xs sm:text-sm text-muted-foreground">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Specs */}
        <div className="space-y-4 sm:space-y-6 px-4 sm:px-0 py-6 sm:py-8 border-y border-border">
          <h3 className="text-lg sm:text-2xl font-bold">Complete Details</h3>
          <div className="space-y-2">
            {performanceSpecs.map((item, i) => (
              <div key={i} className="flex justify-between items-start gap-4 py-2 border-b border-border/50 text-sm sm:text-base">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-semibold text-primary text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The 60-Second Car Reset Story */}
        <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
          <h3 className="text-lg sm:text-2xl font-bold">For Parents, This Is The 'Game Changer' Tool</h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            The 60-second reset that transforms "kid chaos" into "socially acceptable" while you wait in the school pickup line. No extension cords. No dragging a shop-vac to the driveway. No breathing recirculated dust.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            For detailers, it's the "surgical strike" capability that handles precision cleaning without the friction of hauling out a corded rig. Fits perfectly in your glovebox for immediate deployment the moment you spot the Goldfish cracker graveyard.
          </p>
        </div>
      </div>
    </section>
  );
}
