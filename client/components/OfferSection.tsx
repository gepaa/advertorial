export default function OfferSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-card to-background">
      <div className="container-max max-w-3xl">
        <div className="bg-card border border-primary/30 rounded-lg p-8 md:p-12 space-y-8">
          {/* Offer Headline */}
          <div className="text-center space-y-4">
            <div className="inline-block px-3 py-1 bg-primary/20 border border-primary rounded text-primary text-sm font-semibold">
              EXCLUSIVE OFFER
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Pro Bundle: Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground">
              Get our complete system with premium accessories included
            </p>
          </div>

          {/* Price Display */}
          <div className="text-center py-6 border-y border-border space-y-2">
            <div className="text-sm text-muted-foreground">EARLY BIRD PRICE</div>
            <div className="text-5xl md:text-6xl font-bold text-primary">
              $49.99
            </div>
            <div className="text-muted-foreground line-through">Regular $99.99</div>
            <div className="inline-block mt-2 px-4 py-1 bg-secondary/20 border border-secondary rounded text-secondary text-sm font-semibold">
              SAVE 50% TODAY
            </div>
          </div>

          {/* What's Included */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">What's Included:</h3>
            <ul className="space-y-3">
              {[
                "Main 60-Second Reset Tool with Sealed Gasket System",
                "5 Premium Attachments for Various Applications",
                "USB-C Charging Dock with Fast Charging Cable",
                "Professional Carry Case for Portability",
                "Lifetime Warranty & Free Replacement Guarantee",
                "Exclusive Access to Pro Community & Tips",
                "Free Priority Support (Email & Phone)",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Belief Statements */}
          <div className="space-y-3 p-6 bg-background rounded border border-border/50">
            <h4 className="font-bold text-sm text-primary">Why You'll Love It:</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">✓ I believe</span> that quality tools should be accessible to everyone, not just professionals.
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">✓ I believe</span> in standing behind our products with a lifetime warranty.
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">✓ I believe</span> that great design should be intuitive and beautiful.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-3 pt-4">
            <button className="w-full cta-primary text-lg py-4 font-bold tracking-wide">
              GET THE 60-SECOND RESET TOOL
            </button>
            <p className="text-center text-xs text-muted-foreground">
              🔒 Secure checkout. Ships within 24 hours. 30-day money-back guarantee.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-6 text-xs text-muted-foreground flex-wrap">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Verified Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              <span>30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
