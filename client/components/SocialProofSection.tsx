export default function SocialProofSection() {
  return (
    <section className="section-padding bg-card/50">
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-3 sm:space-y-4 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">What Makes This Different</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            When a company only advertises Pascals, they're hiding their airflow weakness. When they specify Air Watts, they're confident you'll test it and discover the truth about performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              icon: "🎯",
              label: "Surgical Precision",
              value: "Crevice nozzle fits where others can't",
              detail: "Reaches between seat rails, door bins, and tight spaces"
            },
            {
              icon: "🔒",
              label: "H11 Sealed Gasket",
              value: "Zero visible emissions in smoke chamber test",
              detail: "Less than 15% of consumer handhelds achieve this"
            },
            {
              icon: "⚡",
              label: "30 Air Watts",
              value: "Real power, honest metric",
              detail: "Comparable to early Dyson cordless models"
            },
            {
              icon: "💧",
              label: "4-in-1 Functionality",
              value: "One tool replaces four purchases",
              detail: "Vacuum, blower, inflator, and pump combined"
            },
            {
              icon: "🌍",
              label: "Washable Filter",
              value: "No subscription costs",
              detail: "Rinse every 3-4 weeks, reuse indefinitely"
            },
            {
              icon: "📦",
              label: "Glovebox-Ready",
              value: "11 inches, 0.8 pounds",
              detail: "Fits alongside your spare tire for immediate deployment"
            },
          ].map((feature, index) => (
            <div key={index} className="bg-background rounded-lg p-4 sm:p-6 space-y-2">
              <div className="text-3xl sm:text-4xl">{feature.icon}</div>
              <h4 className="font-bold text-sm sm:text-base">{feature.label}</h4>
              <p className="text-xs sm:text-sm text-primary font-semibold">{feature.value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{feature.detail}</p>
            </div>
          ))}
        </div>

        {/* Key Value Statement */}
        <div className="space-y-4 sm:space-y-6 px-4 sm:px-0 py-6 sm:py-8 border-y border-border">
          <h3 className="text-lg sm:text-2xl font-bold">Why This Is Different From The Cheap Alternative</h3>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              <span className="text-foreground font-semibold">Cheap vacuums are PM2.5 Cannons:</span> They redistribute the "invisible enemy" directly into your breathing zone. The motor sucks in debris, then blasts fine particulate matter (measuring 2.5 microns) out the exhaust vent—directly at your face. For parents cleaning car seats where kids' faces rest, this is actively contaminating the space you're trying to purify.
            </p>
            <p>
              <span className="text-foreground font-semibold">This tool has H11 HEPA Sealed-Gasket protection:</span> Three engineering elements cheap vacuums abandoned in favor of cost-cutting: laboratory-standard H11 HEPA filtration (captures 99.5% of particles down to 0.3 microns), sealed-gasket construction (prevents any air bypass), and cyclonic pre-separation (drops heavy debris before it reaches the filter). The result: zero visible emissions in the smoke chamber test.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
