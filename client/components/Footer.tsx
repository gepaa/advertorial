export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="section-padding">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-primary">SWISSTOP</h4>
            <p className="text-sm text-muted-foreground">
              Professional-grade tools engineered for precision and longevity.
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="font-bold text-sm">Product</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#specs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Specifications
                </a>
              </li>
              <li>
                <a href="#proof" className="text-muted-foreground hover:text-foreground transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="font-bold text-sm">Support</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="font-bold text-sm">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              © 2024 SWISSTOP. All rights reserved. | Professional Tools for Professionals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20v-7.21H5.5V9.25h2.79V7.07c0-2.77 1.69-4.28 4.16-4.28 1.18 0 2.2.09 2.49.13v2.89h-1.71c-1.34 0-1.6.64-1.6 1.57v2.05h3.2l-4.16 3.54v7.21H8.29z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7-2.25 1.5-4.5 2.25-7 2" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.6915026,12.4744748 L16.5151825,12.4744748 C16.5151825,11.5388281 15.7631318,10.8156126 14.8274851,10.8156126 C13.8918384,10.8156126 13.1686227,11.5388281 13.1686227,12.4744748 C13.1686227,13.4101215 13.8918384,14.1333371 14.8274851,14.1333371 C15.7631318,14.1333371 16.5151825,13.4101215 16.6915026,12.4744748 M22.2146654,12.4744748 L22.2146654,12.4744748 C22.2146654,11.5388281 21.4926147,10.8156126 20.5569681,10.8156126 C19.6739077,10.8156126 18.9518571,11.5388281 18.9518571,12.4744748 C18.9518571,13.4101215 19.6739077,14.1333371 20.5569681,14.1333371 C21.4926147,14.1333371 22.2146654,13.4101215 22.2146654,12.4744748 M24,6.5574487 L24,18.1913183 C24,19.9762743 22.5892191,21.3870553 20.8042633,21.3870553 L3.19573669,21.3870553 C1.41077901,21.3870553 0,19.9762743 0,18.1913183 L0,6.5574487 C0,4.77248704 1.41077901,3.36170596 3.19573669,3.36170596 L20.8042633,3.36170596 C22.5892191,3.36170596 24,4.77248704 24,6.5574487 Z M7.94360554,12.4744748 L7.94360554,12.4744748 C7.94360554,13.4101215 7.22159609,14.1333371 6.28594935,14.1333371 C5.35030261,14.1333371 4.62829316,13.4101215 4.62829316,12.4744748 C4.62829316,11.5388281 5.35030261,10.8156126 6.28594935,10.8156126 C7.22159609,10.8156126 7.94360554,11.5388281 7.94360554,12.4744748" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-4 flex-wrap text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Secure Transactions</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5,000+ Reviews</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
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
