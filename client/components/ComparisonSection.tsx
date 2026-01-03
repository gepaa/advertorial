interface ComparisonFeature {
  feature: string;
  turbinePro: boolean;
  budgetVacuum: boolean;
}

const features: ComparisonFeature[] = [
  { feature: "H11 HEPA sealed-gasket filtration", turbinePro: true, budgetVacuum: false },
  { feature: "30 verified Air Watts", turbinePro: true, budgetVacuum: false },
  { feature: "4-in-1 multi-functionality", turbinePro: true, budgetVacuum: false },
  { feature: "Compact glovebox-ready design", turbinePro: true, budgetVacuum: false },
  { feature: "Washable filter (no recurring cost)", turbinePro: true, budgetVacuum: false },
  { feature: "Cordless USB-C charging", turbinePro: true, budgetVacuum: true },
  { feature: "Clear exhaust (smoke test verified)", turbinePro: true, budgetVacuum: false },
  { feature: "91% sand clearance (first pass)", turbinePro: true, budgetVacuum: false },
];

export default function ComparisonSection() {
  return (
    <section id="proof" className="section-padding bg-white">
      <div className="space-y-8 sm:space-y-12 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">The Proof</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            How TurbinePro 4-in-1 Differs From Cheap Alternatives
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Professional-grade engineering vs. budget vacuum compromises
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="grid grid-cols-3 gap-4 sm:gap-6 min-w-full">
            {/* Header Row */}
            <div className="space-y-6 sm:space-y-8">
              <div className="h-24"></div>
              {features.map((item, idx) => (
                <div key={idx} className="py-3 sm:py-4 border-b border-border/50">
                  <p className="text-sm sm:text-base font-medium text-foreground">{item.feature}</p>
                </div>
              ))}
            </div>

            {/* TurbinePro 4-in-1 Column */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-primary text-primary-foreground rounded-lg p-4 sm:p-6 text-center">
                <div className="flex justify-center mb-2">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-base sm:text-lg">TurbinePro 4-in-1</h3>
                <p className="text-xs sm:text-sm opacity-90 mt-1">Professional Grade</p>
              </div>
              {features.map((item, idx) => (
                <div key={idx} className="py-3 sm:py-4 border-b border-border/50 flex justify-center">
                  {item.turbinePro ? (
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground opacity-30" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            {/* Budget Vacuum Column */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-muted/50 rounded-lg p-4 sm:p-6 text-center">
                <div className="flex justify-center mb-2">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-muted-foreground">Budget Vacuum</h3>
                <p className="text-xs sm:text-sm text-muted-foreground opacity-70 mt-1">Discount Alternative</p>
              </div>
              {features.map((item, idx) => (
                <div key={idx} className="py-3 sm:py-4 border-b border-border/50 flex justify-center">
                  {item.budgetVacuum ? (
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-destructive" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-primary/10 border border-primary rounded-lg p-6 sm:p-8 text-center space-y-3 sm:space-y-4">
          <p className="text-sm sm:text-base text-muted-foreground">
            Ready to experience real filtration?
          </p>
          <button className="cta-primary mx-auto px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg">
            LEARN MORE ABOUT FEATURES →
          </button>
        </div>
      </div>
    </section>
  );
}
