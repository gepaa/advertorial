export default function OfferSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-card to-background">
      <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
        <div className="bg-card border border-primary/30 rounded-lg p-6 sm:p-8 space-y-6 sm:space-y-8">
          {/* Offer Headline */}
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="inline-block px-3 py-1 bg-primary/20 border border-primary rounded text-primary text-xs sm:text-sm font-semibold">
              PRO BUNDLE
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Everything You Need
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Complete system with premium accessories included
            </p>
          </div>

          {/* What's Included */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-bold text-base sm:text-lg">What's In The Pro Bundle:</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "4-in-1 Multi-Tool (Vacuum/Blower/Inflator/Pump)",
                "H11 HEPA Sealed-Gasket Filter (washable and reusable)",
                "Crevice nozzle and brush attachment",
                "USB-C rapid charging cable",
                "30 Air Watts of verified cleaning power",
                "Fade-free lithium-ion battery (15-minute high-torque runtime)",
                "Hard-shell carrying case (glovebox-ready storage)",
                "Spare H11 filter (6-month replacement cycle)",
                "Pet brush attachment (agitates woven-in dog hair from upholstery)",
                "Flexible extension hose (reaches deep trunk areas)"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Belief Statements */}
          <div className="space-y-3 p-4 sm:p-6 bg-background rounded border border-border/50">
            <h4 className="font-bold text-sm text-primary">Why You'll Love It:</h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="text-muted-foreground">
                <span className="text-foreground font-semibold">✓</span> Quality tools should be accessible to everyone, not just professionals.
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground font-semibold">✓</span> We stand behind our products with a lifetime warranty and free replacement guarantee.
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground font-semibold">✓</span> Great design should be intuitive, beautiful, and fit in your glovebox.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
            <button className="w-full cta-primary text-base sm:text-lg py-3 sm:py-4 font-bold tracking-wide">
              SECURE YOUR PRO BUNDLE NOW
            </button>
            <p className="text-center text-xs text-muted-foreground">
              🔒 Secure checkout • 30-day satisfaction guarantee
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 text-xs text-muted-foreground flex-wrap">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">Verified Secure</span>
              <span className="sm:hidden">Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              <span className="hidden sm:inline">30-Day Guarantee</span>
              <span className="sm:hidden">30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
