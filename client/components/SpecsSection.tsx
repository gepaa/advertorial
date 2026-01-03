interface Spec {
  icon: string;
  label: string;
  value: string;
  description: string;
}

const specs: Spec[] = [
  {
    icon: "🔋",
    label: "USB-C Fast Charging",
    value: "2.5 Hours",
    description: "Uses the same cable as your phone or laptop"
  },
  {
    icon: "⚡",
    label: "Verified Air Watts",
    value: "30 AW",
    description: "Comparable to professional-grade cordless models"
  },
  {
    icon: "🌊",
    label: "H11 HEPA Filtration",
    value: "99.5% Particle Capture",
    description: "Sealed-gasket design with zero exhaust emissions"
  },
  {
    icon: "🛡️",
    label: "Impact-Resistant Build",
    value: "4-Foot Drop Rating",
    description: "Polycarbonate body tested on concrete surfaces"
  }
];

const performanceSpecs = [
  { label: "Runtime", value: "15 minutes (high-torque mode), 30 minutes (eco mode)" },
  { label: "Weight", value: "0.8 pounds" },
  { label: "Length", value: "11 inches" },
  { label: "Noise Level", value: "Acoustically dampened motor" },
  { label: "Filter Type", value: "Washable H11 HEPA (no subscription)" },
  { label: "Warranty", value: "1-Year Limited Manufacturer Warranty" },
];

export default function SpecsSection() {
  return (
    <section id="specs" className="section-padding bg-white">
      <div className="space-y-8 sm:space-y-12 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">The Details</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Technical Specifications</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineering precision designed for real-world performance
          </p>
        </div>

        {/* Key Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3 hover:border-primary/50 transition-colors"
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
        <div className="space-y-4 sm:space-y-6 px-4 sm:px-0 py-6 sm:py-8 border-y border-gray-200">
          <h3 className="text-lg sm:text-2xl font-bold">Complete Details</h3>
          <div className="space-y-2">
            {performanceSpecs.map((item, i) => (
              <div key={i} className="flex justify-between items-start gap-4 py-2 border-b border-gray-200 text-sm sm:text-base">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-semibold text-primary text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
          <h3 className="text-lg sm:text-2xl font-bold">For Parents, This Is the "60-Second Reset" Tool</h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            No more dragging a bulky vacuum to the driveway. No more breathing recirculated dust while trying to clean your kids' car seats. Just grab it from your glovebox, handle the mess in under a minute, and know that the invisible enemy is actually being trapped—not blown back into the air.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            For detailing enthusiasts and anyone who values clean air in tight spaces, this is the "surgical strike" tool that finally fits the way you actually work. It reaches where shop-vacs can't. It replaces expensive compressed air. And it proves its filtration performance every single time you see the filter turn grey.
          </p>
          <div className="bg-blue-50 border border-primary rounded-lg p-6 sm:p-8 text-center space-y-2 sm:space-y-3 mt-6 sm:mt-8">
            <h4 className="text-xl sm:text-2xl font-bold text-primary">TURBINEPRO 4-IN-1</h4>
            <p className="text-sm sm:text-base text-muted-foreground">
              Professional-grade air quality in a glovebox-sized package.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
