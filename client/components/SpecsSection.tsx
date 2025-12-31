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
    <section id="specs" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineering excellence meets practical design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors"
            >
              <div className="text-5xl">{spec.icon}</div>
              <div>
                <h3 className="font-bold text-lg mb-1">{spec.label}</h3>
                <div className="text-2xl font-bold text-primary mb-2">{spec.value}</div>
                <p className="text-sm text-muted-foreground">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Specs Table */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-2xl font-bold mb-6">Complete Feature Set</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary mb-4">Performance</h4>
              {[
                { label: "Suction Power", value: "30 Air Watts" },
                { label: "Air Speed", value: "Up to 120 mph" },
                { label: "Noise Level", value: "< 65 dB" },
                { label: "Battery Life", value: "8 Hours (per charge)" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-semibold text-primary">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-secondary mb-4">Design & Build</h4>
              {[
                { label: "Weight", value: "2.4 lbs" },
                { label: "Dimensions", value: "12\" x 4\" x 3\"" },
                { label: "Material", value: "Polycarbonate + Sealed Gasket" },
                { label: "Warranty", value: "Lifetime" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-semibold text-secondary">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-2xl font-bold mb-6 text-center">Certifications & Standards</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "✓ FDA Compliant",
              "✓ ISO 9001 Certified",
              "✓ RoHS Certified",
              "✓ CE Marked",
              "✓ FCC Approved",
              "✓ H11 HEPA Certified"
            ].map((cert, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className="text-secondary">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
