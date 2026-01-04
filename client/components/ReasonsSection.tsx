export default function ReasonsSection() {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="space-y-16 sm:space-y-20 max-w-4xl mx-auto">
        {/* SECTION 3: THE PAIN */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Every Cleaning Session Felt the Same
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              I'd pull out my handheld vacuum to clean my daughter's car seat.
            </p>
            <p>
              Within 30 seconds, I'd start sneezing.
            </p>
            <p>
              My eyes would water. My throat would feel scratchy.
            </p>
            <p>
              And there was always that smell—like burning dust mixed with something chemical.
            </p>
            <p>
              I told myself it was normal.
            </p>
            <p className="italic">
              "That's just what vacuums smell like."
            </p>
            <p>
              But then I'd look at my daughter's face resting against that same car seat fabric.
            </p>
            <p>
              The same fabric I'd just "cleaned."
            </p>
            <p>
              And I couldn't shake the feeling that something was wrong.
            </p>
          </div>
        </div>

        {/* SECTION 4: THE REVELATION */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Then I Learned Something That Honestly Scared Me
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Your vacuum is supposed to remove contaminants from your environment.
            </p>
            <p>
              But when a vacuum lacks sealed filtration, it does something far worse:
            </p>
            <p className="font-semibold text-foreground text-lg">
              It turns into what engineers call a "PM2.5 Cannon."
            </p>
            <p>
              Here's how it works:
            </p>
          </div>

          {/* PM2.5 Cannon Explanation */}
          <div className="bg-blue-50 border border-primary/20 rounded-lg p-6 space-y-4">
            <div className="space-y-3">
              <p className="font-semibold text-foreground">The motor sucks in visible debris—crumbs, pet hair, dirt.</p>
              <p className="text-muted-foreground">
                But it also pulls in microscopic particles measuring 2.5 microns or smaller: pollen, dust mite waste, mold spores, allergen silt.
              </p>
              <p className="text-muted-foreground">
                These particles are invisible to the naked eye.
              </p>
              <p className="text-muted-foreground">
                And in a vacuum without sealed filtration, they get pulled straight through the motor housing and blasted out the exhaust vent—directly into the air you and your family breathe.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              If you've ever seen dust floating in sunlight right after vacuuming, you've witnessed it.
            </p>
            <p>
              If you've smelled that "burning dust" odor, you've breathed it.
            </p>
            <p className="font-semibold text-foreground">
              Over time, this constant exposure can cause:
            </p>
          </div>

          {/* Health Impact List */}
          <ul className="space-y-2 text-base sm:text-lg">
            {[
              "Chronic respiratory irritation",
              "Worsening seasonal allergies",
              "Persistent morning congestion",
              "Increased asthma triggers in children"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-secondary font-bold mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed pt-2">
            <p>
              For parents cleaning car seats where their kids' faces rest, this isn't just inefficient.
            </p>
            <p className="font-semibold text-foreground">
              It's actively contaminating the space you're trying to protect.
            </p>
            <p className="text-foreground font-semibold">
              That honestly terrified me.
            </p>
          </div>
        </div>

        {/* SECTION 5: THE FAILED SOLUTIONS */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            I Tried Everything (Nothing Worked)
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              I was desperate for a solution.
            </p>
            <p className="font-semibold">I tried:</p>
          </div>

          {/* Failed Solutions */}
          <div className="space-y-3 text-base sm:text-lg">
            {[
              { attempt: "Wiping with microfiber cloths", result: "just pushed dust into the air vents" },
              { attempt: "Using my full-size vacuum", result: "too bulky to reach between car seat rails" },
              { attempt: 'Buying a "premium" handheld', result: "still no sealed filtration—same problem" },
              { attempt: "Vacuuming outside with the windows open", result: "awkward, and didn't solve the core issue" }
            ].map((item, idx) => (
              <p key={idx} className="text-muted-foreground">
                <span className="font-semibold text-foreground">{item.attempt}</span> ({item.result})
              </p>
            ))}
          </div>

          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed pt-2">
            <p>
              Nothing gave me confidence that I was actually making the air cleaner.
            </p>
            <p>
              Then I started noticing something I couldn't ignore.
            </p>
          </div>
        </div>

        {/* SECTION 6: SOCIAL PROOF DISCOVERY */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            People Kept Mentioning This "Sealed Filtration" Thing
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              At first, it was just one comment in an auto detailing thread.
            </p>
            <p>
              Then another in a parenting group.
            </p>
            <p>
              And another in a cleaning tips forum.
            </p>
            <p>
              People were switching to something called "H11 HEPA sealed-gasket vacuums."
            </p>
            <p>
              They weren't talking about brands or prices.
            </p>
            <p className="font-semibold">
              They were talking about a mechanism:
            </p>
          </div>

          {/* Social Proof Quotes */}
          <div className="space-y-3 bg-blue-50 border border-primary/20 rounded-lg p-6">
            {[
              "The filter actually turns grey after one use—that's how you know it's working.",
              "I passed the smoke test. Zero exhaust emissions. Finally.",
              "My kids' allergies improved within a week of switching."
            ].map((quote, idx) => (
              <p key={idx} className="text-base sm:text-lg italic text-foreground">
                "{quote}"
              </p>
            ))}
          </div>

          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed pt-2">
            <p>
              Soon, it felt impossible not to notice.
            </p>
            <p>
              So I did what anyone would do—I researched it.
            </p>
          </div>
        </div>

        {/* SECTION 7: THE DISCOVERY */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            What I Discovered Changed Everything
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              There were articles from cleaning professionals, health experts, even engineers explaining this technology.
            </p>
            <p>
              It wasn't a gimmick.
            </p>
            <p className="font-semibold text-foreground">
              It was a simple mechanical solution designed to:
            </p>
          </div>

          {/* Discovery Points */}
          <ul className="space-y-3 text-base sm:text-lg">
            {[
              "Capture particles as small as 0.3 microns",
              "Seal them inside with gasket compression technology",
              'Prevent exhaust re-emission (the "Blowback" problem)',
              "Actually clean the air, not just move dust around"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pt-2">
            No chemicals. No subscriptions. Just real filtration.
          </p>
        </div>

        {/* SECTION 8: HOW IT WORKS */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            How Sealed-Gasket Filtration Actually Works
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Traditional handheld vacuums have gaps around the filter.
            </p>
            <p>
              Air bypasses the filtration media and shoots straight out the exhaust vent—carrying PM2.5 particles with it.
            </p>
            <p className="font-semibold text-foreground">
              Sealed-gasket systems are different:
            </p>
            <p>
              The H11 HEPA filter is surrounded by compression seals that force 100% of the air through the filtration pleats.
            </p>
          </div>

          {/* How It Works Result */}
          <div className="bg-blue-50 border border-primary/20 rounded-lg p-6 space-y-3">
            <p className="font-semibold text-foreground text-base sm:text-lg">That means:</p>
            {[
              "What goes in, stays in",
              "Particles down to 0.3 microns get trapped",
              "Exhaust air is clean—verified by smoke chamber testing"
            ].map((item, idx) => (
              <p key={idx} className="flex items-start gap-3 text-base sm:text-lg text-muted-foreground">
                <span className="text-secondary font-bold mt-1">•</span>
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 border border-primary rounded-lg p-6 sm:p-8 text-center space-y-4 mt-8">
          <p className="text-lg sm:text-xl font-semibold text-foreground">
            Now that I understood the problem and the solution, I had to find the right product.
          </p>
        </div>
      </div>
    </section>
  );
}
