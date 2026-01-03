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
    subtitle: "The \"PM2.5 Cannon\" Effect: Your Cheap Vacuum Is Making Your Air Quality Worse",
    description: "Here's the physics problem that budget vacuum brands hope you never learn about. When a vacuum lacks a sealed filtration system, it doesn't actually remove contaminants—it redistributes them. The motor sucks in visible debris like crumbs and pet hair, but it also pulls in something far more dangerous: microscopic particles measuring 2.5 microns or smaller. These particles are called PM2.5, and they include pollen, dust mite waste, mold spores, and fine allergen silt. You can't see them with the naked eye. But in an unsealed vacuum, they get pulled through the motor housing and immediately blasted out the exhaust vent—directly into the air you and your family breathe. For parents cleaning car seats where their children's faces rest, this isn't just inefficient cleaning—it's actively contaminating the micro-environment you're trying to protect.",
    highlight: "60% of Americans experience respiratory issues linked to poor indoor air quality"
  },
  {
    number: 2,
    title: "Discovery #2",
    subtitle: "The Suction Power Lie: Why \"Air Watts\" Matter More Than Marketing Claims",
    description: "Walk into any store and you'll see handheld vacuums advertising \"12,000Pa!\" or \"15,000Pa!\" suction power in bold letters. Here's what those numbers actually mean: nothing. Pascals measure sealed suction—the static pressure generated when the vacuum's inlet is completely blocked. It's a metric designed to sound impressive, but it has zero relationship to real-world cleaning ability. You could create a vacuum with 20,000Pa by shrinking the inlet down to the size of a pinhole. It would have enormous pressure but couldn't move a single crumb because there's no airflow. The honest metric—the one professional equipment manufacturers use—is Air Watts (AW). Air Watts measure the actual work a vacuum performs by calculating both suction pressure AND airflow volume. It's the difference between a fire hose (high volume, real cleaning power) and a medical syringe (high pressure, useless for cleaning). At 30 verified Air Watts, TurbinePro delivers suction power comparable to early Dyson cordless models—but in a device that fits in your glovebox.",
    highlight: "30 Verified Air Watts vs. Marketing Claims"
  },
  {
    number: 3,
    title: "Discovery #3",
    subtitle: "The 4-in-1 Design: One Device That Replaces Four Expensive Tools",
    description: "Most handheld vacuums do one thing: vacuum. And they do it poorly. TurbinePro was engineered with a fundamentally different value equation. Function 1: Vacuum—The precision nozzle reaches into the spaces where bulky shop-vac attachments can't fit: between car seat rails, inside door pockets, along keyboard rows, under couch cushions. Parents use it for the \"60-second reset\" between errands. Function 2: Blower—This is the function that converts skeptics into believers. Instead of spending $6 per can on compressed air (and replacing them monthly), the blower mode delivers unlimited bursts. It clears dust from dashboard vents, dislodges particles from electronics, and eliminates the recurring cost of aerosol cans entirely. Function 3: Inflator—Pool floats, air mattresses, bicycle tires, yoga balls, camping gear. Users report inflating a queen-size air mattress in under three minutes. Function 4: Deflator—Vacuum-sealing storage bags, compressing sleeping bags for travel, removing air from food containers. When you do the math, this single device replaces a handheld vacuum ($30–$50), recurring compressed air cans ($72–$100/year), a portable air pump ($25–$40), and professional car detailing sessions ($80–$200 per visit).",
    highlight: "Replaces 4 Separate Tools"
  }
];

export default function ReasonsSection() {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-8 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Why It Works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Three Key Discoveries About Handheld Vacuum Technology
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Our research uncovered what discount vacuum manufacturers don't want you to know
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
