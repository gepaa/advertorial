export default function OfferSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-card/50">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        {/* Main Offer Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Product Image */}
          <div className="order-2 lg:order-1">
            <div className="w-full bg-gradient-to-br from-primary to-primary/70 rounded-lg overflow-hidden p-8 sm:p-12 flex items-center justify-center aspect-square">
              <div className="text-center text-primary-foreground w-full h-full flex items-center justify-center">
                <svg className="w-24 h-24 sm:w-32 sm:h-32 mx-auto opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Offer Details */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            {/* Highlight Box - Yellow/Golden */}
            <div className="bg-yellow-100/30 border-2 border-yellow-400 rounded-lg p-4 sm:p-6 space-y-2 sm:space-y-3">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-yellow-700">
                ⚡ Limited Time Offer
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">
                50% OFF Your First Purchase
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Regular Price: <span className="line-through">$99.99</span><br />
                <span className="text-xl sm:text-2xl font-bold text-secondary">Today Only: $49.99</span>
              </p>
            </div>

            {/* What's Included */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-bold text-lg sm:text-xl">What's Included in the Pro Bundle:</h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "TurbinePro 4-in-1 Multi-Tool (Vacuum/Blower/Inflator/Pump)",
                  "H11 HEPA sealed-gasket filter (washable & reusable)",
                  "Complete attachment set: crevice nozzle, brush head, inflator nozzle",
                  "USB-C rapid charging cable",
                  "Hard-shell carrying case (glovebox-ready storage)",
                  "30-day satisfaction guarantee"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              <button className="w-full cta-primary py-4 sm:py-5 text-lg sm:text-xl font-bold tracking-wide rounded-lg">
                SECURE YOUR 50% DISCOUNT NOW →
              </button>
              <p className="text-center text-xs sm:text-sm text-muted-foreground">
                🔒 Secure checkout - Risk-free 30-day guarantee
              </p>
            </div>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="bg-primary/10 border border-primary rounded-lg p-6 sm:p-8 space-y-4 sm:space-y-6 text-center">
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold">This Special Sale is Time-Sensitive</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Once this promotional period ends, pricing returns to full retail.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-6 sm:gap-8 py-4 sm:py-6">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary">47</div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-1">HOURS</div>
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-muted-foreground">:</div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary">58</div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-1">MINUTES</div>
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-muted-foreground">:</div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary">32</div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-1">SECONDS</div>
            </div>
          </div>

          <a href="#" className="inline-block text-primary hover:text-primary/80 text-xs sm:text-sm font-semibold underline transition-colors">
            Check availability in your area
          </a>
        </div>

        {/* Trust Section */}
        <div className="bg-card border border-border rounded-lg p-6 sm:p-8 space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-center">Why You Can Buy with Confidence</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: "🛡️",
                title: "Risk-Free 30-Day Guarantee",
                text: "Test it in your car, at your desk, in your home. If the air quality improvement isn't noticeable, return it for a complete refund—no questions asked."
              },
              {
                icon: "⭐",
                title: "Trusted by Professionals",
                text: "Auto detailers, cleaning experts, and health-conscious families rely on TurbinePro. Thousands of verified 5-star reviews."
              },
              {
                icon: "🔒",
                title: "Secure Encrypted Checkout",
                text: "Your payment information is fully encrypted. We never store credit card data on our servers."
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="text-3xl">{item.icon}</div>
                <h4 className="font-bold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
