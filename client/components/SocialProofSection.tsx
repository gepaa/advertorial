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
      <div className="space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">What Customers Say</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            See the Results Others Are Experiencing
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Thousands of families have transformed the air quality in their homes and vehicles
          </p>
        </div>

        {/* Before/After Results Grid */}
        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-2xl sm:text-3xl font-bold">The Sand Test & Smoke Chamber Validation</h3>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Extraordinary claims require measurable proof. Professional detailers use two standard tests to separate real tools from disposable junk.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border/50 space-y-3">
              <h4 className="font-bold text-lg">The Sand Test</h4>
              <p className="text-sm text-muted-foreground">Pour one cup of beach sand onto automotive carpet. Run the vacuum over it in a single pass. Budget handhelds leave 40–60% of sand behind because they lack the airflow to dislodge embedded particles. TurbinePro cleared 91% of sand on the first pass and 98% on the second—performance that rivals corded shop-vacs despite being completely portable.</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border/50 space-y-3">
              <h4 className="font-bold text-lg">The Smoke Chamber Test</h4>
              <p className="text-sm text-muted-foreground">Pump theatrical smoke into the vacuum's intake while it's running. If the exhaust air is clear, the filtration is sealed. If smoke pours out the back, you're breathing everything you just tried to clean. TurbinePro's H11 sealed-gasket system passed this test with zero visible smoke emission—a result fewer than 15% of consumer handhelds achieve.</p>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-2xl sm:text-3xl font-bold">Customer Stories</h3>
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

        {/* Key Results Summary */}
        <div className="bg-primary/10 border border-primary rounded-lg p-8 sm:p-12 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold">By The Numbers</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { number: "64,000+", label: "Satisfied Customers" },
              { number: "91%", label: "Sand Clearance Rate" },
              { number: "99.5%", label: "Particle Capture Efficiency" },
              { number: "4-in-1", label: "Functionality" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-2xl sm:text-4xl font-bold text-primary">{stat.number}</div>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-2xl sm:text-3xl font-bold">Why Choose TurbinePro 4-in-1?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Professional-Grade Filtration Technology",
                description: "H11 HEPA sealed-gasket system and 30 verified Air Watts deliver performance that budget alternatives can't match."
              },
              {
                title: "4-in-1 Versatility Saves Money",
                description: "One tool replaces a vacuum, blower, inflator, and pump—eliminating the need for multiple purchases and recurring costs."
              },
              {
                title: "Compact & Always Ready",
                description: "Just 11 inches long and 0.8 pounds—fits in your glovebox, desk drawer, or closet for instant access."
              },
              {
                title: "Rigorously Tested & Verified",
                description: "Passes both the Sand Test (91% first-pass clearance) and Smoke Chamber Test (zero emissions)."
              },
              {
                title: "Washable Filter Eliminates Subscriptions",
                description: "No hidden costs or recurring filter purchases—just rinse, dry, and reinstall for years of use."
              },
              {
                title: "30-Day Money-Back Guarantee",
                description: "Try it risk-free. If you're not satisfied with the air quality improvement, return it for a full refund."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 space-y-2">
                <h4 className="font-bold text-lg">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
