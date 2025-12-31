export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="section-padding container-max">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-block">
              <p className="text-sm md:text-base text-primary font-semibold">ADVICE FROM A PROFESSIONAL DETAILER</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The 60-Second Reset Tool
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg italic">
              "Designed to Fit Anywhere"
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Discover why professionals and everyday users are switching to the ultimate cleaning and detailing solution. Engineered for precision, built for longevity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button className="cta-primary">GET THE RESET TOOL</button>
              <button className="cta-button border border-primary text-primary hover:bg-primary/10">
                LEARN MORE
              </button>
            </div>
          </div>
          
          <div className="relative w-full aspect-square md:aspect-auto flex items-center justify-center">
            <div className="w-full h-full bg-card rounded-lg overflow-hidden flex items-center justify-center min-h-96">
              <div className="text-center text-muted-foreground">
                <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p>Hero Image - Designed to Fit Anywhere</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
