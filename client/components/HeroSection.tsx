export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="section-padding">
        {/* Author and Date */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/30 border border-primary flex items-center justify-center flex-shrink-0">
            <span className="text-primary font-bold">JD</span>
          </div>
          <div className="text-xs sm:text-sm">
            <p className="font-semibold text-foreground">John Davidson</p>
            <p className="text-muted-foreground">January 3, 2026 | Health & Home</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2">
                <p className="text-sm sm:text-base font-bold uppercase tracking-widest text-secondary">TRENDING</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Can a Simple 4-in-1 Tool Really Stop You From Breathing Recirculated Dust Every Time You Clean?
                </h1>
              </div>

              <p className="text-lg sm:text-xl font-semibold text-foreground">
                Health experts say yes — and thousands of parents are already making the switch.
              </p>

              <div className="space-y-6 pt-4">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    A Question That Made Me Look at My Vacuum Differently
                  </h2>
                  <div className="space-y-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
                    <p>It wasn't a dramatic moment.</p>
                    <p>It wasn't a news article.</p>
                    <p>It was just a comment buried in a parenting forum that stopped me cold:</p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-primary pl-4 py-2 text-base sm:text-lg italic text-foreground">
                  "Your handheld vacuum is probably making your kids' allergies worse."
                </div>

                <div className="space-y-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <p>At first, I dismissed it.</p>
                  <p>Then I kept seeing similar comments. Different people. Same warning.</p>
                </div>

                <div className="space-y-2 text-base sm:text-lg italic text-muted-foreground">
                  <p>"Cheap vacuums blow dust back in your face."</p>
                  <p>"Most handhelds don't filter anything—they just move particles around."</p>
                  <p>"Check your filter after cleaning. If it's still white, you're breathing everything you just vacuumed."</p>
                </div>

                <div className="space-y-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <p>That's when I started wondering:</p>
                </div>

                <div className="space-y-3 text-base sm:text-lg text-foreground font-semibold leading-relaxed">
                  <p>What if I've been doing this all wrong?</p>
                  <p>What if the tool I'm using to "protect" my kids is actually contaminating the air they breathe?</p>
                  <p>Am I missing something obvious that everyone else already knows?</p>
                </div>

                <div className="space-y-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <p>So I decided to dig deeper.</p>
                  <p>And what I found changed how I think about cleaning forever.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image & Featured Benefits */}
          <div className="space-y-6">
            {/* Product Image with Background */}
            <div className="w-full bg-gradient-to-br from-primary to-primary/70 rounded-lg overflow-hidden p-8 sm:p-12 flex items-center justify-center aspect-square sm:aspect-auto border border-primary/20">
              <div className="text-center text-primary-foreground w-full h-full flex items-center justify-center">
                <svg className="w-24 h-24 sm:w-32 sm:h-32 mx-auto opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Featured Highlight - What's Included */}
            <div className="space-y-4 bg-blue-50 rounded-lg p-6 border border-primary/20">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Quick Summary</p>
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">The Solution Is Simpler Than You Think</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    You don't need a $400 Dyson. You don't need professional detailing every month. You just need a tool that actually traps what it claims to clean.
                  </p>
                </div>
                <ul className="space-y-2 mt-4">
                  {[
                    "H11 HEPA sealed-gasket filtration system",
                    "30 verified Air Watts of cleaning power",
                    "91% sand removal on first pass",
                    "4-in-1 multi-tool functionality",
                    "Compact: 11 inches, 0.8 pounds"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm sm:text-base">
                      <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
