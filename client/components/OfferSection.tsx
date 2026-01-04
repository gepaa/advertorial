export default function OfferSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        {/* Main Offer Box */}
        <div className="space-y-8 sm:space-y-12">
          {/* What's Included */}
          <div className="bg-blue-50 border border-primary/20 rounded-lg p-6 sm:p-8 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center">
              What's Included:
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                "✓ VORTIX 4-in-1 Multi-Tool",
                "✓ H11 HEPA sealed-gasket filter (washable & reusable)",
                "✓ Complete attachment set (crevice nozzle, brush, inflator)",
                "✓ USB-C charging cable",
                "✓ Hard-shell carrying case",
                "✓ 30-day money-back guarantee"
              ].map((item, index) => (
                <li key={index} className="text-base sm:text-lg text-foreground flex items-start gap-3">
                  <span className="text-secondary flex-shrink-0 font-bold">{item.split('✓')[0]}</span>
                  <span>{item.split('✓')[1]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <button className="w-full sm:w-auto cta-primary px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-lg whitespace-nowrap">
              CLAIM YOUR 50% DISCOUNT →
            </button>
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              🔒 Secure checkout • Risk-free 30-day guarantee
            </p>
          </div>
        </div>

        {/* Trust & Confidence Section */}
        <div className="border-t border-gray-200 pt-12 sm:pt-16 space-y-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-center">
            Why You Can Buy with Confidence
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "🛡️",
                title: "Risk-Free 30-Day Guarantee",
                text: "Test it in your car, at your desk, in your home. If the air quality improvement isn't noticeable, return it for a complete refund—no questions asked."
              },
              {
                icon: "⭐",
                title: "Trusted by Thousands",
                text: "Auto detailers, cleaning experts, and health-conscious families rely on VORTIX. Verified by real customers and professional testing."
              },
              {
                icon: "🔒",
                title: "Secure & Private",
                text: "Your payment information is fully encrypted. We never store credit card data on our servers."
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-2 sm:space-y-3">
                <div className="text-4xl sm:text-5xl">{item.icon}</div>
                <h4 className="font-bold text-foreground text-lg">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
