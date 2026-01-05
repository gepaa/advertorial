export default function OfferSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
        {/* Main Offer */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-12 sm:mb-16">
            Limited-Time Offer: 50% Off
          </h2>

          {/* Product Image & Benefit Copy */}
          <div className="space-y-6 sm:space-y-8">
            {/* Product Image Placeholder */}
            <div className="max-w-md mx-auto">
              <div className="w-full bg-gray-100 border border-gray-200 rounded-lg overflow-hidden p-8 sm:p-10 flex items-center justify-center aspect-square">
                <div className="text-center text-muted-foreground space-y-4">
                  <svg
                    className="w-20 h-20 sm:w-24 sm:h-24 mx-auto opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm font-semibold text-foreground">
                    Product Image
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit Copy */}
            <div className="space-y-4 text-center">
              <p className="text-xl sm:text-2xl font-bold text-primary">
                VORTIX 4-in-1
              </p>
              <p className="text-lg sm:text-xl font-semibold text-foreground leading-relaxed">
                Breathe Cleaner Air, Protect Your Family's Health
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
                With H11 HEPA sealed-gasket filtration, you'll finally know that
                what you're cleaning stays trapped—not recirculated into the air
                your family breathes. Professional-grade performance in a tool
                that fits in your glovebox.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-4 sm:gap-6 pt-4">
              <button className="w-full sm:w-auto cta-primary px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-lg whitespace-nowrap">
                CLAIM YOUR 50% DISCOUNT →
              </button>
              <p className="text-xs sm:text-sm text-muted-foreground text-center">
                🔒 Secure checkout • Risk-free 30-day guarantee
              </p>
            </div>
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
                text: "Test it in your car, at your desk, in your home. If the air quality improvement isn't noticeable, return it for a complete refund—no questions asked.",
              },
              {
                icon: "⭐",
                title: "Trusted by Thousands",
                text: "Auto detailers, cleaning experts, and health-conscious families rely on VORTIX. Verified by real customers and professional testing.",
              },
              {
                icon: "🔒",
                title: "Secure & Private",
                text: "Your payment information is fully encrypted. We never store credit card data on our servers.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-2 sm:space-y-3">
                <div className="text-4xl sm:text-5xl">{item.icon}</div>
                <h4 className="font-bold text-foreground text-lg">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
