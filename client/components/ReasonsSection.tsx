interface Reason {
  number: number;
  title: string;
  description: string;
  highlight?: string;
}

const reasons: Reason[] = [
  {
    number: 1,
    title: "The Invisible Enemy: Cheap Vacuums Are 'PM2.5 Cannons'",
    description: "When a vacuum lacks a sealed filtration system, it becomes a particulate redistribution device rather than a cleaning tool. The motor sucks in visible debris, but also inhales fine particulate matter measuring 2.5 microns or smaller—pollen, dust mite feces, mold spores, and allergen silt. They get sucked through the motor housing and blasted out the exhaust vent directly into your breathing zone. This is 'Blowback.' For parents cleaning car seats where kids' faces rest, this isn't just inefficient—it's actively contaminating the space you're trying to purify.",
    highlight: "PM2.5 Blowback"
  },
  {
    number: 2,
    title: "H11 HEPA-Grade Filtration: Laboratory-Standard Protection",
    description: "The solution required three specific engineering elements that consumer vacuums abandoned in favor of cheaper production costs: H11 HEPA-Grade Filtration captures 99.5% of particles down to 0.3 microns, Sealed-Gasket Construction prevents any air bypass around the filter, and Cyclonic Pre-Separation drops heavy debris before it reaches the filter, preventing premature clogging.",
    highlight: "99.5% Particle Capture"
  },
  {
    number: 3,
    title: "Why 'Air Watts' Matter More Than Fake Suction Claims",
    description: "Walk into any big-box store and you'll see handhelds screaming about their '12,000Pa!' or '15,000Pa!' suction power. Here's what they're not telling you: Pascals measure sealed suction—the static pressure when the inlet is completely blocked. It's useless for actual cleaning. The honest metric is Air Watts (AW), which measures both suction pressure and airflow volume. It's the difference between a fire hose (high flow, real cleaning power) and a syringe (high pressure, zero practical use).",
    highlight: "30 Verified Air Watts"
  },
  {
    number: 4,
    title: "The 4-in-1 Functionality: One Tool Replaces Everything",
    description: "Vacuum—reaches between seat rails and into door bins. Blower—clears HVAC vents, detaches dust from piano black trim, cleans PC keyboards and camera sensors. Inflator—pool floats, air mattresses, beach balls, bicycle tires. Deflator/Pump—vacuum-sealing travel bags, compressing sleeping bags, extracting air from storage containers. One tool replaces a handheld vacuum ($30), monthly compressed air cans ($72/year), a portable air pump ($25), and professional car detailing visits ($80–$200 per visit).",
    highlight: "Swiss Army Knife Versatility"
  },
  {
    number: 5,
    title: "The Sand Test: Professional-Grade Proof",
    description: "Professional detailers use the Sand Test to separate functional tools from 'e-waste': Pour beach sand onto automotive carpeting and run the vacuum across it in a single pass. Cheap handhelds leave 40–60% behind. High-torque motors with proper suction lift 85–95%. This tool cleared 91% of sand on the first pass and 98% on the second—performance that rivals corded shop-vacs despite the cordless form factor.",
    highlight: "91% Clearance (First Pass)"
  },
  {
    number: 6,
    title: "The Smoke Chamber Test: Sealed Filtration Proof",
    description: "Pump theatrical smoke into the vacuum's intake while running. If the exhaust is clear, filtration is sealed. If smoke pours out, you're breathing whatever you just 'cleaned.' The H11 sealed-gasket system passed this test with zero visible smoke emission—a result less than 15% of consumer handhelds achieve. After vacuuming a full car interior, the H11 filter turns from white to dark grey, capturing the 'invisible enemy' that would otherwise recirculate into your breathing space.",
    highlight: "Zero Visible Emissions"
  },
  {
    number: 7,
    title: "The Glovebox-Ready Sanity Restoration Device",
    description: "Measures 11 inches long and weighs 0.8 pounds—roughly the size of a Contigo water bottle. Charges via USB-C in 2.5 hours using the same cable that powers your phone or laptop. The polycarbonate body is impact-resistant, rated to survive a 4-foot drop onto concrete. The motor is acoustically dampened to reduce the high-pitched whine common in budget units. The H11 filter is washable, so there's no recurring filter subscription cost—just rinse it every 3-4 weeks and reinstall.",
    highlight: "Fits in Your Glovebox"
  }
];

export default function ReasonsSection() {
  return (
    <section id="benefits" className="section-padding bg-card/50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">7 Reasons Why Professionals Choose This Tool</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the features that set this apart from generic alternatives
          </p>
        </div>

        <div className="space-y-16 md:space-y-20">
          {reasons.map((reason, index) => {
            const isImageLeft = index % 2 === 0;
            
            return (
              <div key={reason.number} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image */}
                <div className={`relative ${!isImageLeft && "md:order-2"}`}>
                  <div className="bg-background rounded-lg overflow-hidden aspect-square flex items-center justify-center min-h-96">
                    <div className="text-center text-muted-foreground">
                      <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p>Reason {reason.number} Visual</p>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`space-y-4 ${!isImageLeft && "md:order-1"}`}>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl md:text-6xl font-bold text-primary">{reason.number}</span>
                    <h3 className="text-2xl md:text-3xl font-bold">{reason.title}</h3>
                  </div>
                  
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                  
                  {reason.highlight && (
                    <div className="pt-2">
                      <span className="inline-block px-4 py-2 bg-primary/20 border border-primary text-primary rounded text-sm font-semibold">
                        {reason.highlight}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
