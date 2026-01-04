export default function PersonalTrialSection() {
  return (
    <section className="section-padding bg-white">
      <div className="space-y-16 sm:space-y-20 max-w-4xl mx-auto">
        {/* SECTION 10: PERSONAL TRIAL */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            I Was Skeptical—Until I Tried It
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              I hesitated.
            </p>
            <p>
              Was this just another "miracle cleaning tool" that would end up in my garage?
            </p>
            <p>
              But after yet another sneezing fit while vacuuming my car, I decided I had nothing to lose.
            </p>
            <p className="font-semibold text-foreground">
              So I ordered the VORTIX 4-in-1, which came with:
            </p>
          </div>

          {/* What's Included */}
          <ul className="space-y-3 text-base sm:text-lg">
            {[
              "A 30-day money-back guarantee",
              "Free shipping"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SECTION 11: THE TRANSFORMATION */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            The First Use Changed Everything
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              The moment I turned it on, I noticed the difference.
            </p>
            <p>
              No burning smell.
            </p>
            <p>
              No dust cloud.
            </p>
            <p>
              Just clean, quiet suction.
            </p>
            <p>
              I vacuumed my daughter's car seat—the same one that always made me sneeze.
            </p>
            <p className="font-semibold text-foreground">
              This time?
            </p>
            <p>
              Nothing.
            </p>
            <p>
              No watery eyes. No scratchy throat.
            </p>
            <p>
              I pulled out the filter.
            </p>
            <p className="font-semibold text-foreground text-lg">
              It was grey.
            </p>
          </div>

          {/* Realization Box */}
          <div className="bg-blue-50 border border-primary/20 rounded-lg p-6">
            <p className="text-lg italic text-foreground">
              That's when it hit me: This is what I'd been breathing every other time.
            </p>
          </div>
        </div>

        {/* SECTION 12: PROGRESSIVE RESULTS */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            And It Kept Getting Better
          </h2>

          {/* After One Week */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              After one week:
            </h3>
            <ul className="space-y-3 text-base sm:text-lg">
              {[
                "My daughter's seasonal allergies noticeably improved",
                "I stopped sneezing during cleaning sessions",
                "The car actually felt cleaner—not just looked cleaner"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Two Weeks */}
          <div className="space-y-4 pt-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              After two weeks:
            </h3>
            <ul className="space-y-3 text-base sm:text-lg">
              {[
                "I bought a second one for my home office (keyboard crumbs and dust everywhere)",
                "Used the blower function to clear dashboard vents—replaced my compressed air cans entirely",
                "Inflated pool floats for a weekend trip in under 3 minutes"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Summary */}
          <div className="bg-blue-50 border border-primary/20 rounded-lg p-6 mt-6">
            <p className="text-lg text-foreground">
              Everything felt sharper. Cleaner. Safer.
            </p>
            <p className="text-lg font-semibold text-foreground mt-2">
              All from a tool that fits in my glovebox.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
