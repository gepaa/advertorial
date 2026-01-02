export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-padding">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          <div className="space-y-2 sm:space-y-4">
            <h4 className="font-bold text-sm sm:text-base">MINI VACUUM PRO</h4>
            <p className="text-xs sm:text-sm text-primary-foreground/80">
              Professional-grade performance in a glovebox-sized package.
            </p>
          </div>

          <div className="space-y-2 sm:space-y-4">
            <h5 className="font-bold text-xs sm:text-sm">Navigation</h5>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <a href="#benefits" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Why It Works
                </a>
              </li>
              <li>
                <a href="#proof" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  The Proof
                </a>
              </li>
              <li>
                <a href="#specs" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Specs
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2 sm:space-y-4">
            <h5 className="font-bold text-xs sm:text-sm">Support</h5>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Warranty
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-4 sm:pt-6 space-y-4 sm:space-y-6">
          <div className="text-center text-xs text-primary-foreground/80">
            <p>© 2024 Professional Tools. All rights reserved.</p>
          </div>

          <div className="flex justify-center gap-2 sm:gap-4 text-xs text-primary-foreground/80 flex-wrap">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">Secure</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5-Star</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              <span>30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
