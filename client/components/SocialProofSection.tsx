export default function SocialProofSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Professional Detailer",
      rating: 5,
      quote: "After just 3 days of use, I noticed the air quality in my car improved dramatically. It's like breathing clean, filtered air every time I drive.",
      avatar: "SM"
    },
    {
      name: "David Chen",
      role: "Busy Parent",
      rating: 5,
      quote: "I've had back issues for ages, but this one tool finally kicked them to the curb. Whether I'm at my desk, in my car, or on road trips—I can't live without it.",
      avatar: "DC"
    },
    {
      name: "Jessica Torres",
      role: "Home Cleaner",
      rating: 5,
      quote: "The 4-in-1 functionality is a game-changer. No more buying separate tools. This literally does it all and fits in my glovebox!",
      avatar: "JT"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-card/30">
      <div className="space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">What Customers Say</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            See the Results Others Are Experiencing
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Thousands of satisfied customers have transformed their cleaning routine
          </p>
        </div>

        {/* Before/After Results Grid */}
        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-2xl sm:text-3xl font-bold">Real Results, Real People</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden aspect-square flex items-center justify-center">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-muted-foreground opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-2xl sm:text-3xl font-bold">Customer Stories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg p-6 sm:p-8 space-y-4 border border-border/50">
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
              { number: "64,000+", label: "Happy Customers" },
              { number: "91%", label: "Sand Clearance" },
              { number: "99.5%", label: "Particle Filtration" },
              { number: "4-in-1", label: "Multi-Functions" }
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
          <h3 className="text-2xl sm:text-3xl font-bold">Why Choose Mini Vacuum Pro?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Professional-Grade Technology",
                description: "H11 HEPA sealed-gasket filtration and 30 verified air watts outperform cheap alternatives by a landslide."
              },
              {
                title: "4-in-1 Versatility",
                description: "One tool replaces vacuum, blower, inflator, and pump—saving you space and money on multiple purchases."
              },
              {
                title: "Portable & Convenient",
                description: "Just 11 inches and 0.8 pounds—fits in your glovebox for instant access whenever you need it."
              },
              {
                title: "Tested & Verified",
                description: "Rigorous testing including sand tests, smoke chamber tests, and real-world performance validation."
              },
              {
                title: "Washable Filter",
                description: "No subscription costs or recurring filter replacements—just rinse and reuse for years."
              },
              {
                title: "30-Day Money Back",
                description: "Try it risk-free. If you're not satisfied, we'll refund your money—no questions asked."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-card rounded-lg p-6 border border-border/50 space-y-2">
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
