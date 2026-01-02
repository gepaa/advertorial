interface Discovery {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  highlight?: string;
}

const discoveries: Discovery[] = [
  {
    number: 1,
    title: "Discovery #1",
    subtitle: "The Invisible Enemy: Fine Dust Destroys Your Health",
    description: "When a vacuum lacks sealed filtration, it becomes a particulate redistributor rather than a cleaning tool. The motor sucks in visible debris but also inhales fine PM2.5 particles—pollen, dust mite feces, mold spores. They get sucked through the motor and blasted back out into your breathing zone. For parents cleaning car seats where kids' faces rest, this isn't just inefficient—it's actively contaminating the space you're trying to purify. Most cheap vacuums lack H11 HEPA filtration, meaning they can actually make your indoor air quality worse.",
    highlight: "60% of Americans suffer from skin issues caused by poor air quality"
  },
  {
    number: 2,
    title: "Discovery #2",
    subtitle: "Suction Power Lies: Why Air Watts Trump Marketing Claims",
    description: "Walk into any store and you'll see handhelds screaming about their '12,000Pa!' suction power. Here's what they're not telling you: Pascals measure sealed suction—the static pressure when the inlet is completely blocked. It's useless for actual cleaning. The honest metric is Air Watts (AW), which measures both suction pressure AND airflow volume. It's the difference between a fire hose (high flow, real cleaning power) and a syringe (high pressure, zero practical use). Our 30 verified Air Watts outperforms 15,000Pa vacuums in real-world cleaning.",
    highlight: "30 Verified Air Watts vs. Marketing Claims"
  },
  {
    number: 3,
    title: "Discovery #3",
    subtitle: "The 4-in-1 Design: One Tool Replaces Everything",
    description: "A handheld vacuum is just that—a vacuum. But our mini tool becomes so much more. Vacuum function reaches between seat rails and into door bins. Blower mode clears HVAC vents, detaches dust from trim, cleans keyboards and camera sensors. Inflator pumps pool floats, air mattresses, and bicycle tires. Deflator compresses travel bags and sleeping bags. One $199 tool replaces a $30 handheld vacuum + monthly compressed air cans ($72/year) + a $25 air pump + professional detailing ($100-$200 per visit). That's true value.",
    highlight: "Replaces 4 Separate Tools"
  }
];

export default function ReasonsSection() {
  return (
    <section id="benefits" className="section-padding bg-gradient-to-b from-background to-card/30">
      <div className="space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-8 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Why It Works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Three Key Discoveries About Mini Vacuum Technology
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Our research uncovered what manufacturers don't want you to know
          </p>
        </div>

        {/* Discoveries */}
        {discoveries.map((discovery, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <div key={discovery.number} className="space-y-6 sm:space-y-8">
              {/* Grid Layout - Image and Text */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image */}
                <div className={`w-full bg-card rounded-lg overflow-hidden flex items-center justify-center aspect-video ${!isImageLeft ? "lg:order-2" : ""}`}>
                  <div className="text-center text-muted-foreground w-full h-full flex items-center justify-center">
                    <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`space-y-4 sm:space-y-6 ${isImageLeft ? "" : "lg:order-1"}`}>
                  <div className="space-y-2">
                    <p className="text-sm font-bold uppercase tracking-widest text-primary">{discovery.title}</p>
                    <h3 className="text-2xl sm:text-3xl font-bold leading-tight">{discovery.subtitle}</h3>
                  </div>

                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {discovery.description}
                  </p>

                  {discovery.highlight && (
                    <div className="pt-2">
                      <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-primary/10 border border-primary rounded text-primary font-bold text-sm sm:text-base">
                        {discovery.highlight}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
