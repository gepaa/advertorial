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

export default function ComparisonSection() {
  return (
    <section id="proof" className="section-padding">
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-4xl font-bold">Extraordinary Claims Require Empirical Evidence</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Professional detailers use two primary tests to separate functional tools from "e-waste". Here's how this tool performs:
          </p>
        </div>

        {/* Test Results Grid */}
        <div className="space-y-4 sm:space-y-6">
          {testResults.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4 sm:p-6 space-y-2">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1 flex-1">
                  <h3 className="font-bold text-sm sm:text-base">{item.test}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="inline-block px-2 sm:px-3 py-1 bg-secondary/20 border border-secondary text-secondary rounded text-xs sm:text-sm font-bold">
                    {item.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Marcus Chen Story */}
        <div className="space-y-4 sm:space-y-6 px-4 sm:px-0 py-6 sm:py-8 border-y border-border">
          <h3 className="text-xl sm:text-2xl font-bold">How A Weekend Detailer Cracked The Code</h3>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              A weekend auto detailer from Arizona named Marcus Chen maintained a showroom-quality Tesla Model 3 and spent hours learning professional techniques. But he had a problem: his allergies were getting progressively worse, and his doctor couldn't figure out why.
            </p>
            <p>
              <span className="text-foreground font-semibold">The culprit? His "convenient" cordless handheld vacuum.</span>
            </p>
            <p>
              Marcus realized that every time he cleaned his car's air vents—those narrow slats where conventional vacuum nozzles can't fit—he'd experience immediate sinus irritation. He started researching industrial filtration systems and discovered the truth about PM2.5 re-emission.
            </p>
            <p>
              Marcus partnered with a manufacturer to create what he needed: a tool that would fit in a glovebox but perform like professional equipment. The result was a polycarbonate-bodied 4-in-1 device that weighed less than a water bottle but delivered what cheap vacuums never could—genuine capture, not just displacement.
            </p>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
          <h3 className="text-xl sm:text-2xl font-bold">This Single Tool Replaces:</h3>
          <div className="space-y-2">
            {[
              "A handheld vacuum ($30)",
              "Monthly compressed air cans ($72/year)",
              "A portable air pump ($25)",
              "Professional car detailing visits ($80–$200 per visit)"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
