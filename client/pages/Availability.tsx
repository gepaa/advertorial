import { Link } from "react-router-dom";

export default function Availability() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground">
        <div className="flex items-center justify-center h-16 px-4">
          <h1 className="text-lg font-bold italic tracking-widest">VORTIX VACUUM 4-IN-1</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16 md:py-20 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Check Availability in Your Area
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Enter your information to check if TurbinePro 4-in-1 is available in your region and get exclusive offers.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6 bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
          <div className="space-y-2">
            <label htmlFor="zipcode" className="block text-sm font-semibold text-foreground">
              Zip Code
            </label>
            <input
              type="text"
              id="zipcode"
              placeholder="Enter your zip code"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-foreground">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full cta-primary py-4 text-lg font-bold tracking-wide"
          >
            CHECK AVAILABILITY
          </button>
        </form>

        {/* Back Button */}
        <Link
          to="/"
          className="inline-block text-primary hover:text-primary/80 font-semibold underline transition-colors"
        >
          ← Back to Product
        </Link>
      </div>
    </div>
  );
}
