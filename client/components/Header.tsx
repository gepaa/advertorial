export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-max flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-8">
          <h1 className="text-xl md:text-2xl font-bold text-primary">SWISSTOP</h1>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </a>
            <a href="#proof" className="text-muted-foreground hover:text-foreground transition-colors">
              Proof
            </a>
            <a href="#specs" className="text-muted-foreground hover:text-foreground transition-colors">
              Specs
            </a>
          </nav>
        </div>
        <button className="cta-primary">BUY NOW</button>
      </div>
    </header>
  );
}
