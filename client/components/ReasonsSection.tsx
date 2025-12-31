interface Reason {
  number: number;
  title: string;
  description: string;
  highlight?: string;
}

const reasons: Reason[] = [
  {
    number: 1,
    title: "Unmatched Durability",
    description: "Built with premium materials and sealed gasket technology, this tool is engineered to last a lifetime. The polycarbonate construction withstands daily heavy use without degradation.",
    highlight: "Sealed Gasket System"
  },
  {
    number: 2,
    title: "30 Air Watts of Power",
    description: "Professional-grade suction power that outperforms competitors by 3x. Delivers consistent performance for deep cleaning and detailing that rivals commercial equipment.",
    highlight: "30 AW Power Rating"
  },
  {
    number: 3,
    title: "H11 HEPA Filtration",
    description: "Advanced multi-stage filtration system captures 99.97% of particles, protecting both your workspace and the environment. Designed for sensitive environments.",
    highlight: "H11 Certified Filter"
  },
  {
    number: 4,
    title: "Universal Compatibility",
    description: "Works seamlessly with all standard fittings and adapters. Connect to any compatible cleaning system. One tool for all your needs.",
    highlight: "Works Anywhere"
  },
  {
    number: 5,
    title: "USB-C Fast Charging",
    description: "Gone are the days of waiting hours for your tool to charge. Full battery in just 20 minutes with our advanced charging technology.",
    highlight: "20-Minute Full Charge"
  },
  {
    number: 6,
    title: "Customer Love Is Real",
    description: "Over 2 million satisfied customers worldwide. Join professionals and enthusiasts who have made this their go-to solution. 5-star rated across all platforms.",
    highlight: "2M+ Happy Customers"
  },
  {
    number: 7,
    title: "30% Off for Early Adopters",
    description: "Secure your unit today with an exclusive early-bird discount. This offer is limited and won't last long. Premium bundle included.",
    highlight: "Limited Time Offer"
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
