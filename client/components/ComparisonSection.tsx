const testResults = [
  {
    test: "Sand Test - First Pass Clearance",
    description: "Pour beach sand onto carpeting, run vacuum once",
    result: "91% cleared",
  },
  {
    test: "Sand Test - Second Pass",
    description: "Run vacuum across same area again",
    result: "98% cleared",
  },
  {
    test: "Smoke Chamber Test",
    description: "Theatrical smoke pumped into intake",
    result: "Zero visible emissions",
  },
  {
    test: "Filter Contamination Test",
    description: "Visual inspection after full car interior cleaning",
    result: "Captured dark particles (99.5%)",
  },
];

function CheckIcon() {
  return (
    <svg className="w-6 h-6 text-secondary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-6 h-6 text-muted-foreground mx-auto opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function ComparisonSection() {
  return (
    <section id="proof" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Over 2 Million People Upgraded</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we compare to cheap alternatives and premium competitors
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Feature</th>
                <th className="text-center py-4 px-4">
                  <div className="text-sm font-semibold text-muted-foreground mb-1">Cheap Generic</div>
                  <div className="text-xs text-muted-foreground">Low Quality</div>
                </th>
                <th className="text-center py-4 px-4">
                  <div className="text-sm font-semibold text-muted-foreground mb-1">High-End Tech Brand</div>
                  <div className="text-xs text-muted-foreground">Premium Price</div>
                </th>
                <th className="text-center py-4 px-4 bg-primary/10 rounded-t-lg">
                  <div className="text-sm font-bold text-primary mb-1">Our 4-in-1 Tool</div>
                  <div className="text-xs text-primary">Best Value</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((item, index) => (
                <tr key={index} className="border-b border-border/50 hover:bg-card/50 transition-colors">
                  <td className="py-4 px-4 text-sm font-medium">{item.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {item.cheap ? <CheckIcon /> : <XIcon />}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {item.premium ? <CheckIcon /> : <XIcon />}
                  </td>
                  <td className="py-4 px-4 text-center bg-primary/5">
                    {item.ours ? <CheckIcon /> : <XIcon />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-2xl font-bold mb-8 text-center">Customer Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Mitchell",
                role: "Professional Detailer",
                quote: "This tool changed how I work. Faster, cleaner, and my clients notice the difference immediately.",
              },
              {
                name: "James Rodriguez",
                role: "Car Enthusiast",
                quote: "Finally, a product that delivers on its promises. Worth every penny and then some.",
              },
              {
                name: "Emma Chen",
                role: "Restoration Expert",
                quote: "Precision engineering at its finest. This is the standard I compare all others against.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-secondary fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
