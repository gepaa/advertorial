export default function SocialProofSection() {
  const testimonials = [
    {
      name: "Jessica Torres",
      role: "Health-Conscious Parent",
      rating: 5,
      quote: "I have two kids with asthma and never realized our old vacuum was making things worse. After switching to TurbinePro, their symptoms improved within days. The filter proof is undeniable—it turned black after cleaning our car once.",
      avatar: "JT"
    },
    {
      name: "David Chen",
      role: "Auto Detailing Specialist",
      rating: 5,
      quote: "I'm a professional detailer and this tool lives in my center console now. The blower function alone has saved me over $80 in compressed air cans in three months. The suction is legit—passes the sand test every time.",
      avatar: "DC"
    },
    {
      name: "Sarah Mitchell",
      role: "Overwhelmed Parent",
      rating: 5,
      quote: "My seasonal allergies used to flare up every time I cleaned my car. Not anymore. This sealed filtration system is the real deal. I bought two more—one for home and one as a gift.",
      avatar: "SM"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="space-y-16 sm:space-y-20 max-w-5xl mx-auto">
        {/* SECTION 9: THE BENEFITS */}
        <div className="space-y-12">
          <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              The Benefits Add Up Fast
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="space-y-8">
            {/* Benefit 1: Cleaner Air */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Cleaner Air for Your Family
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                When particles are actually captured instead of recirculated, your kids breathe cleaner air. That means fewer allergy flare-ups, less morning congestion, and reduced asthma triggers.
              </p>
            </div>

            {/* Benefit 2: Visible Proof */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Visible Proof It's Working
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                After cleaning a car interior or workspace, the H11 filter turns from white to dark grey. That's the "invisible enemy" you'd normally be breathing—now trapped where it belongs.
              </p>
            </div>

            {/* Benefit 3: Multi-Functional */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Multi-Functional Design Saves Money
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                The 4-in-1 capability (vacuum, blower, inflator, pump) eliminates recurring costs:
              </p>
              <ul className="space-y-2 text-base sm:text-lg">
                {[
                  "No more $6 compressed air cans every month",
                  "No more $80–$200 professional detailing visits",
                  "One tool replaces four separate purchases"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefit 4: Compact */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Compact & Always Ready
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                At 11 inches and 0.8 pounds, it fits in your glovebox or desk drawer. See a crumb? Handle it in 60 seconds. No dragging out extension cords or bulky equipment.
              </p>
            </div>

            {/* Benefit 5: Tested */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Backed by Real Testing
              </h3>
              <ul className="space-y-2 text-base sm:text-lg">
                {[
                  "Sand Test: 91% clearance on first pass",
                  "Smoke Chamber Test: Zero visible exhaust emissions",
                  "30 Air Watts: Verified cleaning power (not fake Pascal claims)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* VALIDATION TESTS */}
        <div className="space-y-6 sm:space-y-8 border-t border-gray-200 pt-12 sm:pt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center">The Proof Is in the Testing</h3>
          <p className="text-base sm:text-lg text-muted-foreground text-center">
            Extraordinary claims require measurable proof. Professional detailers use two standard tests to separate real tools from disposable junk.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border/50 space-y-3">
              <h4 className="font-bold text-lg">The Sand Test</h4>
              <p className="text-sm text-muted-foreground">
                Pour one cup of beach sand onto automotive carpet. Run the vacuum over it in a single pass. Budget handhelds leave 40–60% of sand behind because they lack the airflow to dislodge embedded particles. TurbinePro cleared 91% of sand on the first pass and 98% on the second—performance that rivals corded shop-vacs despite being completely portable.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border/50 space-y-3">
              <h4 className="font-bold text-lg">The Smoke Chamber Test</h4>
              <p className="text-sm text-muted-foreground">
                Pump theatrical smoke into the vacuum's intake while it's running. If the exhaust air is clear, the filtration is sealed. If smoke pours out the back, you're breathing everything you just tried to clean. TurbinePro's H11 sealed-gasket system passed this test with zero visible smoke emission—a result fewer than 15% of consumer handhelds achieve.
              </p>
            </div>
          </div>
        </div>

        {/* CUSTOMER TESTIMONIALS */}
        <div className="space-y-8 border-t border-gray-200 pt-12 sm:pt-16">
          <div className="text-center space-y-3 sm:space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold">Customer Stories</h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Thousands of families have transformed the air quality in their homes and vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 sm:p-8 space-y-4 border border-gray-200">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base sm:text-lg text-foreground italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-primary/30 border border-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 13: THE BOTTOM LINE */}
        <div className="space-y-8 border-t border-gray-200 pt-12 sm:pt-16">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center">
              The Bottom Line
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <p>
                Sometimes the simplest solutions are the most powerful.
              </p>
              <p>
                You don't need a $400 Dyson.
              </p>
              <p>
                You don't need professional detailing every month.
              </p>
              <p>
                You just need a tool that actually traps what it claims to clean.
              </p>
            </div>
          </div>

          {/* If You've Been... */}
          <div className="bg-blue-50 border border-primary/20 rounded-lg p-6 sm:p-8 space-y-4">
            <p className="font-semibold text-foreground text-lg">If you've been:</p>
            <ul className="space-y-3 text-base sm:text-lg">
              {[
                "Sneezing or getting congestion after vacuuming",
                "Noticing your kids' allergies flare up in the car",
                "Frustrated by bulky vacuums that can't reach tight spaces",
                "Wasting money on compressed air cans and detailing visits"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-secondary font-bold mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Final Statement */}
          <div className="text-center space-y-4">
            <p className="text-lg sm:text-xl font-semibold text-foreground">
              This might be the easiest change you ever make.
            </p>
            <p className="text-lg sm:text-xl text-foreground font-bold">
              Because breathing cleaner air changes everything.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-8 sm:pt-12">
          <button className="cta-primary px-8 py-4 font-bold text-lg">
            EXPLORE THE TURBINEPRO SOLUTION →
          </button>
        </div>
      </div>
    </section>
  );
}
