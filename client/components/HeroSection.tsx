export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="section-padding">
        <div className="space-y-6 sm:space-y-8">
          {/* Hero Image - Mobile First */}
          <div className="w-full bg-card rounded-lg overflow-hidden flex items-center justify-center aspect-video sm:aspect-auto">
            <div className="text-center text-muted-foreground w-full h-full flex items-center justify-center">
              <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              7 Reasons Why Detailers are Ditching Their Shop-Vacs for This 'Surgical Strike' Tool
            </h1>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
              <p>
                The moment hit me in the parking lot of a soccer field.
              </p>

              <p>
                I'd just buckled my daughter into her car seat when I felt it—that unmistakable squish of something sticky wedged in the crevice where the buckle meets the cushion. I pulled my hand back to discover a substance I couldn't identify. Possibly a Goldfish cracker. Possibly something worse. Definitely something that had been fermenting in the 95-degree heat for an unknown number of days.
              </p>

              <p>
                That's when I realized: <span className="text-foreground font-semibold">my car had become a mobile petri dish.</span>
              </p>
            </div>

            <button className="w-full sm:w-auto cta-primary">CONTINUE READING</button>
          </div>
        </div>
      </div>
    </section>
  );
}
